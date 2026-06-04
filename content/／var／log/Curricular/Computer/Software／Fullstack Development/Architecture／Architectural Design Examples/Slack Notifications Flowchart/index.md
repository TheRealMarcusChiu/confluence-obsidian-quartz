---
title: "Slack Notifications Flowchart"
created: 2023-03-18T16:51:51.870-05:00
modified: 2023-03-18T18:13:22.330-05:00
parent: "[[Architecture／Architectural Design Examples]]"
children: []
---
Original Article - [https://www.magicbell.com/blog/slack-notifications-flowchart](https://www.magicbell.com/blog/slack-notifications-flowchart)

![[Slack Notifications Flowchart/slakc-notifications-flowchart.png]]
# Channel Notifications

You can be notified of messages on the channels you are part of unless you mute a channel.

![[Slack Notifications Flowchart/1.png|301]]

That's the first thing Slack checks in its flowchart.

![[Slack Notifications Flowchart/2.png|301]]

Check if the user has muted the channel
# Do not disturb (DnD)

The next thing they check is if the user has enabled DnD. Users can enable it at any time or set up a schedule to toggle DnD automatically.

![[Slack Notifications Flowchart/3.png|368x250]]

Slack users can mute their notifications

However, Slack also offers the sender an option to override your DnD setting, thereby resulting in the next section of the Flowchart

![[Slack Notifications Flowchart/4.png|500x231]]

Check if the user has setup DnD and if the send overrode DnD

If you are not in DnD or if DnD was ignored by the sender, Slack checks if this message is in fact a @channel, @everyone or @here mention and if you have disabled notifications for those (for this channel).

![[Slack Notifications Flowchart/5.png|287x250]]

You can stop @channel/@here from being mentioned for you

This is checked in the next part of the flowchart

![[Slack Notifications Flowchart/6.png|535x198]]

Check what kind of mention this is and if it should create a notification

Notice the part about this message being part of a thread? Slack lets you set a global preference for notifying you of replies to threads

![[Slack Notifications Flowchart/7.png|456x75]]

A global preference for replies in threads you are following

However, it's interesting that even if this setting is turned on but you have disabled notifications entirely for the channel, you won't get notified. See this part of the Flowchart (the leftmost branch leads you to the big RED NO).

![[Slack Notifications Flowchart/8.png|600]]

The channel preference overrides the global thread notification preference
# Mobile-specific notification preferences

Before we go on any further, let us talk about Slack's ability to set a different preference for mobile notifications. They allow you to do this globally, as well as per channel. It looks something like this:

![[Slack Notifications Flowchart/9.png|430x250]]

Assuming that the <em>notification candidate</em> has made it so far (and so have you!), Slack checks for mobile-specific notification preference for this channel. If none has been set up, they check if you have a preference globally.

![[Slack Notifications Flowchart/10.png|800x126]]

Check if a mobile-specific notification preference exists for this channel or globally

If you have chosen not to be notified of anything, it's a straight line to the big RED NO. However, if you have chosen to be notified, based on your preferences, you may lead down to the big GREEN YES. However, you may reach it here on the desktop or on the mobile. In the Flowchart, they talk about checking for "past mobile push timing threshold", but I wasn't able to find this as an option in their UI. Perhaps this is something to check for in their backend without it being a user-adjustable property.
