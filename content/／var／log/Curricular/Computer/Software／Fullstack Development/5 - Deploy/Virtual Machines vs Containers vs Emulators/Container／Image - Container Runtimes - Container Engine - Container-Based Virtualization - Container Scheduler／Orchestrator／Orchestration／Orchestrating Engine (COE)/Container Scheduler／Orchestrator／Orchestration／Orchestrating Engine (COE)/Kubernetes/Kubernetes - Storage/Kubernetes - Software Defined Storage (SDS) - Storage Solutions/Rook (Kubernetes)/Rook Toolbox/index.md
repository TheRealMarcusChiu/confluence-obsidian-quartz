---
title: "Rook Toolbox"
created: 2025-05-22T17:02:19.773-05:00
modified: 2025-05-22T17:05:30.225-05:00
parent: "[[Rook (Kubernetes)]]"
children: []
---
###### Rook Toolbox
````excerpt
- is a container with common tools used for [[Rook (Kubernetes)|rook]] debugging and testing
- based on CentOS
````
^excerpt

# Two Modes
- [Interactive](https://rook.github.io/docs/rook/latest-release/Troubleshooting/ceph-toolbox/#interactive-toolbox): Start a toolbox pod where you can connect and execute Ceph commands from a shell
- [One-time job](https://rook.github.io/docs/rook/latest-release/Troubleshooting/ceph-toolbox/#toolbox-job): Run a script with Ceph commands and collect the results from the job log

# Interactive Toolbox

The rook toolbox can run as a deployment in a Kubernetes cluster where you can connect and run arbitrary Ceph commands.

Launch the rook-ceph-tools pod:
```
kubectl create -f deploy/examples/toolbox.yaml
```

Wait for the toolbox pod to download its container and get to the <code>running</code> state
```
kubectl -n rook-ceph rollout status deploy/rook-ceph-tools
```

Once the rook-ceph-tools pod is running, you can connect to it with
```
kubectl -n rook-ceph exec -it deploy/rook-ceph-tools -- bash
```

All available tools in the toolbox are ready for your troubleshooting needs

Examples:
```
ceph status
ceph osd status
ceph df
rados df
```

When you are done with the toolbox, you can remove the deployment:
```
kubectl -n rook-ceph delete deploy/rook-ceph-tools
```
# Toolbox Job

If you want to run Ceph commands as a one-time operation and collect the results later from the logs, you can run a script as a Kubernetes Job. The toolbox job will run a script that is embedded in the job spec. The script has the full flexibility of a bash script.

In this example, the <code>ceph status</code> command is executed when the job is created. Create the toolbox job:
```
kubectl create -f deploy/examples/toolbox-job.yaml
```

After the job completes, see the results of the script
```
kubectl -n rook-ceph logs -l job-name=rook-ceph-toolbox-job
```
