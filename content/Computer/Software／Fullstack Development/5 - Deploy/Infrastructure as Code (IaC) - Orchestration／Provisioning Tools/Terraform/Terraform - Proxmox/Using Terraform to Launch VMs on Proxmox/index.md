---
title: "Using Terraform to Launch VMs on Proxmox"
created: 2024-08-23T20:26:54.511-05:00
modified: 2024-08-23T20:31:40.537-05:00
parent: "[[Terraform - Proxmox]]"
children: []
---
based on: [https://austinsnerdythings.com/2021/09/01/how-to-deploy-vms-in-proxmox-with-terraform/](https://austinsnerdythings.com/2021/09/01/how-to-deploy-vms-in-proxmox-with-terraform/)
# Terraform Files

Create the following two files.
```
terraform {
  required_providers {
    proxmox = {
      source = "telmate/proxmox"
      version = "2.7.4"
    }
  }
}

provider "proxmox" {
  pm_api_url = "https://192.168.86.3:8006/api2/json"
  pm_api_token_id = "marcuschiu@pam!FIRST_TOKEN"
  pm_api_token_secret ="j38eudj4h-jdjdk-3km3-3jn3-adc1e9dh9dee"
  pm_tls_insecure = true
}

resource "proxmox_vm_qemu" "test_server" {
  count = 1
  name = "test-vm-1"
  target_node = "pve"
  clone = "ubuntu-template"
  agent = 1
  os_type = "cloud-init"
  cores = 1
  sockets = 1
  cpu = "host"
  memory = 2048
  scsihw = "virtio-scsi-pci"
  bootdisk = "scsi0"

  disk {
    slot = 0
    size = "32G"
    type = "scsi"
    storage = "SATA-SSD"
    iothread = 1
  }

  network {
    model = "virtio"
    bridge = "vmbr0"
  }

  lifecycle {
    ignore_changes = [
      network,
    ]
  }

  ipconfig0 = "ip=192.168.86.201/24,gw=192.168.86.1"

  sshkeys = <<EOF
  ${var.ssh_key}
  EOF
}

```
```
variable "ssh_key" {
  default = "SSH_PUBLIC_KEY_HERE"
}

variable "proxmox_host" {
  default = "192.168.86.3"
}

variable "template_name" {
  default = "PROXMOX_TEMPLATE_NAME_HERE"
}

```
# Run Terraform
```
terraform init
terraform plan
terraform apply
```
