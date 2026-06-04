---
title: "DES Algorithm Illustrated"
created: 2019-09-08T21:41:28.183-05:00
modified: 2019-09-08T21:43:47.051-05:00
parent: "[[Data Encryption Standard (DES)]]"
children: []
---
DES is a <strong><em>block cipher</em></strong>--meaning it operates on plaintext blocks of a given size (64-bits) and returns ciphertext blocks of the same size. Thus DES results in a <strong><em>permutation</em></strong> among the 2^64 (read this as: "2 to the 64th power") possible arrangements of 64 bits, each of which may be either 0 or 1. Each block of 64 bits is divided into two blocks of 32 bits each, a left half block <strong>L</strong> and a right half <strong>R</strong>. (This division is only used in certain operations.)

<strong>Example:</strong> Let <strong>M</strong> be the plain text message <strong>M</strong> = 0123456789ABCDEF, where <strong>M</strong> is in hexadecimal (base 16) format. Rewriting <strong>M</strong> in binary format, we get the 64-bit block of text:

<strong>M</strong> = 0000 0001 0010 0011 0100 0101 0110 0111 1000 1001 1010 1011 1100 1101 1110 1111
<strong>L</strong> = 0000 0001 0010 0011 0100 0101 0110 0111
<strong>R</strong> = 1000 1001 1010 1011 1100 1101 1110 1111

The first bit of <strong>M</strong> is "0". The last bit is "1". We read from left to right.

DES operates on the 64-bit blocks using <em>key</em> sizes of 56- bits. The keys are actually stored as being 64 bits long, but every 8th bit in the key is not used (i.e. bits numbered 8, 16, 24, 32, 40, 48, 56, and 64). However, we will nevertheless number the bits from 1 to 64, going left to right, in the following calculations. But, as you will see, the eight bits just mentioned get eliminated when we create subkeys.

<strong>Example:</strong> Let <strong>K</strong> be the hexadecimal key <strong>K</strong> = 133457799BBCDFF1. This gives us as the binary key (setting 1 = 0001, 3 = 0011, etc., and grouping together every eight bits, of which the last one in each group will be unused):

<strong>K</strong> = 00010011 00110100 01010111 01111001 10011011 10111100 11011111 11110001

The DES algorithm uses the following steps:
## Step 1: Create 16 subkeys, each of which is 48-bits long.

The 64-bit key is permuted according to the following table, <strong>PC-1</strong>. Since the first entry in the table is "57", this means that the 57th bit of the original key <strong>K</strong> becomes the first bit of the permuted key <strong>K</strong>+. The 49th bit of the original key becomes the second bit of the permuted key. The 4th bit of the original key is the last bit of the permuted key. Note only 56 bits of the original key appear in the permuted key.
<span style="white-space: pre-wrap"><code>                            <strong>PC-1</strong></code><br><code></code><br><code>              57   49    41   33    25    17    9</code><br><code>               1   58    50   42    34    26   18</code><br><code>              10    2    59   51    43    35   27</code><br><code>              19   11     3   60    52    44   36</code><br><code>              63   55    47   39    31    23   15</code><br><code>               7   62    54   46    38    30   22</code><br><code>              14    6    61   53    45    37   29</code><br><code>              21   13     5   28    20    12    4</code></span>

<strong>Example:</strong> From the original 64-bit key

<strong>K</strong> = 00010011 00110100 01010111 01111001 10011011 10111100 11011111 11110001

we get the 56-bit permutation

<strong>K</strong>+ = 1111000 0110011 0010101 0101111 0101010 1011001 1001111 0001111

Next, split this key into left and right halves, <strong><em>C<sub>0</sub></em></strong> and <strong><em>D<sub>0</sub></em></strong>, where each half has 28 bits.

<strong>Example:</strong> From the permuted key <strong>K</strong>+, we get

<strong><em>C<sub>0</sub></em></strong> = 1111000 0110011 0010101 0101111
<strong><em>D<sub>0</sub></em></strong> = 0101010 1011001 1001111 0001111

