<h1 align="center">Microservices frontend Kubernetes 👋</h1>

### 🚀 PREREQUISITE
1. kubectl
2. minikube environment

### 🧊 SWITCH TO MINIKUBE ENVIRONMENT
```shell
eval $(minikube docker-env)
```

### 🏗 BUILD ALL DOCKER IMAGES BY DOCKER-COMPOSE
```shell
docker-compose up --build -d
```
### 🖥 OTHER USEFUL COMMANDS

```shell
kubectl get pods # Get all pods
kubectl get deployment # Get all deployment
kubectl logs -f pod/{pod_name} # Tail log of a pod
kubectl apply -f {yaml_file} # Deploy by yaml file
kubectl delete -f {yaml_file} # Delete deployment by yaml file
```
