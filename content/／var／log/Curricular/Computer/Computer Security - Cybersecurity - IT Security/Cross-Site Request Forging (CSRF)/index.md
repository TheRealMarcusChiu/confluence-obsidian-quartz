---
title: "Cross-Site Request Forging (CSRF)"
created: 2022-01-05T17:10:03.012-06:00
modified: 2022-01-05T17:37:01.480-06:00
parent: "[[Computer Security - Cybersecurity - IT Security]]"
children: []
---
# CSRF - HTTP POST Example

Assume <code><font style="color: rgb(122,134,154);">bank.com</font></code> provides a form that allows transferring money from a currently logged-in user to another bank account.

An example HTTP request may look like (for additional details on HTTP headers see: [[HTTP Cookie (Web Cookie, Internet Cookie, Browser Cookie, or Cookie)]] and [[HTTP - Headers - Host vs Origin|Host]])
```
POST /transfer HTTP/1.1
Host: bank.com
Cookie: JSESSIONID=randomid; Domain=bank.example.com; Secure; HttpOnly
Content-Type: application/x-www-form-urlencoded

amount=100.00&routingNumber=1234&account=9876
```

Now a user logs into <code><font style="color: rgb(122,134,154);">bank.com</font></code>, then without logging out, visit an evil website. The evil website contains an HTML page with the following form
```
<form action="https://bank.com/transfer" method="post">
	<input type="hidden" name="amount" value="100.00"/>
	<input type="hidden" name="routingNumber" value="evilsRoutingNumber"/>
	<input type="hidden" name="account" value="evilsAccountNumber"/>
	<input type="submit" value="Win Money!"/>
</form>
```

The user likes to win money, so they click on the submit button. In the process, you have unintentionally transferred \$100 to a malicious user. This happens because, while the evil website cannot see your cookies, the cookies associated with your bank are still sent along with the request.

However, the form can be submitted automatically using Javascript – as follows:
```
<body onload="document.forms[0].submit()">
<form>
...
```
# CSRF - HTTP GET Example

Let's consider the following <em>GET</em> request used by logged-in users to transfer money to a specific bank account <em>“1234”</em>:
```
GET /transfer?accountNo=1234&amount=100 HTTP/1.1
Host: bank.com
Cookie: JSESSIONID=randomid; Domain=bank.example.com; Secure; HttpOnly
```

If the attacker wants to transfer money from a victims' account to his own account instead – <em>“5678”</em> – he needs to make the victim trigger the request:
```
GET /transfer?accountNo=5678&amount=1000 HTTP/1.1
Host: bank.com
Cookie: JSESSIONID=randomid; Domain=bank.example.com; Secure; HttpOnly
```

This works because, while the attacker cannot see your cookies, the cookies associated with your bank are still sent along with the request.

There are multiple ways an attacker can make that happen:

```merge-table
{
  "rows": [
    [
      {
        "content": "Link",
        "header": true,
        "bg": "#F4F5F7"
      },
      "The attacker can use a <code><font style=\"color: rgb(122,134,154);\">\\<a/\\></font></code> tag and convince the victim to click on this link. For example, to execute the transfer\n```\n<a href=\"http://bank.com/transfer?accountNo=5678&amount=1000\">Show Kittens Pictures</a>\n```"
    ],
    [
      {
        "content": "<strong>Image</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "The attacker may use an <code><font style=\"color: rgb(122,134,154);\">\\<img/\\></font></code> tag with the target URL as the image source – so the click isn't even necessary. The request will be automatically executed when the page loads\n```\n<img src=\"http://bank.com/transfer?accountNo=5678&amount=1000\"/>\n```"
    ]
  ]
}
```
