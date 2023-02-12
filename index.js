const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


// Add middleware to parse incoming JSON data
app.use(express.json());

const postsRoutes = require('./routes/postsRoutes');
const usersRoutes = require('./routes/usersRoutes');
const coursesRoutes = require('./routes/coursesRoutes');
const cartsRoutes = require('./routes/cartsRoutes');

app.use('/posts', postsRoutes);
app.use('/users', usersRoutes);
app.use('/courses', coursesRoutes);
app.use('/carts', cartsRoutes);

app.get('/', (req, res) => {
    res.send('Server Running Well');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
