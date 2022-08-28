export interface TodoState {
  id: string;
  title?: string;
  author?: string;
}

export interface LoginState {
  email?: string;
  password?: string;
}

export interface SignUpState {
  username?: string;
  phone?: string;
  confirmPassword?: string;
}

export interface ApiState {
  url?: string;
  method?: string;
  navigate?: string;
}