With <strong><em>C<sub>0</sub></em></strong> and <strong><em>D<sub>0</sub></em></strong> defined, we now create sixteen blocks <strong><em>C<sub>n</sub></em></strong> and <strong><em>D<sub>n</sub></em></strong>, 1\<=<strong><em>n</em></strong>\<=16. Each pair of blocks <strong><em>C<sub>n</sub></em></strong> and <strong><em>D<sub>n</sub></em></strong> is formed from the previous pair <strong><em>C<sub>n-1</sub></em></strong> and <strong><em>D<sub>n-1</sub></em></strong>, respectively, for <strong><em>n</em></strong> = 1, 2, ..., 16, using the following schedule of "left shifts" of the previous block. To do a left shift, move each bit one place to the left, except for the first bit, which is cycled to the end of the block.
<span style="white-space: pre-wrap"><code>                     Iteration     Number of</code><br><code>                      Number      Left Shifts</code><br><code></code><br><code>                          1          1</code><br><code>                          2          1</code><br><code>                          3          2</code><br><code>                          4          2</code><br><code>                          5          2</code><br><code>                          6          2</code><br><code>                          7          2</code><br><code>                          8          2</code><br><code>                          9          1</code><br><code>                         10          2</code><br><code>                         11          2</code><br><code>                         12          2</code><br><code>                         13          2</code><br><code>                         14          2</code><br><code>                         15          2</code><br><code>                         16          1</code></span>

This means, for example, <strong><em>C<sub>3</sub></em></strong> and <strong><em>D<sub>3</sub></em></strong> are obtained from <strong><em>C<sub>2</sub></em></strong> and <strong><em>D<sub>2</sub></em></strong>, respectively, by two left shifts, and <strong><em>C<sub>16</sub></em></strong> and <strong><em>D<sub>16</sub></em></strong> are obtained from <strong><em>C<sub>15</sub></em></strong> and <strong><em>D<sub>15</sub></em></strong>, respectively, by one left shift. In all cases, by a single left shift is meant a rotation of the bits one place to the left, so that after one left shift the bits in the 28 positions are the bits that were previously in positions 2, 3,..., 28, 1.

<strong>Example:</strong> From original pair pair <strong><em>C<sub>0</sub></em></strong> and <strong><em>D<sub>0</sub></em></strong> we obtain:

<strong><em>C<sub>0</sub></em></strong> = 1111000011001100101010101111
<strong><em>D<sub>0</sub></em></strong> = 0101010101100110011110001111

<strong><em>C<sub>1</sub></em></strong> = 1110000110011001010101011111
<strong><em>D<sub>1</sub></em></strong> = 1010101011001100111100011110

<strong><em>C<sub>2</sub></em></strong> = 1100001100110010101010111111
<strong><em>D<sub>2</sub></em></strong> = 0101010110011001111000111101

<strong><em>C<sub>3</sub></em></strong> = 0000110011001010101011111111
<strong><em>D<sub>3</sub></em></strong> = 0101011001100111100011110101

<strong><em>C<sub>4</sub></em></strong> = 0011001100101010101111111100
<strong><em>D<sub>4</sub></em></strong> = 0101100110011110001111010101

<strong><em>C<sub>5</sub></em></strong> = 1100110010101010111111110000
<strong><em>D<sub>5</sub></em></strong> = 0110011001111000111101010101

<strong><em>C<sub>6</sub></em></strong> = 0011001010101011111111000011
<strong><em>D<sub>6</sub></em></strong> = 1001100111100011110101010101

<strong><em>C<sub>7</sub></em></strong> = 1100101010101111111100001100
<strong><em>D<sub>7</sub></em></strong> = 0110011110001111010101010110

<strong><em>C<sub>8</sub></em></strong> = 0010101010111111110000110011
<strong><em>D<sub>8</sub></em></strong> = 1001111000111101010101011001

<strong><em>C<sub>9</sub></em></strong> = 0101010101111111100001100110
<strong><em>D<sub>9</sub></em></strong> = 0011110001111010101010110011

<strong><em>C<sub>10</sub></em></strong> = 0101010111111110000110011001
<strong><em>D<sub>10</sub></em></strong> = 1111000111101010101011001100

<strong><em>C<sub>11</sub></em></strong> = 0101011111111000011001100101
<strong><em>D<sub>11</sub></em></strong> = 1100011110101010101100110011

