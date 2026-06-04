---
title: "NLP - Sequence Problems"
created: 2020-11-02T19:51:28.257-06:00
modified: 2020-11-02T19:59:58.015-06:00
parent: "[[Natural Language Processing (NLP) - Computational Linguistics]]"
children: []
---
many problems in NLP have data which is a sequence of characters, words, phrases, lines/sentences...

we can think of our task as one of labeling each item

```merge-table
{
  "rows": [
    [
      {
        "content": "Labeling Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "PoS Tagging",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": {
          "rows": [
            [
              {
                "content": "VBG",
                "header": true,
                "bg": "#F4F5F7"
              },
              {
                "content": "NN",
                "header": true,
                "bg": "#F4F5F7"
              },
              {
                "content": "IN",
                "header": true,
                "bg": "#F4F5F7"
              },
              {
                "content": "DT",
                "header": true,
                "bg": "#F4F5F7"
              },
              {
                "content": "NN",
                "header": true,
                "bg": "#F4F5F7"
              },
              {
                "content": "IN",
                "header": true,
                "bg": "#F4F5F7"
              },
              {
                "content": "NN",
                "header": true,
                "bg": "#F4F5F7"
              }
            ],
            [
              "Chasing",
              "opportunity",
              "in",
              "an",
              "age",
              "of",
              "upheaval"
            ]
          ]
        }
      }
    ],
    [
      {
        "content": "Named Entity Recognition",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": {
          "rows": [
            [
              {
                "content": "PERS",
                "header": true,
                "bg": "#F4F5F7"
              },
              {
                "content": "O",
                "header": true,
                "bg": "#F4F5F7"
              },
              {
                "content": "O",
                "header": true,
                "bg": "#F4F5F7"
              },
              {
                "content": "O",
                "header": true,
                "bg": "#F4F5F7"
              },
              {
                "content": "ORG",
                "header": true,
                "bg": "#F4F5F7"
              },
              {
                "content": "ORG",
                "header": true,
                "bg": "#F4F5F7"
              }
            ],
            [
              "Murdoch",
              "discusses",
              "future",
              "of",
              "News",
              "Corp."
            ]
          ]
        }
      }
    ],
    [
      {
        "content": "Word Segmentation",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": {
          "rows": [
            [
              {
                "content": "B",
                "header": true,
                "bg": "#F4F5F7"
              },
              {
                "content": "B",
                "header": true,
                "bg": "#F4F5F7"
              },
              {
                "content": "I",
                "header": true,
                "bg": "#F4F5F7"
              },
              {
                "content": "I",
                "header": true,
                "bg": "#F4F5F7"
              },
              {
                "content": "B",
                "header": true,
                "bg": "#F4F5F7"
              }
            ],
            [
              "你",
              "好",
              "你",
              "好",
              "吗"
            ]
          ]
        }
      }
    ],
    [
      {
        "content": "Text Segmentation",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": {
          "rows": [
            [
              "<font style=\"color: rgb(123,136,152);\">Lorem ipsum dolor sit amet, consectetur adipiscing elit</font>",
              "Q"
            ],
            [
              "<font style=\"color: rgb(123,136,152);\">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</font>",
              "A"
            ],
            [
              "<font style=\"color: rgb(123,136,152);\">Ut enim ad minim veniam, quis nostrud exercitation ullamco</font>",
              "A"
            ],
            [
              "<font style=\"color: rgb(123,136,152);\">laboris nisi ut aliquip ex ea commodo consequat</font>",
              "..."
            ]
          ]
        }
      }
    ]
  ]
}
```
### Sequence Models
- [[Hidden Markov Models (HMM)]]
- [[Maximum Entropy (Maxent) Models]]
- [[Conditional／Discriminative Random Fields (CRF)|Conditional/Discriminative Random Fields (CRF)]]
