export type AuthFormValues = {
  email: string;
  password: string;
};

export type LoginData = {
  username: string;
  password: string;
};

export type AuthData = {
  token: string;
};

export type AuthResponse = {
  error_code: number;
  error_message: string;
  data: AuthData;
  profiling: string;
  timings: never | null;
};
