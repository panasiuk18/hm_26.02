// Task 1 Створити об'єкт, який містить список фільмів та їх жанри. Напишіть метод,
// який виводить на екран список фільмів у вибраному жанрі.

// ```js
// const movies = {
//   action: ['Die Hard', 'John Wick', 'The Matrix'],
//   comedy: ['The Hangover', 'Bridesmaids', 'Step Brothers'],
//   drama: ['The Shawshank Redemption', 'The Godfather', "Schindler's List"],
//   horror: ['The Shining', 'A Nightmare on Elm Street', 'The Exorcist'],

//   // Метод, який виводить список фільмів в заданому жанрі
//   listMoviesByGenre: function (genre) {},
// };
// ```

// // Вивести список комедій

// ```js
// movies.listMoviesByGenre('comedy');
// ```

// // Вивести список фільмів в жанрі "sci-fi"

// ```js
// movies.listMoviesByGenre('sci-fi');
// ```


const movies = {
    action: ['Die Hard', 'John Wick', 'The Matrix'],
    comedy: ['The Hangover', 'Bridesmaids', 'Step Brothers'],
    drama: ['The Shawshank Redemption', 'The Godfather', "Schindler's List"],
    horror: ['The Shining', 'A Nightmare on Elm Street', 'The Exorcist'],
  
    // Метод, який виводить список фільмів в заданому жанрі
    listMoviesByGenre: function (genre) {
      const moviesInGenre = this[genre]; 
      if (moviesInGenre) {
        console.log(`Список фільмів у жанрі "${genre}":`);
        moviesInGenre.forEach(movie => {
          console.log(movie);
        });
      } else {
        console.log(`Фільми у жанрі "${genre}" відсутні.`);
      }
    },
  };
  
  // Вивести список комедій
  movies.listMoviesByGenre('comedy');
  
  // Вивести список фільмів в жанрі "sci-fi"
  movies.listMoviesByGenre('sci-fi');
  
