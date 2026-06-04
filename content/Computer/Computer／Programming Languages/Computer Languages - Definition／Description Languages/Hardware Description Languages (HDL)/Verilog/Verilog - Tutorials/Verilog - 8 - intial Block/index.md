---
title: "Verilog - 8 - intial Block"
created: 2023-03-13T16:00:20.463-05:00
modified: 2023-03-13T16:09:47.483-05:00
parent: "[[Verilog - Tutorials]]"
children: []
---
An <code><font style="color: rgb(122,134,154);">initial</font></code> block is not synthesizable and hence cannot be converted into a hardware schematic with digital elements. Hence initial blocks do not serve much purpose than to be used in simulations. These blocks are primarily used to initialize variables and drive design ports with specific values.
# Syntax
```
initial
	[single statement]
```
```
initial begin
	[multiple statements]
end
```
# When Does it Start and End?

An <code><font style="color: rgb(122,134,154);">initial</font></code> block is started at the beginning of a simulation at time 0 unit. This block will be executed only once during the entire simulation. Execution of an <code><font style="color: rgb(122,134,154);">initial</font></code> block finishes once all the statements within the block are executed.
```
module behave;
	reg [1:0] a, b;

	initial
		a = 2'b10; // a will get value 2'b10 at time unit 0
		#10 b = 2'b00; // time will advance 10 units, and then b will b assigned
endmodule
```
# How Many initial Blocks Allowed in a Module?

There are no limits to the number of initial blocks that a module can have.
```
module behave;
	reg [1:0] a, b;

	intial begin
		a = 2'b10;
		#20 b = 2'b11;
	end

	intial begin
		#10 a = 2'b11;
		#40 b = 2'b10;
	end

	initial
		#60 $finish // is Verilog system task that tells the simulator to terminate the current simulation
endmodule
```
