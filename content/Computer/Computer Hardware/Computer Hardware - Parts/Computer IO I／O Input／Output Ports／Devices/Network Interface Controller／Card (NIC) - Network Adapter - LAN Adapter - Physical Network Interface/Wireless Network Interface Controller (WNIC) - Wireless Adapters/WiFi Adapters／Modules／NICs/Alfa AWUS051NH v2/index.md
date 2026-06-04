---
title: "Alfa AWUS051NH v2"
created: 2020-05-29T18:15:17.498-05:00
modified: 2023-04-15T07:54:35.597-05:00
parent: "[[WiFi Adapters／Modules／NICs]]"
children: []
---
- buy it here: [https://www.amazon.com/ALFA-Networks-FBA_AP-AWUS051NH-Alfa-AWUS051NH/dp/B00REZPU3G](https://www.amazon.com/ALFA-Networks-FBA_AP-AWUS051NH-Alfa-AWUS051NH/dp/B00REZPU3G)

# Installing Device Driver for Ubuntu
- download [[Linux Kernel - Device Drivers|linux device driver]] here: [http://download.alfa.com.tw/s/2zIEnowaa8Ug2Dk](http://download.alfa.com.tw/s/2zIEnowaa8Ug2Dk)
- execute the following commands
    ```bash
    unzip download.zip
    sudo apt-get install build-essential linux-headers-`uname -r`
    cd /somewhere/extracted-driver-folder
    make
    sudo make install
    ```
- restart computer
