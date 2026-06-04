---
title: "Kubernetes - Manifest Files"
created: 2024-08-20T15:31:58.866-05:00
modified: 2025-01-12T16:19:50.449-06:00
parent: "[[Kubernetes]]"
children: []
---
# Example Manifest File

Create a pod manifest file
```yml
apiVersion: v1
kind: Pod
metadata:
  name: dapi-test-pod
spec:
  containers:
    - name: test-container
      image: busybox
      command: [ "/bin/echo", "$(SPECIAL_LEVEL_KEY) $(SPECIAL_TYPE_KEY)" ]
      env:
        - name: SPECIAL_LEVEL_KEY
          valueFrom:
            configMapKeyRef:
              name: special-config
              key: SPECIAL_LEVEL
        - name: SPECIAL_TYPE_KEY
          valueFrom:
            configMapKeyRef:
              name: special-config
              key: SPECIAL_TYPE
  restartPolicy: Never
```

Create a kubernetes configmap named "special-config" with 2 literals
```
kubectl create configmap special-config --from-literal=SPECIAL_LEVEL=level --from-literal=SPECIAL_TYPE=type
```

Create a pod from the pod-manifest.yml file
```
kubectl create -f pod-manifest.yml
```

Delete the pod
```
kubectl delete -f pod-manifest.yml
```
