---
title: "Simulation vs Monte Carlo Method vs Monte Carlo Simulation"
created: 2025-09-08T18:17:00.893-05:00
modified: 2025-09-08T18:17:23.508-05:00
parent: "[[Monte Carlo (MC) Methods／Experiments／Simulations]]"
children: []
---
- <strong>Simulation</strong>: Drawing <strong>one</strong> pseudo-random uniform variable from the interval \[0,1\] can be used to simulate the tossing of a coin: If the value is less than or equal to 0.50 designate the outcome as heads, but if the value is greater than 0.50 designate the outcome as tails. This is a simulation, but not a Monte Carlo simulation.
- <strong>Monte Carlo method</strong>: Pouring out a box of coins on a table, and then computing the ratio of coins that land heads versus tails is a Monte Carlo method of determining the behavior of repeated coin tosses, but it is not a simulation.
- <strong>Monte Carlo simulation</strong>: Drawing <strong>a large number</strong> of pseudo-random uniform variables from the interval \[0,1\] at one time, or once at many different times, and assigning values less than or equal to 0.50 as heads and greater than 0.50 as tails, is a <em>Monte Carlo simulation</em> of the behavior of repeatedly tossing a coin.
