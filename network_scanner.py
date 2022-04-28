import os
import time

while True:

    os.chdir('C:/Program Files/Wireshark')
    os.system('tshark -i Wi-Fi -c 2 -T json -e eth.src -e frame.time > C:/Users/peter/Desktop/CM_UI/src/assets/rawOutput.json')      # Runs the specified tshark command.
    os.chdir('C:/Users/peter/Desktop/CM_UI/src/assets/')

    f = open('rawOutput.json', 'rt')
    fout = open('output2.json', 'wt')
    for line in f:
        fout.write(line.replace('.', '_'))
    f.close()
    fout.close()

    time.sleep(60)
