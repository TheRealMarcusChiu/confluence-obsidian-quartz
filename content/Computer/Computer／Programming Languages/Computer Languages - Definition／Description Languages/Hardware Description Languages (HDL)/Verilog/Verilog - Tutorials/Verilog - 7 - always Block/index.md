---
title: "Verilog - 7 - always Block"
created: 2023-03-13T15:47:07.039-05:00
modified: 2023-03-13T16:00:17.090-05:00
parent: "[[Verilog - Tutorials]]"
children: []
---
An <code><font style="color: rgb(122,134,154);">always</font></code> block is one of the procedural blocks in Verilog. Statements inside an always block are executed sequentially.
# Syntax
```
always @ (event)
	[statement]
```
```
always @ (event) begin
	[multiple statements]
end
```
# Examples

In the code below, all statements get executed whenever the value of signals <code><font style="color: rgb(122,134,154);">a</font></code> or <code><font style="color: rgb(122,134,154);">b</font></code> change
```
always @ (a or b) begin
	[statements]
end
```

In the code below, all statements get executed at every positive edge of the signal <code><font style="color: rgb(122,134,154);">clk</font></code>.
```
always @ (posedge clk) begin
	[statements]
end
```

In the code below, always block is started at time 0 units. Since there is no time control it will stay and be repeated at 0 time units only. This continues in a loop and simulation will hang!
```
always clk = ~clk; // bad it will hang
```

In the code below, simulation time is delayed by a delay statement within the always construct as shown below. Now the clock inversion is done after every 1- time units
```
always #10 clk = ~clk; // good
```
# Sequential Element Design Example
```
module tff(input d, clk, rstn,
		   output reg q);
	always @ (posedge clk or negedge rstn) begin
		if (!rstn)
			q <= 0;
		else
			if (d)
				q <= ~q;
			else
				q <= q;
	end
endmodule
```
# Combinational Element Design Example
```
module combo(input, a, b, c, d,
			 output reg o);
	always @ (a or b or c or d) begin // gets triggered wheneverany of the signals changes
		o <= ~((a & b) | (c ^ d));
	end
endmodule
```
