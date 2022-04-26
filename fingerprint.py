import socket
import hashlib
from getmac import get_mac_address as gma       # Gets MAC address.
#import pyodbc
import numpy as np      # For multilateration
import math             # For multilateration (https://github.com/jurasofish/multilateration/blob/master/multilaterate.py)
import scapy.all as scapy
#from scapy.all import *
import pyshark
import json
import subprocess as sp
import pprint

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

json_str = sp.check_output("tshark -i Ethernet -c 2 -T json".split(' ')).decode('utf-8')
tshark_pkts = json.loads(json_str)
# Transform tshark json into a scapy-like packet-json list.
pkts_json = [pkt['_source']['layers'] for pkt in tshark_pkts]
pprint.pprint(pkts_json[0]['eth'])



#               Does what we want, however it isn't in true json format

#cap = pyshark.LiveCapture(use_json=True, custom_parameters={'-N': 'm'})
#for packet in cap.sniff_continuously(packet_count=1):
#    print(packet)


"""                         Works, but not quite. It just spits out mac addresses rapid fire.
def print_info_layer(cap):
    if "eth" in cap:
        print(cap.eth.src)
        return (cap.eth.src, cap.eth.dst)
    elif "wlan" in cap:
        print(cap.eth.src)
        return (cap.wlan.ta, cap.wlan.addr)

    #print(cap.eth.src)
cap.apply_on_packets(print_info_layer)


                                Debugging purposes
cap.set_debug()
cap.sniff(timeout=10)
cap
print(cap)
"""


"""                                 Commented out because I don't have the database on my pc
# Pushes data to logging DB.
conn = pyodbc.connect('Driver={SQL Server};'
                      'Server=MSI;'
                      'Database=logs;'
                      'Trusted_Connection=yes;')

cursor = conn.cursor()
cursor.execute('INSERT INTO Devices VALUES (?, ?)', (readableFingerprint, gma()))
conn.commit()
"""

# Scapy code below.
#capture = sniff(prn=lambda)
#capture = scapy.sniff()       # Begins packet sniffing.
#capture.summary()       # Prints summary of packets sniffed.

"""
(answered_packets, unanswered_packets) = packet
for packet_i_sent, packet_i_received in answered_packets:
    print(packet_i_received.src)
"""
"""packet = scapy.srp(scapy.Ether(dst="ff:ff:ff:ff:ff:ff"))
print(packet[0][scapy.Ether].src)
"""

