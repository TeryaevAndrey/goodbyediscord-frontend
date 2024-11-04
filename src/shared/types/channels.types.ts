import { Res } from "./main.types";

export type Channel<M> = {
  id: number;
  members: M[];
  name: string;
  channel_owner: M;
  description: string;
  avatar_url: string;
  time_create_channel: string;
  invite_hash: string;
};

export type CreateChannelParams = {
  avatar_url?: string; 
  name: string;
  description?: string;
  members?: number[]
};

export type CreateChannelFormData = {
  name: string;
  description?: string;
};

export type CreateChannelRes = Res<Channel<number>>;

export type GetUserChannelsParams = null;

export type GetUserChannelsRes = Channel<number>[];

export type UpdateChannelParams = {
  id: number;
  avatar_url?: string;
  name?: string;
  description?: string;
  members?: number[];
}

export type UpdateChannelRes = Channel<number>;

export type getChannelByIdParams = {
  id: number;
}