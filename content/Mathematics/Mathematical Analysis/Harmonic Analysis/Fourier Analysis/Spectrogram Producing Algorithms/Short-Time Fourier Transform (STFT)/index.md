---
title: "Short-Time Fourier Transform (STFT)"
created: 2025-03-08T11:29:33.805-06:00
modified: 2025-08-18T14:02:41.491-05:00
parent: "[[Spectrogram Producing Algorithms]]"
children: []
---
###### Short-Time Fourier Transform (STFT)
````excerpt
- represents a signal in the time-frequency domain by computing [[Discrete Fourier Transform (DFT) - Discrete Fourier Series|discrete Fourier transforms (DFT)]] over short overlapping windows
- it is used to compute a [[Spectrograms|spectrogram]]
````
^excerpt

# STFT - Definition

STFT analyzes a signal 𝑥(𝑡) by multiplying it with a <strong>window function</strong> 𝑤(𝑡 − 𝜏) centered at time 𝜏, then taking the [[Fourier Transform - Inverse Fourier Transform|Fourier Transform]]:
- $X(\tau, \omega) = \int_{-\infty}^{\infty} x(t)\, w(t-\tau) \, e^{-i\omega t} dt$

Ordinary [[Fourier Transform - Inverse Fourier Transform|Fourier Transform]] analyzes a signal 𝑥(𝑡) with no window function:
- $X(\tau, \omega) = \int_{-\infty}^{\infty} x(t) e^{-i\omega t} dt$

# Choosing Window Function

Different window shapes have different trade-offs in <strong>time vs frequency resolution</strong>:

```merge-table
{
  "rows": [
    [
      {
        "content": "Rectangular window",
        "header": true,
        "bg": "#F4F5F7"
      },
      "$w(t) = \\begin{cases} 1 & |t| < T/2 \\\\ 0 & \\text{otherwise} \\\\ \\end{cases}$",
      "- simple, but causes spectral leakage (lots of side lobes in frequency)"
    ],
    [
      {
        "content": "Hamming window",
        "header": true,
        "bg": "#F4F5F7"
      },
      "$w(t) = 0.54 - 0.46 * \\cos\\! \\Big( \\frac{2 \\pi t}{T-1} \\Big) \\,\\,, \\,\\, 0≤t≤T−1$",
      "- reduces leakage by tapering edges"
    ],
    [
      {
        "content": "Hann window",
        "header": true,
        "bg": "#F4F5F7"
      },
      "$w(t)= 0.5 * \\Big( 1 − cos\\Big(\\frac{2πt}{T - 1}​\\Big) \\Big) \\,\\,, \\,\\, 0≤t≤T−1$",
      "- similar to Hamming"
    ],
    [
      {
        "content": "Gaussian window",
        "header": true,
        "bg": "#F4F5F7"
      },
      "$w(t) = e^{-\\pi (t/\\sigma)^2}$",
      "- smoothest, minimizes uncertainty principle\n- when used the resulting STFT is called a [[Gabor Transforms (GT)|Gabor Transform]]"
    ]
  ]
}
```
# Choosing Window/Frame Size

```merge-table
{
  "rows": [
    [
      {
        "content": "Size (N)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Time span of frame",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Frequency resolution Δf = Fs/N",
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
        "content": "256",
        "bg": "#F4F5F7"
      },
      "~5.8 ms",
      "~172 Hz/bin",
      "Very fast, good for transients (drums, speech consonants), but poor pitch resolution"
    ],
    [
      {
        "content": "512",
        "bg": "#F4F5F7"
      },
      "~11.6 ms",
      "~86 Hz/bin",
      "Balance for speech, can still track rapid events"
    ],
    [
      {
        "content": "1024",
        "bg": "#F4F5F7"
      },
      "~23.2 ms",
      "~43 Hz/bin",
      "Common default, good mix for general audio/music"
    ],
    [
      {
        "content": "2048",
        "bg": "#F4F5F7"
      },
      "~46.4 ms",
      "~21 Hz/bin",
      "Better frequency detail (notes, harmonics), worse timing"
    ],
    [
      {
        "content": "4096",
        "bg": "#F4F5F7"
      },
      "~93 ms",
      "~10.8 Hz/bin",
      "High frequency precision, but smears fast events"
    ],
    [
      {
        "content": "8192",
        "bg": "#F4F5F7"
      },
      "~186 ms",
      "~5.4 Hz/bin",
      "Super sharp frequency, very blurry in time — used in offline spectral analysis, not real-time"
    ]
  ]
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- [[Short-Time Fourier Transform (STFT) to Wavelet Transform (WT)]]
