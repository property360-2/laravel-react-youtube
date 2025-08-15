# 📚 Learning Log — React + Laravel (Day X)

**Date:** 2025-08-15  
**Video Progress:** ⏱️ 48:00 minutes  

---

## ✅ Topics Covered

### 1. React + Laravel Setup
- Created a main project folder containing:
/frontend ← React app
/backend ← Laravel app

- Ensured React communicates with Laravel through API calls.
- Installed dependencies:
```bash
npm install      # React dependencies
composer install # Laravel dependencies
2. Install & Configure React Router
Installed React Router:

npm install react-router-dom
Created router.jsx for centralized route definitions.

Added <RouterProvider> in main.jsx to enable routing.

Learned <Outlet> is used to render child routes inside layouts.

3. Create Multiple Layouts
Created different layout components:

MainLayout → for public pages like Home, About, Contact

DashboardLayout → for authenticated pages like Dashboard Home, Settings

Used <Outlet> inside layouts to keep header/footer/sidebar consistent while switching main content.

4. Working with Context API
Created StateContext using createContext to store user and token.

Implemented ContextProvider to wrap the app and share global state.

Stored token in localStorage for persistence.

Created a custom hook useStateContext for easy access in components.

Important fixes:

Provider component name should start with a capital letter (ContextProvider).

Used {children} instead of {Children} inside the provider.

5. Create Protected Routes
Used Navigate from React Router to redirect users without a token.

Example:

if (!token) return <Navigate to="/login" />;
Restricted dashboard pages so only logged-in users can access them.

⏸️ Next Steps
Resume tutorial at 48:00 minute mark.

Upcoming topics:

User authentication (login/register)

API calls with Axios

Role-based access control

Styling and UI enhancements