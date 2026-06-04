---
title: "1：1 Mode (Gear1 Mode - \"UCLK DIV1 Mode\" on \"UCLK==MEMCLK\") vs 1：2 Mode (Gear2 Mode)"
created: 2024-09-22T22:16:04.536-05:00
modified: 2024-09-22T22:58:01.502-05:00
parent: "[[Random-Access Memory (RAM)]]"
children: []
---
###### 1:1 Mode
- [[Random-Access Memory (RAM)|RAM]] and the [[Central Processing Unit (CPU) - Central／Main Processor - Microprocessor (uP) - Microcontroller (uC) - Microcontroller Unit (MCU)|CPU]]'s [[Integrated Memory Controller (IMC)|integrated memory controller (IMC)]] run at the SAME frequency
- Intel calls this "Gear1 mode"
- AMD calls this "UCLK DIV1 Mode" on "UCLK==MEMCLK"

###### 1:2 Mode
- RAM and the CPU's memory controller (IMC) run at the DIFFERENT frequencies
- Intel calls this "Gear2 mode"

# BIOS Example
![[1：1 Mode (Gear1 Mode - "UCLK DIV1 Mode" on "UCLK==MEMCLK") vs 1：2 Mode (Gear2 Mode)/RAM explained BIOS OC.png|500]]
# Example Difference

Here's an example of an AMD system (X570 with Ryzen 3900X). The tool [HWinfo64](https://www.hwinfo.com/download/) can show those frequencies in the "Sensors" window.
- DDR4-3866 is too much to run in 1:1 mode, so the divider for the memory controller is active and performance is worse.
- DDR4-3600 manages to run in 1:1 mode and the performance is better.

![[1：1 Mode (Gear1 Mode - "UCLK DIV1 Mode" on "UCLK==MEMCLK") vs 1：2 Mode (Gear2 Mode)/RAM explained divider.png|400]]
