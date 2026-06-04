---
title: "Custom Resource Definition - Example"
created: 2025-01-19T23:13:56.150-06:00
modified: 2025-01-19T23:28:38.423-06:00
parent: "[[Kubernetes - Custom Resource Definition (CRD)]]"
children: []
---
> [!expand-ui]- Creating a CustomResourceDefinition
> When you create a new CustomResourceDefinition (CRD), the Kubernetes API Server creates a new RESTful resource path for each version you specify.
>
> For example, if you save the following CustomResourceDefinition:
> ```
> apiVersion: apiextensions.k8s.io/v1
> kind: CustomResourceDefinition
> metadata:
>   # name must match the spec fields below, and be in the form: <plural>.<group>
>   name: crontabs.stable.example.com
> spec:
>   # group name to use for REST API: /apis/<group>/<version>
>   group: stable.example.com
>   # list of versions supported by this CustomResourceDefinition
>   versions:
>     - name: v1
>       # Each version can be enabled/disabled by Served flag.
>       served: true
>       # One and only one version must be marked as the storage version.
>       storage: true
>       schema:
>         openAPIV3Schema:
>           type: object
>           properties:
>             spec:
>               type: object
>               properties:
>                 cronSpec:
>                   type: string
>                 image:
>                   type: string
>                 replicas:
>                   type: integer
>   # either Namespaced or Cluster
>   scope: Namespaced
>   names:
>     # plural name to be used in the URL: /apis/<group>/<version>/<plural>
>     plural: crontabs
>     # singular name to be used as an alias on the CLI and for display
>     singular: crontab
>     # kind is normally the CamelCased singular type. Your resource manifests use this.
>     kind: CronTab
>     # shortNames allow shorter string to match your resource on the CLI
>     shortNames:
>     - ct
> ```
>
> and create it:
> ```
> kubectl create -f my-custom-resource-definition.yaml
> ```
>
> Then a new namespaced RESTful API endpoint is created at:
> ```
> /apis/stable.example.com/v1/namespaces/*/crontabs/...
> ```
>
> This endpoint URL can then be used to create and manage custom objects.
>
> It might take a few seconds for the endpoint to be created. You can watch the <code>Established</code> condition of your CustomResourceDefinition to be true or watch the discovery information of the API server for your resource to show up.

> [!expand-ui]- Creating a Custom Object
> After the CustomResourceDefinition object has been created, you can create custom objects.
> ```
> apiVersion: "stable.example.com/v1"
> kind: CronTab
> metadata:
>   name: my-new-cron-object
> spec:
>   cronSpec: "* * * * */5"
>   image: my-awesome-cron-image
> ```
>
> and create it:
> ```
> kubectl apply -f my-crontab.yaml
> ```
>
> You can then manage your CronTab objects using kubectl. For example:
> ```
> kubectl get crontab
> ```
>
> You could also view raw YAML
> ```
> kubectl get ct -o yaml
> ```

> [!expand-ui]- Deleting a CustomResourceDefinition
> When you delete a CustomResourceDefinition, the server will uninstall the RESTful API endpoint and delete all custom objects stored in it.
> ```
> kubectl delete -f resourcedefinition.yaml
> kubectl get crontabs
> ```
> ```
> Error from server (NotFound): Unable to list {"stable.example.com" "v1" "crontabs"}: the server could not
> find the requested resource (get crontabs.stable.example.com)
> ```
>
> If you later recreate the same CustomResourceDefinition, it will start out empty.

> [!expand-ui]- Specifying a Structural Schema
> [https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#specifying-a-structural-schema](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#specifying-a-structural-schema)

> [!expand-ui]- Field Pruning
> [https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#field-pruning](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#field-pruning)

> [!expand-ui]- Controling Pruning
> [https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#controlling-pruning](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#controlling-pruning)

> [!expand-ui]- Advanced Topics
> [https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#advanced-topics](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#advanced-topics)
# Resources
- [https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#advanced-topics)
