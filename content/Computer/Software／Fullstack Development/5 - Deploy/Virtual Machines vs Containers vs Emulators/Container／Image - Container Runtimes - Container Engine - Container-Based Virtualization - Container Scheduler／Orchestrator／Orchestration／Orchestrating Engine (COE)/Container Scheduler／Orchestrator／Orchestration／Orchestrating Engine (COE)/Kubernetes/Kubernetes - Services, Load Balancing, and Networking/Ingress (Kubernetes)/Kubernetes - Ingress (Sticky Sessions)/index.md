---
title: "Kubernetes - Ingress (Sticky Sessions)"
created: 2025-06-10T17:15:32.510-05:00
modified: 2025-06-10T17:18:50.728-05:00
parent: "[[Ingress (Kubernetes)]]"
children: []
---
Add the following to an Ingress workload
```
    nginx.ingress.kubernetes.io/affinity: "cookie"
    nginx.ingress.kubernetes.io/session-cookie-name: "hello-cookie"
    nginx.ingress.kubernetes.io/session-cookie-expires: "172800"
    nginx.ingress.kubernetes.io/session-cookie-max-age: "172800"
    nginx.ingress.kubernetes.io/ssl-redirect: "false"
    nginx.ingress.kubernetes.io/affinity-mode: persistent
    nginx.ingress.kubernetes.io/session-cookie-hash: sha1 
```

An example full Ingress Workload:
```yml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: homebox
  annotations:
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
    nginx.ingress.kubernetes.io/rewrite-target: /
    nginx.ingress.kubernetes.io/affinity: "cookie"
    nginx.ingress.kubernetes.io/session-cookie-name: "hello-cookie"
    nginx.ingress.kubernetes.io/session-cookie-expires: "172800"
    nginx.ingress.kubernetes.io/session-cookie-max-age: "172800"
    nginx.ingress.kubernetes.io/ssl-redirect: "false"
    nginx.ingress.kubernetes.io/affinity-mode: persistent
    nginx.ingress.kubernetes.io/session-cookie-hash: sha1
spec:
  ingressClassName: nginx
  tls:
  - hosts:
    - homebox.lan
    secretName: tls-homebox
  rules:
  - host: homebox.lan
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: homebox
            port:
              number: 80
```
