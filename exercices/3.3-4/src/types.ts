interface Movie {
  id: number;
  title: string;
  director: string;
  duration: number;
  imageUrl?: string;
  description?: string;
  budget?: number;
}

interface MovieContext {
  movies: Movie[];
  onMovieAdded: (newMovie: NewMovie) => void;
  onMovieDeleted: (id: number) => void;
  registerUser: (newUser: User) => Promise<void>;
  loginUser: (user: User) => Promise<void>;
}

interface User {
  username: string;
  password: string;
}

interface AuthenticatedUser {
  username: string;
  token: string;
}

type MaybeAuthenticatedUser = AuthenticatedUser | undefined;

type NewMovie = Omit<Movie, "id">;

export type { Movie, MovieContext, NewMovie, User, AuthenticatedUser, MaybeAuthenticatedUser };
