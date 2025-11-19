# WanderLust – Travel Accommodation Platform

WanderLust is a full-stack web application inspired by Airbnb. It allows users to explore stays, create listings, leave reviews, and interact with an intuitive map-based interface. The project follows the MVC architecture and integrates modern tools like Passport.js, Cloudinary, Mapbox, and MongoDB Atlas.

## Features

1. User Authentication
   - Secure signup and login using Passport.js
   - Session management and authorization for protected routes

2. Listings
   - Add, edit, view, and delete property listings
   - Image upload support using Cloudinary
   - Displays price, description, location, and images

3. Reviews
   - Users can write, edit, and delete reviews
   - Server-side validation using Joi

4. Interactive Maps
   - Integrated Mapbox for location-based display
   - Dynamic map markers and popups

5. Responsive UI
   - Clean and user-friendly interface built with EJS, CSS, and JavaScript
   - Mobile-friendly design

## Tech Stack

### Frontend
- EJS
- CSS
- JavaScript
- Bootstrap

### Backend
- Node.js
- Express.js
- MVC Architecture

### Database
- MongoDB
- MongoDB Atlas

### Tools & Integrations
- Passport
- Joi
- Cloudinary
- Mapbox
- Git & GitHub

## How to Run Locally

1. Clone the repository
   ```
   git clone https://github.com/OmUphade/WanderLust.git
   cd WanderLust
   ```

3. Install dependencies
   ```
   npm install
   ```

5. Create a `.env` file and add:
```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_secret_key
MAPBOX_TOKEN=your_mapbox_token
MONGO_URL=your_mongodb_atlas_url
SESSION_SECRET=your_secret
```

6. Start the server
   ```
   node app.js
   ```

8. Open the project in your browser
   ```
   http://localhost:3000
   ```
