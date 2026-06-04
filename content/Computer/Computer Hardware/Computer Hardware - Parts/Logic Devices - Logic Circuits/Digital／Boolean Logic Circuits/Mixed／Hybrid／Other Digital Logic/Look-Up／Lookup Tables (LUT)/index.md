---
title: "Look-Up／Lookup Tables (LUT)"
created: 2023-01-18T01:10:43.291-06:00
modified: 2023-03-12T21:06:13.444-05:00
parent: "[[Mixed／Hybrid／Other Digital Logic]]"
children: []
---
###### Look-Up/Lookup Tables (LUT)
````excerpt
- an n-bit/input LUT can encode any n-input Boolean function by storing the truth table of the function in the LUT
- can be implemented with a [[Multiplexer (MUX)|multiplexer]] whose select lines are driven by the address signal and whose inputs are the values of the elements contained in the array. These values can either be:
	- hard-wired, as in an [[Application-Specific Integrated Circuit (ASIC)|ASIC]] whose purpose is specific to a function
	- provided by [[D Latch - Gated D Latch - Transparent Latch|D latches]] which allow for configurable values
- is a key component of modern [[Field-Programmable Gate Arrays (FPGA)|FPGAs]] that provide reconfigurable hardware logic capabilities
````
^excerpt

# LUT - 3-input LUT Implementation Example
![[Look-Up／Lookup Tables (LUT)/lookup-table-schematic.png|301]]
# LUT - Use Cases
- used in a [[Basic Logic Element (BLE)]] which is used in a [[Configurable Logic Block (CLB) - Logic Array Block (LAB)]]
