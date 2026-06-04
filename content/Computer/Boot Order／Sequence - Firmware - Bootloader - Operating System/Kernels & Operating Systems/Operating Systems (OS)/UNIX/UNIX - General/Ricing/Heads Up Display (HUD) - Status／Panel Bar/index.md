---
title: "Heads Up Display (HUD) - Status／Panel Bar"
created: 2025-04-12T15:17:08.605-05:00
modified: 2025-04-12T15:43:41.757-05:00
parent: "[[Ricing]]"
children:
  - "[[conky]]"
  - "[[dzen]]"
  - "[[lemonbar]]"
---
###### Heads Up Display (HUD) - Status/Panel Bar
````excerpt
- displays system informations on your screen
````
^excerpt

# HUD - Introduction

[https://blog.z3bra.org/2014/04/meeting-at-the-bar.html](https://blog.z3bra.org/2014/04/meeting-at-the-bar.html)
# HUD - Types
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- [[TMUX Status Bar]]

# HUD - Fetching Information

> [!expand-ui]- Current Date Time
> ```
> date '+%Y-%m-%d %H:%M' # print current date and time: yyyy-mm-dd HH:MM
> ```

> [!expand-ui]- Battery Level
> You could use the <code><font style="color: rgb(122,134,154);">acpi</font></code> tool.
>
> Or look into sys files
> ```
> /sys/class/power_supply/BAT1/capacity   # contains a value from 0 to 100
> /sys/class/power_supply/BAT1/status     # either "Charging" or "Discharging"
> ```
>
> We will then be able to output the battery level, and do some action, depending on the battery state. To get the info:
> ```
> BATC=/sys/class/power_supply/BAT1/capacity
> BATS=/sys/class/power_supply/BAT1/status
>
> # prepend percentage with a '+' if charging, '-' otherwise
> test "`cat $BATS`" = "Charging" && echo -n '+' || echo -n '-'
>
> # print out the content (forced myself to use `sed` :P)
> sed -n p $BATC
> ```

> [!expand-ui]- Sound Level
> This one is always a pain.. I will assume that you use ALSA as your sound system (because I have no idea how OSS or PulseAudio works).
>
> First, you need to know which channel your want to watch. Most of the time, 'Master' is a good choice. I personnally use alsamixer to navigate between the channels to see what they are related to. The alsa-utils packages (name may vary depending on the distribution) contains a utility named amixer to interact with the system. The special command amixer get \<CONTROL\> is used to query informations about a channel. But the output is awful to look at, so we'll need to format it. Example output:
> ```
> ───── amixer get Master
> Simple mixer control 'Master',0
> Capabilities: pvolume pvolume-joined pswitch pswitch-joined
> Playback channels: Mono
> Limits: Playback 0 - 64
> Mono: Playback 53 [84%] [-10.00dB] [on]
> ```
>
> You can notice that the info we're interested in sits at the end of the output. That will make things easier.
> ```
> # parse amixer output to get ONLY the level. Will output "84%"
> # we need `uniq` because on some hardware, The master is listed twice in
> # "Front Left" and Front Right" (because laptop speakers I guess)
> amixer get Master | sed -n 's/^.*\[\([0-9]\+\)%.*$/\1/p'| uniq
> ```

> [!expand-ui]- CPU Load
> There are many way to get the current CPU load. iostat is one of them, and as it's easy to parse its output, i'll go with a trickier approach, using ps and bc.
>
> To get the current CPU load used by every program, one can use this command:
> ```
> # gives you the CPU load used by every running program
> # 'args' is used here just so you can see the programs command lines
>
> ps -eo pcpu,args
> ```
>
> We don't care about idling programs that uses '0.0' load or the header '%CPU', so we can just remove them with <code>grep -vE '^\\s\*(0.0|%CPU)'</code>.
> ```
> ps -eo pcpu | grep -vE '^\s*(0.0|%CPU)'
> ```
>
> We now have a list of the CPU loads actually used, but per program. We just need to sum them up!
> The problem is: bash <em>CAN'T</em> perform floating point operations. And thus, we will need the help of the great <code>bc</code> to do so (if you don't have this installed, I recommend that you just get it right away!).
>
> <code>bc</code> takes operations from stdin, and outputs to stdout. Pretty simple. Pretty good. Thanks to [randomcrocodile](http://www.reddit.com/r/unixporn/comments/220diq/howto_create_an_informative_status_bar_for_your/cgi9hve) for pointing out the two digit problem (and other things)
> ```
> # use the "here-line" feature.
> # The whole line goes to bc which outputs the result
>
> LINE=`ps -eo pcpu |grep -vE '^\s*(0.0|%CPU)' |sed -n '1h;$!H;$g;s/\n/ +/gp'`
> bc <<< $LINE
> ```
>
> <strong>NOTE</strong>: <em>verkgw</em> on [irc.blinkenshell.org](http://irc.blinkenshell.org) proposed a faster <code>awk</code> alternative. I don't know awk enough to come up with this kind of line, so I'll just continue with <code>grep</code> and <code>sed</code>. See the comparison [here](http://i.imgur.com/Aefbl8U.png)
> ```
> ps -eo pcpu | awk 'BEGIN {sum=0.0f} {sum+=$1} END {print sum}'
> ```

> [!expand-ui]- RAM Usage
> To display RAM usage (percentage of RAM actually by the system), we will use another place of the filesystem: <code>/proc</code>. This will be easier to find memory usage here, than battery level in <code>/sys</code>:
> ```
> ───── ls /proc/ | grep 'mem'
> iomem
> meminfo
> ```
>
> If you take a quick look at <code>iomem</code>, you'll understand that it's <strong>NOT</strong> the file we want here (I don't understand a bit of it)! Instead, let's take a look at meminfo:
> ```
> ───── sed 8q /proc/meminfo 
> MemTotal:        2748648 kB
> MemFree:         2209672 kB
> Buffers:           34016 kB
> Cached:           270728 kB
> SwapCached:            0 kB
> Active:           182292 kB
> Inactive:         272636 kB
> Active(anon):     150948 kB
> ```
>
> Good, good, exactly the information we want! So let's just extract them, using <code>awk</code> to fetch <em>ONLY</em> the column containing the value (Yeah, that's why I use awk for mostly. I'll need to dive a little more in that language):
> ```
> ───── grep -E 'Mem(Total|Free)' /proc/meminfo |awk '{print $2}'
> 2748648
> 2204288
> ```
>
> At this point, you might realise that those two number are not really useful. We will need to modify them a little by converting them to Mib, and making a ratio out of them. A neat alternative would be to ignore cached memory and buffers, to know exactly how much the applications are taking:
> ```
> # store the total and free memory in two variables
> read t f <<< `grep -E 'Mem(Total|Free)' /proc/meminfo |awk '{print $2}'`
> read b c <<< `grep -E '^(Buffers|Cached)' /proc/meminfo |awk '{print $2}'`
>
> # then, calcultate the percentage of memory used
> bc <<< "100($t -$f -$c -$b) / $t"
> ```

> [!expand-ui]- Network Connection State
> Mmh, this one can be tricky! Ther are two cases here:
> - You have one interface
> - You have more than one interface
>
> The first one is quite simple: use your interface name directly, and skip the following section.
>
> Now what if you have, let's say two interfaces: ethernet, and wifi. Let's find out HOW to get the currently used.
> We will need two tools for that: <code>ip</code> (from <code>iproute2</code>) and <code>iwconfig</code> (from <code>wireless\_tools</code>). We will get the interfaces with <code>ip</code>, and recognize the wifi interface using <code>iwconfig</code>. Sounds easy huh ?
> ```
> # The following assumes you have 3 interfaces: loopback, ethernet, wifi
> read lo int1 int2 <<< `ip link | sed -n 's/^[0-9]: \(.*\):.*$/\1/p'`
>
> # iwconfig returns an error code if the interface tested has no wireless
> # extensions
> if iwconfig $int1 >/dev/null 2>&1; then
>     wifi=$int1
>     eth0=$int2
> else 
>     wifi=$int2
>     eth0=$int1
> fi
>
> # in case you have only one interface, just set it here:
> # int=eth0
>
> # this line will set the variable $int to $eth0 if it's up, and $wifi
> # otherwise. I assume that if ethernet is UP, then it has priority over
> # wifi. If you have a better idea, please share :)
> ip link show $eth0 | grep 'state UP' >/dev/null && int=$eth0 || int=$wifi
> ```
>
> This is now the time to see if network is up or not. For that, a simple <code>ping</code> would do the trick:
> ```
> # just output the interface name. Could obviously be done in the 'ping'
> # query
> echo -n "$int"
>
> # Send a single packet, to speed up the test. I use google's DNS 8.8.8.8,
> # but feel free to use any ip address you want. Be sure to put an IP, not a
> # domain name. You'll bypass the DNS resolution that can take some precious
> # miliseconds ;)
> ping -c 1 8.8.8.8 >/dev/null 2>&1 && echo "connected" || echo "disconnected"
> ```

> [!expand-ui]- Window Manager Groups
> Aaah, the information that has the most way to be fetched! The problem with this, is that every window manager provide a different way to fetch the number of workspaces, and the current one. If you're lucky, and that your WM is [EWMH](https://en.wikipedia.org/wiki/EWMH) compliant, <code>xprop</code> will be the way to go. For the others, you will need to find a proper way on your own. For exemple, to get the number of groups and the current group with ratpoison:
> ```
> echo "`ratpoison -c groups| cut -sd'*' -f1`/`ratpoison -c groups| wc -l`"
> ```
>
> Back to the topic, fetching current group out of all the groups. To make this a little more exiting, we will output something like "<code>==|=====</code>", '|' being the current desktop, '=' being the other desktops.
>
> The first step is to fetch the number of desktops, and the index of the current one. To do that, let's use <code>xprop</code>
> ```
> cur=`xprop -root _NET_CURRENT_DESKTOP | awk '{print $3}'
> tot=`xprop -root _NET_NUMBER_OF_DESKTOPS | awk '{print $3}'
> ```
>
> If that enough for you, you can obviously just output <code>\$cur/\$tot</code> ;)
> But now, the desktop indicator. To do that, there is two solutions:
> - cicle through all the groups and output either '=' or '|'
> - ouput the correct number of '|' before and after '|'
>
> I tried both versions, and <code>time</code> reports that they are they're <em>almost</em> the same:
> ```
> ───── time cicle.sh
> ==|=======
>
> real    0m0.025s
> user    0m0.013s
> system  0m0.000s
>
> ───── time fillup.sh
> ==|=======
>
> real    0m0.020s
> user    0m00m0.013s
> system  0m0.000s
> ```
>
> We will then use the 'fillup' one. To improve performances, we will first fill a variable with the 'group line', and then output it. It goes like this:
> ```
> # Desktop numbers start at 0. if you want desktop 2 to be in second place,
> # start counting from 1 instead of 0. But wou'll lose a group ;)
> for w in `seq 0 $((cur - 1))`; do line="${line}="; done
>
> # enough =, let's print the current desktop
> line="${line}|"
>
> # En then the other groups
> for w in `seq $((cur + 2)) $tot`; do line="${line}="; done
>
> # don't forget to print that line!
> echo $line
> ```

> [!expand-ui]- MPD's Current Playing Song
> After all that we did alredy, printing the current playing should bequite easy as:
> ```
> cur=`mpc current`
> test -n "$cur" && echo $cur || echo "- stopped -"
> ```
>
> Easy isn't it ? So let's add some difficulties to it. What if you have only 120 pixels to display that ?
> Aaaah trickyer isn't it ?
>
> Don't worry, I wrote a small tool for that: [skroll](http://git.z3bra.org/skroll/log.html). You can see it in action [here](http://pub.z3bra.org/monochromatic/img/2014-03-28-skroll.gif).
>
> So now, our output has just become:
> ```
> cur=`mpc current`
> test -n "$cur" && echo $cur |skroll -n 20 -d0.5 -r || echo "- stopped -"
> ```
>
> A small drawback with this approach: you can't put other infos in the same bar as a <code>skroll</code>ing output, because it uses a <code>\\n</code> or a <code>\\r</code> to print the output.

Wrapping it up

> [!expand-ui]- Wrapping it Up
> Now that we have a whole bunch of informations, it's time to put them all in a script, that we will pipe later to our HUD.
> ```
> #!/bin/sh
> #
> # z3bra - (c) wtfpl 2014
> # Fetch infos on your computer, and print them to stdout every second.
>
> clock() {
>     date '+%Y-%m-%d %H:%M'
> }
>
> battery() {
>     BATC=/sys/class/power_supply/BAT1/capacity
>     BATS=/sys/class/power_supply/BAT1/status
>
>     test "`cat $BATS`" = "Charging" && echo -n '+' || echo -n '-'
>
>     sed -n p $BATC
> }
>
> volume() {
>     amixer get Master | sed -n 'N;s/^.*\[\([0-9]\+%\).*$/\1/p'
> }
>
> cpuload() {
>     LINE=`ps -eo pcpu |grep -vE '^\s*(0.0|%CPU)' |sed -n '1h;$!H;$g;s/\n/ +/gp'`
>     bc <<< $LINE
> }
>
> memused() {
>     read t f <<< `grep -E 'Mem(Total|Free)' /proc/meminfo |awk '{print $2}'`
>     bc <<< "scale=2; 100 - $f / $t * 100" | cut -d. -f1
> }
>
> network() {
>     read lo int1 int2 <<< `ip link | sed -n 's/^[0-9]: \(.*\):.*$/\1/p'`
>     if iwconfig $int1 >/dev/null 2>&1; then
>         wifi=$int1
>         eth0=$int2
>     else
>         wifi=$int2
>         eth0=$int1
>     fi
>     ip link show $eth0 | grep 'state UP' >/dev/null && int=$eth0 ||int=$wifi
>
>     #int=eth0
>
>     ping -c 1 8.8.8.8 >/dev/null 2>&1 && 
>         echo "$int connected" || echo "$int disconnected"
> }
>
> groups() {
>     cur=`xprop -root _NET_CURRENT_DESKTOP | awk '{print $3}'`
>     tot=`xprop -root _NET_NUMBER_OF_DESKTOPS | awk '{print $3}'`
>
>     for w in `seq 0 $((cur - 1))`; do line="${line}="; done
>     line="${line}|"
>     for w in `seq $((cur + 2)) $tot`; do line="${line}="; done
>     echo $line
> }
>
> nowplaying() {
>     cur=`mpc current`
>     # this line allow to choose whether the output will scroll or not
>     test "$1" = "scroll" && PARSER='skroll -n20 -d0.5 -r' || PARSER='cat'
>     test -n "$cur" && $PARSER <<< $cur || echo "- stopped -"
> }
>
> # This loop will fill a buffer with our infos, and output it to stdout.
> while :; do
>     buf=""
>     buf="${buf} [$(groups)]   --  "
>     buf="${buf} CLK: $(clock) -"
>     buf="${buf} NET: $(network) -"
>     buf="${buf} CPU: $(cpuload)%% -"
>     buf="${buf} RAM: $(memused)%% -"
>     buf="${buf} VOL: $(volume)%%"
>     buf="${buf} MPD: $(nowplaying)"
>
>     echo $buf
>     # use `nowplaying scroll` to get a scrolling output!
>     sleep 1 # The HUD will be updated every second
> done
> ```
>
> All you have to do now is to pipe this script to your status bar of choice: <code>./barmk.sh | bar</code>.
>
> There you are! You now know how (ow ow ow) make your system talk to you. Obviously, this is a raw script, and it can be heavily improved (eg, add some colors, parse CLI arguments, etc..).
>
> But I'm pretty sure that it's a good start for your imagination. By the way, if you find neat tricks to improve the performances of the functions listed above, feel free to mail me these, I'll be glad to modify them!
