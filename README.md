#space project sharing system
A full-stack React application for creating, managing, and sharing space projects. 

- Link ->

##Setup & Config
git clone https://github.com/DragomirMelov/Course-Project-

npm i

npm run dev


##Functional Guide 
Navigation & Public Access:
The top navigation menu consists of Home, About, Projects, and Account.
Home and About are static pages that contain links directing users to the Projects catalog.
In the Projects section, guests can browse and read project articles. However, the option to leave comments is restricted and requires registration.
Authentication & Account:
The Account option contains an integrated Login/Register page. It features a toggle button (located at the bottom, over the footer) to switch between the Login and Register forms.

Logged-in User Experience:
Once logged into the system, the top menu updates to include a button for Creating a Project.
The catalog displays all articles. If an article was written by the currently logged-in user, it features two additional options: Delete and Edit.
Logged-in users are also permitted to write comments under articles written by other users.
In the Projects catalog page, there is a Refresh button located at the top. This allows users to manually trigger a data re-fetch (a "soft refresh") in case the UI does not automatically display the most recent information. without causing a hard page reload, ensuring the user's session is preserved.

## 🚀 Features
- **User Authentication:** Secure login and registration using Supabase Auth.
- **Create & Edit:** Dynamic forms to add new projects and edit existing ones.
- **Project Catalog:** View all projects in a grid layout fetched from the database.
- **Project Details:** Dedicated view for each project with full description and image.
- **Comments System:** Logged-in users can leave comments on projects.
- **Profile Menu & Logout:** Easy access to user settings and secure logout.
- **Conditional Rendering:** UI adapts based on whether the user is logged in or owns the project.
- **Protected Routes:** Certain pages (like Create/Edit) require authentication.


## 📁 Project Structure
src/
├── assets/                 # Static files (images, artwork, etc.)
├── components/             # Reusable UI components
│   ├── auth/               # Authentication components
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── RouteGuards.jsx # Protected routes wrappers
│   ├── Comments/           # Comment-related components
│   │   ├── Comment.jsx
│   │   └── CreateComment.jsx
│   ├── Article.jsx         # Single Project/Article view
│   ├── Footer.jsx
│   ├── HeaderMenu.jsx
│   ├── ProjectCard.jsx     # Card used in the catalog
│   └── Sidebar.jsx
├── Context/                # React Context API
│   └── userContext.jsx     # Global Auth state provider
├── pages/                  # Main page views (Routed components)
│   ├── Projects/           # Project-related pages
│   │   ├── CreateProject.jsx
│   │   └── EditProject.jsx
│   ├── About.jsx
│   ├── Contacts.jsx
│   ├── Index.jsx           # Home page
│   └── Project.jsx         # Catalog page
├── utils/                  # Helper functions
│   └── requester.js        # API Fetch wrappers (Supabase REST)
├── App.jsx                 # Main routing and Context Provider
├── main.jsx                # React application entry point
├── monochrome.css          # Custom CSS styling
└── style.css               # Global styles




## 🛠️ Technologies Used

- **Frontend:** React (Vite), React Router (for client-side routing), Vanilla CSS.
- **Backend/Database:** Supabase (PostgreSQL).
- **API:** Supabase REST API (using custom fetch wrappers).
- **Authentication:** Supabase Auth (JWT).
Use the provided Functional Guide template. You must include the completed guide directly within your README.md file.




