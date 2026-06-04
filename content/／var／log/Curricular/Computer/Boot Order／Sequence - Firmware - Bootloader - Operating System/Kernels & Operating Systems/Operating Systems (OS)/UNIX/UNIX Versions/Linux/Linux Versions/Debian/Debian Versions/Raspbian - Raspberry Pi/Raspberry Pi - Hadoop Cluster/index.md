---
title: "Raspberry Pi - Hadoop Cluster"
created: 2019-07-13T12:47:41.866-05:00
modified: 2020-06-01T21:27:59.010-05:00
parent: "[[Raspbian - Raspberry Pi]]"
children: []
---
[https://developer.ibm.com/recipes/tutorials/building-a-hadoop-cluster-with-raspberry-pi/](https://developer.ibm.com/recipes/tutorials/building-a-hadoop-cluster-with-raspberry-pi/)
## Ingredients
- Raspberry Pi 2 (two minimum)
- Micro SD cards, 8GB minimum (one for each Raspberry Pi)
- Wireless adapters or means to build a wired network

## Step-by-step
1. ###### Introduction
   Hadoop has great potential and is one of the best known projects for big data. In this tutorial, we will install and configure a Hadoop cluster using Raspberries. Our cluster will consists on twelve nodes (one master and eleven slaves).
   
   Since Raspberries have a low price and Hadoop is open source, together they offer a great opportunity for anybody who wants to start working with big data. We will be configuring the cluster from a Linux workstation, we will be working exclusively with Linux commands. The cluster can be built with other families of operating systems, and the general steps in this tutorial would remain to be useful, but the specific commands would be different.
2. ###### Download and install an Operating System into the micro SD cards.
   Any OS that is compatible with Hadoop will work. In our case, we selected Raspbian Jessy Lite as our OS. It is a lightweight OS, designed specifically for Raspberries. It can be downloaded from the official Raspberry Pi Foundation website: [https://www.raspberrypi.org/downloads/raspbian/](https://www.raspberrypi.org/downloads/raspbian/)
   
   Once we have downloaded our .img file, we can install it into a micro SD card. This process will overwrite any data that the SD card may have, so it is recommended to use an empty card.
   
   There are many ways to install the OS into the SD card. We will use the dd Linux command:
   
   <span style="white-space: pre-wrap"><code>sudo dd if=2016-02-26-raspbian-jessie-lite.img of=/dev/sdd</code></span>
   
   The <strong>if</strong> parameter is the image file that we downloaded, The <strong>of</strong> parameter is the mount point of our micro SD card.
   
   We will repeat this installation in every micro SD card.
   
   Once that is done, you can insert the micro SD cards into the Raspberries and login into them via SSH as the default user “pi” using the password “raspberry”.
   
   You may need to expand the filesystem in order to use the full capacity of the micro SD cards. If this is the case, login into the Raspberries with SSH and run:
   
   <span style="white-space: pre-wrap"><code>sudo raspi-config</code></span>
   
   Then select “Expand Filesystem”. After this is done, you will need to reboot the Raspberry. You can do it like this:
   
   <span style="white-space: pre-wrap"><code>shutdown -r now</code></span>
3. ###### Create the installation and HDFS directories
   We need a installation directory for Hadoop. We also need a directory where the HDFS (Hadoop Distributed File System) will place its files. In our example, we selected <strong>/opt/hadoop/</strong> as the installation directory and <strong>/opt/hadoop\_tmp/</strong> as the path that will be used by HDFS. So let's create those directories
   
   <span style="white-space: pre-wrap"><code>sudo mkdir /opt/hadoop/</code><br><code>sudo mkdir /opt/hadoop\_tmp/</code></span>
   
   Again, make sure to do this in all the Raspberries. Take note of the HDFS directory, we will need it later while editing the configuration files.
4. ###### Install Java
   Since Hadoop requires it, Java needs to be installed in all the nodes. Hadoop 2.7 and later require Java 7. Hadoop 2.6 still supports Java 6. Install the version compatible with your desired Hadoop environment. In Raspbian, to install Oracle Java 8 we would do this:
   
   <span style="white-space: pre-wrap"><code>sudo apt-get update</code><br><code>sudo apt-get install oracle-java8-jdk</code></span>
   
   Verify that it was installed correctly:
   
   <span style="white-space: pre-wrap"><code>java -version</code><br><code>java version "1.8.0\_65"</code><br><code>Java(TM) SE Runtime Environment (build 1.8.0\_65-b17)</code><br><code>Java HotSpot(TM) Client VM (build 25.65-b01, mixed mode)</code></span>
5. ###### Setup connectivity.
   Depending on your environment, this step could vary. If you are building the cluster on a local wifi network you will need a wireless adapter for each Raspberry (unless you are using Raspberry Pi 3, which has integrated wireless). Otherwise you may need to setup a wired network. What we need is that every Raspberry has its own IP address and that they can connect to each other without problems. This tutorial will not cover how to setup wireless connectivity in the Raspberries, but this is easy to do and there are many tutorials explaining how to do it. The official documentation is a good example: [https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md](https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md)
   
   To make our job easier, we will use an alias for each node from now on. Make a list of all the IP addressess and add them to the <strong>/etc/hosts</strong> file in every Raspberry. In our case, it looks like this:
   
   <span style="white-space: pre-wrap"><code>9.42.157.175    master</code><br><code>9.42.157.182    slave-01</code><br><code>9.42.157.186    slave-02</code><br><code>9.42.157.187    slave-03</code><br><code>9.42.157.194    slave-04</code><br><code>9.42.157.204    slave-05</code><br><code>9.42.157.210    slave-06</code><br><code>9.42.157.233    slave-07</code><br><code>9.42.157.237    slave-08</code><br><code>9.42.157.239    slave-09</code><br><code>9.42.157.241    slave-10</code><br><code>9.42.157.242    slave-11</code></span>
   
   You can designate any Raspberry as the master node, just make sure to have a proper list in order to avoid confusion.
6. ###### Generate and replicate SSH keys.
   We need all the Raspberies to be able to communicate between each other without prompting for passwords. For that, we will generate SSH keys in all of them.
   
   <span style="white-space: pre-wrap"><code>ssh-keygen -t rsa -b 4096 -C your\_email@example.com</code></span>
   
   And then replicate the keys to all the Raspberies.
   
   <span style="white-space: pre-wrap"><code>ssh-copy-id user@master</code><br><code>ssh-copy-id user@slave-01</code><br><code>ssh-copy-id user@slave-02</code><br><code>ssh-copy-id user@slave-03</code><br><code>ssh-copy-id user@slave-04</code><br><code>ssh-copy-id user@slave-05</code><br><code>ssh-copy-id user@slave-06</code><br><code>ssh-copy-id user@slave-07</code><br><code>ssh-copy-id user@slave-08</code><br><code>ssh-copy-id user@slave-09</code><br><code>ssh-copy-id user@slave-10</code><br><code>ssh-copy-id user@slave-11</code></span>
   
   After you are done, <em>every</em> Raspberry should have <em>all</em> the keys. This is the step where most people make mistakes, and most of the problems when starting the cluster come from an erroneous configuration of the SSH keys. So take your time to verify that all the nodes can connect to each other.
7. ###### Add environment variables.
   Now, we will add some Hadoop environment variables to our <strong>\~/.bashrc</strong> file. Change the paths according to your environment.
   
   <span style="white-space: pre-wrap"><code>\# -- HADOOP ENVIRONMENT VARIABLES START -- \#</code><br><code>export HADOOP\_HOME=/opt/hadoop/hadoop</code><br><code>export PATH=\$PATH:\$HADOOP\_HOME/bin</code><br><code>export PATH=\$PATH:\$HADOOP\_HOME/sbin</code><br><code>export HADOOP\_MAPRED\_HOME=\$HADOOP\_HOME</code><br><code>export HADOOP\_COMMON\_HOME=\$HADOOP\_HOME</code><br><code>export HADOOP\_HDFS\_HOME=\$HADOOP\_HOME</code><br><code>export YARN\_HOME=\$HADOOP\_HOME</code><br><code>export HADOOP\_COMMON\_LIB\_NATIVE\_DIR=\$HADOOP\_HOME/lib/native</code><br><code>export HADOOP\_OPTS="-Djava.library.path=\$HADOOP\_HOME/lib"</code><br><code>\# -- HADOOP ENVIRONMENT VARIABLES END -- \#</code><br><code>export JAVA\_HOME=/usr/lib/jvm/jdk-8-oracle-arm32-vfp-hflt/jre </code></span>
   
   If you installed Hadoop in a different path, make sure to change <strong>HADOOP\_HOME</strong>. Make sure to add <strong>JAVA\_HOME</strong> as well, which may be different in your environment.
8. ###### Install Hadoop in the namenode
   The namenode is our master node. The slave nodes are refered as datanodes. We will install Hadoop on our namenode and perform some configurations, then, we will work on the datanodes. Since this is the basic configuration, this and the following steps will be done only in the namenode. Then we will copy this basic configuration to the remaining 11 nodes, and then we will perform specific customizations.
   
   In the releases page ([https://hadoop.apache.org/releases.html](https://hadoop.apache.org/releases.html)) of the Hadoop site you can see which is the newest Hadoop version.
   
   Go to the installation directory that we created in the second step. Select a Hadoop version from the download page and get the URL of the tarball. The following commands will download a Hadoop package and uncompress it.
   
   cd /opt/hadoop/
   sudo wget [http://www-us.apache.org/dist/hadoop/common/hadoop-2.6.4/hadoop-2.6.4.tar.gz](http://www-us.apache.org/dist/hadoop/common/hadoop-2.6.4/hadoop-2.6.4.tar.gz)
   sudo tar xvf hadoop-2.6.4.tar.gz
   mv hadoop-2.6.4 hadoop
9. ###### Add the master and slaves files
   This step should only be done in the Master node. We must add two files in <strong>\$HADOOP\_HOME/hadoop/etc/hadoop/</strong>, one of them will be named <strong>master</strong> and the other will be named <strong>slaves</strong>,
   
   In this new <strong>master</strong> file we only need to add the hostname or alias of the master node. So in our case this file will only contain one line:
   
   <span style="white-space: pre-wrap"><code>master</code></span>
   
   In the <strong>slaves</strong> file we will only add our slaves nodes, one alias per line. In our case:
   
   <span style="white-space: pre-wrap"><code>slave-01</code><br><code>slave-02</code><br><code>slave-03</code><br><code>slave-04</code><br><code>slave-05</code><br><code>slave-06</code><br><code>slave-07</code><br><code>slave-08</code><br><code>slave-09</code><br><code>slave-10</code><br><code>slave-11</code></span>
10. ###### Setup HDFS
    A couple of directories need to be created in our HDFS directory. In the namenode. go to the HDFS directory (<strong>/opt/hadoop\_tmp/</strong> in our case) and create a directory named “hdfs”, then, inside that directory create another directory named “namenode”.
    
    <span style="white-space: pre-wrap"><code>sudo mkdir /opt/hadoop\_tmp/hdfs</code><br><code>sudo mkdir /opt/hadoop\_tmp/hdfs/namenode</code></span>
    
    Next, we will go to every slave node, and do the same, except that the newest directory will be named “datanode”:
    
    <span style="white-space: pre-wrap"><code>sudo mkdir /opt/hadoop\_tmp/hdfs</code><br><code>sudo mkdir /opt/hadoop\_tmp/hdfs/datanode</code></span>
11. ###### Copy the basic configuration to the slave nodes
    The previous steps for the Hadoop installation were done only in the master node. Now we will take those files and copy them to the remaining Raspberries.
    
    On the master node, run the following commands in order to copy the basic setup to the slaves (you can also do this with scp):
    
    <span style="white-space: pre-wrap"><code>rsync -avxP \<\$HADOOP\_HOME\> \<hadoop\_user\>@\<slave-hostname\>:\<\$HADOOP\_HOME\></code></span>
    
    In our case, it would be something like this:
    
    <span style="white-space: pre-wrap"><code>rsync -avxP /opt/hadoop/ user@slave-01:/opt/hadoop/</code><br><code>rsync -avxP /opt/hadoop/ user@slave-02:/opt/hadoop/</code><br><code>rsync -avxP /opt/hadoop/ user@slave-03:/opt/hadoop/</code><br><code>rsync -avxP /opt/hadoop/ user@slave-04:/opt/hadoop/</code><br><code>rsync -avxP /opt/hadoop/ user@slave-05:/opt/hadoop/</code><br><code>rsync -avxP /opt/hadoop/ user@slave-06:/opt/hadoop/</code><br><code>rsync -avxP /opt/hadoop/ user@slave-07:/opt/hadoop/</code><br><code>rsync -avxP /opt/hadoop/ user@slave-08:/opt/hadoop/</code><br><code>rsync -avxP /opt/hadoop/ user@slave-09:/opt/hadoop/</code><br><code>rsync -avxP /opt/hadoop/ user@slave-10:/opt/hadoop/</code><br><code>rsync -avxP /opt/hadoop/ user@slave-11:/opt/hadoop/</code></span>
12. ###### Edit the configuration files
    There are several XML files that need to be modified according to our architecture. These changes need to be done in the Master and in all the Slave nodes.
    
    Update <strong>core-site.xml</strong> (located in <strong>\$HADOOP\_HOME/hadoop/etc/hadoop/core-site.xml</strong>), we will change “localhost” to our master node hostname, IP, or alias. In our case, it would be like this:
    
    <span style="white-space: pre-wrap"><code>\<configuration\></code><br><code>    \<property\></code><br><code>        \<name\>fs.default.name\</name\></code><br><code>        \<value\>hdfs://master:9000/\</value\></code><br><code>    \</property\></code><br><code>    \<property\></code><br><code>        \<name\>fs.default.FS\</name\></code><br><code>        \<value\>hdfs://master:9000/\</value\></code><br><code>    \</property\></code><br><code>\</configuration\></code></span>
    
    Update <strong>hdfs-site.xml</strong> (located in <strong>\$HADOOP\_HOME/hadoop/etc/hadoop/hdfs-site.xml</strong>), we will change the replication factor to the number of datanodes you have, and specify the datanode and namenodes directories (which we created in the previous step), as well as add an http address:
    
    <span style="white-space: pre-wrap"><code>\<configuration\></code><br><code>    \<property\></code><br><code>        \<name\>dfs.datanode.data.dir\</name\></code><br><code>        \<value\>/opt/hadoop\_tmp/hdfs/datanode\</value\></code><br><code>        \<final\>true\</final\></code><br><code>    \</property\></code><br><code>    \<property\></code><br><code>        \<name\>dfs.namenode.name.dir\</name\></code><br><code>        \<value\>/opt/hadoop\_tmp/hdfs/namenode\</value\></code><br><code>        \<final\>true\</final\></code><br><code>    \</property\></code><br><code>    \<property\></code><br><code>        \<name\>dfs.namenode.http-address\</name\></code><br><code>        \<value\>master:50070\</value\></code><br><code>    \</property\></code><br><code>    \<property\></code><br><code>        \<name\>dfs.replication\</name\></code><br><code>        \<value\>11\</value\></code><br><code>    \</property\></code><br><code>\</configuration\></code></span>
    
    Update <strong>yarn-site.xml</strong> (located in <strong>\$HADOOP\_HOME/hadoop/etc/hadoop/yarn-site.xml</strong>). There will be 3 properties that we need to update with our master node hostname or alias:
    
    <span style="white-space: pre-wrap"><code>\<configuration\></code><br><code>    \<property\></code><br><code>        \<name\>yarn.resourcemanager.resource-tracker.address\</name\></code><br><code>        \<value\>master:8025\</value\></code><br><code>    \</property\></code><br><code>    \<property\></code><br><code>        \<name\>yarn.resourcemanager.scheduler.address\</name\></code><br><code>        \<value\>master:8035\</value\></code><br><code>    \</property\></code><br><code>    \<property\></code><br><code>        \<name\>yarn.resourcemanager.address\</name\></code><br><code>        \<value\>master:8050\</value\></code><br><code>    \</property\></code><br><code>\</configuration\></code></span>
    
    Update <strong>mapred-site.xml</strong> (located in <strong>\$HADOOP\_HOME/hadoop/etc/hadoop/mapred-site.xml</strong>), we will add the following properties:
    
    <span style="white-space: pre-wrap"><code>\<configuration\></code><br><code>    \<property\></code><br><code>        \<name\>mapreduce.job.tracker\</name\></code><br><code>        \<value\>master:5431\</value\></code><br><code>    \</property\></code><br><code>    \<property\></code><br><code>        \<name\>mapred.framework.name\</name\></code><br><code>        \<value\>yarn\</value\></code><br><code>    \</property\></code><br><code>\</configuration\></code></span>
13. ###### Format the namenode and start the services
    Go to the namenode, in <strong>\$HADOOP\_HOME/bin/</strong> execute the following:
    
    <span style="white-space: pre-wrap"><code>./hdfs namenode -format</code></span>
    
    That will format the master as a proper namenode. Finally, start the services. Previously, Hadoop used the start-all.sh script for this, but it has been deprecated and the recommended method now is to use the start-\<service\>.sh scripts individually. In each node, go to <strong>\$HADOOP\_HOME/sbin/</strong> and execute the following:
    
    <span style="white-space: pre-wrap"><code>./start-yarn.sh</code><br><code>./start-dfs.sh</code></span>
    
    The most common problem here is lack connection between the nodes. If you see any errors while starting the nodes, check the SSH keys.
14. ###### Verify the cluster
    There are several ways to confirm that everything is running properly, for example, you can point your browser to [http://master:50070](http://master:50070) (the http address configured earlier) or to [http://master:8088](http://master:8088). There you can see status reports of the cluster. Alternatively, you can also check the Java processes in the nodes. In the master node you should see at least 3 processes: NameNode, SecondaryNameNode and ResourceManager. In the slaves you should see only two: NodeManager and DataNode. My favourite way is to use the hdfs report command. This is the output report of my configuration:
    
    <span style="white-space: pre-wrap"><code>/opt/hadoop/hadoop/bin/hdfs dfsadmin -report</code><br><code>Configured Capacity: 182240477184 (169.72 GB)</code><br><code>Present Capacity: 153073315840 (142.56 GB)</code><br><code>DFS Remaining: 153073020928 (142.56 GB)</code><br><code>DFS Used: 294912 (288 KB)</code><br><code>DFS Used%: 0.00%</code><br><code>Under replicated blocks: 0</code><br><code>Blocks with corrupt replicas: 0</code><br><code>Missing blocks: 0</code><br><code></code><br><code>-------------------------------------------------</code><br><code>Live datanodes (12):</code><br><code></code><br><code>Name: 9.42.157.210:50010 (slave-06)</code><br><code>Hostname: Pi007-rtp</code><br><code>Decommission Status : Normal</code><br><code>Configured Capacity: 15186706432 (14.14 GB)</code><br><code>DFS Used: 24576 (24 KB)</code><br><code>Non DFS Used: 2411073536 (2.25 GB)</code><br><code>DFS Remaining: 12775608320 (11.90 GB)</code><br><code>DFS Used%: 0.00%</code><br><code>DFS Remaining%: 84.12%</code><br><code>Configured Cache Capacity: 0 (0 B)</code><br><code>Cache Used: 0 (0 B)</code><br><code>Cache Remaining: 0 (0 B)</code><br><code>Cache Used%: 100.00%</code><br><code>Cache Remaining%: 0.00%</code><br><code>Xceivers: 1</code><br><code>Last contact: Tue Mar 22 21:10:30 EDT 2016</code><br><code></code><br><code>Name: 9.42.157.204:50010 (slave-05)</code><br><code>Hostname: Pi006-rtp</code><br><code>Decommission Status : Normal</code><br><code>Configured Capacity: 15186706432 (14.14 GB)</code><br><code>DFS Used: 24576 (24 KB)</code><br><code>Non DFS Used: 2411417600 (2.25 GB)</code><br><code>DFS Remaining: 12775264256 (11.90 GB)</code><br><code>DFS Used%: 0.00%</code><br><code>DFS Remaining%: 84.12%</code><br><code>Configured Cache Capacity: 0 (0 B)</code><br><code>Cache Used: 0 (0 B)</code><br><code>Cache Remaining: 0 (0 B)</code><br><code>Cache Used%: 100.00%</code><br><code>Cache Remaining%: 0.00%</code><br><code>Xceivers: 1</code><br><code>Last contact: Tue Mar 22 21:10:30 EDT 2016</code><br><code></code><br><code>Name: 9.42.157.237:50010 (slave-08)</code><br><code>Hostname: Pi009-rtp</code><br><code>Decommission Status : Normal</code><br><code>Configured Capacity: 15186706432 (14.14 GB)</code><br><code>DFS Used: 24576 (24 KB)</code><br><code>Non DFS Used: 2410917888 (2.25 GB)</code><br><code>DFS Remaining: 12775763968 (11.90 GB)</code><br><code>DFS Used%: 0.00%</code><br><code>DFS Remaining%: 84.12%</code><br><code>Configured Cache Capacity: 0 (0 B)</code><br><code>Cache Used: 0 (0 B)</code><br><code>Cache Remaining: 0 (0 B)</code><br><code>Cache Used%: 100.00%</code><br><code>Cache Remaining%: 0.00%</code><br><code>Xceivers: 1</code><br><code>Last contact: Tue Mar 22 21:10:30 EDT 2016</code><br><code></code><br><code>Name: 9.42.157.186:50010 (slave-02)</code><br><code>Hostname: Pi003-rtp</code><br><code>Decommission Status : Normal</code><br><code>Configured Capacity: 15186706432 (14.14 GB)</code><br><code>DFS Used: 24576 (24 KB)</code><br><code>Non DFS Used: 2411122688 (2.25 GB)</code><br><code>DFS Remaining: 12775559168 (11.90 GB)</code><br><code>DFS Used%: 0.00%</code><br><code>DFS Remaining%: 84.12%</code><br><code>Configured Cache Capacity: 0 (0 B)</code><br><code>Cache Used: 0 (0 B)</code><br><code>Cache Remaining: 0 (0 B)</code><br><code>Cache Used%: 100.00%</code><br><code>Cache Remaining%: 0.00%</code><br><code>Xceivers: 1</code><br><code>Last contact: Tue Mar 22 21:10:30 EDT 2016</code><br><code></code><br><code>Name: 9.42.157.187:50010 (slave-03)</code><br><code>Hostname: Pi004-rtp</code><br><code>Decommission Status : Normal</code><br><code>Configured Capacity: 15186706432 (14.14 GB)</code><br><code>DFS Used: 24576 (24 KB)</code><br><code>Non DFS Used: 2410520576 (2.24 GB)</code><br><code>DFS Remaining: 12776161280 (11.90 GB)</code><br><code>DFS Used%: 0.00%</code><br><code>DFS Remaining%: 84.13%</code><br><code>Configured Cache Capacity: 0 (0 B)</code><br><code>Cache Used: 0 (0 B)</code><br><code>Cache Remaining: 0 (0 B)</code><br><code>Cache Used%: 100.00%</code><br><code>Cache Remaining%: 0.00%</code><br><code>Xceivers: 1</code><br><code>Last contact: Tue Mar 22 21:10:30 EDT 2016</code><br><code></code><br><code>Name: 9.42.157.175:50010 (master)</code><br><code>Hostname: Pi001-rtp</code><br><code>Decommission Status : Normal</code><br><code>Configured Capacity: 15186706432 (14.14 GB)</code><br><code>DFS Used: 24576 (24 KB)</code><br><code>Non DFS Used: 2626191360 (2.45 GB)</code><br><code>DFS Remaining: 12560490496 (11.70 GB)</code><br><code>DFS Used%: 0.00%</code><br><code>DFS Remaining%: 82.71%</code><br><code>Configured Cache Capacity: 0 (0 B)</code><br><code>Cache Used: 0 (0 B)</code><br><code>Cache Remaining: 0 (0 B)</code><br><code>Cache Used%: 100.00%</code><br><code>Cache Remaining%: 0.00%</code><br><code>Xceivers: 1</code><br><code>Last contact: Tue Mar 22 21:10:30 EDT 2016</code><br><code></code><br><code>Name: 9.42.157.182:50010 (slave-01)</code><br><code>Hostname: Pi002-rtp</code><br><code>Decommission Status : Normal</code><br><code>Configured Capacity: 15186706432 (14.14 GB)</code><br><code>DFS Used: 24576 (24 KB)</code><br><code>Non DFS Used: 2409967616 (2.24 GB)</code><br><code>DFS Remaining: 12776714240 (11.90 GB)</code><br><code>DFS Used%: 0.00%</code><br><code>DFS Remaining%: 84.13%</code><br><code>Configured Cache Capacity: 0 (0 B)</code><br><code>Cache Used: 0 (0 B)</code><br><code>Cache Remaining: 0 (0 B)</code><br><code>Cache Used%: 100.00%</code><br><code>Cache Remaining%: 0.00%</code><br><code>Xceivers: 1</code><br><code>Last contact: Tue Mar 22 21:10:30 EDT 2016</code><br><code></code><br><code>Name: 9.42.157.242:50010 (slave-11)</code><br><code>Hostname: Pi012-rtp</code><br><code>Decommission Status : Normal</code><br><code>Configured Capacity: 15186706432 (14.14 GB)</code><br><code>DFS Used: 24576 (24 KB)</code><br><code>Non DFS Used: 2410094592 (2.24 GB)</code><br><code>DFS Remaining: 12776587264 (11.90 GB)</code><br><code>DFS Used%: 0.00%</code><br><code>DFS Remaining%: 84.13%</code><br><code>Configured Cache Capacity: 0 (0 B)</code><br><code>Cache Used: 0 (0 B)</code><br><code>Cache Remaining: 0 (0 B)</code><br><code>Cache Used%: 100.00%</code><br><code>Cache Remaining%: 0.00%</code><br><code>Xceivers: 1</code><br><code>Last contact: Tue Mar 22 21:10:30 EDT 2016</code><br><code></code><br><code>Name: 9.42.157.241:50010 (slave-10)</code><br><code>Hostname: Pi011-rtp</code><br><code>Decommission Status : Normal</code><br><code>Configured Capacity: 15186706432 (14.14 GB)</code><br><code>DFS Used: 24576 (24 KB)</code><br><code>Non DFS Used: 2409664512 (2.24 GB)</code><br><code>DFS Remaining: 12777017344 (11.90 GB)</code><br><code>DFS Used%: 0.00%</code><br><code>DFS Remaining%: 84.13%</code><br><code>Configured Cache Capacity: 0 (0 B)</code><br><code>Cache Used: 0 (0 B)</code><br><code>Cache Remaining: 0 (0 B)</code><br><code>Cache Used%: 100.00%</code><br><code>Cache Remaining%: 0.00%</code><br><code>Xceivers: 1</code><br><code>Last contact: Tue Mar 22 21:10:30 EDT 2016</code><br><code></code><br><code>Name: 9.42.157.233:50010 (slave-07)</code><br><code>Hostname: Pi008-rtp</code><br><code>Decommission Status : Normal</code><br><code>Configured Capacity: 15186706432 (14.14 GB)</code><br><code>DFS Used: 24576 (24 KB)</code><br><code>Non DFS Used: 2410676224 (2.25 GB)</code><br><code>DFS Remaining: 12776005632 (11.90 GB)</code><br><code>DFS Used%: 0.00%</code><br><code>DFS Remaining%: 84.13%</code><br><code>Configured Cache Capacity: 0 (0 B)</code><br><code>Cache Used: 0 (0 B)</code><br><code>Cache Remaining: 0 (0 B)</code><br><code>Cache Used%: 100.00%</code><br><code>Cache Remaining%: 0.00%</code><br><code>Xceivers: 1</code><br><code>Last contact: Tue Mar 22 21:10:30 EDT 2016</code><br><code></code><br><code>Name: 9.42.157.194:50010 (slave-04)</code><br><code>Hostname: Pi005-rtp</code><br><code>Decommission Status : Normal</code><br><code>Configured Capacity: 15186706432 (14.14 GB)</code><br><code>DFS Used: 24576 (24 KB)</code><br><code>Non DFS Used: 2410934272 (2.25 GB)</code><br><code>DFS Remaining: 12775747584 (11.90 GB)</code><br><code>DFS Used%: 0.00%</code><br><code>DFS Remaining%: 84.12%</code><br><code>Configured Cache Capacity: 0 (0 B)</code><br><code>Cache Used: 0 (0 B)</code><br><code>Cache Remaining: 0 (0 B)</code><br><code>Cache Used%: 100.00%</code><br><code>Cache Remaining%: 0.00%</code><br><code>Xceivers: 1</code><br><code>Last contact: Tue Mar 22 21:10:30 EDT 2016</code><br><code></code><br><code>Name: 9.42.157.239:50010 (slave-09)</code><br><code>Hostname: Pi010-rtp</code><br><code>Decommission Status : Normal</code><br><code>Configured Capacity: 15186706432 (14.14 GB)</code><br><code>DFS Used: 24576 (24 KB)</code><br><code>Non DFS Used: 2434580480 (2.27 GB)</code><br><code>DFS Remaining: 12752101376 (11.88 GB)</code><br><code>DFS Used%: 0.00%</code><br><code>DFS Remaining%: 83.97%</code><br><code>Configured Cache Capacity: 0 (0 B)</code><br><code>Cache Used: 0 (0 B)</code><br><code>Cache Remaining: 0 (0 B)</code><br><code>Cache Used%: 100.00%</code><br><code>Cache Remaining%: 0.00%</code><br><code>Xceivers: 1</code><br><code>Last contact: Tue Mar 22 21:10:30 EDT 2016</code></span>
    
    You can see that HDFS takes the space available in each node and combines it as one single file system.
    
    Congratulations! At this point, Hadoop is configured and running. You can stop here, but I would prefer to run a few tests, just to make sure everything is working correctly. We will upload some files to the HDFS.
    
    First, check the space usage:
    
    <span style="white-space: pre-wrap"><code>/opt/hadoop/hadoop/bin/hadoop fs -df -h</code><br><code>Filesystem Size Used Available Use%</code><br><code>hdfs://master:9000 169.7 G 10.3 G 132.2 G 6%</code></span>
    
    Create a test directory:
    
    <span style="white-space: pre-wrap"><code>/opt/hadoop/hadoop/bin/hadoop fs -mkdir hdfs://master:9000/testdir/</code></span>
    
    I have a test file in the local file system (specifically, in <strong>/tmp</strong>) we will upload that file into HDFS, inside the directory we just created:
    
    <span style="white-space: pre-wrap"><code>/opt/hadoop/hadoop/bin/hadoop fs -copyFromLocal /tmp/testFile.txt hdfs://master:9000/testdir/testFile.txt</code></span>
    
    We can list the files in HDFS and confirm that the file was correctly uploaded:
    
    <span style="white-space: pre-wrap"><code>/opt/hadoop/hadoop/bin/hadoop fs -ls hdfs://master:9000/</code><br><code>Found 1 items</code><br><code>drwxr-xr-x - root supergroup 0 2016-03-23 13:36 hdfs://master:9000/testdir</code><br><code></code><br><code>/opt/hadoop/hadoop/bin/hadoop fs -ls hdfs://master:9000/testdir/</code><br><code>Found 1 items</code><br><code>-rw-r--r-- 11 root supergroup 542456 2016-03-23 13:36 hdfs://master:9000/testdir/testFile.txt</code></span>
    
    For every file and directory in the HDFS, we can also check things like the replication factor, missing replicas, number of racks, file size and many other things. Here, we will check the status of our test directory and our test file:
    
    <span style="white-space: pre-wrap"><code>/opt/hadoop/hadoop/bin/hdfs fsck /testdir/ -files -blocks -racks</code><br><code>Connecting to namenode via http://master:50070</code><br><code>FSCK started by root (auth:SIMPLE) from /9.42.157.175 for path /testdir/ at Wed Mar 23 13:48:04 EDT 2016</code><br><code>/testdir/ \<dir\></code><br><code>/testdir/testFile.txt 542456 bytes, 1 block(s): OK</code><br><code>0. BP-153620240-127.0.1.1-1457972366593:blk\_1073741834\_1010 len=542456 repl=11 </code><br><code>\[/default-rack/9.42.157.175:50010, </code><br><code>/default-rack/9.42.157.204:50010, </code><br><code>/default-rack/9.42.157.233:50010, </code><br><code>/default-rack/9.42.157.194:50010, </code><br><code>/default-rack/9.42.157.239:50010, </code><br><code>/default-rack/9.42.157.187:50010, </code><br><code>/default-rack/9.42.157.237:50010, </code><br><code>/default-rack/9.42.157.182:50010, </code><br><code>/default-rack/9.42.157.210:50010, </code><br><code>/default-rack/9.42.157.186:50010, </code><br><code>/default-rack/9.42.157.242:50010\]</code><br><code>Status: HEALTHY</code><br><code> Total size: 542456 B</code><br><code> Total dirs: 1</code><br><code> Total files: 1</code><br><code> Total symlinks: 0</code><br><code> Total blocks (validated): 1 (avg. block size 542456 B)</code><br><code> Minimally replicated blocks: 1 (100.0 %)</code><br><code> Over-replicated blocks: 0 (0.0 %)</code><br><code> Under-replicated blocks: 0 (0.0 %)</code><br><code> Mis-replicated blocks: 0 (0.0 %)</code><br><code> Default replication factor: 11</code><br><code> Average block replication: 11.0</code><br><code> Corrupt blocks: 0</code><br><code> Missing replicas: 0 (0.0 %)</code><br><code> Number of data-nodes: 12</code><br><code> Number of racks: 1</code><br><code>FSCK ended at Wed Mar 23 13:48:04 EDT 2016 in 16 milliseconds</code><br><code></code><br><code>The filesystem under path '/testdir/' is HEALTHY</code></span>
    
    Since this is a very small text file (only 529KB), and our block size is 128MB there is only need for one block to store it. However, if we upload or create a bigger file in HDFS we can see that it needs more blocks, and these blocks are distributed in the cluster following our replication factor parameter. Take, for example, a 1GB file that I created using the Teragen sample program bundled with Hadoop (the following output was abridged for brevity reasons):
    
    <span style="white-space: pre-wrap"><code>/opt/hadoop/hadoop/bin/hdfs fsck /teraInput/ -files -blocks -racks</code><br><code>Connecting to namenode via http://master:50070</code><br><code>FSCK started by root (auth:SIMPLE) from /9.42.157.175 for path /teraInput/ at Wed Mar 23 13:59:53 EDT 2016</code><br><code>/teraInput/ \<dir\></code><br><code>/teraInput/\_SUCCESS 0 bytes, 0 block(s): OK</code><br><code></code><br><code>/teraInput/part-m-00000 1000000000 bytes, 8 block(s): OK</code><br><code>0. BP-153620240-127.0.1.1-1457972366593:blk\_1073741825\_1001 len=134217728 repl=11 \[/default-rack/9.42.157.175:50010,...\]1. BP-153620240-127.0.1.1-1457972366593:blk\_1073741826\_1002 len=134217728 repl=11 \[/default-rack/9.42.157.175:50010,...\]2. BP-153620240-127.0.1.1-1457972366593:blk\_1073741827\_1003 len=134217728 repl=11 \[/default-rack/9.42.157.175:50010,...\]3. BP-153620240-127.0.1.1-1457972366593:blk\_1073741828\_1004 len=134217728 repl=11 \[/default-rack/9.42.157.175:50010,...\]4. BP-153620240-127.0.1.1-1457972366593:blk\_1073741829\_1005 len=134217728 repl=11 \[/default-rack/9.42.157.175:50010,...\]5. BP-153620240-127.0.1.1-1457972366593:blk\_1073741830\_1006 len=134217728 repl=11 \[/default-rack/9.42.157.175:50010,...\]6. BP-153620240-127.0.1.1-1457972366593:blk\_1073741831\_1007 len=134217728 repl=11 \[/default-rack/9.42.157.175:50010,...\]7. BP-153620240-127.0.1.1-1457972366593:blk\_1073741832\_1008 len=60475904 repl=11 \[/default-rack/9.42.157.175:50010,...\]</code><br><code>Status: HEALTHY</code><br><code> Total size: 1000000000 B</code><br><code> Total dirs: 1</code><br><code> Total files: 2</code><br><code> Total symlinks: 0</code><br><code> Total blocks (validated): 8 (avg. block size 125000000 B)</code><br><code> Minimally replicated blocks: 8 (100.0 %)</code><br><code> Over-replicated blocks: 0 (0.0 %)</code><br><code> Under-replicated blocks: 0 (0.0 %)</code><br><code> Mis-replicated blocks: 0 (0.0 %)</code><br><code> Default replication factor: 11</code><br><code> Average block replication: 11.0</code><br><code> Corrupt blocks: 0</code><br><code> Missing replicas: 0 (0.0 %)</code><br><code> Number of data-nodes: 12</code><br><code> Number of racks: 1</code><br><code>FSCK ended at Wed Mar 23 13:59:53 EDT 2016 in 13 milliseconds</code><br><code></code><br><code>The filesystem under path '/teraInput/' is HEALTHY</code></span>
15. ###### Conclusion
    Hadoop is a very powerful tool for big data. In this tutorial we installed and configured it, and also worked a little bit with HDFS. However, Hadoop offers many more possibilities, for example, distributed computing with MapReduce, databases like Hive and many other projects. Also, this is a small test cluster that is only storing small files. Clusters consisting of hundreds of nodes, storing terabytes or petabytes of data, are common. In fact, big clusters like those are where Hadoop and other distributed computing platforms really show how useful they can be.
    
    Installing and configuring Hadoop is not difficult, but we always need to pay very close attention to many aspects, otherwise we will get obscure errors that could be difficult to troubleshoot. Hopefully, this recipe will help those who want to learn about big data technologies.
    
    Doing all this work in the Raspberry Pi platform did not offer any extra difficulty. In fact, it was as easy as working on a “real” server. Obviously, the tiny Raspberries do not offer the same power as more expensive solutions, but building a cluster with Raspberries is <em>much</em> more affordable, and they are generally easier to get, so they are the perfect solution for startups, students, small teams, and projects that do not require high-end hardware.
