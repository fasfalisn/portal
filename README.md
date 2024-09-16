# TV Shows Web App

## Overview

This project is a Vue.js-based web app that displays TV shows categorized by genre. The app utilizes Vuex for state management, Vue Router for routing and Vite for fast builds and development. It features infinite scrolling, lazy loading and an organized file structure. Composition API has been used.

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js**: v21.6.1

- **npm**: 9.5.1 

- **vuex**: 4.1.0

- **vue**: 3.4.29

- **vue-router**: 4.4.4

## How to Run the Project

1\. **Go to project's folder**:

   ```bash

   cd <repository-folder>

   ```

2\. **Install dependencies**:

   ```bash

   npm install

   ```

3\. **Run the development server**:

   ```bash

   npm run dev

   ```

   The application will be available at `http://localhost:5173`.

## Features

### Infinite Scrolling

To enhance the user experience and prevent loading all the content at once, I implemented infinite scrolling for both the horizontal list of TV shows and the genre categories.

- **Horizontal List**: As the user scrolls horizontally through the list of shows, new shows are automatically fetched and displayed without requiring manual page navigation.

- **Categories**: When the user scrolls down through the genre categories, the next set of genres and their associated shows are loaded automatically.

This approach helps in loading only the content that the user is actively viewing, making the app more responsive and reducing the initial load time.

This was implemented using:

- IntersectionObserver for detecting when components should be loaded into view (used in categories).

- Scroll and width element properties to determine when components should be loaded into view (used in horizontal list).

### Lazy Loading

I utilized lazy loading to optimize the app's performance. Lazy loading ensures that components, such as the `ShowList`, `ShowDetailsCard` and `ShowCard`, are loaded only when they are needed, rather than upfront.

This was implemented using:

- Vue's `defineAsyncComponent`.

### Vite for Project Setup

The project uses **Vite** for development and build processes. Vite is chosen for its fast build times.

### Services for Better File Allocation

For better code organization, I separated api calls into different **service files**. For instance:

- API requests are managed by a dedicated service module, ensuring that the components remain clean and focused on UI logic.

- Vuex store modules are used to manage the state of the application, such as fetching and caching TV show data.

This structure promotes maintainability and scalability, as it separates business logic from the presentation layer.

### API calls caching

For better perfomance, I decided to cache the results of the api call of fetching all the shows. 

The cached shows will only be updated if they haven't for more than an hour.

### Main CSS for Common Classes

I created a centralized `base.css` file to store common styles used throughout the app, such as typography, and shared design components. This allows for consistent styling across the entire app and reduces duplication of code in individual component styles.

### Scoped CSS

I utilized **scoped CSS** for styling individual components. This ensures that the styles defined within a component do not unintentionally affect other components, keeping the styling modular and easy to manage.

### Routing & Not Found Page

The app uses **Vue Router** for managing routes. I set up routes for different views of the app, such as the homepage displaying TV shows by genre, the search displaying search results and a dynamic route for individual shows.

Additionally, a **Not Found (404) page** is implemented to handle undefined routes, ensuring that users who navigate to non-existent pages are given a clear indication that the page does not exist.

## Running Tests

To run unit tests using Vitest:

bash

Αντιγραφή κώδικα

`npm run test`

This will execute all the unit tests in the project. Given the limited time, I've only implemented some basic unit tests on the views. 

## Technologies Used

- **Vue.js 3**: Frontend framework

- **Vuex**: State management

- **Vue Router**: Routing

- **Vite**: Development and build tool

- **Vitest**: Unit testing framework

- **CSS (Scoped)**: Styling

## Known Issues

### Initial load

The initial load needs time in order to get all shows from api pages and sorting them by rating. 

To my knowledge, I couldn't find an api endpoint on https://api.tvmaze.com that would only bring me the best shows, so that I could show that to the user, until all shows would be loaded.

One solution would be to create a backend service that could call the api in certain periods of time, get all the pages and export an endpoint that would help me get only the best shows for each category, until all shows would be loaded. I decided to not go with that procedure, as the main goal is to focus on Frontend practices.

### First Project

Please bear in mind, although I have extensive experience with other frameworks, this is my first project using VueJS.

What I liked about Vuejs is that although it looks simple, it is a powerful framework that can result in a very well structured application with minimal external packages needed.  
