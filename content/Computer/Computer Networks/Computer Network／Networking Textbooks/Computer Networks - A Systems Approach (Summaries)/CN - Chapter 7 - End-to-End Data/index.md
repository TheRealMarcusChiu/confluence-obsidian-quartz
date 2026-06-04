---
title: "CN - Chapter 7 - End-to-End Data"
created: 2019-05-02T17:32:17.219-05:00
modified: 2019-05-02T17:48:06.401-05:00
parent: "[[Computer Networks - A Systems Approach (Summaries)]]"
children: []
---
2 concerns:
- receiver be able to extract the same message from the signal sent by sender
- increase the efficiency of encoding - data compression

2 sides need to agree to a presentation/message format
###### Data Manipulation Functions
- presentation formatting
- data compression

# 7.1 Presentation Formatting

<strong>presentation formatting</strong> - the transforming between: application data and data suitable for transmission over a network
<strong>encoding/marshalling</strong> - application data to network data 
<strong>decoding/unmarshalling</strong> - network data to application data
###### Issues in Argument Marshalling:
- [[CN - Chapter 7 - End-to-End Data|what data types does the system support]]
- [[CN - Chapter 7 - End-to-End Data|data conversion between different machine architectures]]
- [[CN - Chapter 7 - End-to-End Data|identifying kinds of data within the message]]

### What Data Types Does the System Support

data types levels (lowest to highest):
- <strong>base types</strong> - typically includes: integers, floating-point numbers, characters, ordinal types, booleans, etc
- <strong>flat types</strong> - structures and arrays
- <strong>complex types</strong> - types that are built using pointers/memory addresses

### Data Conversion Between Different Machine Architectures

conversion strategies:
- <strong>canonical intermediate form</strong>
	- both sender and receiver settles on external representation for each type
	- in networking, this is known as N-by-1 solution: each N machine architectures must be able to convert between its own representation to the single external representation
- <strong>receiver-makes-right</strong>
	- sender transmit data in its own internal format; the receiver is then responsible for translating the data from sender's format into its own format
	- in networking, this is known as N-by-N solution: each N machine architectures must be able to convert between its own representation to all N architectures

### Identifying Kinds of Data Within the Message

2 common approaches:
- <strong>tagged data</strong> - is any additional information included in a message - beyond the concrete representation of the base types - that helps the receiver decode the message
- <strong>untagged data</strong> - both sender and receiver agrees on a predetermined type for each data

### Stubs
- is a piece of code that implements argument marshalling
- on the client side, the stub marshals the data into a linear message
- on the server side, the stub unmarshalls the linear message into the data
- stubs can either be: interpreted or compiled

# Network Data Representation Examples (XDR, ASN.1, NDR)
###### External Data Representation (XDR)
- is the network format used with SunRPC
- supports the entire C-type system with exception of function pointers
- defines a canonical intermediate form
- does not use tags (except to indicate array lengths)
- uses compiled stubs

###### Abstract Syntax Notation One (ASN.1)
- is an ISO standard
- supports C-type system without function pointers
- defines a canonical intermediate form
- uses type tags
- stubs can be either: compiled or interpreted
- used in the Internet standard Simple Network Management Protocol (SNMP)
- represents each data item with a triple of the form: ⟨tag, length, value⟩

###### Network Data Representation (NDR)
- data-encoding standard used in the Distributed Computing Environment (DCE)
- uses receiver-makes-right (unlike XDR and ASN.1) by inserting a tag at front of each message; individual data items are untagged
- uses compiler to generate stubs
- supports C-type system

# Markup Languages
- <strong>Extensible Markup Language (XML)</strong> - takes tagged approach to the extreme
- <strong>XML Schema Document (XSD)</strong> - a schema language defined for XML
- <strong>Efficient XML Interchange (EXI)</strong> - binary XML format for greater compactness and faster parsing

<strong>XML Namespaces</strong> - solves the problem of name clashes
# 7.2 Multimedia Data

since multimedia data are consumed by humans we want to keep the information that is most important to a human, while getting rid of anything that doesn’t improve the human’s perception of the visual or auditory experience

<strong>compression types:</strong>
- <strong>lossless compression</strong> - guarantees data received is exactly the same as data sent
- <strong>lossy compression</strong> - does not guarantee data received is exactly the same as data sent

### Lossless Compression Techniques
###### huffman codes
- encoding data of: higher occurrences with fewer bits and lower occurences with more bits

###### run length encoding (RLE)
- the idea is to replace consecutive occurrences of a given symbol with only one copy of the symbol, plus a count of how many times that symbol occur
- e.g. the string AAABBCDDDD would be encoded as 3A2B1C4D
- works well on images due to large homogeneous regions

