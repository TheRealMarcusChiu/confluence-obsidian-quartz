---
title: "Verilog - 5 - Assign／Assigment Statements"
created: 2023-03-13T15:02:24.935-05:00
modified: 2023-03-13T15:43:29.880-05:00
parent: "[[Verilog - Tutorials]]"
children: []
---
# Syntax

The assignment syntax
- starts with the keyword <code><font style="color: rgb(122,134,154);">assign</font></code>
- the signal name which can either be a single signal or a concatenation of different signal nets
- drive strength is optional
- the delay is optional - useful for specifying delays for gates and is used to model timing behavior in real hardware because the value dictates when the net should be assigned with the evaluated value
- the expression or signal on the right-hand side (RHS) is evaluated and assigned to the net or expression of nets on the left-hand side (LHS)
```
assign <net_expression> = [drive_strength] [delay] <expression of different signals or constant value>
```

Rules:
- LHS should always be a scalar or vector net or concatenation of scalar or vector nets and never a scalar or vector register
- RHS can contain scalar or vector registers and function calls
- whenever any operand on the RHS changes in value, LHS will be updated with the new value
- <code><font style="color: rgb(122,134,154);">assign</font></code> statements are also called continuous assignments and are always active
- it is illegal to assign <code><font style="color: rgb(122,134,154);">reg</font></code>. <code><font style="color: rgb(122,134,154);">reg</font></code> signals can only be driven in procedural blocks like <code><font style="color: rgb(122,134,154);">initial</font></code> and <code><font style="color: rgb(122,134,154);">always</font></code>.

# Implicit vs Explicit Assignment
```
wire [1:0] a;
assign a = x & y;		// explicit assignment
```
```
wire [1:0] a = x & y; 	// implicit assignment
```
# Combinatorial Assignment
```
module combo(input a, b, c, d,
			 output o);
	assign o = ~((a & b) | c ^ d);
	// & is AND
	// | is OR
	// ^ is XOR
endmodule
```
# Examples
```
module xyz(input [3:0] 	x,
		   input		y,
		   output [4:0]	z);
	wire [1:0] 	a;
	wire		b;

	// In each of the following cases, assume
	// x='b1100
	// y='b1

	// Case #1
	// 4-bits of x and 1 bit of y is concatenated to get a 5-bit net. It is asigned to z
	// value of z='b11001 or z='h19
	assign z = {x, y};

	// Case #2
	// The concatenated {x, y} is assigned to selected 3 bits of net z
    // The remaining 2 bits of z is undriven and will be Z (i.e. high impedance)
	// value of z='bZ001Z
	assign z[3:1] = {x, y}; // cuts off everything to the right

	// Case #3
	// value of z='b1001Z
	assign z[3:1] = {x, y};
	assign z[4] = 1;

	// Case #4
	// z[3] is both being driven to 0, so no contention
	// value of z='bZ001Z
	assign z[3:1] = {x, y};
	assign z[3] = 0;

	// Case #5
	// z[3] is being assigned to 0 and 1
	// value of z='dZX01Z
 	assign z[3:1] = {x, y};
	assign z[3] = 1;

	// Case #6
	// value of z='b00001, because z[4:3] will be driven with 0
	assign z = {x[1:0], y};

	// Case #7
	// value of z='bZZ001, because z[4:3] is unconnected
	assign z[2:0] = {x[1:0], y};

	// Case #8
	// value of z='b00111, because 3{y} = {y, y, y}
	assign z = {3{y}};

	// Case #9
	// a='b00
	// b='b1
	assign {a, b} = {x, y};

	// Case #10
	// a='b01
	// b='b0
	assign {b, a} = {x, y};
endmodule
```
