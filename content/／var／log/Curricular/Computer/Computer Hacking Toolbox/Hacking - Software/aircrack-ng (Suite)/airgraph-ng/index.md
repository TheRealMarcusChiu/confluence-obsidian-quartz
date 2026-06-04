---
title: "airgraph-ng"
created: 2023-04-16T22:15:55.032-05:00
modified: 2023-04-17T12:09:51.068-05:00
parent: "[[aircrack-ng (Suite)]]"
children: []
---
###### airgraph-ng
````excerpt
- visualize AP and clients
````
^excerpt

# Installation
```
sudo apt install airgraph-ng
```
# Creating graphs

Now that you've got your nifty new program installed, it's time to run some [[airodump-ng]] CSV files through it so you can see the graphs this program creates. So you have airodump-ng .txt/.csv files to run through airgraph-ng go to your favorite terminal and cd into the directory where you're keeping them.

For example:
```
airodump-ng -w my-output wlan0 
```

The following creates a Client to Access point Relationship Graph
```
airgraph-ng -i demo.csv -o demo.png -g CAPR
```

The following creates a Client to Probe Request Graph
```
airgraph-ng -i demo.csv -o demo.png -g CPG
```

The graph size and the time to generate it depend on the size of your CSV file. So, the more APs and Clients you get with airodump-ng the bigger the graph it will be.
