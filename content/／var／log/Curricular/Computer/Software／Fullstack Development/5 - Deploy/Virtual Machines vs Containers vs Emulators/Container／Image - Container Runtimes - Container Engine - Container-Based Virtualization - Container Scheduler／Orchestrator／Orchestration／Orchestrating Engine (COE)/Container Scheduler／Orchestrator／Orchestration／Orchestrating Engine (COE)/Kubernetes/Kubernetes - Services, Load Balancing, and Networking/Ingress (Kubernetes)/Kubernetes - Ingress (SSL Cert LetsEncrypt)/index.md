---
title: "Kubernetes - Ingress (SSL Cert LetsEncrypt)"
created: 2025-06-10T17:17:17.848-05:00
modified: 2025-06-10T17:18:37.540-05:00
parent: "[[Ingress (Kubernetes)]]"
children: []
---
Follow the same as Basic Example above.

Install [cert-manager](https://cert-manager.io/docs/installation/).

Create cluster issuer
```yml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: your-email@example.com
    privateKeySecretRef:
      name: letsencrypt-prod
    solvers:
    - http01:
        ingress:
          class: nginx
```

Create in Kubernetes cluster
```
kubectl apply -f cluster-issuer.yml
```

Update ingress.yml from previous example above
```yml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-ingress
  annotations:
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  ingressClassName: nginx
  tls:
  - hosts:
    - test.devopslearnwith.us
    secretName: example-tls
  rules:
  - host: test.devopslearnwith.us
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: example-service
            port:
              number: 80
```

Apply the change in Kubernetes cluster
```
kubectl apply -f ingress.yml
```

Verify Ingress
```
$ kubectl get ingress
NAME                        CLASS    HOSTS                     ADDRESS           PORTS     AGE
cm-acme-http-solver-x44tq   <none>   test.devopslearnwith.us   192.168.111.100   80        15m
example-ingress             nginx    test.devopslearnwith.us   192.168.111.100   80, 443   32m
```

Verify cert-manager is issuing certificates
```
$ kubectl describe certificate example-tls
$ kubectl get cert
NAME          READY   SECRET        AGE
example-tls   True   example-tls   16m
```

Visit [https://test.devopslearnwith.us](https://test.devopslearnwith.us) in browser.
