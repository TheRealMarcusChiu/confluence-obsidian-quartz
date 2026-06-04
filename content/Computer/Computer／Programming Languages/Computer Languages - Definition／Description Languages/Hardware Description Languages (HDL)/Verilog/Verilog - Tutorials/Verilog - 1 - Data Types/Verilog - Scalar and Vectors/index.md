---
title: "Verilog - Scalar and Vectors"
created: 2023-03-13T12:49:58.606-05:00
modified: 2023-03-13T13:24:39.970-05:00
parent: "[[Verilog - 1 - Data Types]]"
children: []
---
- <strong>scalar</strong> - is a wire or reg declaration without a range specification and is considered 1-bit wide
- <strong>vector</strong> - is a wire or reg declaration with a range specification

# Instantiation
```
wire		wire1;		// 1-bit wide scalar wire
wire [7:0]	wire2;		// 8-bit wide vector wire		[7, 6, 5, 4, 3, 2, 1, 0]
wire [0:7]	wire3;		// 8-bit wide vector wire		[0, 1, 2, 3, 4, 5, 6, 7]

reg			reg1;		// 1-bit wide scalar variable
reg  [7:0]  reg2;		// 8-bit wide vector variable	[7, 6, 5, 4, 3, 2, 1, 0]
reg  [0:7]  reg2;		// 8-bit wide vector variable	[0, 1, 2, 3, 4, 5, 6, 7]

wire [variable:2] wire4; 	// illegal variable, only constant int allowed
reg  [variable:2] reg4; 	// illegal variable, only constant int allowed
```
# Assigning Values
```
reg  [7:0]  reg2;		// 8-bit wide vector variable	[7, 6, 5, 4, 3, 2, 1, 0]
reg2[0] = 1;			// assign 1 to bit 0
reg2[3] = 0; 			// assign 0 to bit 3
reg2[8] = 1;			// illegal out of bounds
```
# Part Selects

There are 2 types of part selects:

> [!expand-ui]- constant part select
> ```
> reg  [7:0]  reg2;		// 8-bit wide vector variable	[7, 6, 5, 4, 3, 2, 1, 0]
> reg2 [4:1] = 4'h3		// bits 4 to 1 will be replaced by the new value 'h3 -> constant part select
> ```

> [!expand-ui]- indexed part select
> ```
> [<start_bit> +: <width>]	// part select increments from start_bit
> [<start_bit> -: <width>]	// part select decrements from start_bit
> ```
```
module des;
    reg [31:0] data;
    integer i;

    initial begin
        data = 32'hFACE_CAFE;
             
        // constant part select example
        $display("data[7:0]     = 0x%0h", data[7:0]);
        $display("data[15:8]    = 0x%0h", data[15:8]);
        $display("data[23:16]   = 0x%0h", data[23:16]);
        $display("data[31:24]   = 0x%0h", data[31:24]);
 
        // indexed part select example
        for (i = 0; i < 4; i++) begin
            $display("data[8*%0d +: 8] = 0x%0h", i, data[8*i +: 8]);
        end
    end
endmodule
```

Simulation Log
```
data[7:0]     = 0xfe
data[15:8]    = 0xca
data[23:16]   = 0xce
data[31:24]   = 0xfa
data[8*0 +: 8] = 0xfe
data[8*1 +: 8] = 0xca
data[8*2 +: 8] = 0xce
data[8*3 +: 8] = 0xfa
```
