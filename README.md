# space project sharing system
** Application Category / Topic: Project Catalog

** Main Purpose:** The application is designed for space enthusiasts to share, catalog, and discuss space-related projects and articles. It provides a central hub where users can read about various space missions, create their own articles, and interact with the community through comments.

Demo - Link -> https://course-project.dragomel0v1234.workers.dev/

## Setup & Config

git clone https://github.com/DragomirMelov/Course-Project-

npm i

npm run dev

You will need to create your own .env file with your own environment variables.  VITE_URL , VITE_APIKEY


## 2. User Access & Permissions
**Guest (Not Authenticated):**
*   **Available pages / routes:** Home (`/`), About (`/about`), Contacts (`/contact`), Projects Catalog (`/projects`), Project Details (`/projects/:projectid`), Login/Register (`/login`).
*   **Public data shown:** Guests can browse and read all project articles and comments left by other users.

**Authenticated User:**
*   **Main sections / pages:** In addition to guest access, authenticated users get access to the Create Project page (`/create/project`) and Edit Project page (`/projects/edit/:id`).
*   **Details pages:** Logged-in users can interact by leaving comments under articles.
*   **Create / Edit / Delete actions:** Users can create new projects. If a user is the author of a specific project, they can see and use the Edit and Delete options on that project's details page.
*   

### 3. Authentication & Session Handling
**Authentication Flow:**
*   **App Load:** When the app loads, the `UserContext` initializes with a `null` authentication state.
*   **Auth Check:** The app uses Supabase Auth. When a user logs in, the JWT token is received and stored in the Context.
   
**What happens on successful login or registration:**
*   **Data Handling:** Upon successful authentication, Supabase returns a session object containing the `access_token` (JWT) and user data. The `LoginHandler` or `SignupHandler` receives this object.
*   **Global State Update:** The `setAuth` function saves this session object into the global `UserContext`.
*   **UI Reactivity:** Because the `auth` state in Context changes, React automatically re-renders the `HeaderMenu`. The UI instantly updates to show the user's profile, a "Create Project" button, and the "Logout" option instead of "Login".
*   **Routing:** The app uses the `useNavigate` hook to programmatically redirect the user. On Login, they are sent to the home page (`/`). On Registration, they are typically shown a success message and redirected to the Login page.

**What happens on logout:**
*   **Backend Session Invalidation:** A POST request is sent to the Supabase `/auth/v1/logout` endpoint using the user's active JWT. This invalidates the session on the server side.
*   **State Clearing:** The `finally` block of the logout function executes `setAuth(null)`, completely wiping the user's data from the React `UserContext`.
*   **UI Reset:** The Context update triggers a re-render. The "Create Project" and "Logout" buttons disappear, and the UI reverts to its unauthenticated state (showing "Login/Register"). 
*   **Routing:** The `navigate('/')` hook redirects the user back to the Home page, ensuring they are no longer on any protected routes.

### 4. Routing Structure
**Route Guards Logic:**
*   Routing is managed via React Router (`App.jsx`).
*   **PrivateRoute:** Wraps pages that require authentication (Create, Edit). Unauthenticated users are redirected to `/login`.
*   **PublicOnlyRoute:** Wraps the Login/Register page. Authenticated users are redirected to `/projects` so they don't see the login form again.

**Main Routes:**
*   Top-level pages include Home, About, Contacts, Projects (Catalog), and contact
*   

**Nested & Parameterized Routes:**
*   **Parameterized Routes:** Two routes use URL parameters: `/projects/:projectid` (to view a specific project) and `/projects/edit/:projectid` (to edit a specific project).
*   **Nested Routing:** We use `<Outlet />` for layout consistency (Header and Footer remain visible while the inner pages change).


### Authentication & Account
* The **Account** option contains an integrated Login/Register page. It features a toggle button (located at the bottom, over the footer) to switch between the Login and Register forms.

### Logged-in User Experience
* Once logged into the system, the a menu updates to include a button for **Creating a Project**.
* The catalog displays all articles. If an article was written by the currently logged-in user, it features two additional options: **Delete** and **Edit**.
* Logged-in users are also permitted to write comments under articles written by other users.

### Catalog & Refresh Feature
* In the **Projects** catalog page, there is a **Refresh button** located at the top. This allows users to manually trigger a data re-fetch (a "soft refresh") in case the UI does not automatically display the most recent information. This is implemented using React state (`refreshKey`) without causing a hard page reload, ensuring the user's session is preserved.
 
