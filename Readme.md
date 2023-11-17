# Give me five beers 🍻

We are heavily attached to different apps daily, and we are pressured with finishing tasks in time. Sometimes we get too serious, and forget to enjoy.

Give me five beers is designed to be used as less as possible, and give users as much amount of joy as possible, for beer lovers and future beer lovers.

## Legacy Project

This is what I want for the app, but you can do everything you want! Happy coding!

### Refactor

- Extract more components. I am repeating myself a lot of times, because i was struggling naming each component that i was to extract and reuse, so it was easier just copying the code and put it there twice.

- Typescript. I didn't use typescript in an appropriate way. I wrote many **any**s, only edits the `type.ts` file when i am getting a new data from the backend and had to edit the type to avoid errors.

- Redux toolkit and rtf query at its more efficient combinations. Many time I am using state from component itself, redux store and data from rtk query, a mix of three at the same time. This can be made cleaner, by separating functional components and presentational components.

- There are some structural issues with some api endpoints under the `/choice`.

- There are some css not following the BEM, can be written better.

- Make it React Native for a proper mobile app.

### Feature

- Authentication with jwt token.User should not be able to access any route other than `/` `/login` `/signup`

  - react- cookies

- Calendar. Add one tab on the left side of nav bar, where a canlendaris displayed, and shows 1)the todos with status of **completed** and **tomorrow** of chosen date . 2) The proposed **bar** or **brewery** of that date, user can register an activity with it, and the corresponding bar or brewery will be added into collection, or removed from the wishlist, both of which can be found in the profile page.

  - react-calendar

- Affirmations. Now it only says 'you are the best', which is my favorite. There could be more diversity, it would be nice to create a separate served endpoint, but for now a mock dataset should work. But don't ask ai to generate it.

### Notes

- I have created a small dataset for local craft beer bars in Barcelona, which actually should serve as a independent api. For now I have created a schema `Bar` in the app main database, to store it all together with other information, and no schema for brewery, as it is coming from an external api In the future, it would be ideal to implement a separate server for bar api, and the schema will change correspondently. For now, please contact me for the data as your wish.

- It is important to understand the UX flow, as it will be crucial for state management.

- I am using mongodb atlas. Your might need to change the db config if you are using mongodb from localhost.

### Environment variables

In client and server folder, refer to the `.env.example` files.

### Uasge

Client & Serve

```
npm i
npm run dev
```

## UX

User can configure a _beer time_ to indicate "morning" and "evening", the default is 18:00.
If the user leaves the app at any stage, it should show the same when the user come sback.

### In the morning

- User can add todo.

#### Stages:

#### There is added todo:

- show reminder
- show todo input
- show todo list

#### There is no added todo:

- show reminder
- show todo input

### In the evening

- User cannot add todo.
- User can mark todo.
- User can see beer options after all todos are marked.

#### Stages:

#### There is added todo:

- show todo list
- show mark todo buttons
- show affirmation box

#### There is no added todo:

- show reminder

#### There is no chosen beer options:

- show beer options
- show beer information

#### There is chosen beer options:

- show beer information
