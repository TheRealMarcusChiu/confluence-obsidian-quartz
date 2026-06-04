---
title: "Verilog - 2 - Module"
created: 2023-03-13T13:43:43.794-05:00
modified: 2023-03-13T14:44:20.507-05:00
parent: "[[Verilog - Tutorials]]"
children:
  - "[[Verilog - DFF Module & Test Bench Example]]"
  - "[[Verilog - Memory／Storage Module Examples]]"
---
# Introduction

> [!expand-ui]- Single Module
> A <code><font style="color: rgb(122,134,154);">module</font></code> is a block of Verilog code that implements a certain functionality. Modules can be embedded within other modules and a higher-level module can communicate with its lower-level modules using their input and output ports.
>
> A module should be enclosed within <code><font style="color: rgb(122,134,154);">module</font></code> and <code><font style="color: rgb(122,134,154);">endmodule</font></code> keywords. The name of the module should be given right after the <code><font style="color: rgb(122,134,154);">module</font></code> keyword and an optional list of ports may be declared as well. Note that ports declared in the list of port declarations cannot be redeclared within the body of the module
> ```
> module <name> ([port_list]);
> 	// Contents of the module
> endmodule
>
> // A module can have an empty portlist
> module name;
> 	// Contents of the module
> endmodule
> ```
>
> There can be multiple modules with different names in the same file and can be defined in any order.
>
> Example DFF module
> ```
> module dff (input	d,
> 			input	clk,
> 			input	rstn,
> 			output reg q);
> 	always @ (posedge clk) begin
> 		if (!rstn)
> 			q <= 0;
> 		else
> 			q <= d;
> 	end
> endmodule
> ```

> [!expand-ui]- Modules Within Modules
> For example, using the DFF module above can be chained to form a shift register
> ```
> module shift_reg (input		d,
> 				  input		clk,
> 				  input		rstn,
> 				  output	q);
> 	wire [2:0] q_net;
> 	dff u0 (.d(d),			.clk(clk), .rstn(rstn), .q(q_net[0]));
>  	dff u1 (.d(q_net[0]),	.clk(clk), .rstn(rstn), .q(q_net[1]));
>  	dff u2 (.d(q_net[1]),	.clk(clk), .rstn(rstn), .q(q_net[2]));
>  	dff u3 (.d(q_net[2]),	.clk(clk), .rstn(rstn), .q(q));
> endmodule
> ```
>
> ![[Verilog - 2 - Module/dff_shift_reg_schematic.png|600]]
> ###### Referring to Nested Modules
> ```
> module sub_module;
> 	reg reg0;
> 	initial begin
> 	    reg0 <= 0;
>     end
> endmodule
>
> module root_module;
>     reg reg0;
> 	sub_module sub_module_0();
>     initial begin
>         reg0 <= sub_module_0.reg0;
>         sub_module_0.reg0 <= 0;
>     end
> endmodule
> ```
# Module Examples
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
