---
title: "Decibel-Milliwatts (dBm)"
created: 2023-04-15T17:25:59.866-05:00
modified: 2023-04-16T09:27:31.377-05:00
parent: "[[Decibels (dB)]]"
children: []
---
###### Decibel-Milliwatts (dBm)
````excerpt
- is a unit of level used to indicate that a power level is expressed in [[Decibels (dB)|decibels (dB)]] with reference to one milliwatt (mW)
- it is used in radio, microwave, and fiber-optical communication networks as a convenient measure of absolute power because of its capability to express both very large and very small values in a short form. dBW is a similar unit, referenced to one watt (1,000 mW)
````
^excerpt

# bDm - Unit Conversions

A power level of 0 dBm corresponds to a power of 1 milliwatt. A 10 dB increase in level is equivalent to a ten-fold increase in power. Therefore, a 20 dB increase in level is equivalent to a 100-fold increase in power. A 3 dB increase in level is approximately equivalent to doubling the power, which means that a level of 3 dBm corresponds roughly to a power of 2 mW. Similarly, for each 3 dB decrease in level, the power is reduced by about one-half, making −3 dBm correspond to a power of about 0.5 mW.

To express an arbitrary power 𝑃 in 𝑚𝑊 as 𝑥 in 𝑑𝐵𝑚, the following expression may be used:
- $x = 10\log_{10}(\dfrac{P}{1\ mW})$

Conversely, to express an arbitrary power level 𝑥 in 𝑑𝐵𝑚, as 𝑃 in 𝑚𝑊:
- $P = 1\ mW \cdot 10^{x/10}$

# dBm - Examples

