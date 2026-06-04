---
title: "UNIX - Performance Observability Commands"
created: 2022-03-12T00:37:15.998-06:00
modified: 2022-03-12T00:49:05.190-06:00
parent: "[[UNIX - Shell Commands]]"
children: []
---
- vmstat - reports information about processes, memory, paging, block IO, traps, and CPU activity
- iostat - reports CPU and input/output statistics of the system
- netstat - displays statistical data related to IP, TCP, UDP, and ICMP protocols
- lsof - lists open files of the current system
- pidstat - monitors the utilization of system resources by all or specified processes, including CPU, memory, device IO, task switching, threads, etc
```merge-table
{
  "rows": [
    [
      "- strace\n- ltrace\n- ss\n- nstat\n- opensnoop\n- lsof\n- fatrace\n- filelife\n- pcstat\n- perf\n- Ftrace\n- LTTng\n- BCC\n- bpftrace\n- ext4dist\n- ext4slower\n- iostat\n- biosnoop\n- biolatency\n- biotop\n- blktrace\n- SCSI log\n- swapon\n- ethtool\n- snmpget\n- lldptool\n- nicstat\n- netstat\n- ip\n- mdflush",
      "- perf\n- tiptop\n- tcpdump\n- tcplife\n- tcpretrace\n- udpconnect\n- numastat\n- vmstat\n- slabtop\n- free\n- hardirqs\n- criticalstat\n- top\n- atop\n- ps\n- pidstat\n- execsnoop\n- mpstat\n- profile\n- runqlen\n- offcputime\n- softtirqs\n- turbostat\n- showboost\n- rdmsr\n- gethostlatency\n- sar\n- /proc\n- dmesg\n- dstat",
      "![[UNIX - Performance Observability Commands/linux-performance-observability-tools.jpeg|700]]"
    ]
  ],
  "tableStyle": "letter-spacing: 0.0px;"
}
```
