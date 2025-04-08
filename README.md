# **Pokemon Database**

![Pokemon logo](/src/assets/pokemon-logo-png-1444.png)

A React application that allows users to search for Pokémon by name, view their sprite images, and includes user authentication with role-based access.

### **Features**

- Search for any Pokemon by name
- Display the Pokemon's sprite image
- User authentication with login page
- Role-based access control (Admin and User roles)
- Responsive and clean UI using Bootstrap

---

### **Tech Stack**

- **React**: Frontend framework
- **CSS**: Styling
- **PokeAPI**: Source of Pokemon data
- **GitHub Pages**: Hosting the application
- **MongoDB**: Managing login credentials

---

### **Changes**

- Added a login page for user authentication
- Implemented role-based access control (Admin and User roles)
- Added admin page to show whether you have admin privilege or not

---

### **Getting started**

**Prerequisites**
Make sure you have Node.js and npm installed on your system.

**Installation**

- Clone the repository
  - `git clone https://github.com/AgamSingh16/Pokemon-database.git`
  - `cd Pokemon-database`
- Install dependencies
  - `npm install`
- Start the development server
  - `npm run dev`
- Visit the app in your browser by clicking on the **http://localhost:5173/** in the command line

---

### **Project Structure**

```
Pokemon-database/
├── .github/workflows
├── backend/              # Connection to MongoDB
├── dist/                 # distribution
├── public/               # Public assets
├── server/               # contains a file from .gitignore
├── src/                  # React components and logic
│   ├── assets/           # Images and static assets
│   ├── components/       # Reusable UI components
│   ├── css/              # CSS components for pages
│   ├── pages/            # Main application pages
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── package.json          # Project dependencies
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

---

### **Contributing**

Feel free to submit issues or pull requests to improve the app!
