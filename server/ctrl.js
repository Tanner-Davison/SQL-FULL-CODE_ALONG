require('dotenv').config()

const {CONNECTION_STRING} = process.env

const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {

    seed: (req, res) => {
        sequelize.query(
            `
            DROP TABLE IF EXISTS dogs;


            CREATE TABLE dogs(
                dog_id serial primary key 
                , dog_name varchar(256)
                , dog_breed varchar(256)
                , dog_owner varchar(256)
            );

            INSERT INTO dogs (
                dog_name
                , dog_breed
                , dog_owner
            ) 
            VALUES 
            ('Oakley', 'Australian Cattle Dog', 'Stetson')
            , ('Bronco', 'Labrador Retriever', 'Bobby')
            , ('Maddie', 'Mix', 'Ryan')
            , ('Smoke', 'Belgian Malinois', 'Shelby')
            `
        ).then(() => {
            console.log('database seeded')
            res.status(200)
        }).catch(error => console.log('error seeding the database', error))
    }
    ,

    getDogs: (req, res) => {
        sequelize.query(`SELECT * FROM dogs`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    }

}