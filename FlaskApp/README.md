# Flask Kubernetes Demo

A simple Flask app built using Docker and Kubernetes.

## Features
- Modern, responsive frontend
- Secure environment variable management with ConfigMap and Secret
- Password masking and reveal functionality
- Displays pod and system info
- Ready-to-use Dockerfile and Kubernetes manifests

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>/Session2/FlaskApp
```

### 2. Build the Docker Image
```bash
docker build -t flask-app:v1.0 .
```

### 3. (Optional) Push the Image to Docker Hub
```bash
docker tag flask-app:v1.0 <your-dockerhub-username>/flask-app:v1.0
docker push <your-dockerhub-username>/flask-app:v1.0
```

### 4. Configure Kubernetes Manifests
- Edit `../k8s/deployment.yml` and set the image to either:
  - Local: `flask-app:v1.0` with `imagePullPolicy: Never`
  - Docker Hub: `<your-dockerhub-username>/flask-app:v1.0`

### 5. Apply Kubernetes Resources
```bash
kubectl apply -f ../k8s/
```

### 6. (If using local image)
If using Docker Desktop's Kubernetes, make sure your deployment uses:
```yaml
image: flask-app:v1.0
imagePullPolicy: Never
```
Then restart the deployment:
```bash
kubectl rollout restart deployment/flask-app-deployment
```

### 7. Access the App
- Find the service:
  ```bash
  kubectl get services
  ```
- Open your browser to `http://localhost` (or the external IP/port shown).

## Folder Structure
```
Session2/FlaskApp/
  ├── app.py
  ├── views.py
  ├── settings.py
  ├── requirements.txt
  ├── Dockerfile
  ├── templates/
  └── static/
Session2/k8s/
  ├── configmap.yml
  ├── secret.yml
  ├── deployment.yml
  └── service.yml
```

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE) 