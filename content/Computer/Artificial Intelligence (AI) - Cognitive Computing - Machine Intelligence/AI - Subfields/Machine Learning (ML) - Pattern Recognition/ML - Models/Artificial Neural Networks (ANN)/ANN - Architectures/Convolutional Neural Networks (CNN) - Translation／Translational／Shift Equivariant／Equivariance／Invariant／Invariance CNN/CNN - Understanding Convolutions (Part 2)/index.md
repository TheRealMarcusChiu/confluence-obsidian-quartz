---
title: "CNN - Understanding Convolutions (Part 2)"
created: 2020-11-10T23:40:48.552-06:00
modified: 2020-11-11T00:39:54.385-06:00
parent: "[[Convolutional Neural Networks (CNN) - Translation／Translational／Shift Equivariant／Equivariance／Invariant／Invariance CNN]]"
children: []
---
original article:[http://colah.github.io/posts/2014-07-Understanding-Convolutions/](http://colah.github.io/posts/2014-07-Understanding-Convolutions/)

In a [[CNN - A Modular Perspective (Part 1)|previous post]], we built up an understanding of convolutional neural networks, without referring to any significant mathematics. To go further, however, we need to understand convolutions.

If we just wanted to understand convolutional neural networks, it might suffice to roughly understand convolutions. But the aim of this series is to bring us to the frontier of convolutional neural networks and explore new options. To do that, we’re going to need to understand convolutions very deeply.

Thankfully, with a few examples, convolution becomes quite a straightforward idea.
## Lessons from a Dropped Ball

Imagine we drop a ball from some height onto the ground, where it only has one dimension of motion. <em>How likely is it that a ball will go a distance 𝑐 if you drop it and then drop it again from above the point at which it landed?</em>

Let’s break this down. After the first drop, it will land aa units away from the starting point with probability 𝑓(𝑎), where 𝑓 is the probability distribution.

Now after this first drop, we pick the ball up and drop it from another height above the point where it first landed. The probability of the ball rolling bb units away from the new starting point is 𝑔(𝑏), where 𝑔 may be a different probability distribution if it’s dropped from a different height.

![[CNN - Understanding Convolutions (Part 2)/understanding-convolutions-01.png|350]]

If we fix the result of the first drop so we know the ball went distance aa, for the ball to go a total distance cc, the distance traveled in the second drop is also fixed at bb, where 𝑎+𝑏=𝑐. So the probability of this happening is simply 𝑓(𝑎)⋅𝑔(𝑏)

Let’s think about this with a specific discrete example. We want the total distance 𝑐 to be 3. If the first time it rolls, 𝑎=2, the second time it must roll 𝑏=1 in order to reach our total distance 𝑎+𝑏=3. The probability of this is 𝑓(2)⋅𝑔(1).

![[CNN - Understanding Convolutions (Part 2)/understanding-convolutions-02.png|600]]

However, this isn’t the only way we could get to a total distance of 3. The ball could roll 1 units the first time, and 2 the second. Or 0 units the first time and all 3 the second. It could go any aa and bb, as long as they add to 3.

![[CNN - Understanding Convolutions (Part 2)/understanding-convolutions-03.png|600]]

The probabilities are 𝑓(1)⋅𝑔(2) and 𝑓(0)⋅𝑔(3), respectively.

In order to find the <em>total likelihood</em> of the ball reaching a total distance of cc, we can’t consider only one possible way of reaching cc. Instead, we consider <em>all the possible ways</em> of partitioning cc into two drops aa and bb and sum over the <em>probability of each way</em>.

...  𝑓(0)⋅𝑔(3) + 𝑓(1)⋅𝑔(2) + 𝑓(2)⋅𝑔(1)  ...

We already know that the probability for each case of 𝑎+𝑏=𝑐 is simply 𝑓(𝑎)⋅𝑔(𝑏). So, summing over every solution to 𝑎+𝑏=𝑐, we can denote the total likelihood as:

𝛴<sub>𝑎</sub><sub>+𝑏=𝑐</sub>𝑓(𝑎)⋅𝑔(𝑏)

Turns out, we’re doing a convolution! In particular, the convolution of 𝑓 and 𝑔, evaluated at 𝑐 is defined:

(𝑓∗𝑔)(𝑐) = 𝛴<sub>𝑎</sub><sub>+𝑏=𝑐</sub>𝑓(𝑎)⋅𝑔(𝑏)

If we substitute 𝑏=𝑐−𝑎, we get:

(𝑓∗𝑔)(𝑐)=𝛴<sub>𝑎</sub>𝑓(𝑎)⋅𝑔(𝑐−𝑎)

This is the standard definition of convolution.

To make this a bit more concrete, we can think about this in terms of positions the ball might land. After the first drop, it will land at an intermediate position aa with probability 𝑓(𝑎). If it lands at aa, it has probability 𝑔(𝑐-𝑎) of landing at a position 𝑐.

![[CNN - Understanding Convolutions (Part 2)/understanding-convolutions-04.png]]

To get the convolution, we consider all intermediate positions.

![[CNN - Understanding Convolutions (Part 2)/understanding-convolutions-05.png]]
## Visualizing Convolutions

There’s a very nice trick that helps one think about convolutions more easily.

First, an observation. Suppose the probability that a ball lands a certain distance 𝑥 from where it started is 𝑓(𝑥). Then, afterwards, the probability that it started a distance 𝑥 from where it landed is 𝑓(−𝑥).

![[CNN - Understanding Convolutions (Part 2)/understanding-convolutions-06.png|400]]

If we know the ball lands at a position 𝑐 after the second drop, what is the probability that the previous position was 𝑎?

![[CNN - Understanding Convolutions (Part 2)/understanding-convolutions-07.png|301]]

So the probability that the previous position was 𝑎 is 𝑔(−(𝑎−𝑐)) = 𝑔(𝑐−𝑎).

Now, consider the probability each intermediate position contributes to the ball finally landing at 𝑐. We know the probability of the first drop putting the ball into the intermediate position a is 𝑓(𝑎). We also know that the probability of it having been in 𝑎, if it lands at 𝑐 is 𝑔(𝑐−𝑎).

![[CNN - Understanding Convolutions (Part 2)/understanding-convolutions-08.png]]

Summing over the 𝑎s, we get the convolution.

The advantage of this approach is that it allows us to visualize the evaluation of a convolution at a value 𝑐 in a single picture. By shifting the bottom half around, we can evaluate the convolution at other values of 𝑐. This allows us to understand the convolution as a whole.

For example, we can see that it peaks when the distributions align.

![[CNN - Understanding Convolutions (Part 2)/understanding-convolutions-09.png|301]]

And shrinks as the intersection between the distributions gets smaller.

![[CNN - Understanding Convolutions (Part 2)/understanding-convolutions-10.png]]

By using this trick in an animation, it really becomes possible to visually understand convolutions.

Below, we’re able to visualize the convolution of two box functions:

![](http://colah.github.io/posts/2014-07-Understanding-Convolutions/img/Wiki-BoxConvAnim.gif)

Armed with this perspective, a lot of things become more intuitive.

Let’s consider a non-probabilistic example. Convolutions are sometimes used in audio manipulation. For example, one might use a function with two spikes in it, but zero everywhere else, to create an echo. As our double-spiked function slides, one spike hits a point in time first, adding that signal to the output sound, and later, another spike follows, adding a second, delayed copy.
## Higher Dimensional Convolutions

Convolutions are an extremely general idea. We can also use them in a higher number of dimensions.

Let’s consider our example of a falling ball again. Now, as it falls, it’s position shifts not only in one dimension, but in two.

![[CNN - Understanding Convolutions (Part 2)/understanding-convolutions-11.png]]

Convolution is the same as before:

(𝑓∗𝑔)(𝑐)=𝛴<sub>𝑎</sub><sub>+𝑏=𝑐</sub>𝑓(𝑎)⋅𝑔(𝑏)

Except, now 𝑎, 𝑏 and 𝑐 are vectors. To be more explicit,

(𝑓∗𝑔)(𝑐<sub>1</sub>,𝑐<sub>2</sub>)=𝛴<sub>𝑎<sub>1</sub>+𝑏<sub>1</sub>=𝑐<sub>1</sub></sub>𝛴<sub>𝑎<sub>2</sub>+𝑏<sub>2</sub>=𝑐<sub>2</sub></sub>𝑓(𝑎<sub>1</sub>,𝑎<sub>2</sub>)⋅𝑔(𝑏<sub>1</sub>,𝑏<sub>2</sub>)

Or in the standard definition:

(𝑓∗𝑔)(𝑐<sub>1</sub>,𝑐<sub>2</sub>)=𝛴<sub>𝑎<sub>1</sub></sub>𝛴<sub>𝑎<sub>2</sub><sub></sub></sub>𝑓(𝑎<sub>1</sub>,𝑎<sub>2</sub>)⋅𝑔(𝑐<sub>1</sub>-𝑎<sub>1</sub>,𝑐<sub>2</sub>-𝑎<sub>2</sub>)

Just like one-dimensional convolutions, we can think of a two-dimensional convolution as sliding one function on top of another, multiplying and adding.

One common application of this is image processing. We can think of images as two-dimensional functions. Many important image transformations are convolutions where you convolve the image function with a very small, local function called a “kernel.”

![[CNN - Understanding Convolutions (Part 2)/understanding-convolutions-12.png|301]]

The kernel slides to every position of the image and computes a new pixel as a weighted sum of the pixels it floats over.

For example, by averaging a 3x3 box of pixels, we can blur an image. To do this, our kernel takes the value 1/9 on each pixel in the box,

![[CNN - Understanding Convolutions (Part 2)/understanding-convolutions-13.png]]

We can also detect edges by taking the values −1 and 1 on two adjacent pixels, and zero everywhere else. That is, we subtract two adjacent pixels. When side by side pixels are similar, this is gives us approximately zero. On edges, however, adjacent pixels are very different in the direction perpendicular to the edge.

![[CNN - Understanding Convolutions (Part 2)/understanding-convolutions-14.png]]
## Convolutional Neural Networks

So, how does convolution relate to convolutional neural networks?

Consider a 1-dimensional convolutional layer with inputs {𝑥<sub>𝑛</sub>} and outputs {𝑦<sub>𝑛</sub>}, like we discussed in the [previous post](http://colah.github.io/posts/2014-07-Conv-Nets-Modular/):

![[CNN - Understanding Convolutions (Part 2)/understanding-convolutions-15.png|450]]

As we observed, we can describe the outputs in terms of the inputs:

𝑦<sub>𝑛</sub>= 𝐴(𝑥<sub>𝑛</sub>, 𝑥<sub>𝑛+1</sub>, ...)

Generally, 𝐴 would be multiple neurons. But suppose it is a single neuron for a moment.

Recall that a typical neuron in a neural network is described by:

𝜎(𝑤<sub>0</sub>𝑥<sub>0</sub>+ 𝑤<sub>1</sub>𝑥<sub>1</sub>+ 𝑤<sub>2</sub>𝑥<sub>2</sub> + ... + 𝑏)

Where 𝑥<sub>0</sub>, 𝑥<sub>1</sub>… are the inputs. The weights, 𝑤<sub>0</sub>, 𝑤<sub>1</sub>, … describe how the neuron connects to its inputs. A negative weight means that an input inhibits the neuron from firing, while a positive weight encourages it to. The weights are the heart of the neuron, controlling its behavior. Saying that multiple neurons are identical is the same thing as saying that the weights are the same.

It’s this wiring of neurons, describing all the weights and which ones are identical, that convolution will handle for us.

Typically, we describe all the neurons in a layer at once, rather than individually. The trick is to have a weight matrix, 𝑊:

𝑦 = 𝜎(𝑊𝑥 + 𝑏)

For example, we get:

𝑦<sub>0</sub> = 𝜎(𝑊<sub>0,0</sub>𝑥<sub>0</sub>+ 𝑊<sub>0,1</sub>𝑥<sub>1</sub>+ 𝑊<sub>0,2</sub>𝑥<sub>2</sub> + ... + 𝑏)

𝑦<sub>1</sub> = 𝜎(𝑊<sub>1,0</sub>𝑥<sub>0</sub>+ 𝑊<sub>1,1</sub>𝑥<sub>1</sub>+ 𝑊<sub>1,2</sub>𝑥<sub>2</sub> + ... + 𝑏)

Each row of the matrix describes the weights connecting a neuron to its inputs.

Returning to the convolutional layer, though, because there are multiple copies of the same neuron, many weights appear in multiple positions.

![[CNN - Understanding Convolutions (Part 2)/understanding-convolutions-16.png|450]]

Which corresponds to the equations:

𝑦<sub>0</sub> = 𝜎(𝑊<sub>0</sub>𝑥<sub>0</sub>+ 𝑊<sub>1</sub>𝑥<sub>1</sub> - 𝑏)

𝑦<sub>1</sub> = 𝜎(𝑊<sub>0</sub>𝑥<sub>1</sub>+ 𝑊<sub>1</sub>𝑥<sub>2</sub> - 𝑏)

So while, normally, a weight matrix connects every input to every neuron with different weights:

![[CNN - Understanding Convolutions (Part 2)/understanding-convolutions-matrix-1.png|301]]

The matrix for a convolutional layer like the one above looks quite different. The same weights appear in a bunch of positions. And because neurons don’t connect to many possible inputs, there’s lots of zeros.

![[CNN - Understanding Convolutions (Part 2)/understanding-convolutions-matrix-2.png|301]]

Multiplying by the above matrix is the same thing as convolving with \[...0, 𝑤<sub>0</sub>, 𝑤<sub>1</sub>, 0...\]. The function sliding to different positions corresponds to having neurons at those positions.

What about two-dimensional convolutional layers?

![[CNN - Understanding Convolutions (Part 2)/understanding-convolutions-17.png]]

The wiring of a two dimensional convolutional layer corresponds to a two-dimensional convolution.

Consider our example of using a convolution to detect edges in an image, above, by sliding a kernel around and applying it to every patch. Just like this, a convolutional layer will apply a neuron to every patch of the image.
## Conclusion

We introduced a lot of mathematical machinery in this blog post, but it may not be obvious what we gained. Convolution is obviously a useful tool in probability theory and computer graphics, but what do we gain from phrasing convolutional neural networks in terms of convolutions?

The first advantage is that we have some very powerful language for describing the wiring of networks. The examples we’ve dealt with so far haven’t been complicated enough for this benefit to become clear, but convolutions will allow us to get rid of huge amounts of unpleasant book-keeping for us.

Secondly, convolutions come with significant implementational advantages. Many libraries provide highly efficient convolution routines. Further, while convolution naively appears to be an 𝑂(𝑛<sup>2</sup>) operation, using some rather deep mathematical insights, it is possible to create a 𝑂(𝑛·𝑙𝑜𝑔(𝑛)) implementation. We will discuss this in much greater detail in a future post.

In fact, the use of highly-efficient parallel convolution implementations on GPUs has been essential to recent progress in computer vision.
