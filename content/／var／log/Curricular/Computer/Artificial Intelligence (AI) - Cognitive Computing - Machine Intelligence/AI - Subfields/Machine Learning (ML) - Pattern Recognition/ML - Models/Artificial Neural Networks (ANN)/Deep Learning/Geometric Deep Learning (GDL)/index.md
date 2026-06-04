---
title: "Geometric Deep Learning (GDL)"
created: 2022-12-09T21:24:43.186-06:00
modified: 2023-06-02T23:24:37.341-05:00
parent: "[[Deep Learning]]"
children: []
---
###### Geometric Deep Learning (GDL)
````excerpt
- a term coined in 2015 to describe nascent efforts to get off flatland and design neural networks that could learn patterns in nonplanar/non-euclidean data
````
^excerpt

# GDL - Categories
![[Geometric Deep Learning (GDL)/geometric-deep-learning-types.png|639x250]]

Bronstein talks of the 5Gs (extending the 4G categorization first introduced by Max Welling): grids; groups; graphs; and geodesics and gauges. Since these final two Gs are closely related we consider just four different categories, i.e. 4Gs.
- The <strong>grid category</strong> captures regularly sampled, or gridded, data such as 2D images. These data would perhaps typically be the purveyance of classical deep learning. However, it is also possible to interpret many of the classical deep learning models from a geometric perspective (such as CNNs and their translational equivariance, as discussed above).
- The <strong>group category</strong> covers homogenous spaces with global symmetries. The canonical example of this category is the sphere (covered in greater detail in our previous article \[3\]). Spherical data arise in myriad applications, not only when data is acquired directly on the sphere (such as over the Earth or by 360° cameras that capture panoramic photos and videos), but also when considering spherical symmetries (such as in molecular chemistry or magnetic resonance imaging). While the sphere is the most common group setting, other groups, and their corresponding symmetries can also be considered.
- The <strong>graph category</strong> covers data that may be represented by a computational graph, with nodes and edges. Networks are well-suited to such representations, hence graph deep learning has found wide application in the study of social networks. The graph approach to geometric deep learning provides great flexibility since much data can be represented by a graph. However, this flexibility can come with a loss in specificity and the advantages that affords. For example, the group setting can often be considered with a graph approach but in this case, one loses the underlying knowledge of the group, which can otherwise be leveraged.
- The final <strong>geodesics and gauges category</strong> involves deep learning on more complex shapes, such as more general manifolds and 3D meshes. Such approaches can be of great use in computer vision and graphics, for example, where one can perform deep learning with 3D models and their deformations.

# GDL - Model Types
1. <strong>Linear equivariant layers:</strong> The core component of geometric deep learning models is linear layers, such as convolutions, that are equivariant to some symmetry transformation. The linear transform itself needs to be constructed for the geometric category considered, e.g. a convolution on the sphere and graph are difficult, although there are often many analogies.
2. <strong>Non-linear equivariant layers:</strong> To ensure deep learning models have sufficient representational power, they must exhibit non-linearity (otherwise they could only represent simple linear mappings). Non-linear layers must be introduced to achieve this, while also preserving equivariance. The canonical way to introduce non-linearity in an equivariant manner is to do so via pointwise non-linear activation functions (e.g. ReLUs), although other forms of non-linearity tailored specifically to the underlying geometry are sometimes considered.
3. <strong>Local averaging:</strong> Most geometric deep learning models also include a form of local averaging, such as max pooling layers in CNNs. Such operations impose local invariances at certain scales, ensuring stability and leading to multi-scale, hierarchical representations by stacking multiple blocks of layers.
4. <strong>Global averaging:</strong> To impose global invariances in geometric deep learning models, global averaging layers are often employed, such as global pooling layers in CNNs.

- [[Gauge-Equivariant Convolutional Neural Networks (CNN)]]
