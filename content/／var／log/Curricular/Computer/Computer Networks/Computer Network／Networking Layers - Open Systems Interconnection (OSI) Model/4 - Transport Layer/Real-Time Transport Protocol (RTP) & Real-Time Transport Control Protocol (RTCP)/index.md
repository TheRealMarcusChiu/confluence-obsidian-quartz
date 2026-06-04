---
title: "Real-Time Transport Protocol (RTP) & Real-Time Transport Control Protocol (RTCP)"
created: 2019-04-07T13:31:56.368-05:00
modified: 2023-11-16T17:19:42.022-06:00
parent: "[[4 - Transport Layer]]"
children: []
---
###### Real-Time Transport Protocol (RTP) & Real-Time Transport Control Protocol (RTCP)
````excerpt
- are [[Computer Network／Networking Communication Protocols|network protocols]] that operate at the [[4 - Transport Layer|transport layer]]
- see also: [[Web Real-Time Communication (WebRTC)]]
````
^excerpt

# <strong>RTP</strong> and <strong>RTCP</strong> are used together

```merge-table
{
  "rows": [
    [
      {
        "content": "RTP",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "RTCP",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "used for the exchange of\n\nmultimedia data",
      "used to periodically send control information\n\nassociated with a certain data flow"
    ],
    [
      "uses even port number",
      "uses the next higher (odd) port number"
    ],
    [
      "usually uses UDP (but any\n\nother protocol works)",
      "usually uses the same as RTP"
    ]
  ]
}
```

two media streams using RTP would typically use different UDP port numbers
# Real-Time Transport Protocol (RTP)

> [!expand]- Click here to expand...
> includes a header field that defines a <em>profile </em>and one or more <em>formats (e.g. profile: video streaming, format: MPEG encoded)</em>
> ### RTP Format
> ![[Real-Time Transport Protocol (RTP) & Real-Time Transport Control Protocol (RTCP)/Screen Shot 2019-04-07 at 1.41.30 PM.png]]
> - <strong>V</strong> (2-bits) - RTP version
> - <strong>P</strong> (1-bit) - indicates RTP payload has been padded
> - <strong>X</strong> (1-bit) - extension bit used to indicate the presence of an extension header
> - <strong>CC</strong> (4-bit) - used to count the number of <em>contributing sources</em>
> - <strong>M</strong> (1-bit) - profile-specific use
> - <strong>PT</strong> (7-bit) - payload-type field indicates what type of multimedia data is carried in this packet. One possible use of this field would be to enable an application to switch from one coding scheme to another based on information about resource availability in the network or feedback on application quality
> - <strong>Sequence Number</strong> - enables the receiver of an RTP stream to detect missing and misordered packets. The sender simply increments the value by one for each transmitted packet
> - <strong>TimeStamp</strong> - enables the receiver to play back samples at the appropriate intervals and to enable different media streams to be synchronized
> - <strong>SSRC</strong> (32-bits) - uniquely identifies a single source of an RTP stream
> - <strong>CSRC</strong> (32-bits) - used only when a number of RTP streams pass through a mixer
>
> <strong>padding example</strong>
>
> ![[Real-Time Transport Protocol (RTP) & Real-Time Transport Control Protocol (RTCP)/Screen Shot 2019-04-07 at 1.46.33 PM.png|500]]
# Real-Time Transport Control Protocol (RTCP)

> [!expand]- Click here to expand...
> provides three main functions:
> 1. feedback on the performance of the application and the network
> 2. a way to correlate and synchronize different media streams that have come from the same sender
> 3. a way to convey the identity of a sender for display on a user interface
>
> RTCP defines a number of different packet types, including:
> - sender reports - enable active senders to a session to report transmission and reception statistics
> - receiver reports - enable receivers to report reception statistics
> - source descriptions - carry CNAMEs (e.g. [jdoe@cicada.cs.princeton.edu](mailto:jdoe@cicada.cs.princeton.edu)) and other sender description information. allowing CNAMEs to be bound to SSRC values in periodic RTCP messages enables a compact and efficient format for the SSRC
> - application-specific control packets
>
> RTCP has a set of mechanisms by which the participants scale back their reporting frequency as the number of participants increases. These rules are somewhat complex, but the basic goal is this: Limit the total amount of RTCP traffic to a small percentage (typically 5%) of the RTP data traffic. To accomplish this goal, the participants should know how much data bandwidth is likely to be in use (e.g., the amount to send three audio streams) and the number of participants. They learn the former from means outside RTP (known as session management, discussed at the end of this section), and they learn the latter from the RTCP reports of other participants. Because RTCP reports might be sent at a very low rate, it might only be possible to get an approximate count of the current number of recipients, but that is typically sufficient. Also, it is recommended to allocate more RTCP bandwidth to active senders, on the assumption that most participants would like to see reports from them — for example, to find out who is speaking
>
> Sender reports and receiver reports differ only in that the former includes some extra information about the sender. Both types of reports contain information about the data that was received from all sources in the most recent reporting period. The extra information in a sender report consists of:
> - a timestamp containing the actual time of day when this report was generated
> - the RTP timestamp corresponding to the time when the report was generated
> - cumulative counts of the packets and bytes sent by this sender since it began transmission
>
> Both sender and receiver reports contain one block of data per source that has been heard from since the last report. Each block contains the following statistics for the source in question:
> - its SSRC
> - the fraction of data packets from this source that were lost since the last report was sent (calculated by comparing the number of packets received with the number of packets expected; this last value can be determined from the RTP sequence numbers)
> - total number of packets lost from this source since the first time it was heard from
> - highest sequence number received from this source (extended to 32 bits to account for wrapping of the sequence number)
> - estimated interarrival jitter for the source (calculated by comparing the interarrival spacing of received packets with the expected spacing at transmission time)
> - last actual timestamp received via RTCP for this source
> - delay since the last sender report received via RTCP for this source
