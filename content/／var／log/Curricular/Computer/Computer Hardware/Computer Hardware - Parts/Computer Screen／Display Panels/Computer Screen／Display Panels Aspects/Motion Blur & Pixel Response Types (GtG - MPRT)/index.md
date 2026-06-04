---
title: "Motion Blur & Pixel Response Types (GtG - MPRT)"
created: 2020-01-23T14:07:05.747-06:00
modified: 2025-10-30T16:55:55.331-05:00
parent: "[[Computer Screen／Display Panels Aspects]]"
children: []
---
###### Pixel Response Types
- <strong>GtG (Grey-To-Grey)</strong>- represents <em>how long it takes for a pixel to change between two colors</em>
- <strong>MPRT (MotionPicture Response Time) </strong>or<strong> Display Persistence </strong>- represents <em>how long a pixel is continuously visible for</em>

# Why Does MPRT Response Affect Motion Blur More Than GtG Response?

Even though GtG pixel response time has become faster (e.g. 1ms), the MPRT has not gotten faster because MPRT is limited by refresh cycle duration, and by frametime. High MPRT creates a longer sample-and-hold effect caused by eye-tracking
# How Do You Reduce Display Motion Blur?

Once GtG is already fast, there are only two ways to further reduce MPRT display motion blur:
1. Shorten pixel visibility time via adding black periods between refresh cycles
	1. often done via:
		1. flicker
		2. strobe backlight (e.g. LightBoost, ULMB, etc)
		3. scanning backlight
		4. black frame insertion
		5. CRT phosphor
		6. etc
2. Shorten pixel visibility time via adding more frames per second at higher refresh rates
	1. often done via upgrading to a higher refresh rate along with a faster GPU
	2. 240fps at 240Hz can have one-quarter the display motion blur of 60fps at 60Hz

# Display Type
- Impulsed-Driven Displays - displays using black periods between refresh cycles
- Sample-and-Hold Displays - displays NOT using black periods between refresh cycles

![[Motion Blur & Pixel Response Types (GtG - MPRT)/motion_blur_from_persistence_on_sample-and-hold-displays.png|450]]![[Motion Blur & Pixel Response Types (GtG - MPRT)/motion_blur_from_persistence_on_impulsed-displays.png|450]]
