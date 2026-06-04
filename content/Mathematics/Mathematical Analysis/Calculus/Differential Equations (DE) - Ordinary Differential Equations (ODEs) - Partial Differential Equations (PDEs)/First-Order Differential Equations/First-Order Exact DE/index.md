---
title: "First-Order Exact DE"
created: 2021-09-13T05:25:09.947-05:00
modified: 2021-09-13T05:25:09.947-05:00
parent: "[[First-Order Differential Equations]]"
children: []
---
### First-Order Exact DE - Form Definition

> [!expand]- Click here to expand...
> a first-order differential equation
> - 𝑀(𝑥,𝑦) + 𝑁(𝑥,𝑦)(𝑑𝑦/𝑑𝑥) = 0
>
> is of <strong>exact form</strong> if there exist an unknown function 𝜑(𝑥,𝑦) such that:
> - <font style="color: rgb(128,0,0);">(𝛿</font><font style="color: rgb(128,0,0);">𝜑</font><font style="color: rgb(128,0,0);">/𝛿𝑥)<font style="color: rgb(51,51,51);"> = </font></font>𝑀(𝑥,𝑦)
> - <font style="color: rgb(0,128,0);">(𝛿</font><font style="color: rgb(0,128,0);">𝜑</font><font style="color: rgb(0,128,0);">/𝛿𝑦)<font style="color: rgb(51,51,51);"> = 𝑁(𝑥,𝑦)</font></font>
>
> <font style="color: rgb(0,128,0);"><font style="color: rgb(51,51,51);">for more details:</font></font>
>
> > [!expand]- Click here to expand...
> > - <font style="color: rgb(255,102,0);">(𝛿/𝛿𝑥) \[𝜑(𝑥,𝑦)\]</font> = 0
> > - <font style="color: rgb(255,102,0);">(𝛿/𝛿𝑥)𝜑</font><font style="color: rgb(255,102,0);">(𝑥,𝑦) + (𝛿/𝛿𝑦)𝜑</font><font style="color: rgb(255,102,0);">(𝑥,𝑦)·(𝑑𝑦/𝑑𝑥)</font> = 0
> > - <font style="color: rgb(128,0,0);">(𝛿/𝛿𝑥)𝜑</font><font style="color: rgb(128,0,0);">(𝑥,𝑦)</font> + <font style="color: rgb(0,128,0);">(𝛿/𝛿𝑦)𝜑</font><font style="color: rgb(0,128,0);">(𝑥,𝑦)</font>·(𝑑𝑦/𝑑𝑥) = 0
> > - <font style="color: rgb(128,0,0);">(𝛿𝜑/𝛿𝑥)</font> + <font style="color: rgb(0,128,0);">(𝛿𝜑/𝛿𝑦)</font>·(𝑑𝑦/𝑑𝑥) = 0
> >
> > now we want:
> > - <font style="color: rgb(128,0,0);">(𝛿</font><font style="color: rgb(128,0,0);">𝜑</font><font style="color: rgb(128,0,0);">/𝛿𝑥)<font style="color: rgb(51,51,51);"> = </font></font>𝑀(𝑥,𝑦)
> > - <font style="color: rgb(0,128,0);">(𝛿</font><font style="color: rgb(0,128,0);">𝜑</font><font style="color: rgb(0,128,0);">/𝛿𝑦)<font style="color: rgb(51,51,51);"> = 𝑁(𝑥,𝑦)</font></font>
### First-Order Exact DE - Form Verification

