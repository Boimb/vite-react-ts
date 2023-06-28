export type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export type Post = {
  id: string;
  author: User;
  title: string;
  content: string;
  likes: User[];
};

export enum FetchStatus {
  pending,
  error,
  success,
}

export type FetchData<T> = {
  status: FetchStatus;
  data?: T;
  message: string;
};