<strong><em>C<sub>12</sub></em></strong> = 0101111111100001100110010101
<strong><em>D<sub>12</sub></em></strong> = 0001111010101010110011001111

<strong><em>C<sub>13</sub></em></strong> = 0111111110000110011001010101
<strong><em>D<sub>13</sub></em></strong> = 0111101010101011001100111100

<strong><em>C<sub>14</sub></em></strong> = 1111111000011001100101010101
<strong><em>D<sub>14</sub></em></strong> = 1110101010101100110011110001

<strong><em>C<sub>15</sub></em></strong> = 1111100001100110010101010111
<strong><em>D<sub>15</sub></em></strong> = 1010101010110011001111000111

<strong><em>C<sub>16</sub></em></strong> = 1111000011001100101010101111
<strong><em>D<sub>16</sub></em></strong> = 0101010101100110011110001111

We now form the keys <strong><em>K<sub>n</sub></em></strong>, for 1\<=<strong><em>n</em></strong>\<=16, by applying the following permutation table to each of the concatenated pairs <strong><em>C<sub>n</sub>D<sub>n</sub></em></strong>. Each pair has 56 bits, but <strong>PC-2</strong> only uses 48 of these.
<span style="white-space: pre-wrap"><code>                              <strong>PC-2</strong></code><br><code></code><br><code>                 14    17   11    24     1    5</code><br><code>                  3    28   15     6    21   10</code><br><code>                 23    19   12     4    26    8</code><br><code>                 16     7   27    20    13    2</code><br><code>                 41    52   31    37    47   55</code><br><code>                 30    40   51    45    33   48</code><br><code>                 44    49   39    56    34   53</code><br><code>                 46    42   50    36    29   32</code></span>

Therefore, the first bit of <strong><em>K<sub>n</sub></em></strong> is the 14th bit of <strong><em>C<sub>n</sub>D<sub>n</sub></em></strong>, the second bit the 17th, and so on, ending with the 48th bit of <strong><em>K<sub>n</sub></em></strong> being the 32th bit of <strong><em>C<sub>n</sub>D<sub>n</sub></em></strong>.

<strong>Example:</strong> For the first key we have <strong><em>C<sub>1</sub>D<sub>1</sub></em></strong> = 1110000 1100110 0101010 1011111 1010101 0110011 0011110 0011110

which, after we apply the permutation <strong>PC-2</strong>, becomes

<strong><em>K<sub>1</sub></em></strong> = 000110 110000 001011 101111 111111 000111 000001 110010

For the other keys we have

<strong><em>K<sub>2</sub></em></strong> = 011110 011010 111011 011001 110110 111100 100111 100101
<strong><em>K<sub>3</sub></em></strong> = 010101 011111 110010 001010 010000 101100 111110 011001
<strong><em>K<sub>4</sub></em></strong> = 011100 101010 110111 010110 110110 110011 010100 011101
<strong><em>K<sub>5</sub></em></strong> = 011111 001110 110000 000111 111010 110101 001110 101000
<strong><em>K<sub>6</sub></em></strong> = 011000 111010 010100 111110 010100 000111 101100 101111
<strong><em>K<sub>7</sub></em></strong> = 111011 001000 010010 110111 111101 100001 100010 111100
<strong><em>K<sub>8</sub></em></strong> = 111101 111000 101000 111010 110000 010011 101111 111011
<strong><em>K<sub>9</sub></em></strong> = 111000 001101 101111 101011 111011 011110 011110 000001
<strong><em>K<sub>10</sub></em></strong> = 101100 011111 001101 000111 101110 100100 011001 001111
<strong><em>K<sub>11</sub></em></strong> = 001000 010101 111111 010011 110111 101101 001110 000110
<strong><em>K<sub>12</sub></em></strong> = 011101 010111 000111 110101 100101 000110 011111 101001
<strong><em>K<sub>13</sub></em></strong> = 100101 111100 010111 010001 111110 101011 101001 000001
<strong><em>K<sub>14</sub></em></strong> = 010111 110100 001110 110111 111100 101110 011100 111010
<strong><em>K<sub>15</sub></em></strong> = 101111 111001 000110 001101 001111 010011 111100 001010
<strong><em>K<sub>16</sub></em></strong> = 110010 110011 110110 001011 000011 100001 011111 110101

