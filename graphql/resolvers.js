import { getMovies } from "../DB/db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
  },
};

export default resolvers;