> [!expand]- Click here to expand...
> a first-order differential equation
> - 𝑀(𝑥,𝑦) + 𝑁(𝑥,𝑦)(𝑑𝑦/𝑑𝑥) = 0
>
> assume that there is an unknown function 𝜑(𝑥,𝑦) such that:
> - 𝑀(𝑥,𝑦) = <font style="color: rgb(128,0,0);">(𝛿</font><font style="color: rgb(128,0,0);">𝜑</font><font style="color: rgb(128,0,0);">/𝛿𝑥)</font>
> - <font style="color: rgb(0,128,0);"><font style="color: rgb(51,51,51);">𝑁(𝑥,𝑦) = <font style="color: rgb(0,128,0);">(𝛿</font><font style="color: rgb(0,128,0);">𝜑</font><font style="color: rgb(0,128,0);">/𝛿𝑦)</font></font></font>
>
> from Calculus we know that the <em>mixed partials</em> are equal, in other words:
> - (𝛿/𝛿𝑦)(𝛿𝜑/𝛿𝑥) = (𝛿/𝛿𝑥)(𝛿𝜑/𝛿𝑦)
>
> thus we can substitute and get:
> - (𝛿/𝛿𝑦)𝑀(𝑥,𝑦) = (𝛿/𝛿𝑥)𝑁(𝑥,𝑦)
>
> now we plugin the functions for 𝑀(𝑥,𝑦) and 𝑁(𝑥,𝑦) then calculate the partial derivatives on each side. If they are equal then the DE is of exact form
### First-Order Exact DE - Solving It Method

> [!expand]- Click here to expand...
> based on: [TheLazyEngineer - YouTube](https://www.youtube.com/watch?v=eSptEOSVLZQ&list=PLee24bbe4wKTdWQY7qEkc4fjTUcfs7Zgc&index=13&ab_channel=TheLazyEngineer)
>
> given a first-order differential equation:
> - 𝑀(𝑥,𝑦) + 𝑁(𝑥,𝑦)·𝑦' = 0
>
> and initial condition:
> - 𝑦(𝑥) = ?
>
> we first verify that it is of exact form (detailed steps shown above)
> - we need to verify that the following holds:
> 	- (𝛿/𝛿𝑦)𝑀(𝑥,𝑦) = (𝛿/𝛿𝑥)𝑁(𝑥,𝑦)
> - substitute 𝑀(𝑥,𝑦) & 𝑁(𝑥,𝑦), caculate partial derivatives, then verify above equation holds
> - if it hold then the DE is of exact form
>
> if the DE is of exact form we could start to solve it
> 1. first we integrate 𝑀(𝑥,𝑦) with respect to 𝑑𝑥
> 	- ∫𝑀(𝑥,𝑦)𝑑𝑥 = <font style="color: rgb(128,0,0);">𝐹(</font><font style="color: rgb(128,0,0);">𝑥,𝑦) + 𝑔(𝑦)</font>
> 2. we know that <font style="color: rgb(128,0,0);">𝐹(</font><font style="color: rgb(128,0,0);">𝑥,𝑦) + 𝑔(𝑦)</font>equals the unknown function 𝜑(𝑥,𝑦)
> 	- 𝜑(𝑥,𝑦) = <font style="color: rgb(128,0,0);">𝐹(</font><font style="color: rgb(128,0,0);">𝑥,𝑦) + 𝑔(𝑦)</font>
> 3. but we don't know what <font style="color: rgb(128,0,0);">𝑔(𝑦) </font>is, so we need to solve for it:
> 	1. we know that:
> 		- 𝑑𝜑/𝑑𝑦 = <font style="color: rgb(255,102,0);">𝑁(𝑥,𝑦)</font>
> 	2. thus we differentiate <font style="color: rgb(128,0,0);">𝐹(</font><font style="color: rgb(128,0,0);">𝑥,𝑦) + 𝑔(𝑦)</font> with respect to 𝑦 and set it equal to <font style="color: rgb(255,102,0);">𝑁(𝑥,𝑦)</font>
> 		- 𝑑𝜑/𝑑𝑦 = <font style="color: rgb(255,102,0);">𝑁(𝑥,𝑦)</font>
> 		- (𝛿/𝛿𝑦)(<font style="color: rgb(128,0,0);">𝐹(</font><font style="color: rgb(128,0,0);">𝑥,𝑦) + 𝑔(𝑦)</font>) =<font style="color: rgb(255,102,0);"> 𝑁(𝑥,𝑦)</font>
> 	3. once the equation (𝛿/𝛿𝑦)(<font style="color: rgb(128,0,0);">𝐹(</font><font style="color: rgb(128,0,0);">𝑥,𝑦) + 𝑔(𝑦)</font>) =<font style="color: rgb(255,102,0);"> 𝑁(𝑥,𝑦)</font> is computed we solve for <font style="color: rgb(128,0,0);">𝑔(𝑦)</font>
> 4. next we come back to the equation <font style="color: rgb(128,0,0);">𝐹(</font><font style="color: rgb(128,0,0);">𝑥,𝑦) + 𝑔(𝑦)</font><font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);"> and plugin what we found at step 3.c<font style="color: rgb(77,81,86);"> for </font>𝑔(𝑦)</font></font>:
> 	1. 𝜑(𝑥,𝑦) = <font style="color: rgb(128,0,0);">𝐹(</font><font style="color: rgb(128,0,0);">𝑥,𝑦) + 𝑔(𝑦)</font>
> 	2. 𝜑(𝑥,𝑦) = <font style="color: rgb(128,0,0);">𝐹(</font><font style="color: rgb(128,0,0);">𝑥,𝑦)</font> + (thing from 3.c)
> 5. <font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);">next we take the original DE</font></font>
> 6. now we merge (4.b) and (5.f) and get:
> 	1. <font style="color: rgb(128,0,0);">𝐹(</font><font style="color: rgb(128,0,0);">𝑥,𝑦)</font> + (thing from 3.c) = 𝐶
> 7. next we apply the initial conditions to solve for 𝐶
> 8. once we solve for 𝐶 we plug the scalar back into:
> 	1. 𝐹(<font style="color: rgb(128,0,0);">𝑥,𝑦)</font> + (thing from 3.c) = 𝑠𝑐𝑎𝑙𝑎𝑟-𝐶
> 9. then we solve for 𝑦
### First-Order Exact DE - Solving It (Examples)