So much for the subkeys. Now we look at the message itself.
## Step 2: Encode each 64-bit block of data.

There is an <em>initial permutation</em> <strong>IP</strong> of the 64 bits of the message data <strong>M</strong>. This rearranges the bits according to the following table, where the entries in the table show the new arrangement of the bits from their initial order. The 58th bit of <strong>M</strong> becomes the first bit of <strong>IP</strong>. The 50th bit of <strong>M</strong> becomes the second bit of <strong>IP</strong>. The 7th bit of <strong>M</strong> is the last bit of <strong>IP</strong>.
<span style="white-space: pre-wrap"><code>                             <strong>IP</strong></code><br><code></code><br><code>            58    50   42    34    26   18    10    2</code><br><code>            60    52   44    36    28   20    12    4</code><br><code>            62    54   46    38    30   22    14    6</code><br><code>            64    56   48    40    32   24    16    8</code><br><code>            57    49   41    33    25   17     9    1</code><br><code>            59    51   43    35    27   19    11    3</code><br><code>            61    53   45    37    29   21    13    5</code><br><code>            63    55   47    39    31   23    15    7</code></span>

<strong>Example:</strong> Applying the initial permutation to the block of text <strong>M</strong>, given previously, we get

<strong>M</strong> = 0000 0001 0010 0011 0100 0101 0110 0111 1000 1001 1010 1011 1100 1101 1110 1111
<strong>IP</strong> = 1100 1100 0000 0000 1100 1100 1111 1111 1111 0000 1010 1010 1111 0000 1010 1010

Here the 58th bit of <strong>M</strong> is "1", which becomes the first bit of <strong>IP</strong>. The 50th bit of <strong>M</strong> is "1", which becomes the second bit of <strong>IP</strong>. The 7th bit of <strong>M</strong> is "0", which becomes the last bit of <strong>IP</strong>.

Next divide the permuted block <strong>IP</strong> into a left half <strong><em>L<sub>0</sub></em></strong> of 32 bits, and a right half <strong><em>R<sub>0</sub></em></strong> of 32 bits.

<strong>Example:</strong> From <strong>IP</strong>, we get <strong><em>L<sub>0</sub></em></strong> and <strong><em>R<sub>0</sub></em></strong>

<strong><em>L<sub>0</sub></em></strong> = 1100 1100 0000 0000 1100 1100 1111 1111
<strong><em>R<sub>0</sub></em></strong> = 1111 0000 1010 1010 1111 0000 1010 1010

We now proceed through 16 iterations, for 1\<=<strong><em>n</em></strong>\<=16, using a function <strong><em>f</em></strong> which operates on two blocks--a data block of 32 bits and a key <strong><em>K<sub>n</sub></em></strong> of 48 bits--to produce a block of 32 bits. <strong>Let + denote XOR addition, (bit-by-bit addition modulo 2)</strong>. Then for <strong>n</strong> going from 1 to 16 we calculate
> <strong><em>L<sub>n</sub></em></strong> = <strong><em>R<sub>n-1</sub></em></strong>
> <strong><em>R<sub>n</sub></em></strong> = <strong><em>L<sub>n-1</sub></em></strong> + <strong><em>f</em></strong>(<strong><em>R<sub>n-1</sub></em></strong>,<strong><em>K<sub>n</sub></em></strong>)

This results in a final block, for <strong><em>n</em></strong> = 16, of <strong><em>L<sub>16</sub>R<sub>16</sub></em></strong>. That is, in each iteration, we take the right 32 bits of the previous result and make them the left 32 bits of the current step. For the right 32 bits in the current step, we XOR the left 32 bits of the previous step with the calculation <strong><em>f</em></strong> .

<strong>Example:</strong> For <strong><em>n</em></strong> = 1, we have

<strong><em>K<sub>1</sub></em></strong> = 000110 110000 001011 101111 111111 000111 000001 110010
<strong><em>L<sub>1</sub></em></strong> = <strong><em>R<sub>0</sub></em></strong> = 1111 0000 1010 1010 1111 0000 1010 1010
<strong><em>R<sub>1</sub></em></strong> = <strong><em>L<sub>0</sub></em></strong> + <strong><em>f</em></strong>(<strong><em>R<sub>0</sub></em></strong>,<strong><em>K<sub>1</sub></em></strong>)

