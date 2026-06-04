---
title: "Terraform"
created: 2019-03-16T02:18:41.478-05:00
modified: 2024-08-28T11:04:51.994-05:00
parent: "[[Infrastructure as Code (IaC) - Orchestration／Provisioning Tools]]"
children:
  - "[[Terraform - Kubernetes - Typhoon]]"
  - "[[Terraform - Proxmox]]"
---
###### Terraform
- is a type of [[Infrastructure as Code (IaC) - Orchestration／Provisioning Tools|Infrastructure as Code (IaC)]]
- can be used to manage popular services such as: AWS, Google Cloud, Azure, etc
- [https://www.terraform.io/](https://www.terraform.io/)

# Terraform - Installation

> [!expand-ui]- homebrew
> <strong>1. brew install it</strong>
> <span style="white-space: pre-wrap"><code>  brew install terraform</code></span>
>
> <strong>2. verify terraform was installed</strong>
> <span style="white-space: pre-wrap"><code>  terraform —-version</code></span>
# Terraform - Concepts

Terraform uses [[Hashicorp Configuration Language (HCL)]] to express infrastructure
```
resource "aws_instance" "hello" {
  ami = "<ami-id>"
  instance_type = "t2.micro"
}
```

In this example, we are declaring a terraform resource of type <code>"aws\_instance"</code> with name <code>"hello"</code>
# Terraform - Introduction

Terraform has three main stages:
```
terraform init
terraform plan
terraform apply
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Terraform - Resources
- [https://www.terraform.io/intro/index.html](https://www.terraform.io/intro/index.html)
