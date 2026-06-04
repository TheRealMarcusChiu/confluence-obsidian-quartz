---
title: "SQL - Transaction Control Language (TCL)"
created: 2019-12-09T23:24:46.545-06:00
modified: 2023-02-24T17:57:23.403-06:00
parent: "[[Structured Query Language (SQL)]]"
children: []
---
###### SQL - Transaction Control Language (TCL)
````excerpt
- is a type of [[Structured Query Language (SQL)]] used to manage the changes made by [[SQL - Data Manipulation／Query Language (DML／DQL)|SQL - Data Manipulation/Query Language (DML/DQL)]] statements. It allows statements to be grouped together into logical transactions
- these include:
	- BEGIN TRANSACTION - marks the starting point of an explicit, local transaction. This increments @@TRANCOUNT by 1
	- COMMIT TRANSACTION - marks the end of a successful implicit or explicit transaction
	- ROLLBACK TRANSACTION - rolls back an explicit or implicit transaction to the beginning of the transaction, or to a save-point inside the transaction
````
^excerpt