It remains to explain how the function <strong><em>f</em></strong> works. To calculate <strong><em>f</em></strong>, we first expand each block <strong><em>R<sub>n-1</sub></em></strong> from 32 bits to 48 bits. This is done by using a selection table that repeats some of the bits in <strong><em>R<sub>n-1</sub></em></strong> . We'll call the use of this selection table the function <strong>E</strong>. Thus <strong>E</strong>(<strong><em>R<sub>n-1</sub></em></strong>) has a 32 bit input block, and a 48 bit output block.

Let <strong>E</strong> be such that the 48 bits of its output, written as 8 blocks of 6 bits each, are obtained by selecting the bits in its inputs in order according to the following table:
<span style="white-space: pre-wrap"><code>                    <strong>E BIT-SELECTION TABLE</strong></code><br><code></code><br><code>                 32     1    2     3     4    5</code><br><code>                  4     5    6     7     8    9</code><br><code>                  8     9   10    11    12   13</code><br><code>                 12    13   14    15    16   17</code><br><code>                 16    17   18    19    20   21</code><br><code>                 20    21   22    23    24   25</code><br><code>                 24    25   26    27    28   29</code><br><code>                 28    29   30    31    32    1</code></span>

Thus the first three bits of <strong>E</strong>(<strong><em>R<sub>n-1</sub></em></strong>) are the bits in positions 32, 1 and 2 of <strong><em>R<sub>n-1</sub></em></strong> while the last 2 bits of <strong>E</strong>(<strong><em>R<sub>n-1</sub></em></strong>) are the bits in positions 32 and 1.

<strong>Example:</strong> We calculate <strong>E</strong>(<strong><em>R<sub>0</sub></em></strong>) from <strong><em>R<sub>0</sub></em></strong> as follows:

<strong><em>R<sub>0</sub></em></strong> = 1111 0000 1010 1010 1111 0000 1010 1010
<strong>E</strong>(<strong><em>R<sub>0</sub></em></strong>) = 011110 100001 010101 010101 011110 100001 010101 010101

(Note that each block of 4 original bits has been expanded to a block of 6 output bits.)

Next in the <strong><em>f</em></strong> calculation, we XOR the output <strong>E</strong>(<strong><em>R<sub>n-1</sub></em></strong>) with the key <strong><em>K<sub>n</sub></em></strong>:

<strong><em>K<sub>n</sub></em></strong> + <strong>E</strong>(<strong><em>R<sub>n-1</sub></em></strong>).

<strong>Example:</strong> For <strong><em>K<sub>1</sub></em></strong> , <strong>E</strong>(<strong><em>R<sub>0</sub></em></strong>), we have

<strong><em>K<sub>1</sub></em></strong> = 000110 110000 001011 101111 111111 000111 000001 110010
<strong>E</strong>(<strong><em>R<sub>0</sub></em></strong>) = 011110 100001 010101 010101 011110 100001 010101 010101
<strong><em>K<sub>1</sub></em></strong>+<strong>E</strong>(<strong><em>R<sub>0</sub></em></strong>) = 011000 010001 011110 111010 100001 100110 010100 100111.

We have not yet finished calculating the function <strong><em>f</em></strong> . To this point we have expanded <strong><em>R<sub>n-1</sub></em></strong> from 32 bits to 48 bits, using the selection table, and XORed the result with the key <strong><em>K<sub>n</sub></em></strong> . We now have 48 bits, or eight groups of six bits. We now do something strange with each group of six bits: we use them as addresses in tables called "<strong>S boxes</strong>". Each group of six bits will give us an address in a different <strong>S</strong> box. Located at that address will be a 4 bit number. This 4 bit number will replace the original 6 bits. The net result is that the eight groups of 6 bits are transformed into eight groups of 4 bits (the 4-bit outputs from the <strong>S</strong> boxes) for 32 bits total.

Write the previous result, which is 48 bits, in the form:

