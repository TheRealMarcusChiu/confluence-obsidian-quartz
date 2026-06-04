---
title: "Python - setuptools"
created: 2019-08-18T17:53:05.837-05:00
modified: 2019-12-20T17:51:28.445-06:00
parent: "[[Python - Installing Packages]]"
children: []
---
1. install python setup-tools
    ```bash
    sudo apt-get install python-setuptools
    ```
2. download python package you want to install (example python package below)
    ```bash
    git clone https://github.com/numpy/numpy
    ```
3. within the python package folder there should be a file named setup.py, execute command below
    ```bash
    sudo python setup.py install
    ```
