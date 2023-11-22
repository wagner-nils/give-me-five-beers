// Improved readability
export interface Choice {
  type: string;
  choiceId: string;
  date?: string;
  id?: string;
  _id?: string;
}

export interface Todo {
  _id?: string;
  content: string;
  user?: string;
  status?: string;
  date?: Date;
}

export interface Config {
  userId: string;
  time: string;
  homePage: string;
  choice: Choice;
}

export interface User {
  _id: string;
  username: string;
  config: Config;
  todo?: Todo[];
  choice?: Choice[];
}

export interface Wishlist {
  type: string;
  choiceId: string;
  _id?: string;
}

export interface Bar {
  formattedAddress: string;
  name: string;
  placeId: string;
  url: string;
  website: string;
  wheelchairAccessibleEntrance: boolean;
  city: string;
  country: string;
  _id: string;
  id?: string;
  address_1?: string;
  website_url?: string;
}

export interface Brewery {
  id: string;
  name: string;
  brewery_type: string;
  address_1: string;
  address_2: string | null;
  address_3: string | null;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
  longitude: string;
  latitude: string;
  phone: string;
  website_url: string;
  state: string;
  street: string;
  _id?: string;
  formattedAddress?: string;
  website?: string;
}





















// export interface Todo {
//   _id?: string;
//   content: string;
//   user?: string;
//   status?: string;
//   date?: Date;
// }

// export interface Config {
//   userId: string;
//   time: string;
//   homePage: string;
//   choice: Choice;
// }

// export interface User {
//   _id: string;
//   username: string;
//   config: Config;
//   todo?: Todo[];
//   choice?: Choice[];
// }

// export interface Choice {
//   type: string;
//   choiceId: string;
//   date?: string;
//   id?: string;
//   _id?: string;
// }