<strong><em>K<sub>n</sub></em></strong> + <strong>E</strong>(<strong><em>R<sub>n-1</sub></em></strong>) =<strong><em>B<sub>1</sub>B<sub>2</sub>B<sub>3</sub>B<sub>4</sub>B<sub>5</sub>B<sub>6</sub>B<sub>7</sub>B<sub>8</sub></em></strong>,

where each <strong><em>B<sub>i</sub></em></strong> is a group of six bits. We now calculate

<strong><em>S<sub>1</sub>(B<sub>1</sub>)S<sub>2</sub>(B<sub>2</sub>)S<sub>3</sub>(B<sub>3</sub>)S<sub>4</sub>(B<sub>4</sub>)S<sub>5</sub>(B<sub>5</sub>)S<sub>6</sub>(B<sub>6</sub>)S<sub>7</sub>(B<sub>7</sub>)S<sub>8</sub>(B<sub>8</sub>)</em></strong>

where <strong><em>S<sub>i</sub>(B<sub>i</sub>)</em></strong> referres to the output of the <strong><em>i</em></strong>-th <strong>S</strong> box.

To repeat, each of the functions <strong><em>S1, S2,..., S8</em></strong>, takes a 6-bit block as input and yields a 4-bit block as output. The table to determine <strong><em>S<sub>1</sub></em></strong> is shown and explained below:
<span style="white-space: pre-wrap"><code><strong> S1 Column Number Row No. 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 0 14 4 13 1 2 15 11 8 3 10 6 12 5 9 0 7 1 0 15 7 4 14 2 13 1 10 6 12 11 9 5 3 8 2 4 1 14 8 13 6 2 11 15 12 9 7 3 10 5 0 3 15 12 8 2 4 9 1 7 5 11 3 14 10 0 6 13 </strong></code></span>

If <strong><em>S<sub>1</sub></em></strong> is the function defined in this table and <strong><em>B</em></strong> is a block of 6 bits, then <strong><em>S<sub>1</sub>(B)</em></strong> is determined as follows: The first and last bits of <strong><em>B</em></strong> represent in base 2 a number in the decimal range 0 to 3 (or binary 00 to 11). Let that number be <strong><em>i</em></strong>. The middle 4 bits of <strong><em>B</em></strong> represent in base 2 a number in the decimal range 0 to 15 (binary 0000 to 1111). Let that number be <strong><em>j</em></strong>. Look up in the table the number in the <strong><em>i</em></strong>-th row and <strong><em>j</em></strong>-th column. It is a number in the range 0 to 15 and is uniquely represented by a 4 bit block. That block is the output <strong><em>S<sub>1</sub>(B)</em></strong> of <strong><em>S<sub>1</sub></em></strong> for the input <strong><em>B</em></strong>. For example, for input block <strong><em>B</em></strong> = 011011 the first bit is "0" and the last bit "1" giving 01 as the row. This is row 1. The middle four bits are "1101". This is the binary equivalent of decimal 13, so the column is column number 13. In row 1, column 13 appears 5. This determines the output; 5 is binary 0101, so that the output is 0101. Hence <strong><em>S<sub>1</sub></em></strong>(011011) = 0101.

