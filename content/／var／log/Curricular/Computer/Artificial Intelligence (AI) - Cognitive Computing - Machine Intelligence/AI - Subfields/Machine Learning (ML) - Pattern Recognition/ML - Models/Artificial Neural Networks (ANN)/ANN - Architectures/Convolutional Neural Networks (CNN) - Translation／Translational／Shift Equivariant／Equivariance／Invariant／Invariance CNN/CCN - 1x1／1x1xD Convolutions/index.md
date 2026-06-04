---
title: "CCN - 1x1／1x1xD Convolutions"
created: 2022-12-11T14:14:26.465-06:00
modified: 2022-12-11T14:22:42.734-06:00
parent: "[[Convolutional Neural Networks (CNN) - Translation／Translational／Shift Equivariant／Equivariance／Invariant／Invariance CNN]]"
children: []
---
# What is 1x1xD Convolutions
When we do a standard convolution of say a 6x6 image with three color channels(depth -3), Fig 1. below, with a single filter of dimension 3x3x3 (depth of filter has to match input volume depth) we get as output 4x4x1 (assuming stride 1 and no padding). The key point to note here is the output is collapsed from depth 3 to depth 1 (granted width and height changed too but we could have kept that same as input by proper choice of padding of input).

![[CCN - 1x1／1x1xD Convolutions/1x1xd-convolution-1.png|600]]

Now instead of using a 3 x 3 x 3 filter, if we use a 1 x 1 x 3 (often called 1x1 since the depth is a variable and forced to match input volume depth - which is perhaps why it is so confusing), fig 2. the output again has depth 1 as in previous case (fig 1), except since we convolved with a 1x1 filter, the width and height of the input remains unchanged.

![[CCN - 1x1／1x1xD Convolutions/1x1xd-convolution-2.png|600]]

However, if we increase the number of filters we can control the depth of the output. For instance, using two filters (each of depth 3) in the figure below, fig 3, the output depth is 2.

![[CCN - 1x1／1x1xD Convolutions/1x1xd-convolution-3.png|600]]

Finally, in the case of Fig 4 below, where we use the 3 filters, the input and output volumes are exactly the same dimensions. So the filters serve as a means to add nonlinearity to the input volume (though I don’t know/think if it is ever used this way)

![[CCN - 1x1／1x1xD Convolutions/1x1xd-convolution-4.png|600]]

In summary, 1x1 convolutions serve as a means to
- control the depth of the input volume as it is passed to the next layer, either decrease it, or increase it, or just add a non-linearity when it doesn’t alter the depth. This control is achieved by choosing the appropriate number of filters. We can control the other two dimensions - width and height by the filter sizes and padding parameters, or use pooling to reduce width and height.
- In the case when it reduces the dimensions, it is a means to reduce computations - can be an order of magnitude less as shown in the example from Andrew’s lectures fig. 5 (without 1x1) and fig 6 (with 1x1)

# How 1x1xD Convolutions Reduce Computation

Without 1x1 - 120 million computations. The word “same” above means padding ( in this case it is 2) is used to keep the output volume the same as the input volume. Andrew explains “valid” ( no padding ) and “same” ( with padding) in his video titled “padding”

![[CCN - 1x1／1x1xD Convolutions/1x1xd-convolution-5.png]]

With 1x1 - 12.4 computations

![[CCN - 1x1／1x1xD Convolutions/1x1xd-convolution-6.png]]
