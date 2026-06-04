---
title: "Hashicorp Configuration Language (HCL)"
created: 2021-08-18T12:36:33.489-05:00
modified: 2021-08-18T12:37:20.182-05:00
parent: "[[Configuration／Infrastructure／Orchestration Languages]]"
children: []
---
<strong>Hashicorp Configuration Language (HCL)</strong>
- is used by [[Terraform]] uses to express infrastructure

# For Example
```
resource "aws_instance" "hello" {
  ami = "<ami-id>"
  instance_type = "t2.micro"
}
```

In this example, we are declaring a terraform resource of type <code>"aws\_instance"</code> with name <code>"hello"</code>
