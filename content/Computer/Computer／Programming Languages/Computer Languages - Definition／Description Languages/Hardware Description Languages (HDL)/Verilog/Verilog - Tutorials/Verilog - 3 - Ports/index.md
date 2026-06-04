---
title: "Verilog - 3 - Ports"
created: 2023-03-13T14:21:23.955-05:00
modified: 2023-03-13T15:01:55.622-05:00
parent: "[[Verilog - Tutorials]]"
children: []
---
Ports are by default considered as nets of type <code><font style="color: rgb(122,134,154);">wire</font></code>.
# Port Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Port",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      {
        "content": "<code><font style=\"color: rgb(122,134,154);\">input</font></code>",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "- the design module can only receive values from outside using its input ports",
        "align": "left"
      }
    ],
    [
      {
        "content": "<code><font style=\"color: rgb(122,134,154);\">output</font></code>",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "- the design module can only send values to the outside using its output ports",
        "align": "left"
      }
    ],
    [
      {
        "content": "<code><font style=\"color: rgb(122,134,154);\">inout</font></code>",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "- the design module can either send or receive values using its inout ports",
        "align": "left"
      }
    ]
  ]
}
```

Ports of type <code><font style="color: rgb(122,134,154);">input</font></code> and <code><font style="color: rgb(122,134,154);">inout</font></code> cannot be declared as <code><font style="color: rgb(122,134,154);">reg</font></code> because they are being driven from outside continuously and should not store values, but rather reflect the changes in the external signals as soon as possible.

It is perfectly legal to connect two ports with varying vector sizes, but the one with a lower vector size will prevail and the remaining bits of the other port with a higher width will be ignored.
# Syntax
```
input	[net_type] [range] list_of_names;	// input port
inout	[net_type] [range] list_of_names;	// input and output port

output	[net_type] [range] list_of_names;	// output port driven by wire
output	[var_type] [range] list_of_names;	// output port driven by variable

```
# Example
```
module my_design(input wire 	clk,
				 input			en,
				 input			rw,
				 inout[15:0]	data,
				 output			int);
	// ...
endmodule
```
# Syntax Variations

> [!expand-ui]- Verilog 1995
> ```
> module test(a, b, c);
> 	// By default a, b, and c are wires
> 	input	[7:0] a;
> 	input	[7:0] b;
> 	output  [7:0] c;
>
> 	// Still, you can declare them again as wires to avoid confusion
> 	wire 	[7:0] a;
> 	wire	[7:0] b;
> 	wire	[7:0] c;
> endmodule
> ```
> ```
> module test(a, b, c);
> 	input	[7:0] a, b;
> 	output	[7:0] c;
>
> 	// port "c" is changed to a reg type
> 	reg [7:0] c;
> endmodule
> ```

> [!expand-ui]- Verilog 2001
> ANSI-C style port naming was introduced in 2001 and allowed the type to be specified inside the port list.
> ```
> module test(input [7:0] a,
> 						b,
> 			output [7:0] c);
> 	// design content
> endmodule
> ```
> ```
> module test(input wire [7:0] a,
> 			input wire [7:0] b,
> 			output reg [7:0] c);
> 	// design content
> endmodule
> ```
# Signed Ports

The <code><font style="color: rgb(122,134,154);">signed</font></code> attribute can be attached to a port declaration or a net/reg declaration or both. Implicit nets are by default <strong>unsigned</strong>
```
module my_design(input	a, b,
				 output	c);
	// ports a, b, and c are by default unsigned
endmodule
```

If either the net/reg declaration has a <code><font style="color: rgb(122,134,154);">signed</font></code> attribute, then the other shall also be considered signed
```
module my_design(input signed a, b,
				 output c);
	wire a, b;		// a, b are signed from port declaration
	reg signed c;	// c is signed from reg declaration
endmodule
```
