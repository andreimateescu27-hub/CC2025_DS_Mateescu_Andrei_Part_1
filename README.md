# Cloud Computing Project - Part 1
## Cloud-Deployed Data Application

### 📋 Project Overview
A full-stack web application with React frontend and Flask backend, deployed on AWS using CI/CD pipeline with GitHub Actions.

### 🚀 Live Demo
- **Frontend**: http://cc-frontendbucket-project1-plswork.s3-website-us-east-1.amazonaws.com
- **Backend**: http://cloud-app-backend-env.eba-imgjx3nv.us-east-1.elasticbeanstalk.com/api/hello
s
### 🏗️ System Architecture
- **Frontend**: React.js application hosted on AWS S3 + CloudFront
- **Backend**: Flask REST API deployed on AWS Elastic Beanstalk
- **CI/CD**: Automated deployment using GitHub Actions
- **Infrastructure**: AWS Cloud Services (S3, Elastic Beanstalk, IAM)

### 🛠️ Technologies Used
- **Frontend**: React 18, HTML5, CSS3# Cloud Computing Project - Part 1
## Cloud-Deployed Data Application

### 📋 Project Overview
A full-stack web application with React frontend and Flask backend, deployed on AWS using CI/CD pipeline with GitHub Actions.

### 🚀 Live Demo
- **Frontend**: http://cc-frontendbucket-project1-plswork.s3-website-us-east-1.amazonaws.com
- **Backend**: http://cloud-app-backend-env.eba-imgjx3nv.us-east-1.elasticbeanstalk.com/api/hello

### 🏗️ System Architecture
- **Frontend**: React.js application hosted on AWS S3 + CloudFront
- **Backend**: Flask REST API deployed on AWS Elastic Beanstalk
- **CI/CD**: Automated deployment using GitHub Actions
- **Infrastructure**: AWS Cloud Services (S3, Elastic Beanstalk, IAM)

### 🛠️ Technologies Used
- **Frontend**: React 18, HTML5, CSS3
- **Backend**: Python, Flask, Flask-CORS, Gunicorn
- **Cloud**: AWS S3, Elastic Beanstalk, IAM
- **CI/CD**: GitHub Actions
- **Version Control**: Git, GitHub

### 📁 Project Structure
- **Backend**: Python, Flask, Flask-CORS, Gunicorn
- **Cloud**: AWS S3, Elastic Beanstalk, IAM
- **CI/CD**: GitHub Actions
- **Version Control**: Git, GitHub

### 📁 Project Structure
    CC2025_DS_Mateescu_Andrei_Part_1/
    ├── frontend/
    │ ├── src/
    │ │ └── App.js
    │ ├── public/
    │ ├── package.json
    │ ├── .env
    │ └── .env.production
    ├── backend/
    │ ├── app.py
    │ ├── requirements.txt
    │ ├── Procfile
    │ └── .ebextensions/
    │ ├── python.config
    │ └── nginx.config
    └── .github/
    └── workflows/
    └── deploy.yml


### 🚀 Local Development

#### Prerequisites
- Node.js 18+ and npm
- Python 3.9+
- AWS CLI configured
- Git

#### Running Frontend Locally
```bash
cd frontend
npm install
npm start

🌐 Deployment
Automated Deployment (CI/CD)
Push to main branch triggers GitHub Actions

Automated build and deployment to AWS

Backend deployed to Elastic Beanstalk

Frontend deployed to S3 static hosting

Manual Deployment
bash
# Backend deployment
cd backend
eb init
eb create cloud-app-backend-env
eb deploy

# Frontend deployment
cd frontend
npm run build
aws s3 sync build/ s3://your-bucket-name --delete
🔧 API Endpoints
GET /api/hello - Returns greeting message

Response: {"message": "Hello from CLOUD!"}

📊 CI/CD Pipeline
On push to main branch

Backend Deployment:

Install Python dependencies

Deploy to Elastic Beanstalk

Run health checks

Frontend Deployment:

Install Node.js dependencies

Build React application

Configure S3 bucket policies

Deploy to S3 static hosting

🔐 Environment Variables
REACT_APP_API_URL - Backend API URL

AWS_ACCESS_KEY_ID - AWS credentials

AWS_SECRET_ACCESS_KEY - AWS credentials





## 2. Conceptual Architecture Document

```markdown
# Conceptual Architecture

## System Overview
The application follows a client-server architecture with clear separation between frontend and backend components, deployed on AWS cloud infrastructure.

## Architecture Components

### 1. Frontend Layer
- **Technology**: React.js Single Page Application
- **Hosting**: AWS S3 Static Website Hosting
- **Communication**: HTTP REST API calls to backend
- **Features**: Dynamic data fetching, responsive UI

### 2. Backend Layer
- **Technology**: Flask Python Framework
- **Hosting**: AWS Elastic Beanstalk (PaaS)
- **Web Server**: Gunicorn WSGI Server
- **API**: RESTful endpoints with JSON responses
- **CORS**: Enabled for cross-origin requests

### 3. Data Flow
1. User accesses React frontend from S3
2. Frontend makes API call to Flask backend
3. Backend processes request and returns JSON response
4. Frontend updates UI with received data

### 4. Infrastructure Services
- **Compute**: Elastic Beanstalk for backend scaling
- **Storage**: S3 for static frontend assets
- **Networking**: Elastic Load Balancer, Security Groups
- **Security**: IAM roles and policies

### 5. CI/CD Pipeline
- **Source Control**: GitHub repository
- **Automation**: GitHub Actions workflows
- **Build**: Automated testing and building
- **Deployment**: Zero-downtime deployments

## Design Principles
- **Separation of Concerns**: Clear frontend/backend separation
- **Scalability**: Horizontal scaling via Elastic Beanstalk
- **Reliability**: Automated health checks and monitoring
- **Security**: Least privilege IAM roles, CORS configuration



[User] 
    |
    | HTTPS
    v
[S3 Bucket] ────┐
(frontend)      |
                |
[Internet] ─────┼─── [AWS Cloud]
                |
[Elastic Beanstalk] ─┐
(backend)        |   |
    |            |   [Auto Scaling Group]
[Load Balancer] ─┘   |
    |                |
[EC2 Instances] ─────┘
    |
    | Port 8000
    v
[Gunicorn] ───→ [Flask App]
(WSGI Server)   (Python)

[GitHub Repository]
    |
    | Push Event
    v
[GitHub Actions] ────┐
    |                |
[Backend Deployment] │
    |                |
[Frontend Deployment]│
    |                |
[AWS Resources] ─────┘
    (S3, EB, IAM)
