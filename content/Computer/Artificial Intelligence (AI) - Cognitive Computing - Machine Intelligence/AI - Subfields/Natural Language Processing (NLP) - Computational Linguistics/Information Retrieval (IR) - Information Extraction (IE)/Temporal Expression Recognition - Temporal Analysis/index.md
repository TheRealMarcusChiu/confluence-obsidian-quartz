---
title: "Temporal Expression Recognition - Temporal Analysis"
created: 2020-10-30T16:45:41.031-05:00
modified: 2020-10-30T16:54:06.864-05:00
parent: "[[Information Retrieval (IR) - Information Extraction (IE)]]"
children: []
---
the tasks of figuring out when events in a text happened and how they relate to each other in time
- <strong>Temporal Expressions</strong> - time related words/phrases (e.g. <code><font style="color: rgb(128,128,128);">Thursday</font></code>, <code><font style="color: rgb(128,128,128);">3PM</font></code>, <code><font style="color: rgb(128,128,128);">two days from now</font></code>, <code><font style="color: rgb(128,128,128);">next year</font></code>, etc)
- <strong>Temporal Expression Recognition</strong> - finds mentions of temporal expressions within unstructured text
- <strong>Temporal Analysis</strong> - maps temporal expressions onto specific calendar dates or times of day and then to use those times to situate events in time
	- includes the following subtasks:
		- anchoring temporal expressions relative to a root date or time
		- associating temporal expressions with the events in the text
		- arranging the events into a complete and coherent timeline
