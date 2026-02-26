# PostLy - Modern Social Media Platform

A beautiful, responsive social media application built with React, Tailwind CSS, and Node.js. PostLy allows users to share moments through images and captions in a clean, modern interface.

## Features

### ✨ Modern UI/UX

- **Clean, minimalist design** with smooth animations
- **Responsive grid layout** for posts
- **Gradient accents** and modern color palette
- **Smooth transitions** and hover effects
- **Professional typography** with Inter font

### 🚀 Core Functionality

- **Create Posts**: Upload images with captions
- **View Feed**: Browse all posts in a responsive grid
- **Image Preview**: Real-time image preview before uploading
- **Loading States**: Smooth loading indicators
- **Error Handling**: Graceful error handling for API calls

### 🎨 Design Highlights

- **Card-based layout** for posts with hover effects
- **Sticky navigation bar** with backdrop blur
- **Gradient buttons** with shadow effects
- **Image scaling animations** on hover
- **Responsive design** for all screen sizes

## Tech Stack

### Frontend

- **React 18** - Modern UI library
- **Tailwind CSS 3** - Utility-first CSS framework
- **React Router v6** - Client-side routing
- **Vite** - Fast build tool
- **React Icons** - Icon library

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM library
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB database

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Postly
   ```

2. **Install dependencies**

   ```bash
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the `server` directory with:

   ```
   PORT=5000
   MONGODB_URI=<your-mongodb-connection-string>
   ```

4. **Run the application**

   ```bash
   # Start the server (in server directory)
   npm run dev

   # Start the client (in client directory)
   npm run dev
   ```

The application will be available at:

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`

## Project Structure

```
Postly/
├── client/                 # React frontend
│   ├── src/
│   │   ├── api/            # API configuration
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── App.jsx         # Main app component
│   │   ├── main.jsx        # Entry point
│   │   └── index.css       # Global styles
│   ├── public/             # Static assets
│   └── package.json
└── server/                 # Node.js backend
    ├── src/
    │   ├── config/         # Configuration files
    │   ├── models/         # Database models
    │   └── services/       # Business logic
    ├── app.js              # Express app
    ├── server.js           # Server entry point
    └── package.json
```

## Key Components

### Navbar

- Sticky navigation with home and create post links
- Modern gradient logo and icon integration
- Active link highlighting

### PostFeed

- Responsive grid layout with dynamic loading
- Image cards with hover animations
- Loading state with spinner indicator
- Empty state handling

### CreatePost

- Image upload with preview functionality
- Caption input with icon
- Loading button state
- Form submission handling

## Build for Production

```bash
# Build the client
cd client
npm run build

# The production build will be in the dist/ directory
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the application
5. Create a pull request

## License

MIT License - feel free to use this project for your portfolio or learning purposes.

## Contact

For questions or feedback, please reach out or create an issue.

---

Built with ❤️ using React, Tailwind CSS, and Node.js
