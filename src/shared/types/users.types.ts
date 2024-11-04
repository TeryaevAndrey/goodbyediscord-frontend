export type User = {
  id: number;
  email: string;
  username: string;
  description: string | null;
  created_at: string;
  updated_at: string;
}

export type SearchUsersParams = {
  q: string;
}

export type SearchUsersRes = User[]