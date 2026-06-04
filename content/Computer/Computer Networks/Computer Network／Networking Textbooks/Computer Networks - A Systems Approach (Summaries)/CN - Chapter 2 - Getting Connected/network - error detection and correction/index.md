---
title: "network - error detection and correction"
created: 2019-03-17T00:17:34.058-05:00
modified: 2019-08-26T12:20:58.846-05:00
parent: "[[CN - Chapter 2 - Getting Connected]]"
children: []
---
refer to [[Error - Detection & Correction]]
# Error Detection

design error detection algorithms that both:
- maximize probability of detecting errors
- use small number of redundant bits

techniques in detecting errors:
- <strong>Send Extra Copy</strong>
> [!expand]- Click here to expand...
> - this is the extreme way
> - for each n-bits sent, send n redundant bits
- <strong>One-Dimensional Parity</strong>
> [!expand]- Click here to expand...
> - involves adding one extra bit to a 7-bit block to balance the number of 1s
> - below is an even parity check
> 	- 1 is added to the block if it contains odd number of 1’s, and
> 	- 0 is added if it contains even number of 1’s
- <strong>Two-Dimensional Parity</strong>
> [!expand]- Click here to expand...
> - two-dimensional parity does a <em>one-dimensional parity</em> calculation for each bit position across each of the bytes contained in the frame
> - this results a parity byte
>
> > [!list-indent-undo]
> > > [!indent]
> > > ![[network - error detection and correction/1.png]]
- <strong>Checksum Algorithm</strong>
> [!expand]- Click here to expand...
> - checksum idea: add up all the words transmitted and then transmit the result of the sum
- <strong>Internet Checksum Algorithm</strong>
> [!expand]- Click here to expand...
> - internet checksum idea:
> 	- data is separated into a sequence of 16-bit integers
> 	- the 16-bit integers are added together using 16-bit ones complement arithmetic
> 	- then take the ones complement of result
> 	- that 16-bit number is the checksum
> - not as good at detecting errors than CRC, but is used because it is easier to implement than CRC
>   
>   ignore the white 1s
>
> > [!list-indent-undo]
> > > [!indent]
> > > ![[network - error detection and correction/2.png|706x400]]
- <strong>Cyclic Redundancy Check</strong>
> [!expand]- Click here to expand...
> - steps:
> 	- sender and receiver agrees upon a <em>divisor</em> polynomial C(x) of degree k
> 	- T(x) = original message M(x) multiplied by xᵏ; that is, add <em>k</em> zeros at end of message
> 	- divide T(x) by C(x) and find remainder
> 	- subtract remainder from T(x)
> - example:
>
> > [!list-indent-undo]
> > > [!indent]
> > > ![[network - error detection and correction/3.png|500]]
> > [!list-indent-undo]
> > > [!indent]
> > > ![[network - error detection and correction/4.png]]

# Error Correction
- requires more redundancy bits than error detecting
