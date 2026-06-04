---
title: "Outer Product"
created: 2021-09-13T05:25:48.770-05:00
modified: 2026-05-23T11:27:07.818-05:00
parent: "[[Linear Algebra - Operations／Operators]]"
children: []
---
###### Outer Product
````excerpt
- the <strong>outer product</strong> of two vectors 𝑣 and 𝑢 is their [[Tensor Product|tensor product]] 𝑣⊗𝑢
	- if the vectors are given as coordinate columns, then the <strong>outer product</strong> is the matrix 𝑣𝑢<sup>T</sup>
	- if vector 𝑣 has dimension 𝑛 and vector 𝑢 has dimension 𝑚, then their <strong>outer product</strong> is an 𝑛×𝑚 [[Matrix／Matrices|matrix]]
- is the "expanded form" of the [[Geometric Product|geometric product]]
- is related to [[Wedge Product - Exterior Product|wedge product]]
````
^excerpt

# Outer Product - Matrix Definition

Given two vectors
- $v = \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{bmatrix} ,\;\;\;\; u = \begin{bmatrix} u_1 \\ u_2 \\ \vdots \\ u_m \end{bmatrix}$

their outer product is defined as:
- $v \otimes u = vu^T = \begin{bmatrix} v_1u_1 & v_1u_2 & \dots  & v_1u_m \\ v_2u_1 & v_2u_2 & \dots  & v_2u_m \\ \vdots & \vdots & \ddots & \vdots \\ v_nu_1 & v_nu_2 & \dots  & v_nu_m \\ \end{bmatrix}$

# Outer Product - Expression Definition

Since a matrix can be represented as a sum of its basis:
- $\left\{ \begin{bmatrix} 1 & 0 & \dots  & 0 \\ 0 & 0 & \dots  & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots  & 0 \\ \end{bmatrix}, \begin{bmatrix} 0 & 1 & \dots  & 0 \\ 0 & 0 & \dots  & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots  & 0 \\ \end{bmatrix}, ..., \begin{bmatrix} 0 & 0 & \dots  & 1 \\ 0 & 0 & \dots  & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots  & 0 \\ \end{bmatrix}, ..., \;\; ..., \begin{bmatrix} 0 & 0 & \dots  & 0 \\ 0 & 0 & \dots  & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots  & 1 \\ \end{bmatrix}, \right\}$

Each element in its basis can be represented as 𝐸<sub>𝑖𝑗</sub>:
- $\left\{ E_{11}, E_{12}, ..., E_{1m}, ... ..., E_{n1}, E_{n2}, ..., E_{nm} \right\}$

Thus the outer product is expressed as:
- $v \otimes u = vu^T = \begin{aligned} & v_1u_1E_{11} + v_1u_2E_{12} + ... + v_1u_mE_{1m} + \\ & v_2u_1E_{21} + v_2u_2E_{22} + ... + v_2u_mE_{2m} + \\ & ... \\ & v_nu_1E_{n1} + v_nu_2E_{n2} + ... + v_nu_mE_{nm} \\ \end{aligned}$
