---
title: "Ubuntu Server Raspberry Pi"
created: 2019-03-15T03:38:24.203-05:00
modified: 2021-09-12T19:49:16.328-05:00
parent: "[[Ubuntu]]"
children: []
---
# Installation

<strong>post install</strong>
1. If you get an error with apt-get update && apt-get upgrade about linux-firmware can’t be installed Then run these commands below
    ```bash
    sudo dpkg --purge linux-raspi2
    sudo dpkg --purge linux-image-raspi2
    sudo dpkg --purge linux-firmware
    sudo apt-get -f install
    sudo apt-get update && sudo apt-get upgrade
    sudo apt autoremove
    sudo apt-get dist-upgrade
    ```
