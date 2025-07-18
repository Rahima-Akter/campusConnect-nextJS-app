const app = require('./app');
const { MongoClient } = require('mongodb');

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;

MongoClient.connect(uri, { useUnifiedTopology: true })
  .then(client => {
    app.locals.db = client.db('campusConnect');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err)); 