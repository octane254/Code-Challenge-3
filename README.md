### A Simple Blog App
A simple blog app that allows users to:

View a list of blog posts

View the details of a specific blog post

Add new blog posts

Edit blog posts (Advanced feature)

Delete blog posts (Advanced feature)

### 🚀 Setup
Create the Project Folder:
Start by creating a new project folder and add the necessary files: index.html, src/index.js, css/styles.css, and db.json.

Install json-server:
Install json-server globally to create a mock backend for your API. You can use the following command:

bash
Copy
Edit
npm install -g json-server
Add Mock Data:
Populate the db.json file with some sample blog posts. This will be used to mock the backend.

Run the Mock API:
Start the backend by running the following command:

bash
Copy
Edit
json-server db.json
Your mock API will be accessible at http://localhost:3000/posts.

Run the Frontend:
Start the frontend using a tool like live-server. This will automatically open the app in your browser and enable live reloading as you develop.

### 📡 API Endpoints
The mock API will be available at http://localhost:3000. Below are the key API endpoints:

GET /posts: Retrieve all blog posts.

GET /posts/:id: Retrieve a specific blog post by its ID.

POST /posts: Create a new blog post.

PATCH /posts/:id: Update an existing blog post.

DELETE /posts/:id: Delete a blog post.

### 📝 Core Features
As a user, you will be able to:

See all blog post titles:
Display the list of blog posts when the page loads. Each blog title will be clickable.

View blog post details:
When a user clicks on a blog title, the full details of that post (title, content, and author) will be shown.

Add a new blog post:
Users can add a new blog post via a form. The new post will appear in the list, though it will not persist after a page refresh.

### 🔨 Advanced Features (Optional)
For those looking to go beyond the basics:

Auto-Display the First Post:
Show the details of the first blog post automatically when the page loads.

Edit a Blog Post:
Users can edit the title and content of a blog post directly from the details view. This change will be reflected in the UI but not saved to the backend.

Delete a Blog Post:
Add a delete button to remove a blog post from the list and clear the details view.

### 🚀 Extra Advanced Features
If you have extra time and want to persist data:

Persist Post Updates:
Allow users to update the post’s title and content, and save these changes to the backend.

Persist New Posts:
Allow users to create new blog posts, which will be saved to the backend.

Persist Post Deletions:
Allow users to delete blog posts, and remove them from the backend.

### 🎨 Styling
The app features a black and gold theme for an elegant and stylish user interface.

### 💻 Technologies Used
HTML/CSS: For structure and styling.

JavaScript: For frontend logic and API interaction.

json-server: To mock a RESTful API.

live-server: For local development with live reloading.

### 🔧 Future Enhancements
Add user authentication for blog creation and editing.

Implement pagination for blog posts.

Improve UI with animations and transitions.

Add additional features like comments, likes, and categories.