###  User Access & Permissions
**Guest (Not Authenticated):**
*   **Available pages / routes:** Home (`/`), About (`/about`), Contacts (`/contact`), Projects Catalog (`/projects`), Project Details (`/projects/:projectid`), Login/Register (`/contact`).
*   **Public data shown:** Guests can browse and read all project articles and comments left by other users.

### 5. List → Details Flow
**Catalog / List Page:**
*   **Data displayed:** The `/projects` page displays a grid of project cards showing the image, title, and a short preview text. It also features a manual "Refresh" button to fetch the latest data.
*   **Interaction:** The user can click on a card to read more.

**Details Page:**
*   **Navigation:** Triggered via the `<Link>` component on the project card.
*   **Data received:** The `useParams` hook extracts the `projectid` from the URL. The component then fetches the full details (image, full article, author ID) from the database based on this ID.

### 6. Data Source & Backend
**Backend Type:** 
*   **Option A (BaaS): Supabase (PostgreSQL).** All data is remotely persisted. No hardcoded data is used.

### 7. Data Operations (CRUD)
**Create (POST):**
*   Authenticated users fill out the form in `CreateProject.jsx`. The data is sent via a POST request to the Supabase `projects` table, automatically attaching the user's UUID to the `user_id` column.

**Read (GET):**
*   Data is fetched using GET requests. The catalog fetches all records ordered by `created_at`, while the details page fetches a single record by ID.

**Update (PATCH):**
*   The author clicks "Edit" on their project. The `EditProject.jsx` form is populated with existing data. Upon submission, a PATCH request updates the record in Supabase. The UI updates instantly using `navigate()`.

**Delete:**
*   The author clicks "Delete" on the details page. A DELETE request is sent to Supabase. The user is then redirected back to the Catalog. The database uses `ON DELETE CASCADE` to automatically delete related comments.
   

### 8. Forms & Validation
**Forms Used:**
*   Login Form (`Login.jsx`)
*   Register Form (`Register.jsx`)
*   Create/Edit Project Form (`CreateProject.jsx` / `EditProject.jsx`)
*   Create Comment Form (`CreateComment.jsx`)

**Validation Rules:**
*   **Name (Register):** Cannot be empty.
*   **Email (Login/Register):** Must be a valid email format and cannot be empty.
*   **Password (Register):** Must be at least 6 characters long.
*   **Repeat Password:** Must exactly match the initial password.


### 9. React-Specific Techniques
**Hooks & Component Lifecycle:**
*   **`useState`:** Used for form inputs (Controlled inputs), loading states, and soft-refresh triggers.
*   **`useEffect`:** Used to fetch data on mount. When the `projectid` changes in the URL, the `useEffect` updates and fetches the new data. Cleanup functions (like `AbortController`) are used to prevent memory leaks on unmount.
*   **`useContext`:** Used globally to access user auth data.
*   **`useCallback`:** Used in `App.jsx` to memoize CRUD functions so they don't cause infinite loops in child components.

**Context API:**
*   `UserContext` shares the `auth` state, login/logout functions, and CRUD operations (`createProject`, `editProject`, `deleteProject`) across all components without prop drilling.

**Component Styling:**
*   Styling is handled using external CSS files (`style.css`, `monochrome.css`).


### 10. Typical User Flow
* 1. The user lands on the Home page and clicks "Projects" to browse the catalog.
* 2. They click on an interesting article to read the details.
* 3. Wanting to leave a comment, they click on "Account" (Login/Register), create an account, and log in.
* 4. Once authenticated, they can leave a comment, or click "Create Project" to write their own article.

### 11. Error & Edge Case Handling
*   **Authentication errors:** Invalid passwords or mismatched emails during registration trigger `alert()` messages.
*   **Network or data errors:** API calls are wrapped in `try/catch` blocks. If fetching projects fails, the UI shows an error state.
*   **Empty data states:** If the database has no projects, or a user hasn't written any comments, the UI displays a friendly "No projects found" or "Please create a post" message instead of crashing.

## 📁 Project Architecture 
The Architectures separating the UI into reusable pieces (`components`) and page-level views (`pages`). State management is handled globally via the **Context API** (`UserContext`), The app communicates with a serverless backend (**Supabase**) via a custom REST API wrapper, ensuring a clear separation between the frontend logic and remote data handling.


```text
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
│   ├── Auth/               # Login/Register wrapper page
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




