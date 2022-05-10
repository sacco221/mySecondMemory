This project was create during my study at [Code Chrysalis](https://www.codechrysalis.io/).

# About the app, My Second memory

Have you ever experienced this at a supermarket or grocery store?

- I came shopping but I don't know what's in the fridge right now...
- I think it's in stock, but I don't remember. .. ..
- I can't remember which product I use all the time!

If yes、this app may be able to help you.
If you register the items you have at home, this app will remember your inventory on your behalf and you can check what you have on the go.

# Development

Follow this guide to set up your environment...

## Database

This project assumes a Postgres database, naturally, this is not included in the package.json file, so must be installed separately.
Create a database called "mymemory", and store all secret information into your .env (& do not forget add it into .gitignore!).

## Donwloading and installing

1. Clone this repogitory
   `git clone https://github.com/sacco221/mySecondMemory.git`
2. GO into the repository on your local
3. Install dependencies
   `npm install`
4. Create a database
5. Run migration
   `npm migrate-latest`
6. Run the app
   `npm start`

# Technology used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Knex](http://knexjs.org/)
- [Postgres](https://www.postgresql.org/)
- [React](https://reactjs.org/)
- [Heroku](https://id.heroku.com/)

# Future features

- [ ] Login Function
- [ ] Register our favorites function
- [ ] Responsive interface
- [ ] Good design

See more in issues....

# Contributing

Any contribution and feedbac will be appreciated!

Project Link: https://second-memory-for-shop.herokuapp.com/

# License

MIT
