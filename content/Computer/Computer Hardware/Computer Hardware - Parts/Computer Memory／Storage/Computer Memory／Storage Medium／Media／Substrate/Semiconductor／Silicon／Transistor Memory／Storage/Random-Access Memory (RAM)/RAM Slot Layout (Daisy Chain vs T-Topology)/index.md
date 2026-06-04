---
title: "RAM Slot Layout (Daisy Chain vs T-Topology)"
created: 2024-09-22T22:01:34.496-05:00
modified: 2024-09-22T23:09:55.009-05:00
parent: "[[Random-Access Memory (RAM)]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "Daisy Chain",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "T-Topology",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "![[RAM Slot Layout (Daisy Chain vs T-Topology)/ram-layout--daisy-chain.png]]",
      "![[RAM Slot Layout (Daisy Chain vs T-Topology)/ram-layout--t-topology.png]]"
    ],
    [
      "- faster with 4 DIMMs",
      "- faster with 2 DIMMS\n- better for overclocking"
    ]
  ]
}
```

All regular mainboards and desktop CPU models have a [[RAM Channels (Single／One／1 - Multi - Dual／Two／2 Quad／Four／4 Hexa／Six／6 Octa／Eight／8 Dodeca／Twelve／12 Channels) Memory System／Architecture|dual-channel memory]] system. Since a lot of boards offer four RAM slots, a pair of two slots have to each form a RAM channel. So the four RAM slots are not individually addressed, but in pairs, as two channels. The different ways to connect the RAM slot pairs on the board are either "Daisy chain" or "T-Topology". This RAM slot layout decision - the way the slots are connected - has a big influence on how many modules (two or four) the board works best with.

Here is a slide from an MSI presentation, showing that almost all of today's boards have a "daisy chain" memory slot layout. This layout heavily prefers two-module-operation. The presentation is a bit older, but it's safe to say that the the vast majority of recent mainboards (for AMD and Intel) also have a daisy chain layout, and it's confirmed in several reviews. Especially MSI are known to use this layout on almost all their modern boards. For other mainboard makers, it depends on the board model, but they will also tend to prefer this layout.

Daisy chain means that the slot pairs are connected one after the other, and therefore optimized for two modules total. The right slot of each channel is the end point.
Using two RAM modules, they are to be inserted into slot 2 and 4 counted from the left as per the mainboard manual. Meaning, into the second slot of each channel and thus the end point. The reason is, this puts them at the very end of the PCB traces coming from the CPU, which is important for the electrical properties.
PCB (printed circuit board) traces are the thin signal lines that are visible on the mainboard, especially between the CPU and the RAM slots.

Why is this important? The PCB traces, going from the [[Memory Controller - Memory Chip Controller (MCC) - Memory Controller Unit (MCU)|memory controller]] contacts of the CPU, to each contact of the RAM slots, are optimized to result in exactly the same distance between all those points. They are essentially "zig-zagging" across the board for an electrically ideal layout, making a few extra turns if a direct line would lead to an uneven distance.

This is done so that, with two modules, a) each RAM module is at the very end of the electrical traces coming from the CPU's memory controller, and b) each module has exactly the same distance to the memory controller across all contacts. We are dealing with nanosecond-exact timings, so all this matters.

On a mainboard with a daisy-chain RAM slot layout, this optimization is done with only two modules in mind, which are in slot 2 and 4 (on the board, those slots are called A2 and B2). This is the configuration that most buyers would use, and it also results in the best overclocking potential. This way, the mainboard makers can boast with higher RAM overclocking frequencies when advertising the board, and the majority of buyers will have the ideal solution with two RAM modules.

Note: Never populate slots 1 and 3 first. When putting the modules into slot 1 and 3, the empty slots 2 and 4 would be similar to having some loose wires hanging from the end of each RAM contact, creating unwanted signal reflections and so on. So with two modules, they always need to go into the second slot of each memory channel (slot 2+4 aka A2 and B2), to not have "loose ends" after each RAM module.

Now the interesting question. What happens when we populate all four slots on a mainboard with a daisy-chain slot layout? Well, the module in the second and fourth slot become "daisy-chained" after the modules in the first and third slot. This completely worsens the electrical properties of the whole memory system.

With four modules, there are now two modules per channel, and the two pairs of a channel don't have the same distance from the memory controller anymore. That's because the PCB traces go to the first slot, and then over to the second slot. This daisy-chaining - with the signal lines going to the first and then to the second module of a memory channel - introduces a lot of unwanted electrical handicaps when using four modules. The signal quality worsens considerably in this case.

Only with a "T-Topology" slot layout, the PCB traces have exactly the same length across all four slots, which would provide much better properties for four-module operation. But mainboards with T-Topology have gone a bit out of fashion, since most people use just two modules. Plus the memory OC numbers look much better with a daisy chain layout and two modules. So if the mainboard makers were to use T-topology on a board, they couldn't advertise with such high overclocking numbers, and people would think the board is worse (and it actually would be, for only two modules).
