import { Res } from "./main.types";

export type Channel = {
  users: number[];
  name: string;
  owner: number;
  description: string;
  avatar_channel_urls: string;
  time_create_channel: string;
  invite_hash: string;
};

export type CreateChannelParams = {
  avatar_url: string; 
  name: string;
  description?: string;
  members?: number[]
};

export type CreateChannelFormData = {
  name: string;
  description?: string;
};

export type CreateChannelRes = Res<Channel>;

export type GetUserChannelsParams = null;

export type GetUserChannelsRes = Res<{ channels: Channel[] }>;

export type UpdateChannelParams = {
  id: number;
  avatar_url?: string;
  name?: string;
  description?: string;
  members?: number[];
}

export type UpdateChannelRes = Channel;