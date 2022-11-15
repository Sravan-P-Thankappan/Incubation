const db = require('../Configuration/connection')
const collection = require('../Configuration/collection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {

    doSignup: (userData) => {

        return new Promise(async (resolve, reject) => {

            let existingUser = await db.get().collection(collection.USER_COLLECTION).findOne({ email: userData.email })

            if (!existingUser) {
                bcrypt.hash(userData.password, 10).then((data) => {
                    userData.password = data

                    db.get().collection(collection.USER_COLLECTION).insertOne(userData)
                        .then(response => {
                            resolve()

                        }).catch((err) => reject(err))

                }).catch((err) => {
                    console.log(err);
                })

            }
            else {
                let err = true

                reject(err)
            }

        })

    },


    doLogin: (userData) => {

        return new Promise(async (resolve, reject) => {

            let user = await db.get().collection(collection.USER_COLLECTION).findOne({ email: userData.userId })
            if (user) {
                bcrypt.compare(userData.password, user.password)

                    .then((result) => {

                        if (result) {

                            const payload = {
                                id: user._id,
                                name: user.name

                            }

                            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' })

                            let existinguser = { ...user, status: true, token:'Bearer ' + token }
                            resolve(existinguser)

                        }
                        else {
                            let err = true
                            reject(err)
                        }


                    }).catch((err) => {

                        console.log(err);

                    })
            } else {
                let err = true
                reject(err)
            }

        })
    },


    applicationForIncubation: (data) => {

        return new Promise((resolve, reject) => {
            data.status = 'new'

            db.get().collection(collection.APPLICATION_COLLECTION).insertOne(data).then((response) => {

                resolve(response)

            }).catch((err) => {

                reject(err)
            })

        })

    }

}