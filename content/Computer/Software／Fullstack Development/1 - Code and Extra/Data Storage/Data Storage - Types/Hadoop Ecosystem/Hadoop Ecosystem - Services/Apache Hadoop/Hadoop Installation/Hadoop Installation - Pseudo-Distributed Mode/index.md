---
title: "Hadoop Installation - Pseudo-Distributed Mode"
created: 2020-05-19T15:17:18.806-05:00
modified: 2020-05-23T00:38:34.517-05:00
parent: "[[Hadoop Installation]]"
children: []
---
This article goes over how to setup [[Apache Hadoop]] on a single-node in a pseudo-distributed mode where each Hadoop daemon runs in a separate Java process
## <strong>Prerequisites to Install Hadoop</strong>
- Hardware requirement - The machine must have 4GB RAM and minimum 60 GB hard disk for better performance.
- Java 8 for Hadoop 3.\*
- Java 7 for Hadoop 2.\*
- install ssh and pdsh
    ```
    sudo apt-get install ssh pdsh
    ```

## <strong>Setup Passwordless SSH</strong>

> [!expand]- Click here to expand...
> ###### a) Install OpenSSH Server and OpenSSH Client
> ```
> sudo apt-get install openssh-server openssh-client
> ```
> ###### b) Generate Public & Private Key Pairs
> ```
> ssh-keygen -t rsa -P ""
> ```
> ###### c) Configure password-less SSH
>
> add the public ssh-key to authorized\_keys
> ```
> cat $HOME/.ssh/id_rsa.pub >> $HOME/.ssh/authorized_keys
> ```
> ###### d) Now verify the working of password-less ssh
>
> check if the following command works
> ```
> ssh localhost
> ```
> ###### e) Now install rsync with command
> ```
> sudo apt-get install rsync
> ```
## <strong>Download Hadoop</strong>

