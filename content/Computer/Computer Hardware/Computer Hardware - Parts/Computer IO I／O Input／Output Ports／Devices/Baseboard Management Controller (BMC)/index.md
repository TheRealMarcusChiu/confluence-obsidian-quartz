---
title: "Baseboard Management Controller (BMC)"
created: 2025-10-23T01:06:02.249-05:00
modified: 2025-10-23T01:08:52.773-05:00
parent: "[[Computer IO I／O Input／Output Ports／Devices]]"
children: []
---
###### Baseboard Management Controller (BMC)
````excerpt
- is a dedicated [[Central Processing Unit (CPU) - Central／Main Processor - Microprocessor (uP) - Microcontroller (uC) - Microcontroller Unit (MCU)|microcontroller]] on a server's [[Motherboard (MoBo)|motherboard]] that allows for remote monitoring and management of the server's hardware, independently of the main [[Central Processing Unit (CPU) - Central／Main Processor - Microprocessor (uP) - Microcontroller (uC) - Microcontroller Unit (MCU)|CPU]] and [[Operating Systems (OS)|operating system]]
````
^excerpt

# BMC - Ports

```merge-table
{
  "rows": [
    [
      {
        "content": "Port",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Protocol",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Function",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "623",
      "[[Remote Management Control Protocol (RMCP)|RMCP]]+",
      "IPMI: Standard port for [[Intelligent Platform Management Interface (IPMI)]] communications, used for out-of-band management."
    ],
    [
      "443",
      "[[Hyper Text Transfer Protocol Secure (HTTPS)|HTTPS]]",
      "Redfish/Web Interface: Secure web-based management and the Redfish API, which is a modern standard for server management."
    ],
    [
      "80",
      "[[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP]]",
      "Redfish/Web Interface: Unsecured web-based management and Redfish service root."
    ],
    [
      "7582",
      "[[KVM Switch (Keyboard Video Mouse)|KVM]]",
      "Secure KVM Redirection: Used for secure Keyboard, Video, and Mouse (KVM) redirection, allowing remote control of the server's console."
    ],
    [
      "5989",
      "HTTPS",
      "[CIM](https://www.google.com/search?cs=1&sca_esv=e64d541496755d8f&sxsrf=AE3TifPNmFr0FX5ovu0ARfFJGgpNjrkfPQ%3A1761199625515&q=CIM&sa=X&ved=2ahUKEwirpaHw07mQAxXflWoFHSZrCpYQxccNegQIDRAB&mstk=AUtExfD9ldV81lVgPLyFKUucyO9FVYfHl93budLqvzWnOYIOFHv5lblw1z33RMo1ETEa6rN1WrT26q6d5jImXOF7QOr1KdJSshr2XzJ3gtFl22tk3JTWgXw7_dT0kqvxYkxHu3p4o99XXcFSXXSdOyfr_FqYuoj1BGqIpt1C5sItznJCy77si4w1Q3TVpq33Nzu5HFCDLB0GAWhBhU-cFVb3421ZizpPhTphJgCo80mrZhVpi6_TSoVCZeRDOgT7Sfqru07XUFjqYbHDZYQ0-wDNEEB4&csui=3): CIM (Common Information Model) over HTTPS, often used in some server management environments."
    ]
  ]
}
```
