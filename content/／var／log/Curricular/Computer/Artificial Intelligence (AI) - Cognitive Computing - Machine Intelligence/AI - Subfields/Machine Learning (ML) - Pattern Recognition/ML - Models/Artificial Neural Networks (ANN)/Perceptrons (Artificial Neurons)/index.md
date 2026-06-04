---
title: "Perceptrons (Artificial Neurons)"
created: 2020-01-18T14:13:26.845-06:00
modified: 2023-12-10T11:48:49.259-06:00
parent: "[[Artificial Neural Networks (ANN)]]"
children:
  - "[[Activation Functions (AF)]]"
  - "[[Activation Functions (AF) - Comparisons]]"
---
###### Perceptrons (Artificial Neurons)
````excerpt
- is an algorithm for [[ML - Experience Type (Supervised／Unsupervised／Semi-Supervised／Self-Supervised／Multi-Instance／Reinforcement Learning)|supervised learning]] of binary/binomial classifiers
- used in [[Artificial Neural Networks (ANN)]]
- similar to [[Binomial／Binary Logistic Regression (BLR)|Binomial/Binary Logistic Regression]] when the perceptron's chosen [[Activation Functions (AF)|activation function]] is the [[Logistic Function - Sigmoid Function (Standard Logistic Function)|sigmoid function]]
````
^excerpt

# Perceptron - Model Representation

```merge-table
{
  "rows": [
    [
      "neuron pre-activation (input activation)\n- 𝑎(𝒙) = 𝑏 + 𝛴<sub>1≤𝑖≤𝑑</sub>(𝑤<sub>𝑖</sub>𝑥<sub>𝑖</sub>) = 𝑏 + 𝒘<sup>𝑇</sup>𝒙\n\nneuron output activation\n- ℎ(𝒙) = 𝑔(𝑎(𝒙))\n\nwhere:\n- 𝒙 = \\[𝑥<sub>1</sub>, ..., 𝑥<sub>𝑑</sub>\\]\n- 𝒘 = \\[𝑤<sub>1</sub>, ..., 𝑤<sub>𝑑</sub>\\]\n- 𝑤<sub>𝑖</sub>- weight\n- 𝑥<sub>𝑖</sub>- input value\n- 𝑏 - bias\n- 𝑎(..) - a [[Activation Functions (AF)|weighted sum function]]\n- 𝑔(..) - an [[Activation Functions (AF)|activation function]]",
      "![[Perceptrons (Artificial Neurons)/perceptron.png|301]]\n[[perceptron-example.drawio]]",
      "###### Example (Only 𝑥<sub>1</sub> & 𝑥<sub>2</sub>)\n![[Perceptrons (Artificial Neurons)/perceptron-2-d-example.png|350]]"
    ]
  ]
}
```
# Perceptron - How Weights are Learned

