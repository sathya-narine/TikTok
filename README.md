# TikTok

# TikTok Clone - MERN Stack Implementation

## Introduction

The MERN stack has been on my bucket list for a long time, and to make learning even more fun, I chose to clone TikTok. The system design for a full TikTok implementation is extensive, so I focused on one of the most crucial functionalities—**video feed**. 

### Implemented Features:
- Users can scroll through videos.
- Click to pause/play a video.
- Like videos.
- Share and comment features (still need to be implemented).

### Tech Stack:
- **Frontend**: React
- **Backend**: Node.js & Express
- **Database**: MongoDB
- **Deployment**: Dockerized for easy deployment

For a detailed implementation of the **frontend**, **backend**, and **AWS deployment**, refer to the respective markdown files:
- [Frontend.md](frontend.md)
- [Backend.md](backend.md)
- [Deployment.md](deployment.md)

---

## Steps to Run the Code Locally

### 1. Clone the Repository
  git clone https://github.com/sathya-narine/TikTok.git
  cd TikTok


### 2. Ensure Docker is Installed
The frontend and backend have been containerized using Docker, making it super easy to run and deploy.

#### 3. Set Up MongoDB Atlas
Create a MongoDB Cloud Account at MongoDB Atlas.
Create a cluster and a database.
Create a collection and get the connection URI.
For a detailed guide, refer to Backend.md.
#### 4. Configure Backend
Navigate to the backend directory and create a .env file:


  cd TikTok/tiktok-backend
  Create a .env file and add:


MONGO_URI=mongodb+srv://<user>:<password>@cluster0.psdwk.mongodb.net/<collection>?retryWrites=true&w=majority&appName=Cluster0
### 5. Build and Run Docker Containers
Frontend:

cd TikTok/tiktok
docker build -t tiktok-frontend .
docker images  # Check if the image was created successfully
docker run -d -p 3000:3000 --name tiktok-frontend tiktok-frontend
docker ps  # Verify that the container is running
Backend:

cd TikTok/tiktok-backend
docker build -t tiktok-backend .
docker run -d -p 9000:9000 --name tiktok-backend tiktok-backend
### 6. Open the Application
Once both containers are running, open the frontend in your browser:
http://localhost:3000/


Note: Populate MongoDB with Sample Data
For the app to display content, ensure there is some data in MongoDB. You can use the /v2/posts API to push data or manually add an entry like this:

json
{
    "_id": "67cbd54955cd89720f168fa9",
    "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    "channel": "scifi",
    "song": "Ultra Bass Inevitable ft Drurm roll",
    "likes": "101",
    "messages": "56",
    "description": "This is a TikTok clone",
    "shares": "17",
    "__v": 0
}
You can also use the API endpoint to push data into MongoDB:
POST http://localhost:9000/v2/posts
