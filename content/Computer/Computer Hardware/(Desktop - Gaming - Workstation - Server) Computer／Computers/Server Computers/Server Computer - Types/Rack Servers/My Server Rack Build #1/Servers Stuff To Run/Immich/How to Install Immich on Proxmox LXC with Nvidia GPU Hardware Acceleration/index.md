---
title: "How to Install Immich on Proxmox LXC with Nvidia GPU Hardware Acceleration"
created: 2025-12-18T22:04:55.148-06:00
modified: 2025-12-21T23:49:15.200-06:00
parent: "[[Immich]]"
children: []
---
# Install LXC Container

Use Proxmox Helper Scripts to install a LXC container with docker (see [https://community-scripts.github.io/ProxmoxVE/scripts?id=docker](https://community-scripts.github.io/ProxmoxVE/scripts?id=docker)):
```
bash -c "$(curl -fsSL https://raw.githubusercontent.com/community-scripts/ProxmoxVE/main/ct/docker.sh)"
```

Go through advanced setup (ensure GPU mounts are passed)

Once the LXC is running, ensure the following are mounted:
```
/dev/nvidia0
/dev/nvidiactl
/dev/nvidia-uvm
/dev/nvidia-uvm-tools
```
# Within LXC Container

Install Nvidia drivers (see [https://www.nvidia.com/en-us/drivers/](https://www.nvidia.com/en-us/drivers/)).

The command below installs drivers for the RTX 4070:
```
wget https://us.download.nvidia.com/XFree86/Linux-x86_64/580.119.02/NVIDIA-Linux-x86_64-580.119.02.run
```

Make it an executable
```
chmod +x NVIDIA-Linux-x86_64-580.119.02.run
```

run the script
```
./NVIDIA-Linux-x86_64-580.119.02.run --no-kernel-module
```

Verify the following command outputs with no error:
```
nvidia-smi
```

Install nvidia-container-toolkit
```
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey \
 | gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg

curl -fsSL https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list \
 | sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' \
 | tee /etc/apt/sources.list.d/nvidia-container-toolkit.list

apt update
apt install -y nvidia-container-toolkit
```

configure docker runtime
```
nvidia-ctk runtime configure --runtime=docker
systemctl restart docker
```
# Test docker GPU access
```
sudo docker run --rm --gpus all nvidia/cuda:13.0.0-base-ubuntu22.04 nvidia-smi
```

If the above command doesn't work, replace <code><font style="color: rgb(122,134,154);">--gpus all</font></code> with <code><font style="color: rgb(122,134,154);">--runtime=nvidia</font></code>:
```
sudo docker run --rm --runtime=nvidia nvidia/cuda:13.0.0-base-ubuntu22.04 nvidia-smi
sudo docker run --rm --runtime=nvidia nvidia/cuda:12.2.0-runtime-ubuntu22.04 nvidia-smi
```
# Install Immich
1. [https://docs.immich.app/overview/quick-start](https://docs.immich.app/overview/quick-start)
2. [https://docs.immich.app/features/hardware-transcoding](https://docs.immich.app/features/hardware-transcoding)
3. [https://docs.immich.app/features/ml-hardware-acceleration](https://docs.immich.app/features/ml-hardware-acceleration)

If you had to replace <code><font style="color: rgb(122,134,154);">--gpus all</font></code> with <code><font style="color: rgb(122,134,154);">--runtime=nvidia</font></code>, then you'll need to modify the docker-compose files by adding <code><font style="color: rgb(122,134,154);">runtime: nvidia</font></code>:
```
services:
  immich-server:
    image: ghcr.io/immich-app/immich-server:release
    runtime: nvidia
...
```
