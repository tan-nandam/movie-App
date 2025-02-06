
# Movie Search App 🎬

This is a React front-end movie search application that allows users to search for movies, bookmark them, leave reviews, and mark them as "watched." The app uses React, Tailwind CSS, and local storage for bookmarking. The movie data is fetched from the RapidAPI Movies endpoint.

## Goals

- Set up a React front-end application from scratch.
- Interact with a Movie API to load and interact with data.
- Deploy the app on Vercel and share the experience.

## Features

- **Search Movies**: Users can search for movies by title.
- **Paginated Results**: The search results are paginated, displaying 10 movies per page.
- **Bookmark Movies**: Users can bookmark movies for future reference.
- **Review Bookmarked Movies**: Users can leave reviews for the movies they bookmarked.
- **Mark as Watched**: Users can mark the movies they have watched from their bookmarked list.

## Technologies Used

- **React**: Front-end library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **RapidAPI Movies Endpoint**: Used to fetch movie data.
- **Local Storage**: For bookmarking movies without the need for a database or authentication.
- **Vercel**: Deployed the app for free using Vercel's Hobby plan.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-search-app.git
   cd movie-search-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. The app will be available at [http://localhost:3000](http://localhost:3000).

## Features in Detail

### Movie Search

- Search for movies by title using the RapidAPI Movies endpoint.
- Displays a list of movies with details like title, poster, and release year.

### Pagination

- The search results are paginated, showing 10 movies per page.

### Bookmarking

- Users can bookmark movies to save them for later.
- Bookmarked movies are stored in local storage and persist across page reloads.

### Reviews

- Users can leave reviews for the movies they have bookmarked.

### Watched Mark

- Users can mark their bookmarked movies as "watched."

## Deployment

The app is deployed on Vercel using the Hobby plan. You can access the live app [here](https://movie-app-neon-three-88.vercel.app/).

