# Static Website Docker Project

## Goal
Static HTML website ko Docker container me run karna using Nginx.

## Requirements
- Nginx base image use karna
- index.html serve hona chahiye
- Port 80 expose karna

## Run Steps
docker build -t static-site .
docker run -d -p 8080:80 static-site
