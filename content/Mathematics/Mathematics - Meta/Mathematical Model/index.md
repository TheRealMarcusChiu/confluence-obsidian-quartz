---
title: "Mathematical Model"
created: 2021-09-13T05:26:21.782-05:00
modified: 2023-06-08T16:31:47.146-05:00
parent: "[[Mathematics - Meta]]"
children: []
---
###### Mathematical Model
````excerpt
- is an abstract description of a concrete system using mathematical concepts and language
````
^excerpt

# Mathematical Model - Classifications

Mathematical models are usually composed of both:
- <strong>relationships</strong> can be described by <em>operators</em>, such as algebraic operators, functions, differential operators, etc
- <strong>variables</strong> are abstractions of system parameters of interest, that can be quantified

Several classification criteria can be used for mathematical models according to their structure:

> [!expand-ui]- Linear vs Non-Linear
> If all the operators in a mathematical model exhibit linearity, the resulting mathematical model is defined as linear. A model is considered to be nonlinear otherwise. The definition of linearity and nonlinearity is dependent on context, and linear models may have nonlinear expressions in them. For example, in a statistical linear model, it is assumed that a relationship is linear in the parameters, but it may be nonlinear in the predictor variables. Similarly, a differential equation is said to be linear if it can be written with linear differential operators, but it can still have nonlinear expressions in it. In a [[Mathematical Programming／Optimization|mathematical programming]] model, if the objective functions and constraints are represented entirely by linear equations, then the model is regarded as a [[Linear Programming／Optimization (LP)|linear programming]] model. If one or more of the objective functions or constraints are represented with a nonlinear equation, then the model is known as a nonlinear model.
> - Nonlinearity, even in fairly simple systems, is often associated with phenomena such as chaos and irreversibility. Although there are exceptions, nonlinear systems, and models tend to be more difficult to study than linear ones. A common approach to nonlinear problems is linearization, but this can be problematic if one is trying to study aspects such as irreversibility, which is strongly tied to nonlinearity.

> [!expand-ui]- Static vs Dynamic
> A <em>dynamic</em> model accounts for time-dependent changes in the state of the system, while a <em>static</em> (or steady-state) model calculates the system in equilibrium, and thus is time-invariant. Dynamic models typically are represented by differential equations or difference equations.

> [!expand-ui]- Explicit vs Implicit
> If all of the input parameters of the overall model are known, and the output parameters can be calculated by a finite series of computations, the model is said to be <em>explicit</em>. But sometimes it is the <em>output</em> parameters that are known, and the corresponding inputs must be solved for by an iterative procedure, such as Newton's method (if the model is linear) or Broyden's method (if non-linear). In such a case the model is said to be <em>implicit</em>. For example, a jet engine's physical properties such as turbine and nozzle throat areas can be explicitly calculated given a design thermodynamic cycle (air and fuel flow rates, pressures, and temperatures) at a specific flight condition and power setting, but the engine's operating cycles at other flight conditions and power settings cannot be explicitly calculated from the constant physical properties.

> [!expand-ui]- Discrete vs Continuous
> A discrete model treats objects as discrete, such as the particles in a molecular model or the states in a statistical model; while a continuous model represents the objects in a continuous manner, such as the velocity field of fluid in pipe flows, temperatures, and stresses in a solid, and electric field that applies continuously over the entire model due to a point charge.

> [!expand-ui]- Deterministic vs. Non-Deterministic/Probabilistic/Stochastic
> A deterministic model is one in which every set of variable states is uniquely determined by parameters in the model and by sets of previous states of these variables; therefore, a deterministic model always performs the same way for a given set of initial conditions.
>
> Conversely, in a stochastic model—usually called a "statistical model"—randomness is present, and variable states are not described by unique values, but rather by probability distributions.

> [!expand-ui]- Deductive, Inductive, or Floating
> - A deductive model is a logical structure based on a theory
> - An inductive model arises from empirical findings and generalizations from them
> - The floating model rests on neither theory nor observation but is merely the invocation of the expected structure
>
> The application of mathematics in social sciences outside of economics has been criticized for unfounded models. The application of [catastrophe theory](https://en.wikipedia.org/wiki/Catastrophe_theory) in science has been characterized as a floating model.
