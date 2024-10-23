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
  name: string;
  owner_id: number;
  description: string;
  avatar_channel_urls: string;
  users: number[];
};

export type CreateChannelRes = Res<Channel>;

export type GetUserChannelsParams = null;

export type GetUserChannelsRes = Res<{ channels: Channel[] }>;
