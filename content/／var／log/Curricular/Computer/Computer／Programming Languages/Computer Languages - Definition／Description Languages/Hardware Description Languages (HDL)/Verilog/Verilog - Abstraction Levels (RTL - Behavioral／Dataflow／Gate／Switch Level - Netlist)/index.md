---
title: "Verilog - Abstraction Levels (RTL - Behavioral／Dataflow／Gate／Switch Level - Netlist)"
created: 2023-03-13T10:50:48.345-05:00
modified: 2023-03-13T11:05:44.151-05:00
parent: "[[Verilog]]"
children: []
---
Verilog is both a behavioral and a structural language. The internals of each module can be defined at four levels of abstraction, depending on the needs of the design. <strong>Structural Verilog</strong> describes how a module is composed of simpler modules or of basic primitives such as gates or transistors. Behavioral Verilog describes how the outputs are computed as functions of the inputs.
- <strong>Behavioral level</strong> - This is the highest level of abstraction provided by Verilog HDL. mainly construct using "<code><font style="color: rgb(122,134,154);">always</font></code>" and "<code><font style="color: rgb(122,134,154);">initial</font></code>" blocks.
- <strong>Dataflow level</strong> - At this level, the module is designed by specifying the data flow. the condition describes using the "<code><font style="color: rgb(122,134,154);">assign</font></code>" keyword.
- <strong>Gate level</strong> - The module is implemented in terms of logic gates and interconnections between these gates.
- <strong>Switch level</strong> - This is the lowest level of abstraction provided by Verilog. A module can be implemented in terms of switches, storage nodes, and the interconnections between them.

# Register-Transfer-Level (RTL)
- an abstraction hardware functionality is written with <code><font style="color: rgb(122,134,154);">always</font></code> blocks and <code><font style="color: rgb(122,134,154);">assign</font></code> statements that are synthesizable (can be translated into <em>gate level</em>).
- Pure RTL does not instantiate sub-modules
- RTL could contain sub-modules to guide the synthesizer
- Structural RTL (ofter still called RTL) is a module that contains other RTL modules

> [!expand-ui]- Example Verilog
> ```
> always @* begin
>   next_state = state;
>   if (count>0) next_count = count - 1;
>   case (state)
>   IDLE :
>     if(do_start) begin
>       next_state = START;
>       next_count = 2;
>     end
>   START :
>     if (do_wait) begin
>       next_count = count;
>     end
>     else if (count==0) begin
>       next_state = RUN;
>       next_count = count_from_input;
>     end
>   RUN :
>     if (do_stop) begin
>       next_state = IDLE;
>     end
>     if (do_wait) begin
>       next_count = count;
>     end
>     else if (count==0) begin
>       next_state = IDLE;
>     end
>   endcase
> end
> always @(posedge clk, negedge rst_n) begin
>   if (!rst_n) begin
>     count <= 0;
>     state <= IDLE;
>   end
>   else begin
>     count <= next_count;
>     state <= next_state;
>   end
> end
> ```
# Behavioral
- mimics the desired functionality of the hardware but is not necessarily synthesizable. There are no strict rules as long as the code generates the desired behavior. The guideline is to keep it simple and readable
- is often used to represent analog block, place holder code (RTL/gates not ready), and testbench code
- examples include: clock generator, delay cells
```
always begin
  if (!clk_en && clk==1'b1) begin
    wait (clk_en);
  end
  #5 clk = ~clk;
end
```
- The key difference between RTL and Behavioral is the ability to synthesize. It is behavioral if you see <code><font style="color: rgb(122,134,154);">\#</font></code> delay, <code><font style="color: rgb(122,134,154);">wait</font></code> statements, <code><font style="color: rgb(122,134,154);">while</font></code> loops, <code><font style="color: rgb(122,134,154);">force</font></code>/<code><font style="color: rgb(122,134,154);">release</font></code> statements, or hierarchical reference

# Gate-Level
- is described by gates and modules only
- no <code><font style="color: rgb(122,134,154);">always</font></code> blocks or <code><font style="color: rgb(122,134,154);">assign</font></code> statements
- this is a representative of the real gates in the hardware

# Netlist
- is a collection of Verilog modules used in the design
- it can be one or many files
- it can be a mix of RTL, Behavioral, and Structural
- usually it is mostly Structural, especially for large designs
