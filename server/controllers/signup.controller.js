exports.signup_post = async function(req, res, next) {
    console.log('Responding to a POST request');

    const { MongoClient } = require("mongodb");

/// *************REDACTED*********************** \\\
    const url = "MONGO URL REDACTED for PRIVACY";
/// ***************EDIT********************* \\\
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true  });
/// ***********EDIT**************** \\\
    const dbName = "DB NAME REDACTED";
/// **********REDACTED***************** \\\

    
    try {
        const userInputEmail = req.body.email;

        await client.connect();
        console.log(`Connecting to server`);
        const db = client.db(dbName);
        const collection = db.collection("people");

        const query = { email: userInputEmail };
        const queryResult = await collection.findOne(query);

        async function verify(dbQuery) {
            if (dbQuery != null || dbQuery != undefined) {
                console.log("profile already exists");
                console.log(JSON.stringify(
                    dbQuery
                ));
            } else {
                // insert into collection
                console.log('Creating profile for new user');

                let newUserProfile = {
                    'first_name': req.body.first_name,
                    'last_name': req.body.last_name,
                    'email': req.body.email,
                    'password': req.body.password
                };

                console.log(JSON.stringify(
                    newUserProfile
                ));
                console.log('Inserting into db collection');
                await collection.insertOne(newUserProfile).then( docu => {
                    console.log('Document inserted');
                })
                .catch(err => {
                    console.log("error on insert");
                    throw err;
                })
            }
        }
        // Run the fuction
        verify(queryResult);
    } catch(err) {
        console.log('Internal error')
        console.log(err.stack);
    } finally {
        console.log('Executing finally');
        await client.close();
        console.log('Connection closed');
    };
    console.log('Signup script complete');
    res.status(200).send('Signup POST request complete');
};