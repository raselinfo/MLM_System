const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();
const app = express();
const ObjectId = require('mongodb').ObjectId;
const cors = require('cors');
const fileUpload = require('express-fileupload');
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extends: true }))



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8djb4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });








async function run() {
    try {
        await client.connect();
        const database = client.db('mlm');
        const usersCollection = database.collection('users');
        const clientrequestCollection = database.collection('client-request');
        const complainCollection = database.collection('complain');
        const contactCollection = database.collection('contact');
        const callbackCollection = database.collection('callback');
        const withdrawrequestCollection = database.collection('withdraw-request');




        // complain data

        app.get('/complain', async (req, res) => {
            const cursor = complainCollection.find({});
            const complain = await cursor.toArray();
            res.send(complain);
        })

        app.post('/complain', async (req, res) => {
            const complainItem = req.body;
            const result = await complainCollection.insertOne(complainItem)
            res.json(result);
        })




        // contact data

        app.get('/contact', async (req, res) => {
            const cursor = contactCollection.find({});
            const contact = await cursor.toArray();
            res.send(contact);
        })

        app.post('/contact', async (req, res) => {
            const contactItem = req.body;
            const result = await contactCollection.insertOne(contactItem)
            res.json(result);
        })





        // call back data

        app.get('/callback', async (req, res) => {
            const cursor = callbackCollection.find({});
            const callback = await cursor.toArray();
            res.send(callback);
        })

        app.post('/callback', async (req, res) => {
            const callbackItem = req.body;
            const result = await callbackCollection.insertOne(callbackItem)
            res.json(result);
        })




        // withdraw request data

        app.get('/withdraw-request', async (req, res) => {
            const cursor = withdrawrequestCollection.find({});
            const withdrawReq = await cursor.toArray();
            res.send(withdrawReq);
        })

        app.post('/withdraw-request', async (req, res) => {
            const withdrawItem = req.body;
            const result = await withdrawrequestCollection.insertOne(withdrawItem)
            res.json(result);
        })







        // users data

        app.post('/users', async (req, res) => {
            const user = req.body;
            const result = await usersCollection.insertOne(user)
            res.json(result);
        })

        app.put('/users', async (req, res) => {
            const user = req.body;
            const filter = { email: user.email };
            const options = { upsert: true };
            const updateDoc = { $set: user };
            const result = await usersCollection.updateOne(filter, updateDoc, options);
            res.json(result);
        })

        app.get('/users/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email: email };
            const user = await usersCollection.findOne(query);
            let isAdmin = false;
            if (user?.role === 'admin') {
                isAdmin = true;
            }
            res.json({ admin: isAdmin });
        })


        // client req data    
        app.post('/client-request', async (req, res) => {
            let {
                accountType,
                referId,
                name,
                fatherName,
                motherName,
                nomineeName,
                dateOfBirth,
                nidBirth,
                profession,
                division,
                district,
                upzilla,
                post,
                profilePic,
               
            } = req.body
            const encodeProfilePic = profilePic.toString('base64');
            const profilePicBuffer = Buffer.from(encodeProfilePic, 'base64');
            const userReq = {
                accountType,
                referId,
                name,
                fatherName,
                motherName,
                nomineeName,
                dateOfBirth,
                nidBirth,
                profession,
                division,
                district,
                upzilla,
                post,
                profilePic: profilePicBuffer,
                isValidUser: false
            }
            const result = await clientrequestCollection.insertOne(userReq);
            res.json(result);
        });

        app.get('/client-request', async (req, res) => {
            const cursor = clientrequestCollection.find({});
            const userReq = await cursor.toArray();
            res.json(userReq);
        });















    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir);




app.get('/', (req, res) => {
    res.send('sd-one server')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});