---
title: "Sigmoid vs Softmax - Activation Function"
created: 2020-01-18T18:02:54.535-06:00
modified: 2022-11-29T13:34:10.588-06:00
parent: "[[Activation Functions (AF) - Comparisons]]"
children: []
---
# When to Use [[Sigmoid Activation Function|Sigmoid]] or [[Softmax Activation Function|Softmax]]

If you have a (multi-label classification problem = there is more than one "right answer" = the outputs are NOT mutually exclusive) then use a sigmoid function on each raw output independently. The sigmoid will allow you to have a high probability for all of your classes, some of them, or none of them. Example: classifying diseases in a chest x-ray image. The image might contain pneumonia, emphysema, and/or cancer, or none of those findings.

If you have a (multi-class classification problem = there is only one "right answer" = the outputs are mutually exclusive) then use a softmax function. The softmax will enforce that the sum of the probabilities of your output classes is equal to one, so in order to increase the probability of a particular class, your model must correspondingly decrease the probability of at least one of the other classes. Example: classifying images from the MNIST data set of handwritten digits. A single picture of a digit has only one true identity - the picture cannot be a 7 and an 8 at the same time
# Example Sigmoid Activation Function
![[Sigmoid vs Softmax - Activation Function/sigmoid.png|700x73]]
# Example Softmax Activation Function
![[Sigmoid vs Softmax - Activation Function/softmax.png|700x74]]
