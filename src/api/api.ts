import { baseApi as api } from "./baseApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<GetUsersApiResponse, GetUsersApiArg>({
      query: () => ({ url: `/users` }),
    }),
    getUsersById: build.query<GetUsersByIdApiResponse, GetUsersByIdApiArg>({
      query: (queryArg) => ({ url: `/users/${queryArg.id}` }),
    }),
    getPosts: build.query<GetPostsApiResponse, GetPostsApiArg>({
      query: () => ({ url: `/posts` }),
    }),
    getPostsById: build.query<GetPostsByIdApiResponse, GetPostsByIdApiArg>({
      query: (queryArg) => ({ url: `/posts/${queryArg.id}` }),
    }),
    getPing: build.query<GetPingApiResponse, GetPingApiArg>({
      query: () => ({ url: `/ping` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type GetUsersApiResponse = /** status 200 OK */ User[];
export type GetUsersApiArg = void;
export type GetUsersByIdApiResponse = /** status 200 OK */ User;
export type GetUsersByIdApiArg = {
  /** User ID */
  id: string;
};
export type GetPostsApiResponse = /** status 200 OK */ Post[];
export type GetPostsApiArg = void;
export type GetPostsByIdApiResponse = /** status 200 OK */ Post;
export type GetPostsByIdApiArg = {
  /** Post ID */
  id: string;
};
export type GetPingApiResponse = unknown;
export type GetPingApiArg = void;
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
export const {
  useGetUsersQuery,
  useGetUsersByIdQuery,
  useGetPostsQuery,
  useGetPostsByIdQuery,
  useGetPingQuery,
} = injectedRtkApi;
