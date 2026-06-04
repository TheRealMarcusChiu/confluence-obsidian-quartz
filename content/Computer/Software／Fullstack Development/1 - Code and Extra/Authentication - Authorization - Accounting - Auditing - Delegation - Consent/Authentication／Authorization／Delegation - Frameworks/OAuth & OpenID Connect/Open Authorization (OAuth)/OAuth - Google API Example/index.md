---
title: "OAuth - Google API Example"
created: 2020-12-29T15:39:50.498-06:00
modified: 2022-02-06T05:27:07.945-06:00
parent: "[[Open Authorization (OAuth)]]"
children: []
---
debuggers:
- [https://oauthdebugger.com/](https://oauthdebugger.com/)
- [https://developers.google.com/oauthplayground/](https://developers.google.com/oauthplayground/)

# Create Google OAuth Credential
- goto: [https://console.developers.google.com/apis/credentials](https://console.developers.google.com/apis/credentials)
- click CREATE CREDENTIALS
- choose OAuth Client ID
- choose Web Application
- add the following Authorized Redirect URI
	- [https://oauthdebugger.com/debug](https://oauthdebugger.com/debug)
- click CREATE

take note of:
- client id
- client secret

# Test the Created Google OAuth
- goto: [https://oauthdebugger.com/](https://oauthdebugger.com/)
- fill out form as followed
- we are going to access the <code><font style="color: rgb(128,128,128);">profile</font></code> scope of a Google Account

![[OAuth - Google API Example/oauthdebugger-1.png|400x735]]

Click SEND REQUEST

This redirects to google account login page

![[OAuth - Google API Example/google-redirect.png|500x429]]

on successful login, it redirects back to [https://oauthdebugger/debug](https://oauthdebugger/debug)

![[OAuth - Google API Example/oauthdebugger-2.png|400x401]]

Next use the returned Authorization Code to get the Access/Bearer Token from [https://oauth2.googleapis.com/token](https://oauth2.googleapis.com/token)

![[OAuth - Google API Example/postman-get-access-token.png|700x335]]

Use the returned Access Token to access the Resource Owner's data via making a API call to a Resource Server

![[OAuth - Google API Example/postman-use-access-token.png|700]]

now we have received the Google Account's profile information
