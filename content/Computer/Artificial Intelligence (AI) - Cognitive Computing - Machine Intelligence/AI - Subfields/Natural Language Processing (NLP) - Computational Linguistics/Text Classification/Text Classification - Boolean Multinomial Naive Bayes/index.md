---
title: "Text Classification - Boolean Multinomial Naive Bayes"
created: 2020-11-02T20:24:29.507-06:00
modified: 2020-11-02T22:02:55.493-06:00
parent: "[[Text Classification]]"
children: []
---
Using [[Bivariate／Boolean／Binary Multinoulli／Multinomial Naive Bayes|Boolean Multinomial Naive Bayes]] for [[Text Classification]]
### Training

calculate 𝐏(𝐶=𝑐<sub>𝑗</sub>) prior probablities:
```
for each 𝑐ⱼ in 𝐶:
	docsⱼ = all docs with class 𝑐ⱼ
	𝐏(𝐶=𝑐ⱼ) = | docsⱼ| / |total # documents|
```

calculate 𝐏(𝑤ᵢ|𝑐ⱼ) likelihoods:
- in each doc remove duplicates of each word type (i.e. retain only a single instance of a word)
- corpus = single doc containing all docs
- 𝑛 = size of corpus
```
for each word 𝑤ᵢ in vocabulary:
	𝑛ᵢ = # of occurence of 𝑤ᵢ in corpus
	𝐏(𝑤ᵢ|𝑐ⱼ) = (𝑛ᵢ + 𝛼) / (𝑛 + 𝛼|vocabulary|)
```
### Testing

on testing document 𝑑 = \[𝑤₁, ..., 𝑤ᵣ\]:

> [!indent]
> 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑐ⱼ∊𝐶</sub> \[ 𝐏(𝑐ⱼ) · 𝛱<sub>𝑖∊𝑝𝑜𝑠𝑖𝑡𝑖𝑜𝑛𝑠</sub>\[𝐏(𝑤ᵢ|𝑐ⱼ)\] \]

### Example - Normal Naive Bayes vs Boolean Multinomial Naive Bayes

