import { IPost } from "./post";
import { IUser } from "./user";

export interface ITheme {
  _id: string;
  subscribers: string[];
  posts: IPost[];
  themeName: string;
  userId: IUser;
  created_at: string;
  updatedAt: string;
}
