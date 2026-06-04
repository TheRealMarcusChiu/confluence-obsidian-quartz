---
title: "Basic Logic Element (BLE)"
created: 2023-03-12T20:56:23.634-05:00
modified: 2023-03-12T21:09:22.846-05:00
parent: "[[Mixed／Hybrid／Other Digital Logic]]"
children: []
---
###### Basic Logic Element (BLE)
````excerpt
- is a k-input [[Look-Up／Lookup Tables (LUT)|LUT]] that can be configured to be either [[Combinational／Combinatory Digital Logic|combinatorial]] or [[Sequential Digital Logic|sequential]]
````
^excerpt

# BLE - Architecture

> [!expand-ui]- basic
> ```merge-table
> {
>   "rows": [
>     [
>       "As shown to the right, a typical BLE consists of:\n- K-input LUT\n- [[D-Type Flip-Flop (DFF)|D-type flip-flop (DFF)]]\n- 2-input [[Multiplexer (MUX)]]\n\nThe output can be either synchronous or asynchronous, depending on the programming of the mux to the right.",
>       "![[Basic Logic Element (BLE)/Screenshot 2023-03-12 at 8.53.46 PM.png|500x156]]"
>     ]
>   ],
>   "tableStyle": "letter-spacing: 0.0px;"
> }
> ```

> [!expand-ui]- advanced
> ```merge-table
> {
>   "rows": [
>     [
>       "As shown on the right, a typical logic cell consists of:\n- 4-input [[Look-Up／Lookup Tables (LUT)|LUT]]\n- full adder (FA)\n- [[D-Type Flip-Flop (DFF)|D-type flip-flop (DFF)]]\n\nThe LUTs are in this figure split into two 3-input LUTs.\n- In normal mode, those are combined into a 4-input LUT through the left mux\n- In arithmetic mode, their outputs are fed to the FA\n\nThe selection of mode is programmed into the middle multiplexer.\n\nThe output can be either synchronous or asynchronous, depending on the programming of the mux to the right.\n\nIn practice, entire or parts of the FA are put as functions into the LUTs in order to save space",
>       "![[Basic Logic Element (BLE)/FPGA_cell_example.png]]"
>     ]
>   ],
>   "tableStyle": "letter-spacing: 0.0px;"
> }
> ```
# BLE - Use Cases
- used in [[Configurable Logic Block (CLB) - Logic Array Block (LAB)]]
