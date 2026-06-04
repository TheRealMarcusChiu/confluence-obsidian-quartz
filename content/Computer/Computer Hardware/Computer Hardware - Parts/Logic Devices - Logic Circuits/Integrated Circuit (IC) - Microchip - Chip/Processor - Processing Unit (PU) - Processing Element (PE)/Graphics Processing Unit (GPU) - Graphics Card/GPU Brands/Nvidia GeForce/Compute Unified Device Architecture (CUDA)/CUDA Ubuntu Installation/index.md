---
title: "CUDA Ubuntu Installation"
created: 2023-12-09T13:39:04.841-06:00
modified: 2023-12-09T14:33:25.006-06:00
parent: "[[Compute Unified Device Architecture (CUDA)]]"
children: []
---
Slightly based on: [https://www.cherryservers.com/blog/install-cuda-ubuntu](https://www.cherryservers.com/blog/install-cuda-ubuntu)
# 1. Upgrade your Ubuntu
```
sudo apt update
sudo apt upgrade 
```
# 2. List the recommended NVIDIA drivers
```
sudo apt install ubuntu-drivers-common
sudo ubuntu-drivers devices
```

Output
```
== /sys/devices/pci0000:00/0000:00:01.1/0000:01:00.0 ==
modalias : pci:v000010DEd00002786sv00001462sd00005137bc03sc00i00
vendor   : NVIDIA Corporation
model    : AD104 [GeForce RTX 4070]
driver   : nvidia-driver-535-server-open - distro non-free
driver   : nvidia-driver-535-server - distro non-free
driver   : nvidia-driver-525 - distro non-free
driver   : nvidia-driver-525-open - distro non-free
driver   : nvidia-driver-525-server - distro non-free
driver   : nvidia-driver-535 - distro non-free recommended
driver   : nvidia-driver-535-open - distro non-free
driver   : xserver-xorg-video-nouveau - distro free builtin
```

We see that the recommended driver is the "nvidia-driver-535"
```
driver   : nvidia-driver-535 - distro non-free recommended
```
# 3. Install the driver nvidia-driver-535
```
sudo apt install nvidia-driver-535
```
# 4. Reboot System
```
sudo reboot now
```
# 5. Check the driver installation
```
nvidia-smi
```

Output
```
Sat Dec  9 14:31:10 2023
+---------------------------------------------------------------------------------------+
| NVIDIA-SMI 535.129.03             Driver Version: 535.129.03   CUDA Version: 12.2     |
|-----------------------------------------+----------------------+----------------------+
| GPU  Name                 Persistence-M | Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp   Perf          Pwr:Usage/Cap |         Memory-Usage | GPU-Util  Compute M. |
|                                         |                      |               MIG M. |
|=========================================+======================+======================|
|   0  NVIDIA GeForce RTX 4070        Off | 00000000:01:00.0 Off |                  N/A |
|  0%   42C    P8              11W / 200W |     86MiB / 12282MiB |      0%      Default |
|                                         |                      |                  N/A |
+-----------------------------------------+----------------------+----------------------+

+---------------------------------------------------------------------------------------+
| Processes:                                                                            |
|  GPU   GI   CI        PID   Type   Process name                            GPU Memory |
|        ID   ID                                                             Usage      |
|=======================================================================================|
|    0   N/A  N/A      1628      G   /usr/lib/xorg/Xorg                           69MiB |
|    0   N/A  N/A      1755      G   /usr/bin/gnome-shell                          9MiB |
+---------------------------------------------------------------------------------------+
```
# 6. Install GCC
```
sudo apt install gcc
gcc -v
```
# 7. Install CUDA toolkit
```
sudo apt install nvidia-cuda-toolkit
```
# 8. Reboot System
```
sudo reboot
```
# 9. Test the CUDA toolkit
```
nvcc -V
```

output
```
nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2023 NVIDIA Corporation
Built on Fri_Jan__6_16:45:21_PST_2023
Cuda compilation tools, release 12.0, V12.0.140
Build cuda_12.0.r12.0/compiler.32267302_0
```
