import socket
import hashlib
from getmac import get_mac_address as gma       # Gets MAC address.
import pyodbc


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
print(gma())        # Gets MAC Address.

# IP address to SHA256.
ipString = (IP.replace('.', ''))
ipResult = hashlib.sha256(ipString.encode())
print(ipResult)
print(ipResult.hexdigest())

# MAC address to SHA256.
macString = (gma().replace(':', ''))
macResult = hashlib.sha256(macString.encode())
print(macResult)
print(macResult.hexdigest())

# Creates SHA256 fingerprint from IP address and MAC address.
concat = ipString + macString
fingerprint = hashlib.sha256(concat.encode())
print(fingerprint)
readableFingerprint = fingerprint.hexdigest()
print(readableFingerprint)

# Pushes data to logging DB.
conn = pyodbc.connect('Driver={SQL Server};'
                      'Server=MSI;'
                      'Database=logs;'
                      'Trusted_Connection=yes;')

cursor = conn.cursor()
cursor.execute('INSERT INTO Devices VALUES (?, ?)', (readableFingerprint, gma()))
conn.commit()