The tables defining the functions <strong><em>S<sub>1</sub>,...,S<sub>8</sub></em></strong> are the following:
<span style="white-space: pre-wrap"><code>                             <strong>S1</strong></code><br><code></code><br><code>     14  4  13  1   2 15  11  8   3 10   6 12   5  9   0  7</code><br><code>      0 15   7  4  14  2  13  1  10  6  12 11   9  5   3  8</code><br><code>      4  1  14  8  13  6   2 11  15 12   9  7   3 10   5  0</code><br><code>     15 12   8  2   4  9   1  7   5 11   3 14  10  0   6 13</code><br><code></code><br><code>                             <strong>S2</strong></code><br><code></code><br><code>     15  1   8 14   6 11   3  4   9  7   2 13  12  0   5 10</code><br><code>      3 13   4  7  15  2   8 14  12  0   1 10   6  9  11  5</code><br><code>      0 14   7 11  10  4  13  1   5  8  12  6   9  3   2 15</code><br><code>     13  8  10  1   3 15   4  2  11  6   7 12   0  5  14  9</code><br><code></code><br><code>                             <strong>S3</strong></code><br><code></code><br><code>     10  0   9 14   6  3  15  5   1 13  12  7  11  4   2  8</code><br><code>     13  7   0  9   3  4   6 10   2  8   5 14  12 11  15  1</code><br><code>     13  6   4  9   8 15   3  0  11  1   2 12   5 10  14  7</code><br><code>      1 10  13  0   6  9   8  7   4 15  14  3  11  5   2 12</code><br><code></code><br><code>                             <strong>S4</strong></code><br><code></code><br><code>      7 13  14  3   0  6   9 10   1  2   8  5  11 12   4 15</code><br><code>     13  8  11  5   6 15   0  3   4  7   2 12   1 10  14  9</code><br><code>     10  6   9  0  12 11   7 13  15  1   3 14   5  2   8  4</code><br><code>      3 15   0  6  10  1  13  8   9  4   5 11  12  7   2 14</code><br><code></code><br><code>                             <strong>S5</strong></code><br><code></code><br><code>      2 12   4  1   7 10  11  6   8  5   3 15  13  0  14  9</code><br><code>     14 11   2 12   4  7  13  1   5  0  15 10   3  9   8  6</code><br><code>      4  2   1 11  10 13   7  8  15  9  12  5   6  3   0 14</code><br><code>     11  8  12  7   1 14   2 13   6 15   0  9  10  4   5  3</code><br><code></code><br><code>                             <strong>S6</strong></code><br><code></code><br><code>     12  1  10 15   9  2   6  8   0 13   3  4  14  7   5 11</code><br><code>     10 15   4  2   7 12   9  5   6  1  13 14   0 11   3  8</code><br><code>      9 14  15  5   2  8  12  3   7  0   4 10   1 13  11  6</code><br><code>      4  3   2 12   9  5  15 10  11 14   1  7   6  0   8 13</code><br><code></code><br><code>                             <strong>S7</strong></code><br><code></code><br><code>      4 11   2 14  15  0   8 13   3 12   9  7   5 10   6  1</code><br><code>     13  0  11  7   4  9   1 10  14  3   5 12   2 15   8  6</code><br><code>      1  4  11 13  12  3   7 14  10 15   6  8   0  5   9  2</code><br><code>      6 11  13  8   1  4  10  7   9  5   0 15  14  2   3 12</code><br><code></code><br><code>                             <strong>S8</strong></code><br><code></code><br><code>     13  2   8  4   6 15  11  1  10  9   3 14   5  0  12  7</code><br><code>      1 15  13  8  10  3   7  4  12  5   6 11   0 14   9  2</code><br><code>      7 11   4  1   9 12  14  2   0  6  10 13  15  3   5  8</code><br><code>      2  1  14  7   4 10   8 13  15 12   9  0   3  5   6 11</code></span>

<strong>Example:</strong> For the first round, we obtain as the output of the eight <strong>S</strong> boxes:

<strong><em>K<sub>1</sub></em></strong> + <strong>E</strong>(<strong><em>R<sub>0</sub></em></strong>) = 011000 010001 011110 111010 100001 100110 010100 100111.

<strong><em>S<sub>1</sub>(B<sub>1</sub>)S<sub>2</sub>(B<sub>2</sub>)S<sub>3</sub>(B<sub>3</sub>)S<sub>4</sub>(B<sub>4</sub>)S<sub>5</sub>(B<sub>5</sub>)S<sub>6</sub>(B<sub>6</sub>)S<sub>7</sub>(B<sub>7</sub>)S<sub>8</sub>(B<sub>8</sub>)</em></strong> = 0101 1100 1000 0010 1011 0101 1001 0111

The final stage in the calculation of <strong><em>f</em></strong> is to do a permutation <strong>P</strong> of the <strong>S</strong>-box output to obtain the final value of <strong><em>f</em></strong>:

<strong><em>f</em></strong> = <strong>P</strong>(<strong><em>S<sub>1</sub>(B<sub>1</sub>)S<sub>2</sub>(B<sub>2</sub>)...S<sub>8</sub>(B<sub>8</sub>)</em></strong>)

