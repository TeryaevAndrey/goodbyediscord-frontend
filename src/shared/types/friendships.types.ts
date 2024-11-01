export type Friendship = {
  user_from: number;
  user_to: number;
  created_at: string;
  accepted: boolean;
};

export type FriendshipInvite = {
  user_to: number;
};

export type AcceptFriendship = {
    friendship_id: number;
}

export type GetFriendshipsRes = Friendship[];