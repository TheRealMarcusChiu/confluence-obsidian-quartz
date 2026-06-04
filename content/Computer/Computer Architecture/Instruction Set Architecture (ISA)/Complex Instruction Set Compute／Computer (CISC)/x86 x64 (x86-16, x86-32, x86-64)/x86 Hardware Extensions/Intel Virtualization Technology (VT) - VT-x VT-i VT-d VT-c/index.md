---
title: "Intel Virtualization Technology (VT) - VT-x VT-i VT-d VT-c"
created: 2019-12-23T16:48:10.754-06:00
modified: 2022-09-10T17:06:57.707-05:00
parent: "[[x86 Hardware Extensions]]"
children: []
---
# Intel Virtualization Technology (VT)

> [!expand-ui]- VT-x : Virtualization Technology for IA-32 and Intel 64 Processors
> <strong>Intel VT-x</strong> (previously known as <strong>Intel VT</strong>) is the implementation of an Intel [Secure Virtual Machine](http://de.wikipedia.org/wiki/Secure_Virtual_Machine) for the x86 [IA-32](http://de.wikipedia.org/wiki/IA-32) and [Intel 64](http://de.wikipedia.org/wiki/Intel_64) architectures. The older designation, “Intel VT” (without the “x”), continues to be used by many BIOS menus.
>
> VT-x is necessary for Intel systems in order to:
> - run domUs under Xen Hardware Virtual Machine (HVM) (as well as run a guest system under Windows)
> - run 64-bit guest systems under VMware
> - to run virtualization with KVM

> [!expand-ui]- VT-i : Virtualization Technology for Itanium Processors
> <strong>Intel VT-i</strong> is the implementation of an Intel [Secure Virtual Machine](http://de.wikipedia.org/wiki/Secure_Virtual_Machine) for the [IA-64](http://de.wikipedia.org/wiki/IA-64) architecture (Itanium).

> [!expand-ui]- VT-d : Virtualization Technology for Directed I/O
> <strong>Intel VT-d</strong> makes direct access to a PCI device possible for guest systems with the help of the Input/Output Memory Management Unit ([IOMMU](http://en.wikipedia.org/wiki/IOMMU)) provided. This allows a LAN card to be dedicated to a guest system, which makes attainment of increased network performance beyond that of an emulated LAN card possible. Of course, once such a direct access system has been implemented, live migration of the guest system is no longer possible. VMware can be configured for use with an activated Intel VT-d system using [VMware VMDirectPath for direct access to PCI cards](https://www.thomas-krenn.com/en/wikiEN/index.php?title=VMware_VMDirectPath_for_direct_access_to_PCI_cards&action=edit&redlink=1).
>
> Prerequisites for Intel VT-d
> - The chip set as well as the BIOS used must support Intel VT-d.
> 	- Requires the Intel Nehalem or later micro-architecture, such as that found in Xeon 34xx, 55xx and more recent, as well as other, desktop CPUs (see [A List of Intel CPUs](https://www.thomas-krenn.com/en/wikiEN/index.php?title=A_List_of_Intel_CPUs&action=edit&redlink=1)).
> 	- There are no special requirements placed on the CPUs themselves, since VT-d is a function of the chip set. The CPU need merely support VT in general.
>
> Information regarding the activation of Intel VT-d at the BIOS level (if supported by the Intel processor) can be found in the article, [Activating the Intel VT-d Virtualization Feature](https://www.thomas-krenn.com/en/wiki/Activating_the_Intel_VT-d_Virtualization_Feature).
>
> For additional information regarding VT-d, see:
> - [Understanding VT-d: Intel Virtualization Technology for Directed I/O](http://software.intel.com/en-us/blogs/2009/06/25/understanding-vt-d-intel-virtualization-technology-for-directed-io/) (Intel Software Network)
> - [Step by Step Guide on How to Enable VT-d and Perform Direct Device Assignment](http://software.intel.com/en-us/blogs/2009/02/24/step-by-step-guide-on-how-to-enable-vt-d-and-perform-direct-device-assignment/) (Intel Software Network)
> - [Intel Virtualization Technology for Directed I/O (VT-d): Enhancing Intel platforms for efficient virtualization of I/O devices](http://software.intel.com/en-us/articles/intel-virtualization-technology-for-directed-io-vt-d-enhancing-intel-platforms-for-efficient-virtualization-of-io-devices/) (Intel Software Network)
> - [VTdHowTo](http://wiki.xensource.com/xenwiki/VTdHowTo) (Xen Wiki)
> - [VMware VMDirectPath and Intel VT-d](http://www.youtube.com/watch?v=WhMkmTqBbUA) (YouTube)
> - [Intel Virtualization Technology for Directed I/O Architecture Specification](ftp://download.intel.com/technology/computing/vptech/Intel%28r%29_VT_for_Direct_IO.pdf) (Intel Corporation)

> [!expand-ui]- VT-c : Virtualization Technology for Connectivity
> <strong>Intel VT-c</strong> is a collection of input/output (I/O) virtualization technologies. These technologies include:
> - Intel I/O Acceleration Technology for the Reduction of CPU Loads
> - [Virtual Machine Device Queues (VMDq)](http://www.intel.com/network/connectivity/vtc_vmdq.htm) for the reduction of system latency, including:
> 	- [Virtual Machine Device Queues: Technical White Paper](http://www.intel.com/content/www/us/en/virtualization/vmdq-technology-paper.html) ([intel.com](http://intel.com))
> - Single Root I/O Virtualization (SR-IOV) for the improvement of network I/O throughput (also known as [Virtual Machine Direct Connect (VMDc)](http://www.intel.com/network/connectivity/solutions/vmdc.htm))
>
> The article, [Activating the SR-IOV Virtualization Feature](https://www.thomas-krenn.com/en/wikiEN/index.php?title=Activating_the_SR-IOV_Virtualization_Feature&action=edit&redlink=1) contains additional information about activating SR-IOV.
>
> For additional information regarding VT-c, see:
> - [http://www.intel.com/network/connectivity/solutions/virtualization.htm](http://www.intel.com/network/connectivity/solutions/virtualization.htm)
> - [Understanding VT-c: Virtualization Technology for Connectivity](http://software.intel.com/en-us/blogs/2009/09/30/understanding-vt-c-virtualization-technology-for-connectivity/) (Intel Software Network)
> - [PCI-SIG SR-IOV Primer](http://download.intel.com/design/network/applnots/321211.pdf)
>
> The following, as well as other, platforms support VT-c:
> - Intel 75xx systems (Intel 7500 Chipset Boxboro-EX)
