---
title: "NTFS - Encrypting File System (EFS)"
created: 2020-06-16T00:09:32.697-05:00
modified: 2020-06-16T00:16:18.073-05:00
parent: "[[NTFS - Other]]"
children: []
---
to protect files from mishandling and to ensure their security, the files can be encrypted

the Encrypting File System (EFS) was introduced in NTFS

EFS uses both [[Symmetric／Single／Secret Key Function|symmetric key encryption]] (DESX with 128bit key) & [[Asymmetric／Two／Public-Private Key Function|public key encryption]] ([[Rivest, Shamir, & Adleman (RSA) Algorithm|RSA]])

the user is supplied with a digital certificate with a public key pair

a private key is not used for the users who are logged in to the local systems. instead, an EFS key is used for users who logged in to the local system

this encryption maintains a level of transparency to the user who encrypts the file
