export type User = {
  id: number;
  email: string;
  username: string;
  created_at: string;
  updated_at: string;
}

export type SearchUsersParams = {
  q: string;
}

export type SearchUsersRes = User[]