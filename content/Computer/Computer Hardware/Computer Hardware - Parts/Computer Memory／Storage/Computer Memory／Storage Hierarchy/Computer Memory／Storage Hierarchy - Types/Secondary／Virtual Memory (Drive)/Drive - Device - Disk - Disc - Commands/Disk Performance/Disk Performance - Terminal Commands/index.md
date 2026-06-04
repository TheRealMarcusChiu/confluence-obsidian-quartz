---
title: "Disk Performance - Terminal Commands"
created: 2020-06-10T15:55:09.330-05:00
modified: 2022-09-24T01:03:11.463-05:00
parent: "[[Disk Performance]]"
children: []
---
# hdparm
```
sudo hdparm -Tt /dev/sda

/dev/sda:
 Timing cached reads:   3600 MB in  2.00 seconds = 1800.21 MB/sec
 Timing buffered disk reads: 516 MB in  3.01 seconds = 171.54 MB/sec
```

<code></code>
```
sudo hdparm -v /dev/sda

/dev/sda:
 multcount     = 16 (on)
 IO_support    =  1 (32-bit)
 readonly      =  0 (off)
 readahead     = 256 (on)
 geometry      = 121601/255/63, sectors = 1953525168, start = 0
```
# dd

dd will give you information on write speed.

If the drive doesn't have a file system (and <strong>only then</strong>), use <code>of=/dev/sda</code>.

Otherwise, mount it on /tmp and write then delete the test output file.
```
dd if=/dev/zero of=/tmp/output bs=8k count=10k; rm -f /tmp/output

10240+0 records in
10240+0 records out
83886080 bytes (84 MB) copied, 1.08009 s, 77.7 MB/s
```
