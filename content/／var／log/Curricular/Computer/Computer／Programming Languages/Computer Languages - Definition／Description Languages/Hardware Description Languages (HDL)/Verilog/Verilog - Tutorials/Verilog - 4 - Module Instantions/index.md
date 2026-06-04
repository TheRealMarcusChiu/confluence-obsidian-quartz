---
title: "Verilog - 4 - Module Instantions"
created: 2023-03-13T14:44:42.829-05:00
modified: 2023-03-13T14:57:11.760-05:00
parent: "[[Verilog - Tutorials]]"
children: []
---
# Port Connection by Ordered List
```
module mydesign(input x, y, z,
				output o);
endmodule

module root;
	wire [1:0] 	a;
	wire		b, c;

	mydesign d0 (a[0], b, a[1], c);	// a[0] is at position 1 so it is automatically connected to x
									// b is at position 2 so it is automatically connected to y
									// a[1] is at position 3 so it is connected to z
									// c is at position 4 so it is connected to o
endmodule
```
# Port Connect by Name
```
module mydesign(input x, y, z,
				output o);
endmodule

module root;
	wire [1:0] 	a;
	wire		b, c;

	mydesign d0 (.x(a[0]),	// signal "x" in mydesign is connected to "a[0]"
				 .y(b),
				 .z(a[1]),
				 .o(c));
endmodule
```
# Unconnected/Floating Ports

ports that are not connected to any wire in the instantiating module will have a value of high-impedance
```
module mydesign(input x, y, z,
				output o);
endmodule

module root;
	mydesign d0(		// x is an input and not connected, hence a[0] will b Z (i.e. high-impedance)
			    .y(a[1]),
				.z(a[1]),
				.o());	// o has a valid value in mydesign but since it
						// is not connected to "c" in root, c will be Z
endmodule
```
