---
title: "Advanced Encryption Standard (AES)"
created: 2019-03-16T02:31:58.005-05:00
modified: 2023-05-02T22:35:33.290-05:00
parent: "[[Encryption - Algorithms]]"
children: []
---
###### Advanced Encryption Standard (AES)
````excerpt
- is a [[Symmetric／Single／Secret Key Function|symmetric]] [[Block Cipher - Modes of Operation|block cipher]]
- it is the official encryption standard in the United States since 2002
````
^excerpt

# AES - Key Lengths
- 128 bits
- 192 bits
- 256 bits

# AES - Modes of Operation
- [[Block Cipher - Modes of Operation|modes of operation]]

# AES - Example Encryption & Decryption

requires: [[openssl]]

> [!expand]- AES-192 encrypt decrypt
> CBC MODE
> 1. Encryption
>    
>    <span style="white-space: pre-wrap"><code>openssl aes-192-cbc -in attack-plan.txt -out message.enc</code></span>
> 2. Decryption
>    
>    <span style="white-space: pre-wrap"><code>openssl aes-192-cbc -d -in message.enc -out plain-text.txt</code></span>
>
> ECB MODE
> 1. Encryption
>    
>    <span style="white-space: pre-wrap"><code>openssl aes-192-ebc -in attack-plan.txt -out message.enc</code></span>
> 2. Decryption
>    
>    <span style="white-space: pre-wrap"><code>openssl aes-192-ebc -d -in message.enc -out plain-text.txt</code></span>

> [!expand]- AES-128 encrypt decrypt
> CBC MODE
> 1. Encryption
>    
>    <span style="white-space: pre-wrap"><code>openssl aes-128-cbc -in attack-plan.txt -out message.enc</code></span>
> 2. Decryption
>    
>    <span style="white-space: pre-wrap"><code>openssl aes-128-cbc -d -in message.enc -out plain-text.txt</code></span>
>
> ECB MODE
> 1. Encryption
>    
>    <span style="white-space: pre-wrap"><code>openssl aes-128-ecb -in attack-plan.txt -out message.enc</code></span>
> 2. Decryption
>    
>    <span style="white-space: pre-wrap"><code>openssl aes-128-ecb -d -in message.enc -out plain-text.txt</code></span>

> [!expand]- AES-256 encrypt decrypt
> CBC MODE
> 1. Encryption
>    
>    <span style="white-space: pre-wrap"><code>openssl aes-256-cbc -in attack-plan.txt -out message.enc</code></span>
> 2. Decryption
>    
>    <span style="white-space: pre-wrap"><code>openssl aes-256-cbc -d -in message.enc -out plain-text.txt</code></span>
>
> ECB MODE
> 1. Encryption
>    
>    <span style="white-space: pre-wrap"><code>openssl aes-256-ecb -in attack-plan.txt -out message.enc</code></span>
> 2. Decryption
>    
>    <span style="white-space: pre-wrap"><code>openssl aes-256-ecb -d -in message.enc -out plain-text.txt</code></span>
