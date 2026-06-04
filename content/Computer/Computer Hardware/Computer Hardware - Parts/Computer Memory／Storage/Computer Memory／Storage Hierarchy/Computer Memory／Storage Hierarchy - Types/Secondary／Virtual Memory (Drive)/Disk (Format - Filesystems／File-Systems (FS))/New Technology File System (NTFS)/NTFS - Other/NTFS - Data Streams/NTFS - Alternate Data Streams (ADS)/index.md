---
title: "NTFS - Alternate Data Streams (ADS)"
created: 2020-06-15T23:11:31.329-05:00
modified: 2020-06-15T23:20:15.889-05:00
parent: "[[NTFS - Data Streams]]"
children: []
---
<strong>Alternate data streams (ADS)</strong> allow more than one data stream to be associated with a filename
- The filename format is

<span style="white-space: pre-wrap"><code>     filename:streamname</code></span>

- For example,

<span style="white-space: pre-wrap"><code>     "text.txt:extrastream"</code></span>

- Alternate streams are not listed in Windows Explorer

the size of data in alternate streams is not included in the file's size

only the main stream of a file is preserved when it is copied to a FAT-formatted USB drive, attached to an email, or uploaded to a website. As a result, using alternate streams for critical data may cause problems
### ADS - Example

an example of ADS usage by the applications is when a small ADS is added by the Internet Explorer and other Internet browsers to mark files that have been downloaded form the Internet

because downloaded content may be unsafe to run locally, the local OS shell will ask the user for confirmation before opening downloaded file

the user can open the properties dialog and drop the warning flag. the result is that ADS attribute is simply removed from the [[NTFS - MFT File Record／Entry|MFT entry]]
