# Kubernetes Setup Guide (Kind + kubectl on Ubuntu)

A step-by-step guide to install **Kind (Kubernetes IN Docker)** and **kubectl** on Ubuntu Linux, create a local Kubernetes cluster, and verify the installation.

---

# Prerequisites

Before you begin, make sure you have:

- Ubuntu 22.04 or later
- Docker installed and running
- Internet connection
- User with sudo privileges

---

# Install Kind

## Step 1: Create a Working Directory

```bash
mkdir kind-lab
cd kind-lab
```

---

## Step 2: Download Kind

### For AMD64 / x86_64

```bash
[ $(uname -m) = x86_64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.32.0/kind-linux-amd64
```

### For ARM64

```bash
[ $(uname -m) = aarch64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.32.0/kind-linux-arm64
```

---

## Step 3: Make Kind Executable

```bash
chmod +x ./kind
```

---

## Step 4: Install Kind

```bash
sudo mv ./kind /usr/local/bin/kind
```

---

## Step 5: Verify Installation

```bash
kind --version
```

Example Output

```text
kind version 0.32.0
```

---

# Kubernetes Manifest Files

Kubernetes resources are defined using **YAML** files.

These YAML files are called **Manifest Files**.

Examples include:

- Pod
- Deployment
- ReplicaSet
- Service
- Namespace
- ConfigMap
- Secret
- Ingress
- PersistentVolume

---

# Create a Kind Cluster

## Step 1: Create Configuration File

```bash
vim kind-config.yaml
```

Paste the following configuration:

```yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
name: fwd-cluster

nodes:
- role: control-plane
  image: kindest/node:v1.35.0
  extraPortMappings:
    - containerPort: 30080
      hostPort: 8080
      protocol: TCP

- role: worker
  image: kindest/node:v1.35.0

- role: worker
  image: kindest/node:v1.35.0
```

---

## Step 2: Create the Cluster

```bash
kind create cluster --config kind-config.yaml --name fwd-kind-cluster
```

---

# Verify Cluster

```bash
kind get clusters
```

```bash
kubectl cluster-info
```

```bash
kubectl get nodes
```

Expected Output

```
NAME                 STATUS   ROLES           AGE
fwd-kind-cluster     Ready    control-plane
worker               Ready
worker               Ready
```

---

# Install kubectl

Visit the official Kubernetes website:

https://kubernetes.io

Navigate to:

**Documentation → Tasks → Tools → Install kubectl on Linux**

---

## Download kubectl

```bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
```

---

## Download SHA256 Checksum

```bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl.sha256"
```

---

## Verify Download

```bash
echo "$(cat kubectl.sha256) kubectl" | sha256sum --check
```

Expected Output

```
kubectl: OK
```

---

## Verify Downloaded Files

```bash
ls
```

Example

```
kind-config.yaml
kubectl
kubectl.sha256
```

---

## Make kubectl Executable

```bash
chmod +x kubectl
```

---

## Install kubectl

```bash
mkdir -p ~/.local/bin

mv ./kubectl ~/.local/bin/kubectl
```

---

## Verify Installation

```bash
kubectl version --client
```

Example Output

```
Client Version: v1.36.2
Kustomize Version: v5.8.1
```

---

# Useful Commands

## Show Kind Clusters

```bash
kind get clusters
```

---

## Show Cluster Information

```bash
kubectl cluster-info
```

---

## Show Nodes

```bash
kubectl get nodes
```

---

## Show All Pods

```bash
kubectl get pods -A
```

---

## Show Namespaces

```bash
kubectl get namespaces
```

---

## Check Client Version

```bash
kubectl version --client
```

---

## Delete Cluster

```bash
kind delete cluster --name fwd-kind-cluster
```

---

# Project Structure

```
kind-lab/
│
├── kind-config.yaml
├── README.md
```

---

# Troubleshooting

### Docker is not Running

```bash
sudo systemctl start docker
```

---

### Check Docker Status

```bash
sudo systemctl status docker
```

---

### Check Kind Version

```bash
kind --version
```

---

### Check kubectl Version

```bash
kubectl version --client
```

---

# Best Practices

- Keep Docker running before creating a Kind cluster.
- Verify downloaded binaries using SHA256 checksums.
- Store Kubernetes YAML files in version control (Git).
- Use meaningful names for clusters and resources.
- Keep Kind and kubectl updated to the latest stable versions.

---

# References

- Kubernetes: https://kubernetes.io
- Kind: https://kind.sigs.k8s.io

---

# Conclusion

You have successfully:

- Installed Kind
- Created a Kubernetes cluster
- Installed kubectl
- Verified the installation
- Learned about Kubernetes Manifest (YAML) files

You are now ready to deploy Kubernetes resources locally using Kind.

---

⭐ If this guide helped you, consider giving your project a star on GitHub and sharing it with others.
