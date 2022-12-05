import { IUser } from "./user";

export interface ITheme {
  _id: string;
  subscribers: IUser[];
  posts: string[];
  themeName: string;
  userId: IUser;
  created_at: string;
  updatedAt: string;
}