```merge-table
{
  "rows": [
    [
      {
        "content": "Power level",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Power",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Notes",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      "526 dBm",
      "3.6×10<sup>49</sup> W",
      "[Black hole collision](https://en.wikipedia.org/wiki/First_observation_of_gravitational_waves), the power radiated in gravitational waves following the collision [GW150914](https://en.wikipedia.org/wiki/First_observation_of_gravitational_waves), estimated at 50 times the power output of all the stars in the observable universe."
    ],
    [
      "420 dBm",
      "1×10<sup>39</sup> W",
      "[Cygnus A](https://en.wikipedia.org/wiki/Cygnus_A), one of the most powerful radio sources in the sky"
    ],
    [
      "296 dBm",
      "3.846×10<sup>26</sup> W",
      "The total power output of the Sun"
    ],
    [
      "120 dBm",
      "1 GW",
      "Experimental high-power microwave (HPM) generation system, 1GW at 2.32 GHz for 38 ns"
    ],
    [
      "105 dBm",
      "32 MW",
      "[AN/FPS-85 Phased Array Space Surveillance Radar](https://en.wikipedia.org/wiki/Eglin_AFB_Site_C-6), claimed by the US Space Force as the most powerful radar in the world."
    ],
    [
      "95.5 dBm",
      "3,600 kW",
      "[High-frequency Active Auroral Research Program](https://en.wikipedia.org/wiki/High-frequency_Active_Auroral_Research_Program) maximum power output, the most powerful shortwave station in 2012"
    ],
    [
      "80 dBm",
      "100 kW",
      "The typical [transmission power](https://en.wikipedia.org/wiki/Effective_radiated_power) of [FM radio](https://en.wikipedia.org/wiki/FM_radio) station with 50-kilometer (31 mi) range"
    ],
    [
      "62 dBm",
      "1.588 kW = 1,588 W",
      "1,500 W is the maximal legal power output of a US [ham radio](https://en.wikipedia.org/wiki/Ham_radio) station."
    ],
    [
      "60 dBm",
      "1 kW = 1,000 W",
      "Typical combined radiated RF power of [microwave oven](https://en.wikipedia.org/wiki/Microwave_oven) elements"
    ],
    [
      "55 dBm",
      "~300 W",
      "Typical single-channel RF output power of a [Ku-band](https://en.wikipedia.org/wiki/Ku-band) [geostationary satellite](https://en.wikipedia.org/wiki/Geostationary_satellite)"
    ],
    [
      "50 dBm",
      "100 W",
      "Typical total [thermal radiation emitted by a human body](https://en.wikipedia.org/wiki/Black-body_radiation#Human-body_emission), peaks at 31.5 THz (9.5 μm)\n\nTypical maximal output RF power from a ham radio [HF](https://en.wikipedia.org/wiki/High_frequency) transceiver"
    ],
    [
      "40 dBm",
      "10 W",
      "Typical [power-line communication](https://en.wikipedia.org/wiki/Power-line_communication) (PLC) transmission power"
    ],
    [
      "37 dBm",
      "5 W",
      "Typical maximal output RF power from a handheld ham radio VHF/UHF transceiver"
    ],
    [
      "36 dBm",
      "4 W",
      "Typical maximal output power for a [citizens band radio](https://en.wikipedia.org/wiki/Citizens_band_radio) station (27 MHz) in many countries"
    ],
    [
      "33 dBm",
      "2 W",
      "Maximal output from a [UMTS](https://en.wikipedia.org/wiki/UMTS)/[3G](https://en.wikipedia.org/wiki/3G) mobile phone (power class 1 mobile)\n\nMaximal output from a GSM850/900 mobile phone"
    ],
    [
      "30 dBm",
      "1 W = 1000 [mW](https://en.wikipedia.org/wiki/Milliwatt)",
      "DCS or GSM 1,800/1,900 MHz mobile phone. [EIRP](https://en.wikipedia.org/wiki/EIRP) IEEE 802.11a (20 MHz-wide channels) in either 5 GHz subband 2 (5,470–5,725 MHz) provided that transmitters are also IEEE 802.11h-compliant, <em>or</em> [U-NII](https://en.wikipedia.org/wiki/U-NII)-3 (5,725–5,825 MHz). The former is EU only, the latter is US only. Also, maximal power is allowed by the FCC for American amateur radio licensees to fly [radio-controlled aircraft](https://en.wikipedia.org/wiki/Radio-controlled_aircraft) or operate RC models of any other type on amateur radio bands in the US."
    ],
    [
      "29 dBm",
      "794 mW",
      ""
    ],
    [
      "28 dBm",
      "631 mW",
      ""
    ],
    [
      "27 dBm",
      "500 mW",
      "Typical [cellular phone](https://en.wikipedia.org/wiki/Cellular_phone) transmission power\n\nMaximal output from a UMTS/3G mobile phone (power class 2 mobiles)"
    ],
    [
      "26 dBm",
      "400 mW",
      ""
    ],
    [
      "25 dBm",
      "316 mW",
      ""
    ],
    [
      "24 dBm",
      "251 mW",
      "Maximal output from a UMTS/3G mobile phone (power class 3 mobiles)\n\n1,880–1,900 MHz [DECT](https://en.wikipedia.org/wiki/DECT) (250 mW per 1,728 kHz channel). [EIRP](https://en.wikipedia.org/wiki/EIRP) for wireless LAN IEEE 802.11a (20 MHz-wide channels) in either the 5 GHz subband 1 (5,180–5,320 MHz) or [U-NII](https://en.wikipedia.org/wiki/U-NII)-2 and -W ranges (5,250–5,350 MHz & 5,470–5,725 MHz, respectively). The former is EU only, the latter is US only."
    ],
    [
      "23 dBm",
      "200 mW",
      "[EIRP](https://en.wikipedia.org/wiki/EIRP) for IEEE 802.11n wireless LAN 40 MHz-wide (5 mW/MHz) channels in 5 GHz subband 4 (5,735–5,835 MHz, US only) or 5 GHz subband 2 (5,470–5,725 MHz, EU only). This also applies to 20 MHz-wide (10 mW/MHz) IEEE 802.11a wireless LAN in 5 GHz subband 1 (5,180–5,320 MHz) <em>if</em> also IEEE 802.11h-compliant (otherwise only 3 mW/MHz → 60 mW when unable to dynamically adjust transmission power, and only 1.5 mW/MHz → 30 mW when a transmitter also cannot [dynamically select frequency](https://en.wikipedia.org/wiki/Dynamic_Frequency_Selection))."
    ],
    [
      "22 dBm",
      "158 mW",
      ""
    ],
    [
      "21 dBm",
      "125 mW",
      "Maximal output from a UMTS/3G mobile phone (power class 4 mobiles)"
    ],
    [
      "20 dBm",
      "100 mW",
      "[EIRP](https://en.wikipedia.org/wiki/EIRP) for IEEE 802.11b/g wireless LAN 20 MHz-wide channels in the 2.4 GHz [Wi-Fi](https://en.wikipedia.org/wiki/Wi-Fi)/[ISM band](https://en.wikipedia.org/wiki/ISM_band) (5 mW/MHz).\n\n[Bluetooth](https://en.wikipedia.org/wiki/Bluetooth) Class 1 radio. Maximal output power from unlicensed [AM transmitter](https://en.wikipedia.org/w/index.php?title=AM_transmitter&action=edit&redlink=1) per US [FCC](https://en.wikipedia.org/wiki/Federal_Communications_Commission) rules 15.219"
    ],
    [
      "19 dBm",
      "79 mW",
      ""
    ],
    [
      "18 dBm",
      "63 mW",
      ""
    ],
    [
      "17 dBm",
      "50 mW",
      ""
    ],
    [
      "15 dBm",
      "32 mW",
      "Typical [wireless LAN](https://en.wikipedia.org/wiki/Wireless_LAN) transmission power in laptops"
    ],
    [
      "10 dBm",
      "10 mW",
      ""
    ],
    [
      "7 dBm",
      "5.0 mW",
      "Common power level required to test the [automatic gain control](https://en.wikipedia.org/wiki/Automatic_gain_control) circuitry in an AM receiver"
    ],
    [
      "6 dBm",
      "4.0 mW",
      ""
    ],
    [
      "5 dBm",
      "3.2 mW",
      ""
    ],
    [
      "4 dBm",
      "2.5 mW",
      "Bluetooth Class 2 radio, 10 m range"
    ],
    [
      "3 dBm",
      "2.0 mW",
      ""
    ],
    [
      "2 dBm",
      "1.6 mW",
      ""
    ],
    [
      "1 dBm",
      "1.3 mW",
      ""
    ],
    [
      "0 dBm",
      "1.0 mW = 1000 μW",
      "Bluetooth standard (Class 3) radio, 1 m range"
    ],
    [
      "−1 dBm",
      "794 μW",
      ""
    ],
    [
      "−3 dBm",
      "501 μW",
      ""
    ],
    [
      "−5 dBm",
      "316 μW",
      ""
    ],
    [
      "−10 dBm",
      "100 μW",
      "Maximal received signal power of [wireless network](https://en.wikipedia.org/wiki/Wireless_network) (802.11 variants)"
    ],
    [
      "−13 dBm",
      "50.12 μW",
      "Dial tone for the [Precise Tone Plan](https://en.wikipedia.org/wiki/Precise_Tone_Plan) found on [public switched telephone networks](https://en.wikipedia.org/wiki/Public_switched_telephone_network) in [North America](https://en.wikipedia.org/wiki/North_America)"
    ],
    [
      "−20 dBm",
      "10 μW",
      ""
    ],
    [
      "−30 dBm",
      "1.0 μW = 1000 [nW](https://en.wikipedia.org/wiki/Watt#Multiples)",
      ""
    ],
    [
      "−40 dBm",
      "100 [nW](https://en.wikipedia.org/wiki/Watt#Multiples)",
      ""
    ],
    [
      "−50 dBm",
      "10 nW",
      ""
    ],
    [
      "−60 dBm",
      "1.0 nW = 1000 [pW](https://en.wikipedia.org/wiki/Watt#Multiples)",
      "The [Earth](https://en.wikipedia.org/wiki/Earth) receives one nanowatt per square meter from a [magnitude](https://en.wikipedia.org/wiki/Apparent_magnitude) +3.5 [star](https://en.wikipedia.org/wiki/Star)"
    ],
    [
      "−70 dBm",
      "100 [pW](https://en.wikipedia.org/wiki/Watt#Multiples)",
      ""
    ],
    [
      "−73 dBm",
      "50.12 pW",
      "\"S9\" signal strength, a strong signal, on the [S meter](https://en.wikipedia.org/wiki/S_meter) of a typical [ham](https://en.wikipedia.org/wiki/Amateur_radio) or [shortwave radio receiver](https://en.wikipedia.org/wiki/Shortwave_radio_receiver)"
    ],
    [
      "−80 dBm",
      "10 pW",
      ""
    ],
    [
      "−100 dBm",
      "0.1 pW",
      "Minimal received signal power of [wireless network](https://en.wikipedia.org/wiki/Wireless_network) (802.11 variants)"
    ],
    [
      "−111 dBm",
      "0.008 pW = 8 [fW](https://en.wikipedia.org/wiki/Watt#Multiples)",
      "The [thermal noise floor](https://en.wikipedia.org/wiki/Johnson%E2%80%93Nyquist_noise) for commercial [GPS](https://en.wikipedia.org/wiki/GPS) single-channel signal bandwidth (2 MHz)"
    ],
    [
      "−127.5 dBm",
      "0.178 fW = 178 [aW](https://en.wikipedia.org/wiki/Watt#Multiples)",
      "Typical received signal power from a [GPS satellite](https://en.wikipedia.org/wiki/GPS_satellite)"
    ],
    [
      "−174 dBm",
      "0.004 aW = 4 [zW](https://en.wikipedia.org/wiki/Watt#Multiples)",
      "The thermal noise floor for 1 Hz bandwidth at room temperature (20 °C)"
    ],
    [
      "−192.5 dBm",
      "0.056 [zW](https://en.wikipedia.org/wiki/Watt#Multiples) = 56 [yW](https://en.wikipedia.org/wiki/Watt#Multiples)",
      "The thermal noise floor for 1 Hz bandwidth in outer space (4 [kelvins](https://en.wikipedia.org/wiki/Kelvin))"
    ],
    [
      "−∞ dBm",
      "0 W",
      "Zero power is not well-expressed in dBm (value is [negative infinity](https://en.wikipedia.org/wiki/Negative_infinity))"
    ]
  ]
}
```
