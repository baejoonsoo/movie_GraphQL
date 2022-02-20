import { getById, getMovies } from "../DB/db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => {},
  },
};

export default resolvers;
