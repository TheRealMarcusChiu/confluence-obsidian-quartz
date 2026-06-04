---
title: "Estimator & Predictor／Model (Bias - Variance - Irreducible／Bayes／Noise) Error - Predictor／Model Capacity／Complexity - Generalization (Underfit - Goodfit - Overfit)"
created: 2021-09-13T05:27:40.620-05:00
modified: 2026-02-10T15:33:23.218-06:00
parent: "[[(Point／Parameter - Predictor／Model Target Function／Distribution) Estimation／Estimator／Estimate]]"
children:
  - "[[Double Descent]]"
---
# Estimator vs Predictor

```merge-table
{
  "rows": [
    [
      {
        "content": "Estimator",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Predictor",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "there is a [[Statistics - Terminology|population parameter]] 𝜃 that \"summarizes\" the entire population distribution\n\nwe want to come up with an estimator 𝜃ˆ that:\n- takes as input a sample {𝑥<sup>(1)</sup>, ..., 𝑥<sup>(𝑛)</sup>} of the population\n- outputs an estimate of 𝜃\n\nwhere 𝑥<sup>(𝑖)</sup> is a random variable drawn from the population distribution <em>𝐷</em> (i.e. 𝑥<sup>(𝑖)</sup><em>\\~𝐷)</em>",
      "- 𝑦 = 𝑓(𝑥) + 𝜖\n\nwhere:\n- <em>𝑓</em> is the hidden target function (deterministic)\n- 𝜖 is noise (random)\n\nWe want to come up with a <em>predictor</em> <em>𝑓ˆ </em>that:\n- takes as input a sample {(𝑥<sup>(1)</sup>,𝑦<sup>(1)</sup>), ..., (𝑥<sup>(𝑛)</sup>,𝑦<sup>(𝑛)</sup>)} of the population\n- outputs an estimate of <em>𝑓</em>"
    ],
    [
      "> [!expand]- example\n> We would like to use this sample to <em>estimate</em> some useful qualities of the original data. For example, we may want to know the mean value of 𝐴𝑃𝑃𝐿 stock, but since we cannot get our hands on the entire economic machinery that generates the 𝐴𝑃𝑃𝐿 price we resort to computing the mean of the observed prices only:\n> - 𝜇ˆ<sub>𝑆</sub> = (1/𝑛)·𝛴<sub>1≤𝑖≤𝑛</sub>\\[𝑥<sup>(𝑖)</sup>\\], 𝑥<sup>(𝑖)</sup><em>\\~𝐴𝑃𝑃𝐿</em>\n> - <em>𝜇 =</em> 𝐄<sub>𝑥<em>\\~𝐴𝑃𝑃𝐿</em></sub>\\[𝑥\\]\n>\n> would be an <em>estimated</em> sample <em>mean</em> of the 𝐴𝑃𝑃𝐿 stock and a <em>real mean</em> of the 𝐴𝑃𝑃𝐿 stock. Note that <em>estimated mean</em> is a random variable dependent on the sample 𝑆 which is also a random variable, while <em>the</em> <em>real mean</em> is a scalar.\n>\n> Another example would be <em>estimated sample variance</em> of the 𝐴𝑃𝑃𝐿 stock:\n> - <em>𝜎²</em>ˆ<sub>𝑆</sub> = \\[1/(𝑛-1)\\]·𝛴<sub>1≤𝑖≤𝑛</sub>\\[𝑥<sup>(𝑖)</sup>-𝜇ˆ<sub>𝑆</sub>\\]<sup>2</sup>, 𝑥<sup>(𝑖)</sup><em>\\~𝐴𝑃𝑃𝐿</em>\n> - <em><em>𝜎²</em> =</em> 𝐄<sub>𝑥<em>\\~𝐴𝑃𝑃𝐿</em></sub>\\[𝑥\\]\n>\n> where <em>𝜎²</em> is the <em>real variance </em>of the 𝐴𝑃𝑃𝐿 stock.",
      "> [!expand]- Click here to expand...\n> TODO"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Estimator & Predictor - Error

```merge-table
{
  "rows": [
    [
      {
        "content": "Estimator Error",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Predictor Error",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "an estimator's error can be broken down into 2 sources:\n- <strong>Estimator Bias</strong>\n> [!expand]- Click here to expand...\n> definitions:\n> - the expected deviation of 𝜃ˆ from true value 𝜃\n> - measures how good our estimator is in estimating the real value\n>\n> the bias of an estimator 𝜃ˆ is defined as:\n> - 𝑏𝑖𝑎𝑠(𝜃ˆ) = 𝐄\\[𝜃ˆ\\] - 𝜃\n>\n> where:\n> - 𝜃ˆ - [[Statistics - Terminology|sample statistic]] - an estimate of 𝜃 given by the estimator when given [[ML - Training／Validation／Test Data／Set - Training／Validation／Test Error|training data]]\n> - 𝜃 - [[Statistics - Terminology|population parameter]] - true unknown value\n>\n> the estimator 𝜃ˆ is said to be:\n> - unbiased if 𝑏𝑖𝑎𝑠(𝜃ˆ) = 0 <font style=\"color: rgb(128,128,128);\">\\# implies 𝐄\\[𝜃ˆ\\] = 𝜃</font>\n> - biased if 𝑏𝑖𝑎𝑠(𝜃ˆ) ≠ 0\n> - asymptotically-unbiased if 𝑙𝑖𝑚<sub>𝑛→∞</sub> 𝑏𝑖𝑎𝑠(𝜃ˆ) = 0, which implies 𝑙𝑖𝑚<sub>𝑛→∞</sub> 𝐄\\[𝜃<sub>𝑛</sub>\\] = 𝜃 <font style=\"color: rgb(128,128,128);\">where 𝑛 is the number of training examples</font>\n- <strong>Estimator Variance</strong>\n> [!expand]- Click here to expand...\n> definitions:\n> - the deviation from the expected estimator 𝜃ˆ value that any particular sampling of the data is likely to cause\n> - measures how “jumpy” our <em>estimator</em> is to sampling\n>\n> the variance of an estimator 𝜃ˆ is defined as:\n> - 𝑣𝑎𝑟𝑖𝑎𝑛𝑐𝑒(𝜃ˆ) = 𝑉𝑎𝑟(𝜃ˆ)\n>\n> where:\n> - 𝜃ˆ - [[Statistics - Terminology|sample statistic]] - an estimate of 𝜃 given by the estimator when given [[ML - Training／Validation／Test Data／Set - Training／Validation／Test Error|training data]]\n> - 𝜃 - [[Statistics - Terminology|population parameter]] - true unknown value\n>\n> the variance of an estimator 𝜃ˆ will always be non-zero, because of the inherent random nature of the training data\n\n[[Estimator - Inductive Properties (Biasedness／Unbiasedness - Consistency／Consistent - Statistic Efficiency)|Estimator - Inductive Properties (Biasedness/Unbiasedness - Consistency/Consistent - Statistic Efficiency)]]",
      "a predictor's error can be broken down into 3 sources:\n- <strong>Predictor Bias</strong>\n> [!expand]- Click here to expand...\n> definitions:\n> - bias are the simplifying assumptions made by an ml-model to make the [[Target Function／Distribution Predictor／Estimation／Estimator／Approximation／Approximators|target function]] easier to estimate\n>\n> ```merge-table\n> {\n>   \"rows\": [\n>     [\n>       {\n>         \"content\": \"Low Bias\",\n>         \"header\": true,\n>         \"bg\": \"#F4F5F7\"\n>       },\n>       {\n>         \"content\": \"High Bias\",\n>         \"header\": true,\n>         \"bg\": \"#F4F5F7\"\n>       }\n>     ],\n>     [\n>       \"the model's assumption on the target function form is LESS restricted:\\n- the model's ability to learn the target function is harder and slower\\n- the [[Estimator & Predictor／Model (Bias - Variance - Irreducible／Bayes／Noise) Error - Predictor／Model Capacity／Complexity - Generalization (Underfit - Goodfit - Overfit)|model's capacity]] is larger\\n- the model requires more data\",\n>       \"the model's assumption on the target function form is MORE restricted:\\n- the model's ability to learn the target function is easier and faster\\n- the model's capacity is smaller\\n- the model requires less data\"\n>     ]\n>   ]\n> }\n> ```\n- <strong>Predictor Variance</strong>\n> [!expand]- Click here to expand...\n> defintions:\n> - variance is the amount that the estimate of the [[Target Function／Distribution Predictor／Estimation／Estimator／Approximation／Approximators|target function]] will change if different training data was used\n>\n> ```merge-table\n> {\n>   \"rows\": [\n>     [\n>       {\n>         \"content\": \"High Variance\",\n>         \"header\": true,\n>         \"bg\": \"#F4F5F7\"\n>       },\n>       {\n>         \"content\": \"Low Variance\",\n>         \"header\": true,\n>         \"bg\": \"#F4F5F7\"\n>       }\n>     ],\n>     [\n>       \"the model's estimate of the target function wavers MORE with changes to the training dataset\",\n>       \"the model's estimate of the target function wavers LESS with changes to the training dataset\"\n>     ]\n>   ]\n> }\n> ```\n- <strong>Irreducible/Noise/Bayes Error</strong>\n> [!expand]- Click here to expand...\n> Irreducible Error cannot be reduced regardless of what algorithm is used. It is the error:\n> - introduced from the chosen framing of the problem\n> - maybe caused by unknown variables that influence the mapping of the input variables to the output variable\n> - maybe caused by the [[Target Function／Distribution Predictor／Estimation／Estimator／Approximation／Approximators|target function]] actually being a [[Target Function／Distribution Predictor／Estimation／Estimator／Approximation／Approximators|target distribution]]"
    ],
    [
      "> [!expand]- example\n> If we assume that the actual distribution of the 𝛢𝑃𝑃𝐿 stock price is a <em>Gaussian distribution</em> then the bias of the estimator of 𝜇 is zero, meaning it is unbiased:\n> - 𝐵𝑖𝑎𝑠(𝜇ˆ<sub>𝑆</sub>,𝜇) = 0\n>\n> the bias of the estimator of <em>𝜎²</em> is not zero, it is biased:\n> - 𝐵𝑖𝑎𝑠(<em>𝜎²</em>ˆ<sub>𝑆</sub>,<em>𝜎²</em>) = 0",
      "> [!expand]- example\n> TODO"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Estimator & Predictor - Error Decomposition

derivation of the bias-variance decomposition for the two most common contexts:
- <strong>MSE for Estimator (Point Estimation)</strong>
> [!expand]- Click here to expand...
> Bias-Variance Decomposition for Estimators simply unites two of our favorite properties in one formula [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|Mean Square Error 𝑀𝑆𝐸]]:
> - 𝑀𝑆𝐸 measures the overall expected deviation (in a squared error sense) between the estimator 𝜃ˆ and the true value of the parameter 𝜃
> 	- 𝑀𝑆𝐸 = 𝐄\[(𝜃ˆ - 𝜃)²\]
> - 𝑀𝑆𝐸 incorporates both: bias & variance
> 	- 𝑀𝑆𝐸 = 𝐄\[(𝜃ˆ - 𝜃)²\] = 𝐵𝑖𝑎𝑠(𝜃ˆ)<sup>2</sup> + 𝑉𝑎𝑟(𝜃ˆ)
> > [!expand]- proof
> > - 𝐄\[(𝜃ˆ<sub>𝑆</sub> - 𝜃)<sup>2</sup>\] = 𝐄\[𝜃ˆ<sub>𝑆</sub><sup>2</sup>- 2𝜃ˆ<sub>𝑆</sub>𝜃<sup></sup>+ 𝜃<sup>2</sup>\]
> > - 𝐄\[(𝜃ˆ<sub>𝑆</sub> - 𝜃)<sup>2</sup>\] = 𝐄\[𝜃ˆ<sub>𝑆</sub><sup>2</sup>\] - 𝐄\[2𝜃ˆ<sub>𝑆</sub>𝜃\]<sup></sup>+ 𝐄\[𝜃<sup>2</sup>\]
> > - 𝐄\[(𝜃ˆ<sub>𝑆</sub> - 𝜃)<sup>2</sup>\] = 𝐄\[𝜃ˆ<sub>𝑆</sub><sup>2</sup>\] - 2𝐄\[𝜃ˆ<sub>𝑆</sub>\]𝜃<sup></sup>+ 𝜃<sup>2</sup>
> > 	- 𝐵𝑖𝑎𝑠(𝜃ˆ<sub>𝑆</sub>, 𝜃)<sup>2</sup> = (𝐄\[𝜃ˆ<sub>𝑆</sub>\] - 𝜃)<sup>2</sup>
> > 	- 𝐵𝑖𝑎𝑠(𝜃ˆ<sub>𝑆</sub>, 𝜃)<sup>2</sup> = 𝐄\[𝜃ˆ<sub>𝑆</sub>\]<sup>2</sup> -  2𝐄\[𝜃ˆ<sub>𝑆</sub>\]𝜃<sup></sup>+ 𝜃<sup>2</sup>
> > 	- 𝑉𝑎𝑟(𝜃ˆ<sub>𝑆</sub>) = 𝐄\[𝜃ˆ<sub>𝑆</sub><sup>2</sup>\] - 𝐄\[𝜃ˆ<sub>𝑆</sub>\]<sup>2</sup>
> >
> > Here we used the fact that 𝜃 is not a random variable and therefore it is equal to its own expectation with respect to any distribution
>
> desirable estimators are those with small 𝑀𝑆𝐸 and these are estimators that manage to keep both their bias and variance somewhat in check
- <strong>MSE for Predictor (Function Estimation)</strong>
> [!expand]- Click here to expand...
> The predictor is trained on some sample <em>𝑆</em> of training data, but we want it to perform well on data that we did not observe yet. Therefore we want the following to be as small as possible:
> - 𝑀𝑆𝐸 = 𝐄<sub>(𝑥,𝑦)\~𝐷,𝑆\~𝐷<sup>𝑛</sup>,𝜖\~𝐸</sub>\[(𝑦 - 𝑓ˆ<sub>𝑆</sub>(𝑥))<sup>2</sup>\]
>
> where:
> - (𝑥,𝑦) is a random variable representing unobserved data
> - <em>𝑆</em> is the data we trained our predictor on
> - 𝜖 is the noise following some distribution <em>𝐸</em>
>
> As it turns out 𝑀𝑆𝐸 = 𝐄\[(𝑦 - 𝑓ˆ)<sup>2</sup>\] for predictor also has a bias-variance decomposition
> - 𝐄\[(𝑦 - 𝑓ˆ)<sup>2</sup>\] = <font style="color: rgb(255,102,0);">𝑉𝑎𝑟(𝑓-𝑓ˆ)</font> + <font style="color: rgb(128,128,0);">𝑉𝑎𝑟(𝜖)</font> + <font style="color: rgb(0,0,255);"><font style="color: rgb(51,51,51);">(</font>𝐄\[𝑓\] - 𝐄\[𝑓ˆ\]<font style="color: rgb(51,51,51);">)<sup>2</sup></font></font> <font style="color: rgb(128,128,128);">\# assume 𝐄\[𝜖\] = 0</font>
> - 𝐄\[(𝑦 - 𝑓ˆ)<sup>2</sup>\] = <font style="color: rgb(255,102,0);">variance</font> + <font style="color: rgb(128,128,0);">noise</font> + <font style="color: rgb(0,0,255);"><font style="color: rgb(51,51,51);">(</font>bias<font style="color: rgb(51,51,51);">)<sup>2</sup></font></font> <font style="color: rgb(128,128,128);">\# error decomposition</font>
> > [!expand]- proof
> > - 𝑀𝑆𝐸 = 𝐄\[(𝑦 - 𝑓ˆ)<sup>2</sup>\]
> > - 𝑀𝑆𝐸 = 𝐄\[𝑦<sup>2</sup> - 2𝑦𝑓ˆ + 𝑓ˆ<sup>2</sup>\]
> > - 𝑀𝑆𝐸 = <font style="color: rgb(128,0,0);">𝐄\[𝑦<sup>2</sup>\]</font> - 𝐄\[2𝑦𝑓ˆ\] + <font style="color: rgb(0,128,0);">𝐄\[𝑓ˆ<sup>2</sup>\]</font>
> > - 𝑀𝑆𝐸 = <font style="color: rgb(128,0,0);">𝑉𝑎𝑟(𝑦) + 𝐄\[𝑦\]<sup>2</sup></font> - 2𝐄\[<font style="color: rgb(255,102,0);">𝑦</font>𝑓ˆ\] + <font style="color: rgb(0,128,0);">𝑉𝑎𝑟(𝑓ˆ) + 𝐄\[𝑓ˆ\]<sup>2</sup></font> <font style="color: rgb(128,128,128);">\# 𝑉𝑎𝑟(𝑥) = 𝐄\[𝑥<sup>2</sup>\] - 𝐄\[𝑥\]<sup>2</sup></font>
> > - 𝑀𝑆𝐸 = 𝑉𝑎𝑟(𝑦) + 𝐄\[𝑦\]<sup>2</sup> - 2𝐄\[<font style="color: rgb(255,102,0);">(𝑓 + 𝜖)</font>𝑓ˆ\] + 𝑉𝑎𝑟(𝑓ˆ) + 𝐄\[𝑓ˆ\]<sup>2</sup><font style="color: rgb(128,128,128);">\# 𝑦 = 𝑓 + 𝜖</font>
> > - 𝑀𝑆𝐸 = 𝑉𝑎𝑟(𝑦) + 𝐄\[𝑦\]<sup>2</sup> - 2𝐄\[<font style="color: rgb(255,102,0);">𝑓𝑓ˆ + 𝜖𝑓ˆ</font>\] + 𝑉𝑎𝑟(𝑓ˆ) + 𝐄\[𝑓ˆ\]<sup>2</sup>
> > - 𝑀𝑆𝐸 = 𝑉𝑎𝑟(𝑦) + 𝐄\[𝑦\]<sup>2</sup> - <font style="color: rgb(255,102,0);">2𝐄\[𝑓𝑓ˆ\] + 2𝐄\[𝜖𝑓ˆ\]</font> + 𝑉𝑎𝑟(𝑓ˆ) + 𝐄\[𝑓ˆ\]<sup>2</sup>
> > - 𝑀𝑆𝐸 = 𝑉𝑎𝑟(𝑦) + 𝐄\[𝑦\]<sup>2</sup> - <font style="color: rgb(128,0,0);">2</font><font style="color: rgb(255,102,0);"><font style="color: rgb(128,0,0);">𝐄\[𝑓𝑓ˆ\]</font> <font style="color: rgb(51,51,51);">+</font> <font style="color: rgb(0,128,0);">2𝐄\[𝜖𝑓ˆ\]</font></font> + 𝑉𝑎𝑟(𝑓ˆ) + 𝐄\[𝑓ˆ\]<sup>2</sup>
> > - 𝑀𝑆𝐸 = 𝑉𝑎𝑟(𝑦) + 𝐄\[𝑦\]<sup>2</sup> - <font style="color: rgb(128,0,0);">2𝐄\[𝑓\]𝐄\[𝑓ˆ\] - 2𝐶𝑜𝑣(𝑓,𝑓ˆ)</font> + <font style="color: rgb(0,128,0);">2𝐄\[𝜖\]𝐄\[𝑓ˆ\] + 𝐶𝑜𝑣(𝜖,𝑓ˆ)</font> + 𝑉𝑎𝑟(𝑓ˆ) + 𝐄\[𝑓ˆ\]<sup>2</sup><font style="color: rgb(128,128,128);">\# 𝐄\[𝑥𝑦\] = 𝐄\[𝑥\]𝐄\[𝑦\] + 𝐶𝑜𝑣(𝑥,𝑦)</font>
> > - 𝑀𝑆𝐸 = <font style="color: rgb(128,0,0);">𝑉𝑎𝑟(𝑦)</font> + 𝐄\[𝑦\]<sup>2</sup> - 2𝐄\[𝑓\]𝐄\[𝑓ˆ\] - 2𝐶𝑜𝑣(𝑓,𝑓ˆ) + 2𝐄\[𝜖\]𝐄\[𝑓ˆ\] + 𝑉𝑎𝑟(𝑓ˆ) + 𝐄\[𝑓ˆ\]<sup>2</sup><font style="color: rgb(128,128,128);">\# 𝐶𝑜𝑣(𝜖,𝑓ˆ) = 0 because noise 𝜖 independent of 𝑆</font>
> > - 𝑀𝑆𝐸 = <font style="color: rgb(128,0,0);">𝑉𝑎𝑟(𝑓 + 𝜖)</font> + 𝐄\[𝑦\]<sup>2</sup> - 2𝐄\[𝑓\]𝐄\[𝑓ˆ\] - 2𝐶𝑜𝑣(𝑓,𝑓ˆ) + 2𝐄\[𝜖\]𝐄\[𝑓ˆ\] + 𝑉𝑎𝑟(𝑓ˆ) + 𝐄\[𝑓ˆ\]<sup>2</sup><font style="color: rgb(128,128,128);">\# </font><font style="color: rgb(128,128,128);">𝑦 = 𝑓 + </font><font style="color: rgb(128,128,128);">𝜖</font>
> > - 𝑀𝑆𝐸 = <font style="color: rgb(128,0,0);">𝑉𝑎𝑟(𝑓) + 𝑉𝑎𝑟(𝜖) + 2𝐶𝑜𝑣(𝑓,𝜖)</font> + 𝐄\[𝑦\]<sup>2</sup> - 2𝐄\[𝑓\]𝐄\[𝑓ˆ\] - 2𝐶𝑜𝑣(𝑓,𝑓ˆ) + 2𝐄\[𝜖\]𝐄\[𝑓ˆ\] + 𝑉𝑎𝑟(𝑓ˆ) + 𝐄\[𝑓ˆ\]<sup>2</sup><font style="color: rgb(128,128,128);">\# 𝑉𝑎𝑟(𝑥+𝑦) = 𝑉𝑎𝑟(𝑥) + 𝑉𝑎𝑟(𝑦) + 2𝐶𝑜𝑣(𝑥,𝑦)</font>
> > - 𝑀𝑆𝐸 = <font style="color: rgb(128,0,0);">𝑉𝑎𝑟(𝑓) + 𝑉𝑎𝑟(𝜖)</font> + 𝐄\[𝑦\]<sup>2</sup> - 2𝐄\[𝑓\]𝐄\[𝑓ˆ\] - 2𝐶𝑜𝑣(𝑓,𝑓ˆ) + 2𝐄\[𝜖\]𝐄\[𝑓ˆ\] + 𝑉𝑎𝑟(𝑓ˆ) + 𝐄\[𝑓ˆ\]<sup>2</sup><font style="color: rgb(128,128,128);">\# 𝐶𝑜𝑣(𝑓,𝜖) = 0</font>
> > - 𝑀𝑆𝐸 = <font style="color: rgb(0,128,0);">𝑉𝑎𝑟(𝑓)</font> + 𝑉𝑎𝑟(𝜖) + 𝐄\[𝑦\]<sup>2</sup> - 2𝐄\[𝑓\]𝐄\[𝑓ˆ\] <font style="color: rgb(0,128,0);">- 2𝐶𝑜𝑣(𝑓,𝑓ˆ)</font> + 2𝐄\[𝜖\]𝐄\[𝑓ˆ\]<font style="color: rgb(0,128,0);"> + 𝑉𝑎𝑟(𝑓ˆ)</font> + 𝐄\[𝑓ˆ\]<sup>2</sup><font style="color: rgb(128,128,128);">\# 𝑉𝑎𝑟(𝑥−𝑦) = 𝑉𝑎𝑟(𝑥) + 𝑉𝑎𝑟(𝑦) - 2𝐶𝑜𝑣(𝑥,𝑦)</font>
> > - 𝑀𝑆𝐸 = <font style="color: rgb(0,128,0);">𝑉𝑎𝑟(𝑓-𝑓ˆ)</font> + 𝑉𝑎𝑟(𝜖) +<font style="color: rgb(128,0,0);"> 𝐄\[𝑦\]<sup>2</sup></font> - 2𝐄\[𝑓\]𝐄\[𝑓ˆ\] + 2𝐄\[𝜖\]𝐄\[𝑓ˆ\] + 𝐄\[𝑓ˆ\]<sup>2</sup>
> > - 𝑀𝑆𝐸 = 𝑉𝑎𝑟(𝑓-𝑓ˆ) + 𝑉𝑎𝑟(𝜖) + <font style="color: rgb(128,0,0);">𝐄\[𝑓 + 𝜖\]<sup>2</sup></font> - 2𝐄\[𝑓\]𝐄\[𝑓ˆ\] + 2𝐄\[𝜖\]𝐄\[𝑓ˆ\] + 𝐄\[𝑓ˆ\]<sup>2</sup>
> > - 𝑀𝑆𝐸 = 𝑉𝑎𝑟(𝑓-𝑓ˆ) + 𝑉𝑎𝑟(𝜖) + <font style="color: rgb(128,0,0);">(𝐄\[𝑓\] + 𝐄\[𝜖\])<sup>2</sup></font> - 2𝐄\[𝑓\]𝐄\[𝑓ˆ\] + 2𝐄\[𝜖\]𝐄\[𝑓ˆ\] + 𝐄\[𝑓ˆ\]<sup>2</sup>
> > - 𝑀𝑆𝐸 = 𝑉𝑎𝑟(𝑓-𝑓ˆ) + 𝑉𝑎𝑟(𝜖) + <font style="color: rgb(128,0,0);">𝐄\[𝑓\]<sup>2</sup> + 𝐄\[𝜖\]<sup>2</sup> + 2𝐄\[𝑓\]𝐄\[𝜖\]</font> - 2𝐄\[𝑓\]𝐄\[𝑓ˆ\] + 2𝐄\[𝜖\]𝐄\[𝑓ˆ\] + 𝐄\[𝑓ˆ\]<sup>2</sup>
> > - 𝑀𝑆𝐸 = 𝑉𝑎𝑟(𝑓-𝑓ˆ) + 𝑉𝑎𝑟(𝜖) + <font style="color: rgb(0,128,0);">𝐄\[𝑓\]<sup>2</sup></font> + 𝐄\[𝜖\]<sup>2</sup> + 2𝐄\[𝑓\]𝐄\[𝜖\]<font style="color: rgb(0,128,0);"> - 2𝐄\[𝑓\]𝐄\[𝑓ˆ\]</font> + 2𝐄\[𝜖\]𝐄\[𝑓ˆ\] <font style="color: rgb(0,128,0);">+ 𝐄\[𝑓ˆ\]<sup>2</sup></font>
> > - 𝑀𝑆𝐸 = 𝑉𝑎𝑟(𝑓-𝑓ˆ) + 𝑉𝑎𝑟(𝜖) + <font style="color: rgb(0,128,0);">(</font><font style="color: rgb(0,128,0);">𝐄\[𝑓\] - 𝐄\[𝑓ˆ\])<sup>2</sup></font> + 𝐄\[𝜖\]<sup>2</sup> + 2𝐄\[𝑓\]𝐄\[𝜖\] + 2𝐄\[𝜖\]𝐄\[𝑓ˆ\]
> > - 𝑀𝑆𝐸 = <font style="color: rgb(255,102,0);">𝑉𝑎𝑟(𝑓-𝑓ˆ)</font> + <font style="color: rgb(128,128,0);">𝑉𝑎𝑟(𝜖)</font> + <font style="color: rgb(0,0,255);"><font style="color: rgb(51,51,51);">(</font>𝐄\[𝑓\] - 𝐄\[𝑓ˆ\]<font style="color: rgb(51,51,51);">)<sup>2</sup></font></font> <font style="color: rgb(128,128,128);">\# assume 𝐄\[𝜖\] = 0</font>
> > - 𝑀𝑆𝐸 = <font style="color: rgb(255,102,0);">variance</font> + <font style="color: rgb(128,128,0);">noise</font> + <font style="color: rgb(0,0,255);"><font style="color: rgb(51,51,51);">(</font>bias<font style="color: rgb(51,51,51);">)<sup>2</sup></font></font> <font style="color: rgb(128,128,128);">\# error decomposition</font>
>
> where:
> - variance = <font style="color: rgb(255,102,0);">𝑉𝑎𝑟(𝑓-𝑓ˆ)</font> <font style="color: rgb(128,128,128);">\# sensitivity of 𝑓ˆ to the choise of dataset</font>
> - noise = <font style="color: rgb(128,128,0);">𝑉𝑎𝑟(𝜖)</font> <font style="color: rgb(128,128,128);">\# </font><font style="color: rgb(128,128,128);">property of dataset; beyond our control</font>
> - bias = <font style="color: rgb(0,0,255);">𝐄\[𝑓\] - 𝐄\[𝑓ˆ\]</font> <font style="color: rgb(128,128,128);">\# the square of expected difference of approximate predictor 𝑓ˆ from "true" predictor 𝑓(𝑥)</font>
>
> The first term is usually referred to as <em>Variance</em>. It shows how “jumpy” the gap between the <em>real model</em> and the <em>predictor model</em> is depending on the training data <em>𝑆</em> and the test data (𝑥,𝑦). Models with high capacity (e.g. neural network with extremely many layers) have high <em>variance</em> and models with low capacity (e.g. think linear regression) have low <em>variance</em>.
>
> The second term is <em>Noise</em>. It shows the impact of the observation noise. It does not depend on anything but the underlying distribution of the noise. There is nothing we can do to reduce this noise, it is irreducible.
>
> The third term is a squared <em>Bias</em>. It shows whether our predictor approximates the real model well. Models with high capacity have low <em>bias</em> and models with low capacity have high <em>bias</em>.
>
> Since both <em>bias </em>and <em>variance</em> contribute to 𝑀𝑆𝐸, good models try to reduce both of them. This is called bias-variance trade-off.

the formulas <em>MSE for Estimator</em> and <em>MSE for Predictor</em> are very similar:
- <em>MSE for Estimator</em> measures how close our <em>estimator</em> is to the desirable quantity 𝜃 in some regular space
	- finding<em> estimator </em>is referred to as <em>Point Estimation</em>, because 𝜃 is a point in a regular space
- <em>MSE for Predictor</em> measures how close our function <em>predictor</em> is to the desirable function 𝑓 in some functional space
	- finding<em> predictor </em>is referred to as <em>Function Estimation</em> because 𝑓 is a function in a functional space

# Predictor/Model Capacity/Complexity

<strong>capacity</strong> (antonym to Predictor Bias) is the model's ability to fit a variety of [[Target Function／Distribution Predictor／Estimation／Estimator／Approximation／Approximators|target functions]]
- low capacity - struggles to fit training set - decreasing capacity tends to decrease variance and increase bias
- high capacity - may overfit the training set - increasing capacity tends to increase variance and decrease bias

machine learning algorithms generally performs/generalizes best when their capacity is appropriate for the true complexity of the task

methods of quantifying model capacity:
- <strong>Vapnik-Chervonenkis Dimension (VC Dimension)</strong> - largest possible value m for which there exists a training set of m different x points that the classifier can label arbitrarily

ways to control capacity of learning algorithm:
- hypothesis space - the set of functions that the learning algorithm is allowed to choose as solution

# Generalization

![[Estimator & Predictor／Model (Bias - Variance - Irreducible／Bayes／Noise) Error - Predictor／Model Capacity／Complexity - Generalization (Underfit - Goodfit - Overfit)/capacity-general-error-underfit-goodfit-overfit.png|350]]
- generalization is the ability to perform well on unobserved inputs (test-set)
- good generalization means small gap between the training-error and test-error
	- training-error - expected error on a training example
	- test-error (generalization error) - expected error on a test example

factors determining how well a machine learning algorithm generalizes/performs is its ability to:
- make the training error small
- make the gap between training-error and test-error small

these factors correspond to 2 central challenges:
- underfitting - model is not able to obtain sufficiently low training-error
- overfitting - gap between training-error and test-error is too large

A machine learning algorithm from training data and outputs a model. This model is used as a <strong>generalization</strong> of the total dataset, because the training data is only a sample set of the total dataset (i.e. the training data is incomplete and often noisy).

The goal is to generalize well from the training data to the total dataset (i.e. good fit)

generalization types:
- <strong>overfit</strong> - refers to a model that models the training data too well (i.e. learning the detail and noise in the training data) which do not apply to new data and thus negatively impacts the ability to generalize new data
- <strong>underfit</strong> - refers to a model that can neither model the training data nor generalize to new data
	- caused by many reasons:
		- model is not powerful enough
		- model is over-regularized
		- simply not been trained long enough
- <strong>good fit</strong> - the sweet spot between overfitting and underfitting
> [!indent]
> ![[Estimator & Predictor／Model (Bias - Variance - Irreducible／Bayes／Noise) Error - Predictor／Model Capacity／Complexity - Generalization (Underfit - Goodfit - Overfit)/underfit-goodfit-overfit.png|400]]

tensor-flow code tutorial: [https://www.tensorflow.org/tutorials/keras/overfit_and_underfit](https://www.tensorflow.org/tutorials/keras/overfit_and_underfit)
# Subpages

```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
