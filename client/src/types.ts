export interface Todo {
  _id?: string;
  content: string;
  user: string;
  status: string;
}

export interface Config {
  time: string;
  homePage: string;
}

export interface User {
  _id: string;
  username: string;
  config: Config;
  todo?: Todo[];
}
