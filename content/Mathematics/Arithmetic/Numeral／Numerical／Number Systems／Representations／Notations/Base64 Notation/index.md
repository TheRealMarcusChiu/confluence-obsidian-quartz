---
title: "Base64 Notation"
created: 2021-09-13T05:24:59.925-05:00
modified: 2023-08-24T16:09:36.837-05:00
parent: "[[Numeral／Numerical／Number Systems／Representations／Notations]]"
children: []
---
###### Base64
````excerpt
- is an encoding between (a subset of [[ASCII]] characters) ↔ (sequences of 6 bits). In other words, each Base64 digit represents exactly 6 bits of data)
````
^excerpt

# Base64 Table

```merge-table
{
  "rows": [
    [
      {
        "content": "Decimal",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Binary",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Base46",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Decimal",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Binary",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Base64",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Decimal",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Binary",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Base64",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Decimal",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Binary",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Base64",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      "0",
      "000000",
      "<code>A</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "16",
      "010000",
      "<code>Q</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "32",
      "100000",
      "<code>g</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "48",
      "110000",
      "<code>w</code>"
    ],
    [
      "1",
      "000001",
      "<code>B</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "17",
      "010001",
      "<code>R</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "33",
      "100001",
      "<code>h</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "49",
      "110001",
      "<code>x</code>"
    ],
    [
      "2",
      "000010",
      "<code>C</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "18",
      "010010",
      "<code>S</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "34",
      "100010",
      "<code>i</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "50",
      "110010",
      "<code>y</code>"
    ],
    [
      "3",
      "000011",
      "<code>D</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "19",
      "010011",
      "<code>T</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "35",
      "100011",
      "<code>j</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "51",
      "110011",
      "<code>z</code>"
    ],
    [
      "4",
      "000100",
      "<code>E</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "20",
      "010100",
      "<code>U</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "36",
      "100100",
      "<code>k</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "52",
      "110100",
      "<code>0</code>"
    ],
    [
      "5",
      "000101",
      "<code>F</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "21",
      "010101",
      "<code>V</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "37",
      "100101",
      "<code>l</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "53",
      "110101",
      "<code>1</code>"
    ],
    [
      "6",
      "000110",
      "<code>G</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "22",
      "010110",
      "<code>W</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "38",
      "100110",
      "<code>m</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "54",
      "110110",
      "<code>2</code>"
    ],
    [
      "7",
      "000111",
      "<code>H</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "23",
      "010111",
      "<code>X</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "39",
      "100111",
      "<code>n</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "55",
      "110111",
      "<code>3</code>"
    ],
    [
      "8",
      "001000",
      "<code>I</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "24",
      "011000",
      "<code>Y</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "40",
      "101000",
      "<code>o</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "56",
      "111000",
      "<code>4</code>"
    ],
    [
      "9",
      "001001",
      "<code>J</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "25",
      "011001",
      "<code>Z</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "41",
      "101001",
      "<code>p</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "57",
      "111001",
      "<code>5</code>"
    ],
    [
      "10",
      "001010",
      "<code>K</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "26",
      "011010",
      "<code>a</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "42",
      "101010",
      "<code>q</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "58",
      "111010",
      "<code>6</code>"
    ],
    [
      "11",
      "001011",
      "<code>L</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "27",
      "011011",
      "<code>b</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "43",
      "101011",
      "<code>r</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "59",
      "111011",
      "<code>7</code>"
    ],
    [
      "12",
      "001100",
      "<code>M</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "28",
      "011100",
      "<code>c</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "44",
      "101100",
      "<code>s</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "60",
      "111100",
      "<code>8</code>"
    ],
    [
      "13",
      "001101",
      "<code>N</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "29",
      "011101",
      "<code>d</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "45",
      "101101",
      "<code>t</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "61",
      "111101",
      "<code>9</code>"
    ],
    [
      "14",
      "001110",
      "<code>O</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "30",
      "011110",
      "<code>e</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "46",
      "101110",
      "<code>u</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "62",
      "111110",
      "<code>+</code>"
    ],
    [
      "15",
      "001111",
      "<code>P</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "31",
      "011111",
      "<code>f</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "47",
      "101111",
      "<code>v</code>",
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      "63",
      "111111",
      "<code>/</code>"
    ]
  ],
  "tableStyle": "text-align: center;"
}
```

