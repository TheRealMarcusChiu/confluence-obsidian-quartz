---
title: "ComfyUI - Installation & Setup"
created: 2025-08-08T22:46:56.952-05:00
modified: 2025-08-08T22:52:59.179-05:00
parent: "[[ComfyUI]]"
children: []
---
Based on: [https://docs.comfy.org/installation/manual_install#linux](https://docs.comfy.org/installation/manual_install#linux)

Install [conda](https://docs.conda.io/projects/conda/en/latest/user-guide/install/linux.html).

Create virtual environment for running [[ComfyUI]]
```
conda create -n comfyenv
conda activate comfyenv
```

git clone ComfyUI repository
```
git clone https://github.com/comfyanonymous/ComfyUI.git
```

Install GPU dependencies
```
conda install pytorch torchvision torchaudio pytorch-cuda=12.1 -c pytorch -c nvidia
```

Install ComfyUI dependencies
```
cd ComfyUI
pip install -r requirements.txt
```

Run ComfyUI
```
python main.py --listen
```
