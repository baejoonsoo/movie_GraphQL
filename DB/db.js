let movies = [
  {
    id: 1,
    name: "abcd",
    score: 2,
  },
  {
    id: 2,
    name: "qwert",
    score: 19,
  },
  {
    id: 3,
    name: "CXZ<M",
    score: 0.2,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  console.log(filteredMovies);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);

  if (cleanedMovies.length < movies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
