![image](https://github.com/user-attachments/assets/c2880fe8-1d32-46fb-84bd-b332dc57b85c)
By clicking fitness button blogs related to fitness will show
![image](https://github.com/user-attachments/assets/c8ff669b-001e-4e80-a521-229ccde3707f)
Blog details
![image](https://github.com/user-attachments/assets/8a314f48-ff58-43c7-a41b-f24ee7770049)
📰 Blog Website — Next.js + Strapi
📖 Project Overview
This project is a Blog Website built using Next.js 14 for the frontend and Strapi CMS for the backend.
It allows users to view all blogs, filter blogs based on categories like Fitness, Technology, etc., and view detailed information about each blog post through dynamic routing.

The backend (Strapi) is used to manage blog data including titles, descriptions, images, and categories.
The frontend (Next.js) fetches this data efficiently using server components for optimal performance.

🚀 Technologies Used
Frontend: Next.js 14

Backend: Strapi CMS

State Management: Zustand

Routing: Next.js App Router (Dynamic Routing)

Deployment Ready: Configured to work with environment variables (NEXT_PUBLIC_API_BASE_URL)

✨ Main Features
All Blogs Display:
Homepage displays all available blogs fetched from the Strapi backend.

Category Filtering:
Users can click on category buttons (e.g., Fitness, Technology, Business) to filter and view blogs related to that category only.

Dynamic Blog Details:
Clicking on any blog redirects to a detailed page using dynamic routing (/details/[id]) showing the full blog post.

State Management (Zustand):
Global category selection state is handled with Zustand for simple, lightweight global state without extra overhead.

Server Components:
Server components are used to fetch blog data directly on the server, improving performance and SEO.

🔥 How It Works
1. Backend - Strapi CMS
Strapi is used to create and manage the blog content.

Blog posts have fields like:

title

description

image

categories (related category like Fitness, Technology, etc.)

Each blog post is exposed through the Strapi REST API.

Media files (like blog images) are also managed through Strapi.

2. Frontend - Next.js
The homepage (page.js) uses a server component to fetch blogs and categories from the Strapi API on the server side.

Blogs are passed as props to client components (Categories.js and Blogitem.js).

a) Category Selection
Categories.js component displays all categories as clickable buttons.

On clicking a category button:

The selected category is updated in a Zustand store.

The blog list is dynamically filtered based on the selected category.

There's also an "All" button to reset the filter and show all blogs.

b) Blog Filtering
In Blogitem.js:

If no category is selected, all blogs are displayed.

If a category is selected, only blogs belonging to that category are displayed using .filter() logic.

c) Dynamic Routing for Blog Details
Clicking on a blog title or image navigates to /details/[id], where [id] is the blog's documentId from Strapi.

A dynamic route page (details/[id]/page.js) fetches the specific blog details from Strapi and displays the full content.
📣 Final Note
This project demonstrates a real-world full-stack app using Next.js Server Components + Strapi CMS with category filtering, global state management, and dynamic routing!

