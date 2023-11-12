export interface Todo {
  _id?: string;
  content: string;
  user?: string;
  status?: string;
  date?: Date;
}

export interface Config {
  time: string;
  homePage: string;
  choice: string;
}

export interface User {
  _id: string;
  username: string;
  config: Config;
  todo?: Todo[];
  choice?: Choice[];
}

export interface Choice {
  type: string;
  date: string;
}