###### differential pulse code modulation (DPCM)
- the idea here is to first output a reference symbol and then, for each symbol in the data, to output the difference between that symbol and the reference symbol
- e.g. using symbol A as the reference symbol, the string AAABBCDDDD would be encoded as A0001123333 because A is the same as the reference symbol, B has a difference of 1 from the reference symbol, and so on
- when the differences are small they can be encoded with fewer bits than the symbol itself. In this example, the range of differences, 0–3, can be represented with 2 bits each, rather than the 7 or 8 bits required by the full character. As soon as the difference becomes too large, a new reference symbol is selected
- works better than RLE for most digital imagery, because adjacent pixels are usually similar

###### delta encoding
- simply encodes symbol as the difference from the previous one
- e.g. AAABBCDDDD would be represented as A001011000
- also possible to perform RLE after delta encoding, since we might find long strings of 0s if there are many similar symbols next to each other

###### dictionary-based methods
- Lempel-Ziv (LZ) compression algorithm is the best known dictionary-based compression method
- the idea is to build a dictionary/table of variable-length strings that would be expected to be found in data, then replace each of these strings with the corresponding index

## 7.2.2 Image Representation and Compression
- images are composed of pixels
- pixels are either: grayscale or color
- there are various color spaces:
	- RGB - red, green, blue values
	- YUV - Y luminance - the brightness, U and V containing chrominance - color information

###### Graphical Interchange Format (GIF)
- starts with an RGB color space: 8-bits for each of the 3 color dimensions for a total of 24-bits
- then reduces the 24-bit color images to 8-bit color images: by picking the 256 colors that most closely approximate the colors used in the picture
- all 256 colors are stored in a table and each indexed with an 8-bit number
- then the value for each pixel is replaced by the appropriate index
- then runs an LZ variant over the result, treating common sequences of pixels as the strings that make up the dictionary

###### Joint Photographic Experts Group (JPEG)
- starts off by transforming colors from RGB space into YUV space using linear equations:
	- Y = 0.299R + 0.587G + 0.114B
	- U = (B-Y) \* 0.565
	- V = (R-Y) \* 0.713
- we compress U and V components more aggressively, because human eyes are less sensitive
- subsample - take a number of adjacent pixels, calculate the average U or V value and transmit that. the luminance Y component is not subsampled
- after subsampling the image, we feed it through 3 phases one 8x8 block at a time:
	- discrete cosine transform (DCT) - transforms image as spatial domain into an equivalent signal in the spatial frequency domain. this is a lossless operation
	- quantization - quantizes the resulting signal, which loses the least significant information contained in that signal
	- encoding - encodes the final result
- decompression follows these same 3 phases in reverse order

## 7.2.3 Video Compression
###### Moving Picture Experts Group (MPEG)
- each frame can be compressed using the same DCT-based technique used in JPEG
- then takes a sequence of video frames and compresses them into 3 types of frames (each frame is compressed into one of these frame types):
	- I frames (intrapicture) - can be thought of self-contained reference frames
	- P frames (predicted picture) - not self-contained, specifies the differences from the previous I frame
	- B frames (bidirectional predicted picture) - not self-contained, gives an interpolation between the previous and subsequent I or P frames

![[CN - Chapter 7 - End-to-End Data/mpeg.png|500]]
## 7.2.4 Transmitting MPEG over a Network
- <font style="color: rgb(255,0,0);">TODO page 614</font>

## 7.2.4 Audio Compression
###### MP3

```merge-table
{
  "rows": [
    [
      {
        "content": "MP3 Compression Rates",
        "header": true,
        "bg": "#F4F5F7",
        "colspan": 3
      },
      null,
      null
    ],
    [
      {
        "content": "Coding",
        "align": "center"
      },
      {
        "content": "Bit Rates",
        "align": "center"
      },
      {
        "content": "Compression Factor",
        "align": "center"
      }
    ],
    [
      {
        "content": "Layer I",
        "align": "center"
      },
      {
        "content": "384 kbps",
        "align": "center"
      },
      {
        "content": "4",
        "align": "center"
      }
    ],
    [
      {
        "content": "Layer II",
        "align": "center"
      },
      {
        "content": "192 kbps",
        "align": "center"
      },
      {
        "content": "8",
        "align": "center"
      }
    ],
    [
      {
        "content": "Layer III",
        "align": "center"
      },
      {
        "content": "128 kbps",
        "align": "center"
      },
      {
        "content": "12",
        "align": "center"
      }
    ]
  ]
}
```
