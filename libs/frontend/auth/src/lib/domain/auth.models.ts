export interface LoginData {
  username: string;
  password: string;
}

export interface AuthData {
  token: JWT
}

export type JWT = string;
