# Circular Marketplace

Circular Marketplace is a web application that promotes sustainability by enabling users to share and reuse items. It fosters a circular economy by extending the lifecycle of goods and reducing waste.

## Features
- 🛠️ **Add Items**: Users can list items they want to share.
- 📖 **Browse Items**: View all available shared items in one place.
- 🔗 **Connect with Others**: Facilitate item sharing through secure and simple interactions.
- ⚡ **Fast and Responsive**: Built with modern technologies for a seamless user experience.

---

## Technologies Used

### **Backend**
- **Node.js**: Runtime environment.
- **Express.js**: Web framework for building REST APIs.
- **MongoDB**: NoSQL database for storing item data.
- **Mongoose**: Object modeling for MongoDB.
- **dotenv**: Environment variable management.
- **cors**: Middleware for secure cross-origin requests.

---

## Setup Instructions

### Prerequisites
- Install [Node.js](https://nodejs.org/).
- Install [MongoDB Atlas](https://www.mongodb.com/atlas/database) or a local MongoDB instance.

### 1. Clone the Repository
```bash
git clone https://github.com/gunissa/circular-marketplace.git
cd circular-marketplace




2. Backend Setup
Install Dependencies:
npm install

Set Up Environment Variables
Create a .env file in the root directory and add the following:
MONGO_URI=your_mongo_connection_string
PORT=4000
Replace your_mongo_connection_string with your MongoDB URI.

Run the Server
Start the backend server:
npm run dev
The backend will run on http://localhost:4000.

API Endpoints
Method	           Endpoint	                         Description
GET	                  /	                        Test route to verify the API
GET	                  /items	                Fetch all shared items
POST	                /items	                Add a new shared item
DELETE	              /items/:id	            Delete a shared item by ID



Folder Structure

circular-marketplace/
├── .env.example         # Example environment variables
├── .gitignore           # Ignored files and folders
├── nodemon.json         # Nodemon configuration
├── package.json         # Project metadata and dependencies
├── package-lock.json    # Dependency lock file
├── server.js            # Main backend server file
├── README.md            # Project documentation


Future Enhancements
🌟 Authentication: Add user authentication for secure item sharing.
📈 Statistics: Display stats on shared and reused items.
🔔 Notifications: Notify users when items are requested.
🌐 Deployment: Deploy the project to Vercel (frontend) and Render or Heroku (backend).

Contact
Author: Gunay Aghadadashli
GitHub: github.com/gunissa
Email: gunaysarukhan@icloud.com

