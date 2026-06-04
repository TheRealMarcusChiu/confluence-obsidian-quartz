---
title: "Verilog - DFF Module & Test Bench Example"
created: 2023-03-13T10:00:03.199-05:00
modified: 2023-03-13T13:46:48.147-05:00
parent: "[[Verilog - 2 - Module]]"
children: []
---
# DFF Module Definition Example
```
// 'dff' is the name of this module
module dff (input  d,             // Inputs to the design
                   rstn,
                   clk,
            output q);            // Outputs of the design
    reg q;                        // declare a variable to store output values

    always @ (posedge clk) begin  // this block executes at the positive edge of clk (i.e. 0 -> 1)
        if (!rstn)
            q <= 0;
        else
            q <= d;
    end
endmodule                         // end of `dff` module
```
# DFF Testbench Example
```
module tb;
    // 1. declare input/output variable to drive the design
    reg    tb_clk;
    reg    tb_d;
    reg    tb_rstn;
    wire   tb_q;

    // 2. create an instance of the design (this is called design instantiation)
    dff    dff0 (.clk	(tb_clk),		// connect clock input with TB signal
                 .d		(tb_d),			// connect data input with TB signal
                 .rstn	(tb_rstn),		// connect reset input with TB signal
 				 .q		(tb_q));		// connect output q with TB signal

    // 3. The following is an example of a stimulus
    // Here we drive the signals tb_* with certain values
    // Since these tb_* signals are connected to the design inputs,
    // the design will be driven with the values in tb_*
    initial begin
        tb_rstn		<= 1'b0;
		tb_clk		<= 1'b0;
		tb_d		<= 1'b0;
	end
endmodule
```
