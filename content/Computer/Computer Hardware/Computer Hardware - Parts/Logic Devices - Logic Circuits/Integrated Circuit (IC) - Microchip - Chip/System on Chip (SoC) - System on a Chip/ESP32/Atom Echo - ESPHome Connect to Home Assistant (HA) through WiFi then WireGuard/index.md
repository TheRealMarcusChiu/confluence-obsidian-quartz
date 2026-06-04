---
title: "Atom Echo - ESPHome Connect to Home Assistant (HA) through WiFi then WireGuard"
created: 2026-01-07T15:38:46.883-06:00
modified: 2026-01-07T15:53:14.411-06:00
parent: "[[ESP32]]"
children: []
---
Config file example to connect [[ESP32]] device to [[Home Assistant (HA)]] through [[802.11 - WiFi／Wi-Fi|Wifi]] and [[WireGuard]]:
- <code><font style="color: rgb(122,134,154);">ESP32 → WiFi → WireGuard → Home Assistant</font></code>
```yml
esphome:
  name: atom-echo
  friendly_name: Atom Echo

esp32:
  board: esp32dev
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "7R8MKt...="

ota:
  - platform: esphome
    password: "9fb30..."

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  use_address: 192.168.1.7		 	# IP address running Home Assistant (HA)

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Atom-Echo Fallback Hotspot"
    password: "sis..."

captive_portal:

# time component needed for wireguard component
time:
  - platform: sntp
    timezone: America/Chicago
    id: net_time

wireguard:
  address: 10.10.0.4				# IP assigned to this device
  private_key: GCaQ...=
  peer_endpoint: 192.168.1.5		# IP running Wireguard
  peer_port: 55180					# Port number Wireguard is listening on
  peer_public_key: Jpki...= 
  peer_preshared_key: uIPAB...=
  peer_allowed_ips:					# IP ranges forced through Wireguard
    - 10.10.0.0/24					# TODO
    - 192.168.1.7					# IP address running Home Assistant (HA)
```
