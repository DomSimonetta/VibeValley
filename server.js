const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3000;

// Import route definitions
const routes = require('./controllers');
const userRoutes = require('./controllers/api/userRoutes');

const hbs = exphbs
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', '.hbs');

// Set up session with SequelizeStore
const sess = {
  secret: 'ADD KEY HERE',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Add routes to the application
// app.use('/api', routes);
app.use('/', routes);
app.use('/api/user', userRoutes);

// Sync sequelize models to the database, then start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});
