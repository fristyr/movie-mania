# Moovie Mania Project

## Introduction

Welcome to Moovie Mania, a streamlined and efficient Nuxt 3 application. By focusing on a minimalist set of tools, I prioritized performance without sacrificing functionality. Using Nuxt 3 api server feature and minimalistic Nuxt UI I was able to acieve better DX and UX experience. 

## Technologies Used

I chose Nuxt as the unified ecosystem for this project:

- **Nuxt 3 (v3.9.3)**: I chose Nuxt 3 because it's super easy to use and packed with great features. It lets me build an app that works well for both user and developer. Plus, Nuxt 3 makes my live easier with its neat folder setup, automatic imports, simple page routing straight from your file structure, and a server-side API that's ready to go right out of the box, and help avoid limitations of other api's by expanding your own.
- **Nuxt UI (v2.13.0) with Tailwind CSS**: This combination allows for rapid UI development with customizable and responsive design components, ensuring the application is both aesthetically pleasing and highly functional.
- **Vue use composables (v10.7.2)**: Enhances our app's composition API, making it easier to manage state and reusable functionalities across components.

## Project Goals

Moovie Mania aims to:
- Provide a seamless and intuitive user experience for movie geeks.
- Leverage the latest web technologies for optimal performance and scalability.
- Utilize the Open API from TVMaze to access a wide range of movie data, overcoming common API limitations.

## Features

- **Movie Search**: Find your favorite movies quickly with our responsive search functionality.
- **Detailed Movie Information**: Access in-depth details about movies, including genres, ratings, summaries, and more.
 - **Detailed Movie Information**: Access in-depth details about movies, including genres, ratings, summaries, and more.
 - **Wide Filtering**: This feature lets you easily sift through shows based on what’s important to you – like how popular they are, their genre, ratings, or even whether they're still on air.
- **Responsive Design**: Enjoy a consistent and engaging experience across all your devices.

## Getting Started

### Please note
For this project you need:
* Node.js 18+ (preferable latest). I used v21.6.1 lts
* Npm 10.2.4 +

Yous should have ```.env``` file in the root of the project.
In case you don't have it, please create one with followed:

```
SHOWS_URL=https://api.tvmaze.com/shows
SEARCH_SHOW_URL=https://api.tvmaze.com/search/shows
```


To get Moovie Mania up and running on your local machine, follow these steps:

1. **Open the project and open terminal**: Installing dependencies

   ```
   npm i
   ````
2. **npm run dev**: Run the project
3. Open http://localhost:3000/