```merge-table
{
  "rows": [
    [
      {
        "content": "Normal Naive Bayes",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Boolean Multinomial Naive Bayes",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": [
          "training",
          {
            "rows": [
              [
                {
                  "content": "Doc #",
                  "header": true,
                  "bg": "#F4F5F7"
                },
                {
                  "content": "Words",
                  "header": true,
                  "bg": "#F4F5F7"
                },
                {
                  "content": "Class",
                  "header": true,
                  "bg": "#F4F5F7"
                }
              ],
              [
                "1",
                "<code><font style=\"color: rgb(128,128,128);\">chinese beijing chinese</font></code>",
                "<code><font style=\"color: rgb(128,0,0);\">china</font></code>"
              ],
              [
                "2",
                "<code><font style=\"color: rgb(128,128,128);\">chinese chinese shanghai</font></code>",
                "<code><font style=\"color: rgb(128,0,0);\">china</font></code>"
              ],
              [
                "3",
                "<code><font style=\"color: rgb(128,128,128);\">chinese macao</font></code>",
                "<code><font style=\"color: rgb(128,0,0);\">china</font></code>"
              ],
              [
                "4",
                "<code><font style=\"color: rgb(128,128,128);\">tokyo japan chinese</font></code>",
                "<code><font style=\"color: rgb(128,0,0);\">japan</font></code>"
              ]
            ]
          },
          "- 𝐏ˆ(𝑐) = 𝑛𝑢𝑚-𝑑𝑜𝑐𝑠<sub>𝑐𝑙𝑎𝑠𝑠-𝑐</sub>/𝑛𝑢𝑚-𝑑𝑜𝑐𝑠\n\t- 𝐏ˆ(<code><font style=\"color: rgb(128,0,0);\">china</font></code>) = 3/4\n\t- 𝐏ˆ(<code><font style=\"color: rgb(128,0,0);\">japan</font></code>) = 1/4\n- 𝐏ˆ(<code><font style=\"color: rgb(128,128,128);\">𝑤</font></code>|<code><font style=\"color: rgb(128,0,0);\">𝑐</font></code>) = 𝑐𝑜𝑢𝑛𝑡-𝑜𝑓-<code><font style=\"color: rgb(128,128,128);\">𝑤</font></code>-𝑖𝑛-𝑑𝑜𝑐-<code><font style=\"color: rgb(128,0,0);\">𝑐</font></code> + 1\\] / \\[𝑐𝑜𝑢𝑛𝑡-𝑜𝑓-𝑤𝑜𝑟𝑑𝑠-𝑖𝑛-𝑑𝑜𝑐-<font style=\"color: rgb(128,0,0);\">𝑐</font> + 𝑣𝑜𝑐𝑎𝑏-𝑠𝑖𝑧𝑒\\]\n\t- 𝐏ˆ(<code><font style=\"color: rgb(128,128,128);\">chinese</font></code>|<code><font style=\"color: rgb(128,0,0);\">china</font></code>) = (5+1)/(8+6) = 3/7\n\t- 𝐏ˆ(<code><font style=\"color: rgb(128,128,128);\">tokyo</font></code>|<code><font style=\"color: rgb(128,0,0);\">china</font></code>) = (0+1)/(8+6) = 1/14\n\t- 𝐏ˆ(<code><font style=\"color: rgb(128,128,128);\">japan</font></code>|<code><font style=\"color: rgb(128,0,0);\">china</font></code>) = (0+1)/(8+6) = 1/14\n\t- 𝐏ˆ(<code><font style=\"color: rgb(128,128,128);\">chinese</font></code>|<code><font style=\"color: rgb(128,0,0);\">japan</font></code>) = (1+1)/(3+6) = 2/9\n\t- 𝐏ˆ(<code><font style=\"color: rgb(128,128,128);\">tokyo</font></code>|<code><font style=\"color: rgb(128,0,0);\">japan</font></code>) = (1+1)/(3+6) = 2/9\n\t- 𝐏ˆ(<code><font style=\"color: rgb(128,128,128);\">japan</font></code>|<code><font style=\"color: rgb(128,0,0);\">japan</font></code>) = (1+1)/(3+6) = 2/9"
        ]
      },
      {
        "content": [
          "training",
          {
            "rows": [
              [
                {
                  "content": "Doc #",
                  "header": true,
                  "bg": "#F4F5F7"
                },
                {
                  "content": "Words",
                  "header": true,
                  "bg": "#F4F5F7"
                },
                {
                  "content": "Class",
                  "header": true,
                  "bg": "#F4F5F7"
                }
              ],
              [
                "1",
                "<code><font style=\"color: rgb(128,128,128);\">chinese beijing</font></code>",
                "china"
              ],
              [
                "2",
                "<code><font style=\"color: rgb(128,128,128);\">chinese shanghai</font></code>",
                "china"
              ],
              [
                "3",
                "<code><font style=\"color: rgb(128,128,128);\">chinese macao</font></code>",
                "china"
              ],
              [
                "4",
                "<code><font style=\"color: rgb(128,128,128);\">tokyo japan chinese</font></code>",
                "japan"
              ]
            ]
          }
        ]
      }
    ],
    [
      {
        "content": [
          "test",
          {
            "rows": [
              [
                {
                  "content": "Doc",
                  "header": true,
                  "bg": "#F4F5F7"
                },
                {
                  "content": "Words",
                  "header": true,
                  "bg": "#F4F5F7"
                },
                {
                  "content": "Class",
                  "header": true,
                  "bg": "#F4F5F7"
                }
              ],
              [
                "<code><font style=\"color: rgb(0,128,0);\">test doc</font></code>",
                "<code><font style=\"color: rgb(128,128,128);\">chinese chinese chinese tokyo japan</font></code>",
                "<code><font style=\"color: rgb(128,0,0);\">?</font></code>"
              ]
            ]
          },
          "choosing class:\n- 𝐏(<code><font style=\"color: rgb(128,0,0);\">china</font></code>|<code><font style=\"color: rgb(0,128,0);\">test-doc</font></code>) ∝ 𝐏(<code><font style=\"color: rgb(128,0,0);\">china</font></code>)𝐏(<code><font style=\"color: rgb(128,128,128);\">chinese</font></code>|<code><font style=\"color: rgb(128,0,0);\">china</font></code>)<sup>3</sup>𝐏(<code><font style=\"color: rgb(128,128,128);\">tokyo</font></code>|<code><font style=\"color: rgb(128,0,0);\">china</font></code>)𝐏(<code><font style=\"color: rgb(128,128,128);\">japan</font></code>|<code><font style=\"color: rgb(128,0,0);\">china</font></code>)\n- 𝐏(<code><font style=\"color: rgb(128,0,0);\">china</font></code>|<code><font style=\"color: rgb(0,128,0);\">test-doc</font></code>) ∝ 3/4 \\* 3/7 \\* 3/7 \\* 3/7 \\* 1/14 \\* 1/14\n- 𝐏(<code><font style=\"color: rgb(128,0,0);\">china</font></code>|<code><font style=\"color: rgb(0,128,0);\">test-doc</font></code>) ∝ 0.000301214\n- 𝐏(<code><font style=\"color: rgb(128,0,0);\">japan</font></code>|<code><font style=\"color: rgb(0,128,0);\">test-doc</font></code>) ∝ 𝐏(<code><font style=\"color: rgb(128,0,0);\">japan</font></code>)𝐏(<code><font style=\"color: rgb(128,128,128);\">chinese</font></code>|<code><font style=\"color: rgb(128,0,0);\">japan</font></code>)<sup>3</sup>𝐏(<code><font style=\"color: rgb(128,128,128);\">tokyo</font></code>|<code><font style=\"color: rgb(128,0,0);\">japan</font></code>)𝐏(<code><font style=\"color: rgb(128,128,128);\">japan</font></code>|<code><font style=\"color: rgb(128,0,0);\">japan</font></code>)\n- 𝐏(<code><font style=\"color: rgb(128,0,0);\">japan</font></code>|<code><font style=\"color: rgb(0,128,0);\">test-doc</font></code>) ∝ 1/4 \\* 2/9 \\* 2/9 \\* 2/9 \\* 2/9 \\* 2/9\n- 𝐏(<code><font style=\"color: rgb(128,0,0);\">japan</font></code>|<code><font style=\"color: rgb(0,128,0);\">test-doc</font></code>) ∝ 0.000135481\n\nthus, we classify <code><font style=\"color: rgb(0,128,0);\">test-doc</font></code> as <code><font style=\"color: rgb(128,0,0);\">china</font></code>"
        ]
      },
      {
        "content": [
          "test",
          {
            "rows": [
              [
                {
                  "content": "Doc",
                  "header": true,
                  "bg": "#F4F5F7"
                },
                {
                  "content": "Words",
                  "header": true,
                  "bg": "#F4F5F7"
                },
                {
                  "content": "Class",
                  "header": true,
                  "bg": "#F4F5F7"
                }
              ],
              [
                "test doc",
                "<code><font style=\"color: rgb(128,128,128);\">chinese tokyo japan</font></code>",
                "?"
              ]
            ]
          }
        ]
      }
    ]
  ]
}
```
