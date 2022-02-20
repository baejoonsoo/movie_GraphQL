import { getMovie, getMovies, getSuqqestions } from "../DB/db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuqqestions(id),
  },
};

export default resolvers;