```merge-table
{
  "rows": [
    [
      {
        "content": "<em>padding</em>",
        "colspan": 2
      },
      null,
      "="
    ]
  ],
  "tableStyle": "text-align: center;"
}
```
# Output Padding

The final <code>==</code> sequence indicates that the last group contained only one byte, and <code>=</code> indicates that it contained two bytes. The example below illustrates how truncating the input of the above quote changes the output padding:

```merge-table
{
  "rows": [
    [
      {
        "content": "INPUT",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 3
      },
      null,
      null,
      {
        "content": "OUTPUT",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 4
      },
      null,
      null,
      null
    ],
    [
      {
        "content": "Text",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "\\# of Chars",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "\\# of Bits",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Base64 Text",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "# of Chars",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "# of Bits",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Padding",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      "<em><font style=\"color: rgb(51,102,255);\">ple</font><font style=\"color: rgb(255,0,0);\">asu</font><font style=\"color: rgb(51,153,102);\">re</font></em>",
      "8",
      "64",
      "<font style=\"color: rgb(51,102,255);\">cGxl</font><font style=\"color: rgb(255,0,0);\">YXN1</font><font style=\"color: rgb(51,153,102);\">cmU=</font>",
      "12",
      "72",
      "1"
    ],
    [
      "<em><font style=\"color: rgb(51,102,255);\">ple</font><font style=\"color: rgb(255,0,0);\">asu</font><font style=\"color: rgb(51,153,102);\">r</font></em>",
      "7",
      "56",
      "<font style=\"color: rgb(51,102,255);\">cGxl</font><font style=\"color: rgb(255,0,0);\">YXN1</font><font style=\"color: rgb(51,153,102);\">cg==</font>",
      "12",
      "72",
      "2"
    ],
    [
      "<em><font style=\"color: rgb(51,102,255);\">ple</font><font style=\"color: rgb(255,0,0);\">asu</font></em>",
      "6",
      "48",
      "<font style=\"color: rgb(51,102,255);\">cGxl</font><font style=\"color: rgb(255,0,0);\">YXN1</font>",
      "8",
      "48",
      "0"
    ],
    [
      "<em><font style=\"color: rgb(51,102,255);\">ple</font><font style=\"color: rgb(255,0,0);\">as</font></em>",
      "5",
      "40",
      "<font style=\"color: rgb(51,102,255);\">cGxl</font><font style=\"color: rgb(255,0,0);\">YXM=</font>",
      "8",
      "48",
      "1"
    ],
    [
      "<em><font style=\"color: rgb(51,102,255);\">ple</font><font style=\"color: rgb(255,0,0);\">a</font></em>",
      "4",
      "32",
      "<font style=\"color: rgb(51,102,255);\">cGxl</font><font style=\"color: rgb(255,0,0);\">YQ==</font>",
      "8",
      "48",
      "2"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Encoding/Decoding Base64
###### encode
<span style="white-space: pre-wrap"><code>echo -n 'input' | openssl base64</code></span>

<span style="white-space: pre-wrap"><code>echo -n 'hello' | base64</code></span>

<span style="white-space: pre-wrap"><code>openssl base64 -in plain.txt -out base64.txt</code></span>

###### decode
<span style="white-space: pre-wrap"><code>echo -n 'aGVsbG8=' | base64 --decode</code></span>

<span style="white-space: pre-wrap"><code>base64 --decode base64.txt \> plain.txt</code></span>