"""
# From here down, the code is about multilateration.
def get_locus(tower_1, tower_2, time_1, time_2, v, delta_d, max_d):
    ''' Return a locus in x, y given two towers and their recieve times.
    Given two towers at locations tower_1 and tower_2, a message transmitted
    at some arbitrary time at location (x_t, y_t), and the times at which
    the towers received the transmission, the set of possible
    locations of the transmission is defined by the locus of the intersection
    of two circles with one circle around each tower and the difference in
    radius of the circles defined by the difference in receive tiemes
    of the transmission and the propogation speed of the transmission.
    Args:
        tower_1 (tuple): (x, y) of one tower.
        tower_2 (tuple): (x, y) of other tower.
        time_1 (float): Transmission recieve time at tower_1.
        time_2 (float): Transmission recieve time at tower_2.
        v (int): Speed of transmission propogation.
        delta_d (int): Metre increments to radii of circles when generating
            locus of circle intersection.
        max_d (int): Max distance a transmission will be from the tower that
            first received the transmission. This puts an upper bound on the
            radii of the circle, thus limiting the size of the locus to be
            near the towers.
    Returns
        list of form [x, y], with:
                x: list of x values of locus.
                y: list of y values of locus.
    '''
    # two lines, x0/y0 and x1/y1 corresponding to the two intersections of the
    # circles. These will be concateneated at the end to form a single line.
    x0 = []
    x1 = []
    y0 = []
    y1 = []

    # The radii have constant difference of t_delta_d. "time delta difference"
    t_delta_d = abs(time_1 - time_2) * v

    # Determine which tower received the transmission first.
    if(time_1 < time_2):
        circle1 = (tower_1[0], tower_1[1], 0)
        circle2 = (tower_2[0], tower_2[1], t_delta_d)
    else:
        circle1 = (tower_2[0], tower_2[1], 0)
        circle2 = (tower_1[0], tower_1[1], t_delta_d)

    # Iterate over all potential radii.
    for _ in range(int(max_d)//int(delta_d)):
        intersect = circle_intersection(circle1, circle2)
        if(intersect is not None):
            x0.append(intersect[0][0])
            x1.append(intersect[1][0])
            y0.append(intersect[0][1])
            y1.append(intersect[1][1])

        circle1 = (circle1[0], circle1[1], circle1[2]+delta_d)
        circle2 = (circle2[0], circle2[1], circle2[2]+delta_d)

    # Reverse so the concatenated locus is continous. Could reverse only
    # x1/y1 instead if you wanted.
    x0 = list(reversed(x0))
    y0 = list(reversed(y0))

    # Concatenate
    x = x0 + x1
    y = y0 + y1

    return [x, y]


def get_loci(rec_times, towers, v, delta_d, max_d):
    ''' Return a set of loci on which a transmission may have occurred.
    Args:
        rec_times (np.array 1D): The times at which the towers recieved
            the transmission, in seconds. Element i corresponds to tower i.
        towers (np.array 2D): Locations of towers. Tower i is located at
            (x, y) = (towers[i][0], towers[i][1])
        v (int): Speed of transmission propogation.
        delta_d (int): Metre increments to radii of circles when generating
            locus of circle intersection.
        max_d (int): Max distance a transmission will be from the tower that
            first received the transmission. This puts an upper bound on the
            radii of the circle, thus limiting the size of the locus to be
            near the towers.
    Returns
        list of tuples, where each tuple contains a list of x and a list of
            y elements.
        '''

    if(rec_times.shape[0] == 0):
        return [] # return no loci
    
    loci = []

    # Tower that receives the transmission first.
    first_tower = int(np.argmin(rec_times))
    # Iterate over all other towers.
    for j in [x for x in range(towers.shape[0]) if x!= first_tower]:
        # print('tower', str(first_tower), 'to', str(j))
        locus = get_locus(tower_1=(towers[first_tower][0],
                                   towers[first_tower][1]),
                          tower_2=(towers[j][0], towers[j][1]),
                          time_1=rec_times[first_tower],
                          time_2=rec_times[j],
                          v=v, delta_d=delta_d, max_d=max_d)
        # Sometimes empty locus is produced depending on geometry of the
        # situation. Discard these.
        if(len(locus[0]) > 0):
            loci.append(locus)
    return loci


def circle_intersection(circle1, circle2):
    ''' Calculate intersection points of two circles.
    from https://gist.github.com/xaedes/974535e71009fa8f090e
    Args:
        circle1: tuple(x,y,radius)
        circle2: tuple(x,y,radius)
    Returns
        tuple of intersection points (which are (x,y) tuple)
    >>> circle_intersection((-0.5, 0, 1), (0.5, 0, 1))
    ((0.0, -0.8660254037844386), (0.0, 0.8660254037844386))
    >>> circle_intersection((-1, 0, 1), (1, 0, 1))
    ((0.0, 0.0), (0.0, 0.0))
    '''
    x1,y1,r1 = circle1
    x2,y2,r2 = circle2
    # http://stackoverflow.com/a/3349134/798588
    # d is euclidean distance between circle centres
    dx,dy = x2-x1,y2-y1
    d = math.sqrt(dx*dx+dy*dy)
    if d > r1+r2:
        # print('No solutions, the circles are separate.')
        return None # No solutions, the circles are separate.
    elif d < abs(r1-r2):
        # No solutions because one circle is contained within the other
        # print('No solutions because one circle is contained within the other')
        return None
    elif d == 0 and r1 == r2:
        # Circles are coincident - infinite number of solutions.
        # print('Circles are coincident - infinite number of solutions.')
        return None

    a = (r1*r1-r2*r2+d*d)/(2*d)
    h = math.sqrt(r1*r1-a*a)
    xm = x1 + a*dx/d
    ym = y1 + a*dy/d
    xs1 = xm + h*dy/d
    xs2 = xm - h*dy/d
    ys1 = ym - h*dx/d
    ys2 = ym + h*dx/d

    return ((xs1,ys1),(xs2,ys2))
"""