> [!expand]- Click here to expand...
> ###### a) Download the Hadoop package (Binary Package)
>
> go to: [https://hadoop.apache.org/releases.html](https://hadoop.apache.org/releases.html)
> ```
> wget http://apache.mirrors.hoobly.com/hadoop/common/hadoop-2.10.0/hadoop-2.10.0.tar.gz
> ```
> ###### b) Untar the Tarball
> ```
> tar xzf hadoop-2.8.2.tar.gz
> ```
## <strong>Setup Configuration</strong>

> [!expand]- Click here to expand...
> We can add only the minimum property in the Hadoop configuration. The user can add more properties to it.
> ###### a) Setting Up the environment variables
>
> edit \~/.bashrc adding hadoop in a path
> ```
> vim ~/.bashrc
> ```
>
> add the following lines below
> ```
> export HADOOP_HOME=/home/hduser/hadoop-2.8.2
> export HADOOP_INSTALL=$HADOOP_HOME
> export HADOOP_MAPRED_HOME=$HADOOP_HOME
> export HADOOP_COMMON_HOME=$HADOOP_HOME
> export HADOOP_HDFS_HOME=$HADOOP_HOME
> export YARN_HOME=$HADOOP_HOME
> export HADOOP_COMMON_LIB_NATIVE_DIR=$HADOOP_HOME/lib/native
> export PATH=$PATH:$HADOOP_HOME/sbin:$HADOOP_HOME/bin
> ```
>
> source .bashrc in current login session in terminal
> ```
> source ~/.bashrc
> ```
> ###### b) Hadoop configuration file changes
>
> edit hadoop-env.sh which is in etc/hadoop inside the Hadoop directory
> ```
> export JAVA_HOME=<root directory of Java-installation>
> to
> export JAVA_HOME=/usr/lib/jvm/jdk1.8.0_151
> ```
>
> Edit core-site.xml which is in the etc/hadoop inside Hadoop directory. Then we will add following entries.
> ```
> <configuration>
> 	<property>
> 		<name>fs.defaultFS</name>
> 		<value>hdfs://localhost:9000</value>
> 	</property>
> 	<property>
> 		<name>hadoop.tmp.dir</name>
> 		<value>/home/hdadmin/hdata</value>
> 	</property>
> </configuration>
> ```
>
> edit the hdfs-site.xml which is in etc/hadoop inside Hadoop installation directory. We will add the following entries:
> ```
> <configuration>
> 	<property>
> 		<name>dfs.replication</name>
> 		<value>1</value>
> 	</property>
> </configuration>
> ```
>
> Edit mapred-site.xml
>
> copy mapred-site.xml to mapred-site.xml.template
> ```
> cp mapred-site.xml.template mapred-site.xml
> ```
>
> and add following entries:
> ```
> <configuration>
> 	<property>
> 		<name>mapreduce.framework.name</name>
> 		<value>yarn</value>
> 	</property>
> </configuration>
> ```
>
> edit yarn-site.xml which is in etc/hadoop inside Hadoop installation directory. Finally we add following entries:
> ```
> <configuration>
> 	<property>
> 		<name>yarn.nodemanager.aux-services</name>
> 		<value>mapreduce_shuffle</value>
> 	</property>
> 	<property>
> 		<name>yarn.nodemanager.aux-services.mapreduce.shuffle.class</name>
> 		<value>org.apache.hadoop.mapred.ShuffleHandler</value>
> 	</property>
> </configuration>
> ```
## <strong>Start the Cluster</strong>

> [!expand]- Click here to expand...
> We will now start the single node cluster with the following commands.
> ###### a) Format the namenode
>
> Moreover, we will format the namenode before using it the first time
> ```
> hdfs namenode -format
> ```
>
> ![[Hadoop Installation - Pseudo-Distributed Mode/hdfsformat-img13.png|600]]
> ###### b) Start the HDFS
>
> We will start the hadoop cluster using the hadoop start-up script
> ```
> start-dfs.sh
> ```
>
> ![[Hadoop Installation - Pseudo-Distributed Mode/start-dfs.png|600]]
> ###### c) Starting the YARN services
> ```
> start-yarn.sh
> ```
>
> ![[Hadoop Installation - Pseudo-Distributed Mode/start-yarn.png|600]]
> ###### d) Verify if all process started
> ```
> jps
> ```
>
> should show
> ```
> 6775 DataNode
> 7209 ResourceManager
> 7017 SecondaryNameNode
> 6651 NameNode
> 7339 NodeManager
> 7663 Jps
> ```
## <strong>Access Web Interface</strong>

> [!expand]- Click here to expand...
> ###### Web UI of NameNode
>
> visit:
> - Hadoop 2.\* [http://localhost:50070](http://localhost:50070/)
> - Hadoop 3.\* [http://localhost:9870](http://localhost:9870)
>
> ![[Hadoop Installation - Pseudo-Distributed Mode/namenode.png|500]]
> <span style="white-space: pre-wrap"><code>Namenode ports: 50470 --\> 9871, 50070 --\> 9870, 8020 --\> 9820</code><br><code>Secondary NN ports: 50091 --\> 9869, 50090 --\> 9868</code><br><code>Datanode ports: 50020 --\> 9867, 50010 --\> 9866, 50475 --\> 9865, 50075</code></span>
>
> ###### Resource Manager UI
>
> visit: [http://localhost:8088](http://localhost:8088/)
>
> The web interface will display all running jobs on cluster information. Hence, this will help monitor the progress report
>
> ![[Hadoop Installation - Pseudo-Distributed Mode/resource-manager-ui.png|800]]
## <strong>Stopping the Clusters</strong>

> [!expand]- Click here to expand...
> To Stop the HDFS Services we use
> ```
> stop-dfs.sh
> ```
>
> To Stop YARN Services we use
> ```
> stop-yarn.sh
> ```
## <strong>Conclusion</strong>

You have successfully installed Hadoop on Ubuntu. Now you can play with [big data](https://data-flair.training/blogs/what-is-big-data/) using Hadoop [HDFS commands](https://data-flair.training/blogs/top-hadoop-hdfs-commands-tutorial/). For any queries on How to install Hadoop on Ubuntu just drop a comment and we will be back to you.
- [HDFS Commands part 2](https://data-flair.training/blogs/most-used-hdfs-commands-tutorial-examples/)
- [HDFS Commands part 3](https://data-flair.training/blogs/hadoop-hdfs-commands-tutorial/)
