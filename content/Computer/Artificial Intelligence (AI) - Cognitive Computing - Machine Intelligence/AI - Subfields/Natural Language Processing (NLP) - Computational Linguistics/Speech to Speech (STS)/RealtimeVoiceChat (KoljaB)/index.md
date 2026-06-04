---
title: "RealtimeVoiceChat (KoljaB)"
created: 2026-01-30T10:40:14.435-06:00
modified: 2026-05-16T01:44:20.728-05:00
parent: "[[Speech to Speech (STS)]]"
children: []
---
###### RealtimeVoiceChat (KoljaB)
````excerpt
- bootstraps the following three: [[RealtimeSTT (KoljaB)]], LLM (e.g. [[ollama|Ollama]] or [[OpenAI]]), and [[RealtimeTTS (KoljaB)]]
````
^excerpt

# Setup

> [!expand-ui]- Linux
> This setup assumes you have [[ollama|Ollama]] already installed and running (in my case it's reachable at [http://10.0.0.5:11434](http://10.0.0.5:11434)).
>
> Update APT and install packages:
> ```
> sudo apt update
> sudo apt install -y portaudio19-dev python3-dev build-essential git
> ```
>
> Install [[Conda|conda]], use it to create and activate a python 3.10 environment:
> ```
> cd ~
> wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
> bash Miniconda3-latest-Linux-x86_64.sh
> source ~/.bashrc
> conda --version
> conda update -n base -c defaults conda
>
> conda create -n py310 python=3.10
> conda activate py310
> ```
>
> Install pytorch stuff
> ```
> pip install torch==2.5.1+cu121 torchaudio==2.5.1+cu121 torchvision --index-url https://download.pytorch.org/whl/cu121
> ```
>
> Git clone the project
> ```
> git clone https://github.com/TheRealMarcusChiu/RealtimeVoiceChat
> ```
>
> Install package dependencies for project:
> ```
> cd RealtimeVoiceChat
> pip install -r requirements.txt
> ```
>
> Make it point to your Ollama instance (say it's reachable at [http://10.0.0.5:11434](http://10.0.0.5:11434)):
>
> Make change to file [code/llm_module.py line 62](https://github.com/TheRealMarcusChiu/RealtimeVoiceChat/blob/main/code/llm_module.py#L62)
> ```
> OLLAMA_BASE_URL = os.getenv("OLLAMA_BASE_URL", "http://10.0.0.5:11434")
> ```
>
> Run it
> ```
> cd code
> python server.py
> ```
# Resources
- [https://github.com/KoljaB/RealtimeVoiceChat](https://github.com/KoljaB/RealtimeVoiceChat)
