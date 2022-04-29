import os
import time


# Increments every 60 seconds.
while True:

    # Goes into Wireshark and runs a tshark command to scrape a specified network interface (with -i) for packets.
    # We can specify how many packets (-c) and the type of output (-T). In this case, 10 packets outputted to a json.
    # Packet content can be specified as well with (-e). In this case we are grabbing mac address and time last seen.
    # The results are then sent to our front-end site's assets.
    os.chdir('C:/Program Files/Wireshark')
    os.system('tshark -i Wi-Fi -c 10 -T json -e eth.src -e frame.time > D:/Documents/CM_UI/src/assets/rawOutput.json')
    os.chdir('D:/Documents/CM_UI/src/assets/')

    # Cleans the generated json by replacing every dot with an underscore.
    # We use a jS script to output this json to our site. jS cannot read dots well, hence the need for cleaning.
    f = open('rawOutput.json', 'rt')
    fout = open('output2.json', 'wt')
    for line in f:
        fout.write(line.replace('.', '_'))
    f.close()
    fout.close()

    time.sleep(60)      # Script runs every 60 seconds.