> [!expand]- Example 1
> based on: [TheLazyEngineer - YouTube](https://www.youtube.com/watch?v=N1zz_NgkMVU&list=PLee24bbe4wKTdWQY7qEkc4fjTUcfs7Zgc&index=14&ab_channel=TheLazyEngineer)
>
> given a first-order differential equation:
> - 2𝑥+𝑦<sup>2</sup> + 2𝑥𝑦·𝑦' = 0<font style="color: rgb(128,128,128);"> \# 𝑀(𝑥,𝑦) + 𝑁(𝑥,𝑦)·𝑦' = 0</font>
>
> and initial condition:
> - 𝑦(1) = 2
>
> we first verify that it is of exact form
> - we need to verify that the following holds:
> 	- (𝛿/𝛿𝑦)𝑀(𝑥,𝑦) = (𝛿/𝛿𝑥)𝑁(𝑥,𝑦)
> - substitute and verify:
> 	- (𝛿/𝛿𝑦)𝑀(𝑥,𝑦) = (𝛿/𝛿𝑥)𝑁(𝑥,𝑦)
> 	- (𝛿/𝛿𝑦)2𝑥+𝑦<sup>2</sup> = (𝛿/𝛿𝑥)2𝑥𝑦
> 	- 2𝑦 = 2𝑦
> - it holds, thus 2𝑥+𝑦<sup>2</sup> + 2𝑥𝑦·𝑦' = 0 is of exact form
>
> if the DE is of exact form we could start to solve it
> 1. first we integrate 𝑀(𝑥,𝑦) with respect to 𝑑𝑥
> 	- ∫𝑀(𝑥,𝑦)𝑑𝑥 = ∫(2𝑥+𝑦<sup>2</sup>)𝑑𝑥 = <font style="color: rgb(128,0,0);">𝑥<sup>2</sup> + 𝑥𝑦<sup>2</sup> + 𝑔(𝑦)</font>
> 2. we know that <font style="color: rgb(128,0,0);">𝑥<sup>2</sup> + 𝑥𝑦<sup>2</sup> + 𝑔(𝑦) </font>equals the unknown function 𝜑(𝑥,𝑦)
> 	- 𝜑(𝑥,𝑦) = <font style="color: rgb(128,0,0);">𝑥<sup>2</sup> + 𝑥𝑦<sup>2</sup> + 𝑔(𝑦)</font>
> 3. but we don't know what <font style="color: rgb(128,0,0);">𝑔(𝑦) </font>is, so we need to solve for it:
> 	1. we know that:
> 		- 𝑑𝜑/𝑑𝑦 = <font style="color: rgb(255,102,0);">𝑁(𝑥,𝑦) = 2𝑥𝑦</font>
> 	2. thus we differentiate <font style="color: rgb(128,0,0);">𝑥<sup>2</sup> + 𝑥𝑦<sup>2</sup> + 𝑔(𝑦)</font> with respect to 𝑦 and set it equal to 2𝑥𝑦
> 		- 𝑑𝜑/𝑑𝑦 = <font style="color: rgb(255,102,0);">𝑁(𝑥,𝑦) = 2𝑥𝑦</font>
> 		- (𝛿/𝛿𝑦)(<font style="color: rgb(128,0,0);">𝑥<sup>2</sup> + 𝑥𝑦<sup>2</sup> + 𝑔(𝑦)</font>) =<font style="color: rgb(255,102,0);"> 2𝑥𝑦</font>
> 		- 2𝑥𝑦 + 𝑔'(𝑦) =<font style="color: rgb(255,102,0);"> 2𝑥𝑦</font>
> 	3. thus we get:
> 		- 𝑔'(𝑦) = 0
> 		- 𝑑𝑔(𝑦)/𝑑𝑦 = 0
> 		- ∫𝑑𝑔(𝑦) = ∫0·𝑑𝑦
> 		- 𝑔(𝑦) = 0 + 𝑐 = 𝑐
> 4. next we come back to the equation <font style="color: rgb(128,0,0);">𝑥<sup>2</sup> + 𝑥𝑦<sup>2</sup> + 𝑔(𝑦)<font style="color: rgb(51,51,51);"> and plugin <font style="color: rgb(77,81,86);">𝑐 for </font>𝑔(𝑦)</font></font>:
> 	- 𝑥<sup>2</sup> + 𝑥𝑦<sup>2</sup> + 𝑔(𝑦) = 𝐶
> 	- <font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);">𝑥<sup>2</sup> + 𝑥𝑦<sup>2</sup> + 𝑐 = 𝐶</font></font>
> 	- <font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);">𝑥<sup>2</sup> + 𝑥𝑦<sup>2</sup>= 𝐶</font></font>
> 5. <font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);">now we know that:</font></font>
> 	1. <font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);">𝜑(𝑥,𝑦) = </font></font>𝑥<sup>2</sup> + 𝑥𝑦<sup>2</sup>= 𝐶
> 6. next we apply the initial condition 𝑦(1) = 2 to solve for 𝐶
> 	1. 1<sup>2</sup> + 1·2<sup>2</sup>= 𝐶
> 	2. 𝐶 = 5
> 7. the solution is then:
> 	1. 𝑥<sup>2</sup> + 𝑥𝑦<sup>2</sup>= 𝐶
> 	2. 𝑥<sup>2</sup> + 𝑥𝑦<sup>2</sup>= 5
> 	3. 𝑥<sup>2</sup> + 𝑥𝑦<sup>2</sup>- 5 = 0
> 	4. 𝑥𝑦<sup>2</sup>+ 𝑥<sup>2</sup>- 5 = 0
> 8. solve for 𝑦:
> 	1. 𝑦 = \[(5 - 𝑥<sup>2</sup>)/𝑥\]<sup>(1/2)</sup>
> 9. or using the quadratic equation:
> 	1. 
> 		1. 𝑥<sup>2</sup> + 𝑥𝑦<sup>2</sup>= 5
> 		2. 𝑥<sup>2</sup> + 𝑥𝑦<sup>2</sup>- 5 = 0
> 		3. 𝑥𝑦<sup>2</sup>+ 𝑥<sup>2</sup>- 5 = 0
> 	2. where:
> 		1. 𝑎 = 𝑥
> 		2. 𝑏 = 0
> 		3. 𝑐 = (𝑥<sup>2</sup>- 5)
> 	3. then:
> 		1. 𝑦 = \[±√(-4𝑥(𝑥<sup>2</sup>-5))\] / \[2𝑥\]
> 		2. 𝑦 = \[±√(-4𝑥<sup>3</sup>+ 20𝑥)\] / \[2𝑥\]
> 	4. hence 𝑦 equals either:
> 		1. 𝑦 = √(-4𝑥<sup>3</sup>+ 20𝑥) / (2𝑥)
> 		2. 𝑦 = -√(-4𝑥<sup>3</sup>+ 20𝑥) / (2𝑥)
