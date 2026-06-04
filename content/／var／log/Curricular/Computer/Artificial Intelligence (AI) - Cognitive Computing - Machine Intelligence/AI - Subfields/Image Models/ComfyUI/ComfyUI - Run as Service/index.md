---
title: "ComfyUI - Run as Service"
created: 2025-08-08T22:27:13.054-05:00
modified: 2025-08-08T22:45:27.653-05:00
parent: "[[ComfyUI]]"
children: []
---
Create a file <code><font style="color: rgb(122,134,154);">comfyui-start.sh</font></code>:
```bash
#! /bin/bash

# activate conda in shell script
source /home/marcuschiu/anaconda3/etc/profile.d/conda.sh

# activate the virtual environment used for running ComfyUI
conda activate comfyenv

cd /home/marcuschiu/Desktop/ComfyUI
python main.py --listen
```

Create a file <code><font style="color: rgb(122,134,154);">/etc/systemd/system/comfyui.service</font></code>:
```yml
[Unit]
Description=ComfyUI Service
After=network.target

[Service]
User=marcuschiu 
WorkingDirectory=/home/marcuschiu/Desktop/ComfyUI 
ExecStart=/home/marcuschiu/Desktop/ComfyUI/comfyui-start.sh
Restart=always

[Install]
WantedBy=multi-user.target
```

Execute the following commands:
```bash
sudo systemctl daemon-reload
sudo systemctl enable comfyui.service
sudo systemctl start comfyui.service
```
