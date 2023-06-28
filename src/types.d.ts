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
