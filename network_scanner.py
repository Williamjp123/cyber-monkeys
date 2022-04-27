import os
import time

while True:

    os.chdir('C:/Program Files/Wireshark')
    os.system('tshark -i Wi-Fi -c 2 -T json > E:/output.json')      # Runs the specified tshark command.
    os.chdir('E:/')

    f = open('output2.json', 'rt')
    fout = open('outputClean.json', 'wt')
    for line in f:
        fout.write(line.replace('.', '_'))
    f.close()
    fout.close()

    time.sleep(60)
