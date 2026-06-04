---
title: "Arty S7 50 - Blinky Vivado 2022.2"
created: 2023-03-11T18:33:15.970-06:00
modified: 2023-03-11T19:05:06.433-06:00
parent: "[[Arty S7： Spartan-7 FPGA Development Board]]"
children: []
---
based on: [https://community.element14.com/technologies/fpga-group/b/blog/posts/arty-s7-50-first-power-up-and-hardware_2d00_only-blinky](https://community.element14.com/technologies/fpga-group/b/blog/posts/arty-s7-50-first-power-up-and-hardware_2d00_only-blinky)

Install Vivado

Open Vivado

Click on "Create Project"

Enter project name

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot 2023-03-11 183711.png]]

Choose RTL Project

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot 2023-03-11 183755.png]]

Skip "Add Sources"

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot 2023-03-11 183833.png]]

Skip "Add Constraints"

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot 2023-03-11 183850.png]]

Choose "Boards" tab and click "Refresh" button. Choose diligent as vendor drop-down. Find your target board and click on the download icon. Select it and click "Next"

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot 2023-03-11 183935.png]]

Click "Finish"

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot 2023-03-11 183959.png]]

Add constraints

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot (1).png|444x250]]

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot (2).png|444x250]]

Click on "Create File" button

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot (3).png]]

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot (4).png]]

Click on the created file and add the following constraints

> [!expand]- Click here to expand...
> Below is modified version of Master Constraint File [https://github.com/Digilent/digilent-xdc/blob/master/Arty-S7-50-Master.xdc](https://github.com/Digilent/digilent-xdc/blob/master/Arty-S7-50-Master.xdc)
> ```
> ## Clock Signals
> set_property -dict { PACKAGE_PIN F14   IOSTANDARD LVCMOS33 } [get_ports { clk }]; #IO_L13P_T2_MRCC_15 Sch=uclk
> create_clock -add -name sys_clk_pin -period 83.333 -waveform {0 41.667} [get_ports { clk }];
>
> ## Switches
> set_property -dict { PACKAGE_PIN H14   IOSTANDARD LVCMOS33 } [get_ports { sw }]; #IO_L20N_T3_A19_15 Sch=sw[0]
>
> ## LEDs
> set_property -dict { PACKAGE_PIN E18   IOSTANDARD LVCMOS33 } [get_ports { led[0] }]; #IO_L16N_T2_A27_15 Sch=led[2]
> set_property -dict { PACKAGE_PIN F13   IOSTANDARD LVCMOS33 } [get_ports { led[1] }]; #IO_L17P_T2_A26_15 Sch=led[3]
> set_property -dict { PACKAGE_PIN E13   IOSTANDARD LVCMOS33 } [get_ports { led[2] }]; #IO_L17N_T2_A25_15 Sch=led[4]
> set_property -dict { PACKAGE_PIN H15   IOSTANDARD LVCMOS33 } [get_ports { led[3] }]; #IO_L18P_T2_A24_15 Sch=led[5]
>
> ##Configuration options, can be used for all designs
> set_property BITSTREAM.CONFIG.CONFIGRATE 50 [current_design]
> set_property CONFIG_VOLTAGE 3.3 [current_design]
> set_property CFGBVS VCCO [current_design]
> set_property BITSTREAM.CONFIG.SPI_BUSWIDTH 4 [current_design]
> set_property CONFIG_MODE SPIx4 [current_design]
>
> # SW3 is assigned to a pin M5 in the 1.35v bank. This pin can also be used as
> # the VREF for BANK 34. To be able to use this pin as an ordinary I/O the
> # following property must be set to enable an internal VREF for BANK 34.
> # Since a 1.35v supply is being used the internal reference is set to half that
> # value (i.e. 0.675v).
> #
> set_property INTERNAL_VREF 0.675 [get_iobanks 34]
>
> set_property BITSTREAM.GENERAL.COMPRESS TRUE [current_design]
> ```

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot (5).png]]

Add sources

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot (6).png]]

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot (7).png]]

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot (8).png]]

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot (9).png]]

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot (10).png]]

Click on created file and add the following

> [!expand]- Click here to expand...
> ```
> `timescale 1ns / 1ps
>
> module blinky4(
>     input clk,
>     output [0:3] led,
>     input sw
>     );
> // reg for counter    
> reg [24:0] count = 0;
>  
> assign led[0] = count[21];
> assign led[1] = count[22];
> assign led[2] = count[23];
> assign led[3] = count[24];
>  
> always @ (posedge(clk)) count <= count + 1;    
> endmodule
> ```

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot (11).png]]

Click on "Run Synthesis"

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot (12).png]]

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot (13).png]]

Once "Run Synthesis" is done, click on "Run Implementation"

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot (14).png]]

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot (15).png]]

Once "Run Implementation" is done, click on "Generate Bitstream"

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot (16).png]]

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot (17).png]]

Once "Generate Bitstream" is complete. Click on "Open Hardware Manager"

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot (18).png]]

Connect your board to the computer. Click on "Auto-connect"

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot (19).png]]

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot (20).png]]

Once connected, click on "Program Device"

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot (21).png]]

![[Arty S7 50 - Blinky Vivado 2022.2/Screenshot (22).png]]
