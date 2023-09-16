# Movie-App

## Overview
This project is a Movie App web page that consists of HTML, CSS, Bootstrap, and JavaScript to interact with The Movie Database (TMDb) API. This web page is designed to fetch and display information from The Movie Database (TMDb) API about the top movies from each of the four categories: popular, upcoming, top-rated, and now-playing movies. 

### Technology Stack
- **HTML**

- **CSS**

- **Bootstrap**

- **JavaScript**

- **The Movie Database (TMDb) API**

### Functionality (Javascript)
The project incorporates several Javascript functions, below are the few out of the many key functions:

- **Fetching Movie Information/Data**: Specific JavaScript functions communicate with the TMDb API using the fetch API. These functions send requests to TMDb to retrieve information about movies from each category.

- **Displaying Movie Information/Data**: Additionally, specific JavaScript functions are responsible for displaying the movie information/data in the form of movie cards on the webpage. This information/data include movie titles, overviews (limited to 100 characters for card display), and poster images, all fetched from TMDb.

- **Character Limitation to 100 Characters**: A function in Javascript that is used to limit the length of movie overviews to 100 characters for display in movie cards.

- **Top 6 Movies**: A function in Javacriptthat ensures that only the top 6 movies from each category are displayed on the webpage.
  
### Styling and Layout
- **CSS**: The CSS manages the font size of the movie overview. 

- **Bootstrap**: The Bootstrap manages the layout and spacing of elements, such as movie cards, ensuring an even distribution and preventing overlap on the webpage. It styles the elements like, navigation bars, headings, and other components on the webpage.

### Project Structure
- **HTML**: The HTML code is responsible for structuring the webpage's content, including elements like the title, headings, navigation bars, containers, and more.
    
- **TMDb API**: The TMDb API provides the source of movie data for the web page.

### Getting Started
To deploy this project on your local machine or incorporate it into your own application, follow these steps:

1. Clone the repository to your local machine using the following command:

    **git clone https://github.com/your-username/movie-app.git**

3. Open the project folder in your desired code editor.

4. Replace the TMDb API key in the JavaScript file with your own TMDb API key. To obtain your own TMDb API key, refer to the The Movie Database (TMDb) website **(https://www.themoviedb.org/)** for instructions. 

5. Open the `index.html` file in your web browser to view the Movie App.

### Visit My Website
**https://adorable-manatee-388134.netlify.app/**
