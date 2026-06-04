---
title: "ollama - Publicly Expose API"
created: 2025-05-30T12:47:37.860-05:00
modified: 2025-05-30T12:50:19.615-05:00
parent: "[[ollama]]"
children: []
---
# Setup

You'll need to modify the <code><font style="color: rgb(122,134,154);">ollama.service</font></code> file.

In Ubuntu the file exists under <code><font style="color: rgb(122,134,154);">/etc/systemd/system/ollama.service</font></code>

Then add the following under the \[Service\] section:
```
Environment="OLLAMA_HOST=0.0.0.0:11434"
```

Then reload and restart systemctl:
```
sudo systemctl daemon-reload && sudo systemctl restart ollama
```
# Verify
```
curl http://ollama.lan:11434/api/generate -d '{ "model": "llama3.2", "prompt": "How are you today?", "stream": true}'
```
