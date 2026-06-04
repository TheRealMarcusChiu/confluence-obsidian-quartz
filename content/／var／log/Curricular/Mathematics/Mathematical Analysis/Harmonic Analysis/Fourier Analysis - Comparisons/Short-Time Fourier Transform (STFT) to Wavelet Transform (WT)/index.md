---
title: "Short-Time Fourier Transform (STFT) to Wavelet Transform (WT)"
created: 2025-08-17T01:58:24.137-05:00
modified: 2025-08-17T02:18:48.369-05:00
parent: "[[Fourier Analysis - Comparisons]]"
children: []
---
TLDR; STFT uses a fixed-size window to analyze the signal, while the Wavelet Transform uses windows of varying sizes, offering better resolution for both time and frequency domains in certain situations.
# [[Short-Time Fourier Transform (STFT)]] vs [[Wavelet Transform (WT)]]

The basic idea of STFT is to develop the initial signal into small time windows and employ the FT to each time segment for expressing the variation in signal frequency content over time that lived in that segment

In this method, the Fourier transform is applied to analyze only a small signal segment in a time window. The short-time Fourier transform maps a signal into a two-dimensional function of time and frequency.

By selecting a large time window, the resolution of frequency increases, while the time resolution of a large window is low. While selecting a small time window, although the time resolution will be good, the frequency resolution will not be desired.

Since the window used to calculate the short-time Fourier transform is constant, we must find a compromise between time and frequency resolution according to the signal being analyzed. This means that high time and frequency accuracy cannot be achieved simultaneously. In most cases, the signal sometimes changes softly and sometimes rapidly. Such signals cannot be processed with a constant time window because, in regions where signal changes are slow, we need a wide window, and in regions where signal changes are rapid, we need a small window.

So, we actually need a smart window. But as we know, in the short-time Fourier transform, the width of the window is constant. In fact, in the short-time Fourier transform, the time-frequency plane is evenly distributed, and this is one of the disadvantages of this transformation.

To solve this problem, the idea of using a transform with a changeable resolution came to mind, which led to the emergence of the wavelet transform. The wavelet transform has successfully been applied to a wide range of signals that are not periodic and may include sinusoidal and impulse components (Naderi et al., 2007; Nafar et al., 2004). In particular, the ability of the wavelet transform to focus on small time intervals and high-frequency components, as well as large time intervals and low frequencies can improve the analysis.
