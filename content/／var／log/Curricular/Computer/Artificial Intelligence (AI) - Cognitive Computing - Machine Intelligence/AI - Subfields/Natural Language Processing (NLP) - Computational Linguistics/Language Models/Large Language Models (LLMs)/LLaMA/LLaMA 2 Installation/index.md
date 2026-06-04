---
title: "LLaMA 2 Installation"
created: 2023-12-08T20:20:46.751-06:00
modified: 2023-12-08T20:48:47.068-06:00
parent: "[[LLaMA]]"
children: []
---
# Download Model

Clone repository
```
git clone https://github.com/facebookresearch/llama
```

Request model download access: [https://github.com/facebookresearch/llama#download](https://github.com/facebookresearch/llama#download)

Run and enter URL link (from email) when prompted
```
./download.sh
```
# Run Model
```
git clone https://github.com/ggerganov/llama.cpp
```

"make" the repository
```
make
```

Prepare data and run: [https://github.com/ggerganov/llama.cpp#prepare-data--run](https://github.com/ggerganov/llama.cpp#prepare-data--run)
```
# obtain the original LLaMA model weights and place them in ./models
ls ./models
65B 30B 13B 7B tokenizer_checklist.chk tokenizer.model
  # [Optional] for models using BPE tokenizers
  ls ./models
  65B 30B 13B 7B vocab.json

# install Python dependencies
python3 -m pip install -r requirements.txt

# convert the 7B model to ggml FP16 format
python3 convert.py models/7B/

  # [Optional] for models using BPE tokenizers
  python convert.py models/7B/ --vocabtype bpe

# quantize the model to 4-bits (using q4_0 method)
./quantize ./models/7B/ggml-model-f16.gguf ./models/7B/ggml-model-q4_0.gguf q4_0

# update the gguf filetype to current if older version is unsupported by another application
./quantize ./models/7B/ggml-model-q4_0.gguf ./models/7B/ggml-model-q4_0-v2.gguf COPY

# run the inference
./main -m ./models/7B/ggml-model-q4_0.gguf -n 128
# run interactive (like chatgpt)
./main -m ./models/13B/ggml-model-q4_0.gguf -n 256 --repeat_penalty 1.0 --color -i -r "User:" -f prompts/chat-with-bob.txt
```
