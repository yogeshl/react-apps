const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({ msg: 'Welcome to the ContactKeeper API..'}));

const PORT = process.env.port || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));