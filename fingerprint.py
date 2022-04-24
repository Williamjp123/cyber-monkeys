import socket
import hashlib
from getmac import get_mac_address as gma  # Gets MAC address.
import pyodbc
import sys
import os
import time


# Grabs a device's motherboard serial number. Works with Windows & Linux distributions.
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

# Returns IP address.
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.settimeout(0)
try:
    # doesn't even have to be reachable.
    s.connect(('10.255.255.255', 1))
    IP = s.getsockname()[0]
except Exception:
    IP = '127.0.0.1'
finally:
    s.close()

print(IP)
print(gma())  # Gets MAC Address.

# Makes MAC readable.
macString = (gma().replace(':', ''))

# Creates SHA256 fingerprint from Serial Number and MAC address.
concat = serialNo + macString
fingerprint = hashlib.sha256(concat.encode())
print(fingerprint)
readableFingerprint = fingerprint.hexdigest()
print(readableFingerprint)


# Pushes data to logging DB.
while True:
    conn = pyodbc.connect('Driver={SQL Server};'
                          'Server=10.20.122.19;'
                          'UID=SecLogAdmin;'
                          'PWD=abc123;'
                          'Database=logs;')

    cursor = conn.cursor()
    cursor.execute('INSERT INTO Devices VALUES (?, ?)', (readableFingerprint, gma()))
    conn.commit()
    cursor.execute("SELECT * FROM Devices FOR JSON AUTO")

    # Outputs JSON object.
    for row in cursor:
        print(row)

        f = open("devices.json", "a")
        f.write(row[0])
        f.close()

    time.sleep(60)      # Script runs every 60 seconds.
