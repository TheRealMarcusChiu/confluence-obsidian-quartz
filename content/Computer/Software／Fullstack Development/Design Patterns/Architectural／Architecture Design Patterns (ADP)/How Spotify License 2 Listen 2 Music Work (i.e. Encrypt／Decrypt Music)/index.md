---
title: "How Spotify License 2 Listen 2 Music Work (i.e. Encrypt／Decrypt Music)"
created: 2026-01-13T21:48:30.831-06:00
modified: 2026-01-13T22:20:41.587-06:00
parent: "[[Architectural／Architecture Design Patterns (ADP)]]"
children: []
---
When you play a song on Spotify, the audio is downloaded in batches from a CDN, but it is <strong>always encrypted</strong>. Each track has its own <strong>content key</strong>; there is <strong>no universal key</strong> that decrypts all music.
# 1. Multi-layered Key Hierarchy

Spotify (and modern streaming services) use a <strong>hierarchical DRM key system</strong>, not a single key:
```
Hardware DRM Key (Secure Enclave / TEE)
        ↓  used to derive / protect
Device Key (OS / DRM subsystem)
        ↓  used to unwrap
License-wrapped Content Key
        ↓  used to decrypt
Encrypted Audio Chunks
```
- Each layer has a <strong>different scope and lifetime</strong>
- Hardware DRM keys form a <strong>root of trust</strong>, device-unique and non-exportable
- Device keys are derived from hardware keys and handle license unwrapping
- Content keys decrypt individual tracks or track renditions

# 2. Content (Track) Keys
- Each track or bitrate has its <strong>own symmetric key</strong> ([[Advanced Encryption Standard (AES)|AES]]-128/256)
- Two different tracks → different keys
- Same track, different quality → often different keys
- Content keys are <strong>never sent in the clear</strong>; they are wrapped in a license for a specific device

# 3. Licenses (Session / Entitlement)
- Spotify sends a <strong>license blob</strong>, not the raw content key
- License contains:
	- <strong>Wrapped content key</strong>
	- Expiration time
	- Offline playback rules
	- Device and account binding
- License is <strong>time-limited</strong>, <strong>device-specific</strong>, and <strong>account-specific</strong>
- see section \#7 on how licenses are formed

# 4. Device & Platform Keys
- The <strong>content key is encrypted using the device key</strong> (derived from hardware DRM key):
```
EncryptedContentKey = Encrypt(content_key, device_platform_key)
```
- Only the <strong>intended device + OS + DRM subsystem</strong> can unwrap it
- Copying the license or audio files to another device <strong>does not work</strong>
- Device keys persist across reboots but are <strong>non-transferable</strong>

# 5. Hardware DRM Keys (Root of Trust)
- Apple → Secure Enclave
- Android → TEE / Widevine L1
- Consoles / TVs → hardware DRM
- Properties:
	- Device-unique and non-exportable
	- Never visible to apps or users
	- Enforces time-limited licenses and prevents key reuse

# 6. OS Support and Variations
- <strong>All mainstream consumer OSes support DRM</strong>, but strength varies:
```merge-table
{
  "rows": [
    [
      {
        "content": "Platform",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "DRM System",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Key Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Notes",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "iOS/macOS",
        "bg": "#F4F5F7"
      },
      "FairPlay",
      "Hardware-backed (Secure Enclave)",
      "Strongest, used by Apple Music, Spotify, Netflix"
    ],
    [
      {
        "content": "Android",
        "bg": "#F4F5F7"
      },
      "Widevine",
      "L1-L3 (hardware → software)",
      "Most modern phones: L1"
    ],
    [
      {
        "content": "Windows",
        "bg": "#F4F5F7"
      },
      "PlayReady / OS media path",
      "Mostly software, sometimes TPM-backed",
      "Weaker than mobile hardware DRM"
    ],
    [
      {
        "content": "Linux",
        "bg": "#F4F5F7"
      },
      "Widevine in browsers",
      "Software-only, user-space",
      "Offline playback often restricted, quality limited"
    ],
    [
      {
        "content": "Smart TVs / Consoles",
        "bg": "#F4F5F7"
      },
      "Vendor-specific",
      "Hardware DRM",
      "Trusted for 4K/HDR playback"
    ]
  ]
}
```
- <strong>OS vs Device</strong>: The device owns the DRM keys; the OS enforces access
- Same OS on two devices ≠ same DRM keys

# 7. How Licenses Are Formed & Delivered

> 

1. <strong>Spotify creates content keys</strong> when tracks are ingested
2. Device reports its <strong>DRM system + certificate / public key</strong>
3. Spotify <strong>wraps the content key on its server</strong> (usually inside an HSM), binding it to that device
4. The license blob containing the wrapped key, rules, and Spotify’s signature is sent to the device
5. <strong>Raw content keys never leave Spotify servers</strong>

# 8. Device Playback Flow

> 

1. App passes license blob to OS DRM subsystem
2. OS verifies license signature, checks expiration and rules
3. DRM subsystem <strong>unwraps the content key internally</strong> using the device key
4. Audio is decrypted <strong>in memory</strong> for playback
5. The content key is <strong>never exposed</strong> to the app or written to disk

# 9. Key Reuse & Security Principles
- Content keys may be reused for the same track until license expiration
- Device keys persist across reboots, but each device has a unique key
- Design prevents:
	- Universal key leaks
	- Unauthorized copying
	- Offline playback outside licensed devices
- <strong>Music is encrypted per track</strong>, unlocked per user/device/time window

# 10. Key Takeaways
- <strong>Spotify wraps content keys server-side</strong> for a specific device and DRM system
- Only the <strong>device’s secure hardware + OS</strong> can unwrap it
- DRM ensures offline playback, enforces time limits, and protects content from unauthorized copying
- Different devices/OSes have <strong>different levels of DRM enforcement</strong>, with hardware-backed being strongest
