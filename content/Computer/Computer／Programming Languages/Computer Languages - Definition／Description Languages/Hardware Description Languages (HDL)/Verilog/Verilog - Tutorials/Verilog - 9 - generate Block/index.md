---
title: "Verilog - 9 - generate Block"
created: 2023-03-13T16:10:21.811-05:00
modified: 2023-03-13T16:30:54.065-05:00
parent: "[[Verilog - Tutorials]]"
children: []
---
A <code><font style="color: rgb(122,134,154);">generate</font></code> block allows multiplying module instances or performing conditional instantiation of any module. It provides the ability for the design to be built based on Verilog parameters. These statements are particularly convenient when the same operation or module instance needs to be repeated multiple times or if certain code has to be conditionally included based on given Verilog parameters.

A <code><font style="color: rgb(122,134,154);">generate</font></code> block cannot contain any [[Verilog - 3 - Ports|ports]], parameter, <code><font style="color: rgb(122,134,154);">specparam</font></code> declarations, nor <code><font style="color: rgb(122,134,154);">specify</font></code> blocks. However, other module items and other generate blocks are allowed. All generate instantiations are coded within a <code><font style="color: rgb(122,134,154);">module</font></code> and between the keywords <code><font style="color: rgb(122,134,154);">generate</font></code> and <code><font style="color: rgb(122,134,154);">endgenerate</font></code>.

Generated instantiations can have either modules, continuous assignments, <code><font style="color: rgb(122,134,154);">always</font></code> or <code><font style="color: rgb(122,134,154);">initial</font></code> blocks and user-defined primitives.
# generate Types

> [!expand-ui]- generate for loop
> ```
> module ha(input a, b, 
> 		  output sum, cout);
> 	assign sum  = a ^ b;
> 	assign cout = a & b;
> endmodule
>
> // A top level design that contains N instances of half adders
> module my_design
> 	#(parameter N=4)
> 		(input  [N-1:0] a, b,
> 		 output [N-1:0] sum, cout);
>
> 	// declare a temporary loop variable to be used during 
>     // generation and won't be available during simulation
> 	genvar i;
>
> 	// generate for loop to instantiate N times
> 	generate
> 		for (i = 0; i < N; i = i + 1) begin
> 			ha u0(a[i], b[i], sum[i], cout[i]);
> 		end
> 	endgenerate
> endmodule
> ```
> ###### Testbench
>
> The testbench parameter is used to control the number of half adder instances in the design. When N is 2, my\_design will have 2 instances of half adder.
> ```
> module tb;
> 	parameter N = 2;
> 	reg  [N-1:0] a, b;
> 	wire [N-1:0] sum, cout;
>
> 	// Instantiate top level design with N=2 so that it will have 2
>     // separate instances of half adders and both are given 2 separate inputs
> 	my_design #(.N(N)) md(.a(a), .b(b), .sum(sum), .cout(cout));
>
> 	initial begin
> 		a <= 0;
> 		b <= 0;
>
> 		$monitor("a=0x%0h b=0x%0h sum=0x%0h cout=0x%0h", a, b, sum, cout);
>
> 		#10 a <= 'h2;
> 			b <= 'h3;
> 		#20 b <= 'h4;
> 		#10 a <= 'h5;
> 	end
> endmodule
> ```
>
> simulation log
> ```
> a=0x0 b=0x0 sum=0x0 cout=0x0
> a=0x2 b=0x3 sum=0x1 cout=0x2
> a=0x2 b=0x0 sum=0x2 cout=0x0
> a=0x1 b=0x0 sum=0x1 cout=0x0
> ```

> [!expand-ui]- generate if else
> TODO [https://www.chipverify.com/verilog/verilog-generate-block#generate-for](https://www.chipverify.com/verilog/verilog-generate-block#generate-for)

> [!expand-ui]- generate case
> TODO [https://www.chipverify.com/verilog/verilog-generate-block#generate-for](https://www.chipverify.com/verilog/verilog-generate-block#generate-for)
