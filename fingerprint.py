import hashlib
from getmac import get_mac_address as gma  # Gets MAC address.
import pyodbc
import sys
import os
import time
from pathlib import Path
import datetime


# Grabs a device's motherboard serial number. Works with Windows, Linux, & Darwin distributions.
def getMachine_addr():
    global command
    os_type = sys.platform.lower()
    if "win" in os_type:
        command = "wmic bios get serialnumber"
    elif "linux" in os_type:
        command = "hal-get-property --udi /org/freedesktop/Hal/devices/computer --key system.hardware.uuid"
    elif "darwin" in os_type:
        command = "ioreg -l | grep IOPlatformSerialNumber"
    return os.popen(command).read().replace("\n", "").replace("	", "").replace(" ", "")


# Outputs the serial number in a readable format.
serial = getMachine_addr()
serialNo = serial.replace("SerialNumber", "")
print(serialNo)

# Gets MAC Address & makes it readable.
print(gma())
macString = (gma().replace(':', ''))

# Creates SHA256 fingerprint from Serial Number and MAC address.
concat = serialNo + macString
fingerprint = hashlib.sha256(concat.encode())
print(fingerprint)
readableFingerprint = fingerprint.hexdigest()
print(readableFingerprint)

# Creates date & time for log entry. Format is the SQL datetime format.
now = datetime.datetime.now()
formatted_date = now.strftime('%Y-%m-%d %H:%M:%S')

# Increments every 60 seconds.
while True:
    # Creates date & time for log entry.
    now = datetime.datetime.now()
    formatted_date = now.strftime('%Y-%m-%d %H:%M:%S')

    # Connects to logging DB.
    conn = pyodbc.connect('Driver={SQL Server};'    # Sets the SQL Driver, such as SQL Server or MySQL.
                          'Server=10.20.122.67;'  # Name/IP of your SQL Server.
                          'UID=SecLogAdmin;'  # SQL authentication username
                          'PWD=abc123;'  # SQL authentication password.
                          'Database=logs;'  # Name of DB in server.
                          'Trusted_Connection=no;')  # Only used for Windows Auth. for other, use uid/pwd.

    # Uses an SQL query to insert fingerprint, mac address, serial number,& detected time into the logging DB.
    cursor = conn.cursor()
    cursor.execute('INSERT INTO Devices VALUES (?, ?, ?, ?)', (readableFingerprint, gma(), serialNo, formatted_date))
    conn.commit()

    # Selects only the MOST RECENT values of each device in the logging DB. Then outputs to a json file.
    cursor.execute("SELECT [fingerprint],[macAddress],[serialNum],MAX([timeLastSeen]) as timeLastSeen "
                   "FROM [logs].[dbo].[Devices] GROUP BY [fingerprint], [macAddress], [serialNum]FOR JSON AUTO")

    # Parses the JSON created above.
    for row in cursor:
        print(row)

        # Stores the results into the website asset folder.
        # Normally this code should push to a back-end server, where the json is then called on by the front-end site.
        # However, for this project, we are running the website locally from a single device.
        data_folder = Path("C:/Users/peter/Desktop/CM_UI/src/assets")
        f = open(data_folder / "devices.json", "w")
        f.write(row[0])
        f.close()

    time.sleep(60)  # Script runs every 60 seconds.
