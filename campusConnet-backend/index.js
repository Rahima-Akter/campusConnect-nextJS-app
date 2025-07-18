require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();

// middle ware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('server is running')
});


const uri = process.env.DB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect(); // ensure connection
        const db = client.db('campusDB'); 
        // const campaignData = client.db('campaingDB').collection('campaigns')
        // const donationDB = client.db('campaingDB').collection('donationCollection')

        // Routes

        // 1. Create a new college (POST)
        app.post('/api/colleges', async (req, res) => {
            try {
                const college = req.body;

                // Simple validation
                if (!college.name || !college.location) {
                    return res.status(400).json({ error: "College name and location are required" });
                }

                const result = await db.collection('colleges').insertOne(college);
                res.status(201).json({
                    message: "College added successfully",
                    collegeId: result.insertedId
                });
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: "Failed to add college" });
            }
        });

        // 2. Get all colleges (GET)
        app.get('/api/colleges', async (req, res) => {
            try {
                const colleges = await db.collection('colleges').find().toArray();
                res.json(colleges);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: "Failed to fetch colleges" });
            }
        });

        // 3. Get a single college by ID (GET)
        app.get('/api/colleges/:id', async (req, res) => {
            try {
                const college = await db.collection('colleges').findOne({
                    _id: new ObjectId(req.params.id)
                });

                if (!college) {
                    return res.status(404).json({ error: "College not found" });
                }

                res.json(college);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: "Failed to fetch college" });
            }
        });

        // 4. Update a college (PUT)
        app.put('/api/colleges/:id', async (req, res) => {
            try {
                const collegeId = req.params.id;
                const updatedData = req.body;

                // Simple validation
                if (!updatedData.name || !updatedData.location) {
                    return res.status(400).json({ error: "College name and location are required" });
                }

                const result = await db.collection('colleges').updateOne(
                    { _id: new ObjectId(collegeId) },
                    { $set: updatedData }
                );

                if (result.matchedCount === 0) {
                    return res.status(404).json({ error: "College not found" });
                }

                res.json({ message: "College updated successfully" });
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: "Failed to update college" });
            }
        });

        // 5. Delete a college (DELETE)
        app.delete('/api/colleges/:id', async (req, res) => {
            try {
                const collegeId = req.params.id;
                const result = await db.collection('colleges').deleteOne({
                    _id: new ObjectId(collegeId)
                });

                if (result.deletedCount === 0) {
                    return res.status(404).json({ error: "College not found" });
                }

                res.json({ message: "College deleted successfully" });
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: "Failed to delete college" });
            }
        });

        // 6. Search colleges by name (GET)
        app.get('/api/colleges/search/:name', async (req, res) => {
            try {
                const name = req.params.name;
                const colleges = await db.collection('colleges')
                    .find({ name: { $regex: name, $options: 'i' } })
                    .toArray();

                res.json(colleges);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: "Failed to search colleges" });
            }
        });

        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);




app.listen(port, () => {
    console.log(`server is running on ${port}`)
})