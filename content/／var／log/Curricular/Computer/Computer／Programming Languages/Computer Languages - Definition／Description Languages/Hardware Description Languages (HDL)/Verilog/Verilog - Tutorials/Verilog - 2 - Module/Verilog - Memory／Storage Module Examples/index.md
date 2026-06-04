---
title: "Verilog - Memory／Storage Module Examples"
created: 2023-03-13T13:24:59.626-05:00
modified: 2023-03-13T13:43:25.990-05:00
parent: "[[Verilog - 2 - Module]]"
children: []
---
Storage elements (e.g. [[Random-Access Memory (RAM)|RAM]], [[Read Only Memory (ROM)|ROM]], etc) can be modeled using a 1D array of type <code><font style="color: rgb(122,134,154);">reg</font></code>.
# Memory Module - Example 1

In the code shown below, the design module accepts the following to read and write into the block:
- clock
- reset
- some control signals

It contains a 16-bit storage element called register which simply gets updated during writes and returns the current value during reads. The register is written when <code><font style="color: rgb(122,134,154);">sel</font></code> and <code><font style="color: rgb(122,134,154);">wr</font></code> are high on the same clock edge. It returns the current data when <code><font style="color: rgb(122,134,154);">sel</font></code> is high and <code><font style="color: rgb(122,134,154);">wr</font></code> is low.
```
module des (input	clk,
            input	rstn,
			input	wr,
			input	sel,
			input [15:0]	wdata,
			output [15:0]	rdata);
	reg [15:0] register;

	always @ (posedge clk) begin
		if (!rstn)
			register <= 0;
		else begin
			if (sel & wr)
				register <= wdata;
			else begin
				register <= register;
			end
		end
	end

	assign rdata = (sel & ~wr) ? register : 0;
endmodule
```
# Memory Module - Example 2

In this example, the <code><font style="color: rgb(122,134,154);">register</font></code> is an array that has four locations with each having a width of 16 bits. This design module accepts an additional input signal which is called <code><font style="color: rgb(122,134,154);">addr</font></code> to access a particular index in the array.
```
module des (input		clk,
            input		rstn,
			input [1:0]	addr,
			input		wr,
			input		sel,
			input [15:0]	wdata,
			output [15:0]	rdata);
	reg [15:0] register [0:3];
	integer i;
	
	always @ (posedge clk) begin
		if (!rstn) begin
			for (i = 0; i < 4; i = i+1) begin
				register[i] <= 0;
			end
		end else begin
			if (sel & wr) begin
				register[addr] <= wdata;
			end else begin
				register[addr] <= register[addr];
			end
		end
	end

	assign rdata = (sel & ~wr) ? register[addr] : 0;
endmodule
```
