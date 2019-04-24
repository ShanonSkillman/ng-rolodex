const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const decorator = require('./database/decorator');


console.log("PROCESSENV----->", process.env)
//DATA VARS
const PORT = process.env.PORT;
const SESSION_SECRET = process.env.SESSION_SECRET;
const REDIS_HOSTNAME = process.env.REDIS_HOSTNAME;

if (!PORT) { console.log('No Port Found'); }
if (!SESSION_SECRET) { console.log('No Session Secret Found'); }
if (!REDIS_HOSTNAME) { console.log('No Redis Hostname Found'); }
if (!PORT || !SESSION_SECRET || !REDIS_HOSTNAME) { return process.exit(1); }

//SET UP SERVER MIDDLEWARE
const app = express();
app.use(bodyParser.json({ extended: true }));

//DECORATE REQUEST WITH DATABASE
app.use(decorator);

//ROUTES

app.use(bodyParser.json());

app.get('/api/movies', (req, res) => {
    return res.json([
        { title: 'Avengers' },
        { title: 'Shazam!' },
        { title: 'Kill Bill!' }
    ]);
})

app.use('/api', userRoutes);
app.get('/api/smoke', (req, res) => {
    res.json({ smoke: 'test' });
});

//START SERVER
app.listen(PORT, () => {
    console.log('Server started on port: ${PORT}')
})