> [!expand]- Click here to expand...
> ###### General Rule
>
> For each training example (i.e. input vector), if the perceptron outputs:
> - the correct answer (either 0 or 1), then leave the weights alone
> - a [[True／False Positive／Negative Sensitivity Recall Hit／Miss／False-Discovery／False-Omission Rate Fall-Out Threat／F1 Score Critical Success Index Accuracy Specificity Precision Predictive-Value|false negative]] (0 when the answer is 1), then add the input vector to the weights vector
> - a [[True／False Positive／Negative Sensitivity Recall Hit／Miss／False-Discovery／False-Omission Rate Fall-Out Threat／F1 Score Critical Success Index Accuracy Specificity Precision Predictive-Value|false positive]] (1 when the answer is 0), then subtract the input vector from the weights vector
>
> ###### Geometric Intuition
>
> Initialize a [[Vector Spaces - Linear Spaces|vector space]] where the dimensions are weights (including the bias). A location in this weight space is dictated by the values of the weights.
>
> For simplicity, let's initialize a 2D weight space (one weight, and one bias). Since our input vector is the same dimension as our weights vectors (note the input for bias is always equal to 1), we can also initialize our input vector within the weights space.
>
> Now let’s take a single training example where the right answer is 1. In the scenario where the right answer is 1, that means we want the z we plug into our step function to be greater than 0.
>
> We must ask, then, when is z, the dot product of the weights and inputs, greater than 0?
>
> If you are familiar with the geometric view of [[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product|dot products]], you will know that dot products can be seen as a measure of how much two vectors point in the same direction.
> - When two vectors lie in similar directions, the dot product is positive.
> - When they lie in dissimilar directions, the dot product is negative.
> - The dot product is <em>exactly zero when the two vectors are perpendicular</em>.
>
> So, we can section off our weight space by creating a dividing line, which is perpendicular to our input vector. This dividing line represents where, if a weight vector was placed along it, would return a z of 0.
>
> Then, depending on our desired answer, we can want our weights vector to be on either side of the dividing line. For example, in our case:
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "When the Desired Answer is 1",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "When the Desired Answer is 0",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "![[Perceptrons (Artificial Neurons)/perceptron-learn-weights-0.png|400]]",
>       {
>         "content": "swap \"good weights\" with \"bad weights\"",
>         "align": "center"
>       }
>     ]
>   ]
> }
> ```
>
> Thus you can see how to "general rule" above applies.
# Perceptron - Limitations

> [!expand-ui]- Can't Learn Non-Linear Data
> Say we have 4 training examples as shown below.
>
> ![[Perceptrons (Artificial Neurons)/perceptrons-learning-2.png]]
>
> There is no way to linearly separate the dataset such that on one side are the green dots, and on the other side are red dots.

> [!expand-ui]- Can't Learn Group Invariance
> Say we have a one-dimensional image, which is ten pixels long. Each of these pixels can either be on or off, black (off) or white (on). There are two discernable patterns that we will try to distinguish. We want to see if our algorithm can take in this 1 x 10 image, and classify which pattern it shows.
>
> The kicker is that we allow these patterns to wrap around our image, to go off one side and end on the other. Let’s see three examples of each pattern.
>
> ![[Perceptrons (Artificial Neurons)/perceptron-learning-1.png|500]]
>
> The short answer is with this ‘wrap-around’ factor, we <em>cannot </em>use a perceptron to determine which pattern is which.
>
> If you were to create a training set of <em>all </em>possible translations of <strong>pattern 0</strong> (including wrap-around), each pixel will have been “activated” six times, by six different translations. That means if you were to sum up weighted sums for each training example, you would have <em>exactly six times each weight.</em>
>
> To make this clear — each training example would have some six inputs equal to one, and the rest 0. The inputs that are equal to one would be multiplied by their weights and just leave a sum of six weights. On the next training example, we would have some other six inputs, and the rest 0. The ones multiply by different weights. If we sum up each of these training example’s results, we would have six times each weight.
>
> Now, if we take <strong>pattern 1, </strong>and do a similar thing, where we have a training example for each possible translation, we can also see that our total sum over all the training examples will <em>also be six times the weights, </em>since each pixel will be activated six times (again).
>
> Thus, our total output signal for both patterns over the training examples will be identical. Since one pattern does not contain more or less information, our perceptron will not be able to differentiate — to it, it sees that both patterns, over the training examples, send back the same signal — so they must be the same.
>
> <em>This </em>was what ended the perceptron dream. Coined <em>group invariance theorem, </em>computer scientists Marvin Minsky and Seymour Papert revealed in their now classic 1969 book <em>Perceptrons </em>that because perceptrons abided by the group invariance theorem, they were virtually useless in most practical applications.

Only in cases where the input features were picked tediously to be linearly separable and not victim to group invariance theorem were perceptrons helpful. In these cases with good input features, perceptrons still worked superbly.
# Perceptrons - Limitations that Lead to Neural Networks

> [!expand]- Click here to expand...
> [[Artificial Neural Networks (ANN)|Neural Networks]] are Just Multilayer Perceptrons
>
> In cases where good input features were handpicked, perceptrons could still learn very effectively. The hard part was the [[Features - Feature Functions - Feature Engineering - Feature-Based Models|feature engineering]] and detecting which features best foretold the class a training example belonged to.
>
> We needed to find an algorithm that also learned the features. That’s just a perceptron algorithm with one more layer — a hidden layer.
>
> The hidden layer(s) in a modern neural network are simply feature detectors for a simpler perceptron algorithm. We filter out, from our initial features (that don’t need to be as ‘perfect’ anymore) which features work best. Our weights in our hidden layer are the feature detectors.
>
> This meant adding another layer and finding a way to learn the weights for another layer, which is conceptually hard to do. How does a change in a weight propagate through a network to affect the final output?
>
> This was not figured out for nearly 17 years after the publication of Perceptrons, until 1986, when a paper by David Rumelhart, Geoffrey Hinton, and Ronald Williams outlined the backpropagation algorithm.
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