The permutation <strong>P</strong> is defined in the following table. <strong>P</strong> yields a 32-bit output from a 32-bit input by permuting the bits of the input block.
<span style="white-space: pre-wrap"><code>                                <strong>P</strong></code><br><code></code><br><code>                         16   7  20  21</code><br><code>                         29  12  28  17</code><br><code>                          1  15  23  26</code><br><code>                          5  18  31  10</code><br><code>                          2   8  24  14</code><br><code>                         32  27   3   9</code><br><code>                         19  13  30   6</code><br><code>                         22  11   4  25</code></span>

<strong>Example:</strong> From the output of the eight <strong>S</strong> boxes:

<strong><em>S<sub>1</sub>(B<sub>1</sub>)S<sub>2</sub>(B<sub>2</sub>)S<sub>3</sub>(B<sub>3</sub>)S<sub>4</sub>(B<sub>4</sub>)S<sub>5</sub>(B<sub>5</sub>)S<sub>6</sub>(B<sub>6</sub>)S<sub>7</sub>(B<sub>7</sub>)S<sub>8</sub>(B<sub>8</sub>)</em></strong> = 0101 1100 1000 0010 1011 0101 1001 0111

we get

<strong><em>f</em></strong> = 0010 0011 0100 1010 1010 1001 1011 1011

<strong><em>R<sub>1</sub></em></strong> = <strong><em>L<sub>0</sub></em></strong> + <strong><em>f</em></strong>(<strong><em>R<sub>0</sub></em></strong> , <strong><em>K<sub>1</sub></em></strong> )
> = 1100 1100 0000 0000 1100 1100 1111 1111
> + 0010 0011 0100 1010 1010 1001 1011 1011
> = 1110 1111 0100 1010 0110 0101 0100 0100

In the next round, we will have <strong><em>L<sub>2</sub></em></strong> = <strong><em>R<sub>1</sub></em></strong>, which is the block we just calculated, and then we must calculate <strong><em>R<sub>2</sub></em></strong> =<strong><em>L<sub>1</sub> + f(R<sub>1</sub>, K<sub>2</sub>)</em></strong>, and so on for 16 rounds. At the end of the sixteenth round we have the blocks <strong><em>L<sub>16</sub></em></strong> and <strong><em>R<sub>16</sub></em></strong>. We then <strong><em>reverse</em></strong> the order of the two blocks into the 64-bit block

<strong><em>R<sub>16</sub>L<sub>16</sub></em></strong>

and apply a final permutation <strong>IP<sup>-1</sup></strong> as defined by the following table:
<span style="white-space: pre-wrap"><code>                             <strong>IP<sup>-1</sup></strong></code><br><code></code><br><code>            40     8   48    16    56   24    64   32</code><br><code>            39     7   47    15    55   23    63   31</code><br><code>            38     6   46    14    54   22    62   30</code><br><code>            37     5   45    13    53   21    61   29</code><br><code>            36     4   44    12    52   20    60   28</code><br><code>            35     3   43    11    51   19    59   27</code><br><code>            34     2   42    10    50   18    58   26</code><br><code>            33     1   41     9    49   17    57   25</code></span>

That is, the output of the algorithm has bit 40 of the preoutput block as its first bit, bit 8 as its second bit, and so on, until bit 25 of the preoutput block is the last bit of the output.

<strong>Example:</strong> If we process all 16 blocks using the method defined previously, we get, on the 16th round,

<strong><em>L<sub>16</sub></em></strong> = 0100 0011 0100 0010 0011 0010 0011 0100
<strong><em>R<sub>16</sub></em></strong> = 0000 1010 0100 1100 1101 1001 1001 0101

We reverse the order of these two blocks and apply the final permutation to

<strong><em>R<sub>16</sub>L<sub>16</sub></em></strong> = 00001010 01001100 11011001 10010101 01000011 01000010 00110010 00110100

<strong><em>IP<sup>-1</sup></em></strong> = 10000101 11101000 00010011 01010100 00001111 00001010 10110100 00000101

which in hexadecimal format is

85E813540F0AB405.

This is the encrypted form of <strong>M</strong> = 0123456789ABCDEF: namely, <strong>C</strong> = 85E813540F0AB405.

Decryption is simply the inverse of encryption, follwing the same steps as above, but reversing the order in which the subkeys are applied.
