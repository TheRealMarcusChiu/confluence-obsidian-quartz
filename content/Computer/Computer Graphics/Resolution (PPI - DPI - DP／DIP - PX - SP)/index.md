---
title: "Resolution (PPI - DPI - DP／DIP - PX - SP)"
created: 2019-12-18T13:50:50.077-06:00
modified: 2021-12-21T19:34:04.591-06:00
parent: "[[Computer Graphics]]"
children: []
---
<strong>Resolution</strong> is the measure of clarity/detail of an image. Resolution can be described in 2 ways:
- <strong>Dots Per Inch (DPI)</strong> or <strong>Dot Density</strong> describes the resolution of a <font style="color: rgb(0,128,0);">printed</font> image in <font style="color: rgb(0,128,0);">dots</font>
- <strong>Pixels Per Inch (PPI) </strong>or<strong> Pixel Density </strong>describes the resolution of a <font style="color: rgb(0,128,0);">digital</font> image in <font style="color: rgb(0,128,0);">pixels</font>

Higher resolution means more clarity/detail. Higher DPI means higher resolution. Resolution is not “size”, but it’s often confused with it because higher resolution images are often bigger, but that doesn’t necessarily have to be the case
# Screen Resolution vs Screen Density
- <strong>screen resolution</strong> - describes the number of pixels in the horizontal-by-vertical directions
- <strong>screen density</strong> - synonymous with PPI - describes the number of pixels per inch. either in the horizontal or vertical direction

# Front-End Developer Related Units
- <strong>Pixel (PX)</strong> - a pixel fills an arbitrary amount of screen area depending on the density
- <strong>Density-independent Pixel (DP pronounced "DIP")</strong> - are flexible units that scale to have uniform dimensions on any screen (units relative to 160ppi/dpi). Material UIs use density-independent pixels to display elements consistently on screens with different densities
- <strong>Scalable Pixels (SP)</strong> - serve the same function as DP but for fonts

dpi example:
- screen with screen-density <strong><code><font style="color: rgb(128,128,128);">160ppi/dpi</font></code></strong> has, <font style="color: rgb(128,128,128);"><strong><code>1dp == 1px == 1/160in</code></strong></font>
- screen with screen-density <font style="color: rgb(128,128,128);"><strong><code>240ppi/dpi</code></strong></font> has, <strong><code><font style="color: rgb(128,128,128);">1dp == 1.5px == 1/160in</font></code></strong>

so <font style="color: rgb(128,128,128);"><strong><code>1dp != 1px</code></strong></font>. There is <em>exactly one case</em> when <font style="color: rgb(128,128,128);"><strong><code>1dp == 1px</code></strong></font>, and that's on a <font style="color: rgb(128,128,128);"><strong><code>160ppi/dpi</code></strong></font> screen. Physical measurement units like inches should <em>never</em> be part of your design—that is unless you're making a ruler.

to calculate <font style="color: rgb(128,128,128);"><strong><strong><code>dp</code></strong></strong></font>:
- <font style="color: rgb(128,128,128);"><strong><code>dp = (<strong><strong><code>screen-width-or-height-in-pixels</code></strong></strong> \* 160) / screen-density</code></strong></font><font style="color: rgb(128,128,128);"><strong><strong><code></code></strong></strong></font>
- <font style="color: rgb(128,128,128);"><strong><strong><strong><code>dp = 160 \* <strong><strong><strong><code><strong><strong><code>screen-width-or-height-in-inches</code></strong></strong></code></strong></strong></strong></code></strong></strong></strong></font>

the conversion formula between <font style="color: rgb(128,128,128);"><strong><strong><code>px</code></strong></strong></font> and <font style="color: rgb(128,128,128);"><strong><strong><code>dp</code></strong></strong></font>:

<font style="color: rgb(128,128,128);"><strong><font style="color: rgb(128,128,128);"><strong><code>px = dp \* (dpi / 160)</code></strong></font></strong></font>
# Image Resolution Standards

```merge-table
{
  "rows": [
    [
      {
        "content": "Standard",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Standard Resolution",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Color Model",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Other Things To Know",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Print",
        "bg": "#F4F5F7"
      },
      "300dpi is standard",
      "[CMYK (cyan, magenta, yellow, and key/black)](https://99designs.com/blog/tips/correct-file-formats-rgb-and-cmyk/) color model\n\n(aka subtractive color model)",
      "- Inkjet printers produce a resolution of around 300 to 720 DPI, while laser printers produce images anywhere from 600 to 2,400 DPI\n- there is no standard dot size or shape, so higher DPI does not always equate to a higher quality print"
    ],
    [
      {
        "content": "Web/Digital",
        "bg": "#F4F5F7"
      },
      "72dpi is ideal",
      "[RGB (red, green, and blue)](https://99designs.com/blog/tips/correct-file-formats-rgb-and-cmyk/) color model\n\n(aka additive color model)",
      ""
    ]
  ]
}
```
# Don’t Confuse “Image-Size” with “File-Size”
- <strong>image-size</strong> refers to the dimensions of the image
- <strong>file-size</strong> is how much space the image takes up on a hard drive (kilobytes or megabytes)
