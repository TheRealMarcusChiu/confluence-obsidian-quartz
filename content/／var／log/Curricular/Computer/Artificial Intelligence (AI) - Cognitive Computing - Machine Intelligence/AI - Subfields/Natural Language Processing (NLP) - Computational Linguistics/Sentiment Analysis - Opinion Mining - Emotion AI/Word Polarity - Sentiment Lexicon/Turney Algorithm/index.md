---
title: "Turney Algorithm"
created: 2020-11-02T22:12:38.599-06:00
modified: 2020-11-02T22:18:13.649-06:00
parent: "[[Word Polarity - Sentiment Lexicon]]"
children: []
---
###### Turney Algorithm
- learns phrase polarity rather than just word polarity
- learns domain-specific information
- processes:
	- extract a phrasal lexicon from reviews
	- learn polarity of each phrase
	- rate a review by the average polarity of its phrases
- intuition:
	- positive phrases co-occur more with "excellent"
	- negative phrases co-occur more with "poor"

pointwise mutual information
- how much more do 2 events co-occur than if they were independent
- 𝐼(𝑋=𝑥,𝑌=𝑦) = 𝑙𝑜𝑔 \[ 𝐏(𝑋=𝑥,𝑌=𝑦) / \[𝐏(𝑋=𝑥)𝐏(𝑌=𝑦)\] \]

pointwise mutual information between 2 words:
- how much more do 2 words co-occur than if they were independent?
- 𝐼(𝑤𝑜𝑟𝑑1,𝑤𝑜𝑟𝑑2) = 𝑙𝑜𝑔 \[ 𝐏(𝑤𝑜𝑟𝑑1,𝑤𝑜𝑟𝑑2) / \[𝐏(𝑤𝑜𝑟𝑑1)𝐏(𝑤𝑜𝑟𝑑2)\] \]

how to estimate Pointwise Mutual Information
- 𝐏(𝑤𝑜𝑟𝑑) = ℎ𝑖𝑡𝑠(𝑤𝑜𝑟𝑑) / 𝑁
- 𝐏(𝑤𝑜𝑟𝑑1,𝑤𝑜𝑟𝑑2) = ℎ𝑖𝑡𝑠(𝑤𝑜𝑟𝑑1 𝑁𝐸𝐴𝑅 𝑤𝑜𝑟𝑑2) / 𝑁²
- 𝐼(𝑤𝑜𝑟𝑑1,𝑤𝑜𝑟𝑑2) = 𝑙𝑜𝑔 \[ ℎ𝑖𝑡𝑠(𝑤𝑜𝑟𝑑1 𝑁𝐸𝐴𝑅 𝑤𝑜𝑟𝑑2) / \[ℎ𝑖𝑡𝑠(𝑤𝑜𝑟𝑑1) ℎ𝑖𝑡𝑠(𝑤𝑜𝑟𝑑2)\] \]

does phrase appear more with "poor" or "excellent"
- 𝑃𝑜𝑙𝑎𝑟𝑖𝑡𝑦(𝑝ℎ𝑟𝑎𝑠𝑒) = 𝐼(𝑝ℎ𝑟𝑎𝑠𝑒,"excellent") - 𝐼(𝑝ℎ𝑟𝑎𝑠𝑒,"poor")
- 𝑃𝑜𝑙𝑎𝑟𝑖𝑡𝑦(𝑝ℎ𝑟𝑎𝑠𝑒) = 𝑙𝑜𝑔 \[ ℎ𝑖𝑡𝑠(𝑝ℎ𝑟𝑎𝑠𝑒 𝑁𝐸𝐴𝑅 "excellent") / \[ℎ𝑖𝑡𝑠(𝑝ℎ𝑟𝑎𝑠𝑒) ℎ𝑖𝑡𝑠("excellent")\] \] - 𝑙𝑜𝑔 \[ ℎ𝑖𝑡𝑠(𝑝ℎ𝑟𝑎𝑠𝑒 𝑁𝐸𝐴𝑅 "poor") / \[ℎ𝑖𝑡𝑠(𝑝ℎ𝑟𝑎𝑠𝑒) ℎ𝑖𝑡𝑠("poor")\] \]
- 𝑃𝑜𝑙𝑎𝑟𝑖𝑡𝑦(𝑝ℎ𝑟𝑎𝑠𝑒) = 𝑙𝑜𝑔 \[ \[ ℎ𝑖𝑡𝑠(𝑝ℎ𝑟𝑎𝑠𝑒 𝑁𝐸𝐴𝑅 "excellent") ℎ𝑖𝑡𝑠(𝑝ℎ𝑟𝑎𝑠𝑒) ℎ𝑖𝑡𝑠("poor") \] / \[ ℎ𝑖𝑡𝑠(𝑝ℎ𝑟𝑎𝑠𝑒) ℎ𝑖𝑡𝑠("excellent") ℎ𝑖𝑡𝑠(𝑝ℎ𝑟𝑎𝑠𝑒 𝑁𝐸𝐴𝑅 "poor") \] \]
- 𝑃𝑜𝑙𝑎𝑟𝑖𝑡𝑦(𝑝ℎ𝑟𝑎𝑠𝑒) = 𝑙𝑜𝑔 \[ \[ ℎ𝑖𝑡𝑠(𝑝ℎ𝑟𝑎𝑠𝑒 𝑁𝐸𝐴𝑅 "excellent") ℎ𝑖𝑡𝑠("poor") \] / \[ ℎ𝑖𝑡𝑠(𝑝ℎ𝑟𝑎𝑠𝑒 𝑁𝐸𝐴𝑅 "poor") ℎ𝑖𝑡𝑠("excellent") \] \]

### Example Phrases From a Thumbs-Up Review

```merge-table
{
  "rows": [
    [
      {
        "content": "Phrase",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "PoS Tags",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Polarity",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "online service",
        "bg": "blue"
      },
      {
        "content": "JJ NN",
        "bg": "blue"
      },
      {
        "content": "2.8",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "online experience",
        "bg": "blue"
      },
      {
        "content": "JJ NN",
        "bg": "blue"
      },
      {
        "content": "2.3",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "direct deposit",
        "bg": "blue"
      },
      {
        "content": "JJ NN",
        "bg": "blue"
      },
      {
        "content": "1.3",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "local branch",
        "bg": "blue"
      },
      {
        "content": "JJ NN",
        "bg": "blue"
      },
      {
        "content": "0.42",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "...",
        "bg": "blue"
      },
      {
        "content": "...",
        "bg": "blue"
      },
      {
        "content": "...",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "low fees",
        "bg": "blue"
      },
      {
        "content": "JJ NNS",
        "bg": "blue"
      },
      {
        "content": "0.33",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "true service",
        "bg": "blue"
      },
      {
        "content": "JJ NN",
        "bg": "blue"
      },
      {
        "content": "-0.73",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "other bank",
        "bg": "blue"
      },
      {
        "content": "JJ NN",
        "bg": "blue"
      },
      {
        "content": "-0.85",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "inconveniently located",
        "bg": "blue"
      },
      {
        "content": "JJ NN",
        "bg": "blue"
      },
      {
        "content": "-1.5",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "AVERAGE",
        "bg": "green"
      },
      {
        "bg": "green"
      },
      {
        "content": "0.32",
        "bg": "green"
      }
    ]
  ]
}
```
