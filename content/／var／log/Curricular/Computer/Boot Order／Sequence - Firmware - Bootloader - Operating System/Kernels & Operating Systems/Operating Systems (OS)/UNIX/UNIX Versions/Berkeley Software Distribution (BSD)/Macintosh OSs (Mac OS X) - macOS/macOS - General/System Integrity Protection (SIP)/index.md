---
title: "System Integrity Protection (SIP)"
created: 2019-04-17T22:44:38.979-05:00
modified: 2019-08-31T00:08:52.413-05:00
parent: "[[macOS - General]]"
children: []
---
Security configuration is stored in [[Nonvolatile BIOS Memory (Firmware & Settings) - Boot Chip - CMOS RAM - Real-Time Clock (RTC)|NVRAM]] rather than in the [[Disk (Format - Filesystems／File-Systems (FS))|file system]] itself. As a result, this configuration applies to all installations of [[Macintosh OSs (Mac OS X) - macOS]] across the entire machine and persists across macOS installations that support <strong>System Integrity Protection</strong>.
## <strong>SIP - Status</strong>

You can check whether <strong>System Integrity Protection</strong> is currently enabled on your system by running the following command in the Terminal:
```bash
$ csrutil status
System Integrity Protection status: enabled.
```
## <strong>SIP - Enable or Disable</strong>

Note: To safeguard against disabling <strong>System Integrity Protection</strong> by modifying security configuration from another OS, the startup disk can no longer be set programmatically, such as by invoking the <code>bless(8)</code> command.

To enable or disable <strong>System Integrity Protection</strong>, you must boot to Recovery OS and run the <code>csrutil(1)</code> command from the Terminal.

Boot to Recovery OS by restarting your machine and holding down the Command and R keys at startup. <strong>System Integrity Protection</strong> can be configured using the <code>csrutil(1)</code> command.

Launch Terminal from the Utilities menu.

Enter the following command:
```bash
$ csrutil enable
```

After enabling or disabling <strong>System Integrity Protection</strong> on a machine, a reboot is required.
