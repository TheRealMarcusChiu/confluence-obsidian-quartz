---
title: "Verilog - Arrays"
created: 2023-03-13T12:23:58.161-05:00
modified: 2023-03-13T12:48:55.847-05:00
parent: "[[Verilog - 1 - Data Types]]"
children: []
---
Arrays are allowed for <code><font style="color: rgb(122,134,154);">reg</font></code>, <code><font style="color: rgb(122,134,154);">wire</font></code>, <code><font style="color: rgb(122,134,154);">integer</font></code>, and <code><font style="color: rgb(122,134,154);">real</font></code> data types
> [!info]
> Note that a memory of n 1-bit reg is not the same as an n-bit vector reg
# Examples
```
module des ();
    reg [7:0]   mem1;               // 8-bit wide reg vector
    reg [7:0]   mem2 [0:3];         // 8-bit wide reg vector 1D array of depth 4
    reg [7:0]   mem3 [0:3][0:1];    // 8-bit wide reg vector 2D array with 4 rows and 2 cols
    
    integer i;
    integer j;

    initial begin
        mem1 = 8'hA9;
        $display("mem1 = 0x%0h", mem1);
        
        mem2[0] = 8'hAA;
        mem2[1] = 8'hBB;
        mem2[2] = 8'hCC;
        mem2[3] = 8'hDD;
        for (i = 0; i < 4; i = i+1) begin
            $display("mem2[%0d] = 0x%0h", i, mem2[i]);
        end

        for (i = 0; i < 4; i += 1) begin
            for (j = 0; j < 2; j += 1) begin
                mem3[i][j] = i + j;
                $display("mem3[%0d][%0d] = 0x%0h", i, j, mem3[i][j]);
            end
        end
    end
endmodule
```
# Simulation Log
```
mem1 = 0xa9
mem2[0] = 0xaa
mem2[1] = 0xbb
mem2[2] = 0xcc
mem2[3] = 0xdd
mem3[0][0] = 0x0
mem3[0][1] = 0x1
mem3[1][0] = 0x1
mem3[1][1] = 0x2
mem3[2][0] = 0x2
mem3[2][1] = 0x3
mem3[3][0] = 0x3
mem3[3][1] = 0x4
```
