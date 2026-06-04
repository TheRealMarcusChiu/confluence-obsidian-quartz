---
title: "Lappin & Leas Pronouns Resolution Algorithm"
created: 2020-11-20T18:06:45.131-06:00
modified: 2020-12-03T00:05:04.662-06:00
parent: "[[Coreference／Co-Reference Extraction]]"
children: []
---
###### Lappin & Leas Pronouns Resolution Algorithm
- the idea is to use a weighting scheme that integrates the effects of recency and syntactic preferences
- computes a salience value as a sum of weights assigned by a set of salience factors

### Resources
- [https://web.stanford.edu/~jurafsky/18beg.pdf](https://web.stanford.edu/~jurafsky/18beg.pdf)

### Pronoun Resolution Algorithm
```
referent-list = [] # list of ([referents], salient-value)
for each sentence in discourse {
	divide each salient-value in referent-list by half
	for each referent in sentence {
		compute referent's salient-value
		if (referent is pronoun) {
			choose from referent-list, one with highest salient-value (disregarding those that do not agree in number, gender, etc, fails the intra-sentence syntactic constraints)
			append referent to that one with highest salient-value
			and increase the salient-value by the referent's salient-value
		} else {
			add ([referent], salient-value) into referent-list
		}
	}
}
```
### Lappin & Leas - Salience Factors

```merge-table
{
  "rows": [
    [
      {
        "content": "Salience Factor",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Salience Value",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Examples",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "Sentence recency",
      "100",
      {
        "content": "- <code><font style=\"color: rgb(128,128,128);\">An <strong>Acura</strong> is parked</font></code> (subject)\n- <code><font style=\"color: rgb(128,128,128);\">There's an <strong>Acura</strong> parked</font></code> (existential predicate nominal)\n- <code><font style=\"color: rgb(128,128,128);\">John parked an <strong>Acura</strong></font></code> (object)\n- <code><font style=\"color: rgb(128,128,128);\">John gave his <strong>Acura</strong> a bath</font></code> (indirect object)\n- <code><font style=\"color: rgb(128,128,128);\">John sang i<font style=\"color: rgb(128,128,128);\">nside his </font><strong>Acura</strong></font></code> (adverbial emphasis)\n- <code><font style=\"color: rgb(128,128,128);\">The manual for an <strong>Acura</strong> is there</font></code> (non head noun) because it's embedded in the subject",
        "rowspan": 7
      }
    ],
    [
      "Subject emphasis",
      "80"
    ],
    [
      "Existential Emphasis",
      "70"
    ],
    [
      "Accusative (direct object) Emphasis",
      "50"
    ],
    [
      "Indirect Object & Oblique Complement Emphasis",
      "40"
    ],
    [
      "Non-Adverbial Emphasis",
      "50"
    ],
    [
      "Head Noun Emphasis",
      "80"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
### Pronoun Resolution Algorithm - Example

given discourse:
- <code><font style="color: rgb(128,128,128);">John saw a beautiful Acura at the dealership.</font></code>
- <code><font style="color: rgb(128,128,128);">He showed it to Bob.</font></code>
- <code><font style="color: rgb(128,128,128);">He bought it.</font></code>

steps:
> [!tabs]
>
> === 1
>
> - current sentence: <code><font style="color: rgb(128,128,128);">John saw a beautiful Acura at the dealership.</font></code>
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Salient Value",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Prev Referent-List",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Current Referents to Add",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "New Referent-List",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       {
>         "content": {
>           "rows": [
>             [
>               {
>                 "content": "Factor",
>                 "header": true,
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "Value",
>                 "header": true,
>                 "bg": "#F4F5F7"
>               }
>             ],
>             [
>               {
>                 "content": "sentence recency (sr)",
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "100",
>                 "bg": "blue"
>               }
>             ],
>             [
>               {
>                 "content": "subject (sj)",
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "80",
>                 "bg": "blue"
>               }
>             ],
>             [
>               {
>                 "content": "direct object (do)",
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "50",
>                 "bg": "blue"
>               }
>             ],
>             [
>               {
>                 "content": "indirect object (io)",
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "40",
>                 "bg": "blue"
>               }
>             ]
>           ]
>         }
>       },
>       "- NONE",
>       {
>         "content": {
>           "rows": [
>             [
>               {
>                 "content": "Referent",
>                 "header": true,
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "sr",
>                 "header": true,
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "sj",
>                 "header": true,
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "do",
>                 "header": true,
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "io",
>                 "header": true,
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "total",
>                 "header": true,
>                 "bg": "#F4F5F7"
>               }
>             ],
>             [
>               {
>                 "content": "<code><font style=\"color: rgb(128,128,128);\">John</font></code>",
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "100",
>                 "bg": "blue"
>               },
>               {
>                 "content": "80",
>                 "bg": "blue"
>               },
>               {
>                 "bg": "blue"
>               },
>               {
>                 "bg": "blue"
>               },
>               {
>                 "content": "180",
>                 "bg": "green"
>               }
>             ],
>             [
>               {
>                 "content": "<code><font style=\"color: rgb(128,128,128);\">Acura</font></code>",
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "100",
>                 "bg": "blue"
>               },
>               {
>                 "bg": "blue"
>               },
>               {
>                 "content": "50",
>                 "bg": "blue"
>               },
>               {
>                 "bg": "blue"
>               },
>               {
>                 "content": "150",
>                 "bg": "green"
>               }
>             ],
>             [
>               {
>                 "content": "<code><font style=\"color: rgb(128,128,128);\">dealership</font></code>",
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "100",
>                 "bg": "blue"
>               },
>               {
>                 "bg": "blue"
>               },
>               {
>                 "bg": "blue"
>               },
>               {
>                 "bg": "blue"
>               },
>               {
>                 "content": "100",
>                 "bg": "green"
>               }
>             ]
>           ]
>         }
>       },
>       "- (\\[<code><font style=\"color: rgb(128,128,128);\">John</font></code>\\], 180)\n- (\\[<code><font style=\"color: rgb(128,128,128);\">Acura</font></code>\\], 150)\n- (\\[<code><font style=\"color: rgb(128,128,128);\">dealership</font></code>\\], 100)"
>     ]
>   ]
> }
> ```
>
> === 2
>
> - current sentence: <code><font style="color: rgb(128,128,128);">He showed it to Bob.</font></code>
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Salient Value",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Prev Referent-List",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Current Referents to Add",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "New Referent-List",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       {
>         "content": {
>           "rows": [
>             [
>               {
>                 "content": "Factor",
>                 "header": true,
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "Value",
>                 "header": true,
>                 "bg": "#F4F5F7"
>               }
>             ],
>             [
>               {
>                 "content": "sentence recency (sr)",
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "100",
>                 "bg": "blue"
>               }
>             ],
>             [
>               {
>                 "content": "subject (sj)",
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "80",
>                 "bg": "blue"
>               }
>             ],
>             [
>               {
>                 "content": "direct object (do)",
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "50",
>                 "bg": "blue"
>               }
>             ],
>             [
>               {
>                 "content": "indirect object (io)",
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "40",
>                 "bg": "blue"
>               }
>             ]
>           ]
>         }
>       },
>       "- (\\[<code><font style=\"color: rgb(128,128,128);\">John</font></code>\\], 90)\n- (\\[<code><font style=\"color: rgb(128,128,128);\">Acura</font></code>\\], 75)\n- (\\[<code><font style=\"color: rgb(128,128,128);\">dealership</font></code>\\], 50)",
>       {
>         "content": {
>           "rows": [
>             [
>               {
>                 "content": "Referent",
>                 "header": true,
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "sr",
>                 "header": true,
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "sj",
>                 "header": true,
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "do",
>                 "header": true,
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "io",
>                 "header": true,
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "total",
>                 "header": true,
>                 "bg": "#F4F5F7"
>               }
>             ],
>             [
>               {
>                 "content": "<code><font style=\"color: rgb(128,128,128);\">He</font></code>",
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "100",
>                 "bg": "blue"
>               },
>               {
>                 "content": "80",
>                 "bg": "blue"
>               },
>               {
>                 "bg": "blue"
>               },
>               {
>                 "bg": "blue"
>               },
>               {
>                 "content": "180",
>                 "bg": "green"
>               }
>             ],
>             [
>               {
>                 "content": "<code><font style=\"color: rgb(128,128,128);\">it</font></code>",
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "100",
>                 "bg": "blue"
>               },
>               {
>                 "bg": "blue"
>               },
>               {
>                 "content": "50",
>                 "bg": "blue"
>               },
>               {
>                 "bg": "blue"
>               },
>               {
>                 "content": "150",
>                 "bg": "green"
>               }
>             ],
>             [
>               {
>                 "content": "<code><font style=\"color: rgb(128,128,128);\">Bob</font></code>",
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "100",
>                 "bg": "blue"
>               },
>               {
>                 "bg": "blue"
>               },
>               {
>                 "bg": "blue"
>               },
>               {
>                 "content": "40",
>                 "bg": "blue"
>               },
>               {
>                 "content": "140",
>                 "bg": "green"
>               }
>             ]
>           ]
>         }
>       },
>       "- (\\[<code><font style=\"color: rgb(128,128,128);\">John</font></code>, <code><font style=\"color: rgb(128,128,128);\">He</font></code>\\], 270)\n- (\\[<code><font style=\"color: rgb(128,128,128);\">Acura</font></code>, <code><font style=\"color: rgb(128,128,128);\">it</font></code>\\], 225)\n- (\\[<code><font style=\"color: rgb(128,128,128);\">dealership</font></code>\\], 50)\n- (\\[<code><font style=\"color: rgb(128,128,128);\">Bob</font></code>\\], 140)"
>     ]
>   ]
> }
> ```
>
> === 3
>
> - current sentence: <code><font style="color: rgb(128,128,128);">He bought it.</font></code>
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Salient Value",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Prev Referent-List",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Current Referents to Add",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "New Referent-List",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       {
>         "content": {
>           "rows": [
>             [
>               {
>                 "content": "Factor",
>                 "header": true,
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "Value",
>                 "header": true,
>                 "bg": "#F4F5F7"
>               }
>             ],
>             [
>               {
>                 "content": "sentence recency (sr)",
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "100",
>                 "bg": "blue"
>               }
>             ],
>             [
>               {
>                 "content": "subject (sj)",
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "80",
>                 "bg": "blue"
>               }
>             ],
>             [
>               {
>                 "content": "direct object (do)",
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "50",
>                 "bg": "blue"
>               }
>             ],
>             [
>               {
>                 "content": "indirect object (io)",
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "40",
>                 "bg": "blue"
>               }
>             ]
>           ]
>         }
>       },
>       "- (\\[<code><font style=\"color: rgb(128,128,128);\">John</font></code>, <code><font style=\"color: rgb(128,128,128);\">He</font></code>\\], 135)\n- (\\[<code><font style=\"color: rgb(128,128,128);\">Acura</font></code>, <code><font style=\"color: rgb(128,128,128);\">it</font></code>\\], 112.5)\n- (\\[<code><font style=\"color: rgb(128,128,128);\">dealership</font></code>\\], 25)\n- (\\[<code><font style=\"color: rgb(128,128,128);\">Bob</font></code>\\], 70)",
>       {
>         "content": {
>           "rows": [
>             [
>               {
>                 "content": "Referent",
>                 "header": true,
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "sr",
>                 "header": true,
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "sj",
>                 "header": true,
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "do",
>                 "header": true,
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "io",
>                 "header": true,
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "total",
>                 "header": true,
>                 "bg": "#F4F5F7"
>               }
>             ],
>             [
>               {
>                 "content": "<code><font style=\"color: rgb(128,128,128);\">He</font></code>",
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "100",
>                 "bg": "blue"
>               },
>               {
>                 "content": "80",
>                 "bg": "blue"
>               },
>               {
>                 "bg": "blue"
>               },
>               {
>                 "bg": "blue"
>               },
>               {
>                 "content": "180",
>                 "bg": "green"
>               }
>             ],
>             [
>               {
>                 "content": "<code><font style=\"color: rgb(128,128,128);\">it</font></code>",
>                 "bg": "#F4F5F7"
>               },
>               {
>                 "content": "100",
>                 "bg": "blue"
>               },
>               {
>                 "bg": "blue"
>               },
>               {
>                 "content": "50",
>                 "bg": "blue"
>               },
>               {
>                 "bg": "blue"
>               },
>               {
>                 "content": "150",
>                 "bg": "green"
>               }
>             ]
>           ]
>         }
>       },
>       "- (\\[<code><font style=\"color: rgb(128,128,128);\">John</font></code>, <code><font style=\"color: rgb(128,128,128);\">He</font></code>, <code><font style=\"color: rgb(128,128,128);\">He</font></code>\\], 315)\n- (\\[<code><font style=\"color: rgb(128,128,128);\">Acura</font></code>, <code><font style=\"color: rgb(128,128,128);\">it</font></code>, <code><font style=\"color: rgb(128,128,128);\">it</font></code>\\], 262.5)\n- (\\[<code><font style=\"color: rgb(128,128,128);\">dealership</font></code>\\], 25)\n- (\\[<code><font style=\"color: rgb(128,128,128);\">Bob</font></code>\\], 70)"
>     ]
>   ]
> }
> ```
