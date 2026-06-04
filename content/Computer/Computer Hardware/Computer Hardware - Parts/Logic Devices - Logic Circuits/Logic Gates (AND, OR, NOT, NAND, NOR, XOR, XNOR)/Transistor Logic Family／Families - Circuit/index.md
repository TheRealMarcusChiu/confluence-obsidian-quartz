---
title: "Transistor Logic Family／Families - Circuit"
created: 2023-01-17T10:38:46.448-06:00
modified: 2026-05-21T01:38:40.698-05:00
parent: "[[Logic Gates (AND, OR, NOT, NAND, NOR, XOR, XNOR)]]"
children:
  - "[[Diode-Transistor Logic (DTL)]]"
  - "[[Resistor-Transistor Logic (RTL)]]"
  - "[[Transistor-Transistor Logic (TTL)]]"
---
###### Circuit
- is a model of computation in which input values proceed through a sequence of gates, each of which computes a function
- circuits of this kind provide a generalization of both:
	- Boolean circuits
	- the mathematical model for digital logic circuits

# Logic Family - Transistorized Logic Gate History

> [!expand]- Click here to expand...
> The first transistorized logic gates used [resistor-transistor logic](https://en.wikipedia.org/wiki/Resistor%E2%80%93transistor_logic) (RTL), using bipolar junction transistors (BJTs). Here is a NAND gate built using RTL:
>
> ![[Transistor Logic Family／Families - Circuit/1.png|200]]
>
> A NAND gate has its output low only when both inputs are high. You can see how this works in the circuit above; with both inputs high, both transistors are fully on, and the output is close to ground (actually it is at 2 x the collector-emitter voltage Vce of the transistors). If either input is low, one of the transistors will be off, and the output will be near the supply voltage (Vcc) minus the drop in the resistor R2.
>
> RTL had limited fan-in, and high power consumption. The next step was [diode-transistor logic](https://en.wikipedia.org/wiki/Diode%E2%80%93transistor_logic) (DTL), which used diodes in place of the resistors. It mitigated the fan-in problem of RTL.
>
> ![[Transistor Logic Family／Families - Circuit/2.png|200]]
>
> This works a little differently. When both inputs are high, both diodes are reversed biased, and the supply voltage is present at the transistor’s base, turning it on, causing the output to go to Vce. If either input is low, one of the diodes will be forward biased, causing the transistor to turn off.
>
> After DTL came[transistor-transistor logic](https://en.wikipedia.org/wiki/Transistor%E2%80%93transistor_logic) (TTL), which was the basis for the popular 7400 logic series.
>
> ![[Transistor Logic Family／Families - Circuit/3.png|200]]
>
> Note how multiple emitters were used in the NAND gate to replace diodes. They are functionally equivalent to multiple transistors where the bases and collectors are tied together. It also has a totem-pole output (the output is actively switched high or low), resulting in a lower output resistance than previous circuits.
>
> When all the inputs are high, the base–emitter junctions of the multiple-emitter transistor T1 are reverse-biased. Current flows from the positive rail, through the resistor R1 and into the base of the T1. This current passes through the base–emitter junction of T2, allowing it to conduct. When T2 is on, it activates T3 as well, driving a low voltage (Vce) to the output. T4’s base current is deprived, causing it to turn off.
>
> When either of the inputs is low, no current flows through the base of T2, causing it to stop conducting. T3 is turned off, and T4 operates in active region as a voltage follower causing the output of the gate to go high minus the drop in the resistor R4.
>
> Finally came [CMOS logic](https://en.wikipedia.org/wiki/CMOS), which is used in today’s computers. CMOS uses almost no power, except when it is switching. It also has high noise immunity.
>
> ![[Transistor Logic Family／Families - Circuit/4.png|150]]
>
> Now we are back to a circuit that looks more like the original RTL one at the beginning. If both inputs are high, both of the the transistors in series are turned on, driving the output to 2 x Vds. If either input is low, one of the transistors in series will be off, but one of the ones in parallel at the top will be on, driving the output to the supply voltage - Vds.
>
> NAND gates are universal, because, as the circuits below show, you can make a NOT, AND, OR, NOR, XOR, and XNOR from them:
>
> ![[Transistor Logic Family／Families - Circuit/5.jpeg|301]]
>
> NOR gates are also universal, and you can fabricate NOT, AND, NAND, OR, XOR, and XNOR from them in a similar fashion.
>
> The [Apollo Guidance Computer](https://en.wikipedia.org/wiki/Apollo_Guidance_Computer) was the first computer to use integrated circuits (ICs). Because they were so new, the designers chose to use just one type of device — an IC containing a single three-input NOR gate. The computer had 4,100 of them. The later Block II version (used in the crewed flights) used 2,800 ICs, each with dual three-input NOR gates. In each case, all of the logic in the computer was constructed of NOR gates. They could have also used all NAND gates instead
# Logic Family - Types
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

![[Transistor Logic Family／Families - Circuit/logic-families-classification.jpg|450]]
# Logic Family - Resources
- [https://www.electricveda.com/digital-electronics/logic-families-in-digital-electronics-ttl-cmos-and-ecl](https://www.electricveda.com/digital-electronics/logic-families-in-digital-electronics-ttl-cmos-and-ecl)
- 
> [!expand]- Click here to expand...
> ## DIGITAL INTEGRATED CIRCUITS
>
> <strong>Digital Integrated circuits</strong> are produced using several different circuit configurations and production technologies. Each such approach is called a specific <strong>logic family</strong>. <u>A <strong>logic family</strong> is a collection of different [integrated circuit chips](https://en.wikipedia.org/wiki/Integrated_circuit) that have similar input, output, and internal circuit characteristics, but they perform different <strong>logic gate</strong> functions such as <strong>AND</strong>, <strong>OR</strong>, <strong>NOT</strong>, etc.</u> The idea is that different logic gate functions, when fabricated in the form of an integrated circuit with the same approach, or which belongs to the same logic family, will have identical electrical characteristics (electrically compatible with each other). These families may vary by speed, power consumption, cost, voltage and current levels.
>
> In case of integrated circuits belonging to different logic families, [digital system](https://en.wikipedia.org/wiki/Digital_Systems) should ensure compatibility interfacing techniques. And that is the reason why we must be clear about different logic families and use the best combination of integrated circuits during the design of a digital system.
>
> The characteristics which are bound to be identical and used to compare performance are:
> 1. Supply voltage range
> 2. Speed of response
> 3. Dissipation of power
> 4. Input and output logic levels
> 5. Current sinking capability
> 6. Current sourcing capability
> 7. Flexibility
> 8. Noise immunity
> 9. Fan-out
>
> ## INTEGRATED CIRCUIT AND LOGIC FAMILY
>
> Many <strong>logic families</strong> were produced as individual components, each containing one or a few related basic logical functions, which could be used as "<strong>building-blocks</strong>" to create systems or as so-called "<strong>glue</strong>" to interconnect more complex integrated circuits. A logic family may also refer to a set of techniques used to implement logic within very large scale integrated circuits such as central processors, memories, or other complex functions. Some such logic families use static techniques to minimize design complexity. Other logic families, such as <strong>domino logic</strong>, use clocked dynamic techniques to minimize size, power consumption and delay.
>
> Before the widespread use of integrated circuits, various [<strong>solid-state</strong>](https://en.wikipedia.org/wiki/Solid-state_electronics) and [<strong>vacuum tube</strong>](https://en.wikipedia.org/wiki/Vacuum_tube) logic systems were used for logic circuitry operations. But these were not standardized and interactive as the integrated circuit devices. The most common logic family in modern semiconductor devices is <strong>Metal Oxide Semiconductor (MOS) logic</strong>, due to lower power consumption, small sized transistor, and high transistor density.
> ## WHAT IS LOGIC GATES?
>
> The electric circuits which perform logical operations are called <strong>Electric Gate</strong>. A <strong>Logic Gate</strong> is an electronic circuit that has two or more inputs but only one output. Logic follows well defined rules, producing predictable digital output from certain input.
> # Logic Gate
>
> Main Logic gates are <strong>AND, OR, NOT, NAND, NOR and XOR</strong>. Digital logic gates NAND and NOR are called universal logic gate because we can construct all other logic gates using NAND gate or NOR gate alone.
> ## HOW THE LOGIC GATES FUNCTION?
>
> In digital electronics, a gate is defined as an electronic circuit having only one output but two or more input. These electronic circuits consist of [p-n junction diodes](https://en.wikipedia.org/wiki/P-n_junction), transistors and resistors. Gates work with only two voltage levels at their input and output terminals with respect to ground or common, ie., the input and output voltages can have only two values. These values are typically chosen to be 0 Volt (zero volt) and some positive dc voltage value, say +5 Volt. For the 0 Volt logic level, it is customary to use the term that has two or more LOW (or the letter L) and the symbol 0 (zero). While referring to the positive voltage level, we use the term HIGH (or the letter H) or the number 1 (one). A signal appears at the output of a gate only for certain combinations of the input signals. This leads to a number of different types of gates. Gates enable us to perform several tasks which involve logical decision making, hence the nomenclature logic gates.
> ## TYPES OF LOGIC FAMILY
>
> The digital integrated circuits are designed using <strong>bipolar devices</strong> or <strong>Metal Oxide Semiconductor (MOS)</strong> or a combination of both. There are two kinds of semiconductor devices. The logic family which falls under the first kind <strong>Bipolar logic family</strong> and the other is <strong>Unipolar logic family</strong>.
> ### BIPOLAR LOGIC FAMILY
>
> There are two kinds of operations in bipolar integrated circuits: <strong>Saturated Bipolar Logic family</strong> and <strong>Non-saturated Bipolar Logic family</strong>.<u>Saturated Bipolar Logic Families are:</u>
> 1. Diode logic (DL)
> 2. Resistor Transistor Logic (RTL)
> 3. Diode Transistor Logic (DTL)
> 4. Integrated Injection Logic (IIL or I2L)
> 5. Transistor Transistor Logic (TTL)
>
> <u>Non-saturated Bipolar Logic Families are:</u>
> 1. Schottky TTL
> 2. Emitter Coupled Logic (ECL)
>
> ### UNIPOLAR LOGIC FAMILY
>
> Unipolar logic family consists of <strong>Metal Oxide Semiconductor (MOS) logic families</strong>. They are:
> 1. P-type MOS (PMOS) Logic
> 2. N-type MOS (NMOS) logic
> 3. Complementary MOS (CMOS) logic
> 4. Bipolar MOS (BiMOS) logic
> 5. Bipolar CMOS (BiCMOS) logic
>
> ## CLASSIFICATION OF LOGIC FAMILY
>
> Logic families are mainly classified as Bipolar Logic Families and Unipolar Logic Families.
> 1. <strong>Bipolar Logic Families:</strong> It mainly uses bipolar devices like diodes, transistors in addition to passive elements like resistors and capacitors. These are sub classified as saturated  bipolar logic family and unsaturated bipolar logic family.
> 	1. Saturated Bipolar Logic Family: In this family the transistors used in ICs are driven  into saturation. For example:
> 		1. Transistor-Transistor Logic (TTL)
> 		2. Resistor-Transistor Logic (RTL)
> 		3. Direct Coupled Transistor Logic (DCTL)
> 		4. Diode Transistor Logic (DTL)
> 		5. High Threshold Logic(HTL)
> 		6. Integrated Injection Logic (IIL or I 2 L)
> 	2. <strong>Unsaturated bipolar logic family:</strong> In this family the transistors used in IC is not  driven into saturation. For example:
> 		1. Schottky TTL
> 		2. Emitter Coupled Logic(ECL)
> 2. <strong>Unipolar Logic Families:</strong> It mainly uses Unipolar devices like MOSFETs in addition to  passive elements like resistors and capacitors. These logic families have the advantages of high speed and lower power consumption than Bipolar families. These are classified as:
> 	1. PMOS or P-Channel MOS Logic Family
> 	2. NMOS or N-Channel MOS Logic Family
> 	3. CMOS Logic Family
>
> ## FEATURES OF LOGIC FAMILIES
> 1. TTL - Transistor-Transistor Logic: Standard logic family; used for the longest time.
> 2. ECL - Emitter Coupled Logic: Suitable for systems requiring high-speed operations.
> 3. MOS - Metal Oxide Semiconductor Logic: Suitable for systems with high component density.
> 4. CMOS - Complementary Metal Oxide Semiconductor Logic: Suitable for systems with low power consumption (VLSI circuits). Gradually becomes the dominant logic family.
- TODO
