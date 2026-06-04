---
title: "CPLD vs FPGA"
created: 2023-05-21T20:11:42.964-05:00
modified: 2024-09-22T22:51:27.020-05:00
parent: "[[Programmable Logic Device (PLD)]]"
children: []
---
based on: [https://numato.com/kb/cpld-vs-fpga-differences-one-use/](https://numato.com/kb/cpld-vs-fpga-differences-one-use/)
# [[Complex Programmable Logic Device (CPLD)|CPLD]] Architecture

Let’s take a look at CPLD, Xilinx CoolRunner-II as a practical example

![[CPLD vs FPGA/Xilinx-CoolRunner-II-Architecture.png|500]]

Let’s discuss a few features from the above image:
- This CPLD has a few function blocks starting from “Function Block 1” to “Function Block n” (this number ranges from 2 to 32 in the case of CoolRunner-II CPLDs)
- 16 lines of output from each Function Block go into AIM (Advanced Interconnect Matrix), whereas 40 lines of signals are input into Function Blocks from the AIM.
- Each function block has 16 MacroCells (MC1 to MC16).
- Each MacroCell has access to 16 signals from I/O Blocks
- The structure of MacroCell is shown below. Each macrocell contains 1 Flip-Flop and PLA array of Sum of Products which users can utilize to create combinatorial or sequential logic.  So the maximum number of  Flip Flops available in CoolRunner-II CLPD (XC2C512) is 512! (Remember this number, we will compare it with the number of Flip Flops in FPGAs)
- The AIM can be programmed to interconnect the signals as we want. But as we saw in the second bullet point above, the number of signals is limited for each function block.

![[CPLD vs FPGA/Xilinx-CoolRunner-II-Macrocell.png|500]]

Same as in [[Programming Array Logic (PAL) - Programmable Logic Array (PLA)|PLAs]], CPLDs’ logic functions in each Macrocell are electrically programmed via In System Programming (ISP) Interface over JTAG (check Figure 1). After programming, these flash-based connections remain persistent for years. This gives CPLDs a unique advantage of “instant-on” working. That is, CPLDs start working as soon as powered up since their circuitry is flashed/burned into them via ISP. That is not the case with FPGAs as we will see later.

Generalizing, we can say that, in CPLDs, there are a few hundred function blocks (or logic blocks), typically less than a thousand in number, which are accessible by a single big interconnect.
# CPLD vs FPGA - Comparison Summary
# [[Field-Programmable Gate Arrays (FPGA)|FPGA]] Architecture

For more detail: [[FPGA - Architecture]]

The exact FPGA architecture is not publicly released by manufacturers, we can still get higher-level architecture
```
image of "FPGA Architecture: CLB and Interconnect"
```

In the case of FPGAs, there are many [[Configurable Logic Block (CLB) - Logic Array Block (LAB)|Configurable Logic Blocks (CLBs)]] embedded in an ocean of programmable interconnects. These CLBs are incredibly complex compared to Macrocells of CPLDs and can implement vastly more complex logic functions. They are primarily made of Look-Up Tables (LUTs), Multiplexers, and Flip-Flops. For the brave, Xilinx published a lot of details in Xilinx User Guide on 7 Series FPGAs Configurable Logic Block. FPGAs can contain even millions of CLBs in a single device! And millions of Flip-Flops (\~3.456 million Flip-Flops in Xilinx VU13P)! Compare that with just 512 Flip-Flops in the biggest CPLD from Xilinx! In short, FPGAs are massive! (not all but many are)
```
image of: Specialized hardware on FPGA
```

As illustrated above, FPGAs also have dedicated hardware for various functions such as RAM, High-Speed Serial Transceivers, Digital Signal Processing (DSP) Blocks, External [[Memory Controller - Memory Chip Controller (MCC) - Memory Controller Unit (MCU)|Memory Controllers]], PLLs and MMCMs, [[Peripheral Component Interconnect Express (PCIe - PCI-e)|PCIe]], etc! In terms of variety of choices and flexibility, CPLDs are no match for FPGAs.

As mentioned before, FPGAs are [[Look-Up／Lookup Tables (LUT)|LUT]] based. When an FPGA is powered up, the device is always blank. A special circuit called Configuration Circuit is present which reads the configuration data from an external ROM, and configures the LUTs as per the user’s design present in the external ROM. It takes some time for FPGA to get configured and the FPGA will start functioning only after configuration loading is complete. There certainly are exceptions to this. Some manufacturers have come up with FPGAs that have built-in configuration flash. Even in this case,  the configuration data is not embedded in the fabric and some amount of configuration/setup time still applies.

```merge-table
{
  "rows": [
    [
      {
        "content": "CPLD",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "FPGA",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      {
        "content": "Instant-on. CPLDs start working as soon as they are powered up",
        "align": "left"
      },
      {
        "content": "Since FPGA has to load configuration data from external ROM and set up the fabric before it can start functioning, there is a time delay between power ON and FPGA starting working. The time delay can be as large as several tens of milliseconds.",
        "align": "left"
      }
    ],
    [
      {
        "content": "Non-volatile. CPLDs remain programmed and retain their circuit after powering down. FPGAs go blank as soon as powered off.",
        "align": "left"
      },
      {
        "content": "FPGAs use SRAM-based configuration storage. The contents of the memory are lost as soon as power is disconnected.",
        "align": "left"
      }
    ],
    [
      {
        "content": "Deterministic Timing Analysis. Since CPLDs are comparatively simpler than FPGAs, and the number of interconnects is less, the timing analysis can be done much more easily.",
        "align": "left"
      },
      {
        "content": "The size and complexity of FPGA logic can be humongous compared to CPLDs. This opens up the possibility of less deterministic signal routing and thus causes complicated timing scenarios. Thankfully implementation tools provided by FPGA vendors have mechanisms to assist in achieving deterministic timing. But additional steps by the user are usually necessary to achieve this.",
        "align": "left"
      }
    ],
    [
      {
        "content": "Lower idle power consumption. Newer CPLDs such as CoolRunner-II use around 50 uA in idle conditions.",
        "align": "left"
      },
      {
        "content": "Relatively higher idle power consumption.",
        "align": "left"
      }
    ],
    [
      {
        "content": "Might be cheaper for implementing simpler circuits",
        "align": "left"
      },
      {
        "content": "FPGAs are much more capable compared to CPLDs but can be more expensive as well.",
        "align": "left"
      }
    ],
    [
      {
        "content": "More \"secure\" due to design storage within the built-in non-volatile memory.",
        "align": "left"
      },
      {
        "content": "FPGAs that use external memory can expose the IP externally. Many FPGA vendors offer mechanisms such as encryption to combat this. Design-specific protection mechanisms also can be implemented.",
        "align": "left"
      }
    ],
    [
      {
        "content": "Very small amount of logic resources.",
        "align": "left"
      },
      {
        "content": "Massive amount of logic and storage elements, with which incredibly complex circuits can be designed. FPGAs have thousands of times more resources! This point alone makes FPGAs more popular than CPLDs.",
        "align": "left"
      }
    ],
    [
      {
        "content": "No on-die hard IPs are available to offload processing from the logic fabric.",
        "align": "left"
      },
      {
        "content": "Variety of on-die dedicated hardware such as Block RAM, DSP blocks, PLL, DCMs, Memory Controllers, Multi-Gigabit Transceivers, etc gives immense flexibility. This is not even thinkable with CPLDs.",
        "align": "left"
      }
    ],
    [
      {
        "content": "Power down and reprogramming are always required in order to modify design functionality.",
        "align": "left"
      },
      {
        "content": "FPGAs can change their circuit even while running! (Since it is just a matter of updating LUTs with different content) This is called Partial Reconfiguration and is very useful when FPGAs need to keep running a design and at the same time update it with different designs as per requirement. This feature is widely used in Accelerated Computing.",
        "align": "left"
      }
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# CPLD vs FPGA - When to Use

When a design requires a simple glue-logic or similar functionality which doesn’t need to be changed much, or when you need an instant-on circuit, then go for CPLDs. Otherwise, for most other applications FPGAs are generally preferred. Sometimes you can find both CPLD + FPGA in a design. In those designs, CPLDs generally do simple glue-logic as mentioned before, and are responsible for “booting” the FPGA as well as controlling the reset and boot sequence of a complete board. So, depending on the application you might need to use both in a particular design.
