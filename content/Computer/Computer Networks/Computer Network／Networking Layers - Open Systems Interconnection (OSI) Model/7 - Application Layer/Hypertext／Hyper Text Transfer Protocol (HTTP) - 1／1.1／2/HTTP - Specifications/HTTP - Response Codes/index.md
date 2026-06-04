---
title: "HTTP - Response Codes"
created: 2021-02-25T13:12:53.505-06:00
modified: 2021-09-11T21:32:21.801-05:00
parent: "[[HTTP - Specifications]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "Response Code",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "401",
        "header": true,
        "bg": "#F4F5F7"
      },
      "401 Unauthorized response should be used for missing or bad authentication"
    ],
    [
      {
        "content": "403",
        "header": true,
        "bg": "#F4F5F7"
      },
      "403 Forbidden response should be used afterwards, when the user is authenticated but isn’t authorized to perform the requested operation on the given resource"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```

![[HTTP - Response Codes/http-response-codes-decision-tree.jpg|700]]
