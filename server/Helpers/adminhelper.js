const db = require('../Configuration/connection')

const collection = require('../Configuration/collection')

const jwt = require('jsonwebtoken')

const objectId = require('mongodb').ObjectId

module.exports = {

    doLogin: (data) => {

        return new Promise((resolve, reject) => {

            db.get().collection(collection.ADMIN_COLLECTION).findOne({ email: data.email }).then((admin) => {

                if (data.password === admin.password) {
                    const payload = {
                        ...admin._id,
                        ...admin.email
                    }

                    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5d' })

                    resolve('Bearer ' + token)
                }

                else {
                    reject({ message: 'Incorrect Password', err: true })
                }
            }).catch((er) => {

                reject({ message: 'Email Id Is Invalid', err: true })
            })
        })
    },


    getUsersCount: () => {

        return new Promise((resolve, reject) => {

            db.get().collection(collection.USER_COLLECTION).count().then((count) => {

                resolve(count)
            }).catch((er) => {

                console.log(err);
                reject(er)
            })
        })

    },


    getApplicationCount: () => {

        return new Promise((resolve, reject) => {

            db.get().collection(collection.APPLICATION_COLLECTION).count().then((count) => {

                resolve(count)
            }).catch((err) => {

                reject()
            })

        })

    },


    getSlotCount: () => {

        return new Promise((resolve, reject) => {

            db.get().collection(collection.SLOT_COLLECTION).count().then((count) => {

                resolve(count)
            }).catch((er) => {

                reject(er)
            })
        })
    },


    getApplication: () => {

        return new Promise((resolve, reject) => {

            db.get().collection(collection.APPLICATION_COLLECTION).find().toArray().then((application) => {

                resolve(application)
            }).catch(() =>

                reject()
            )

        })

    },

    getNewApplication: () => {

        return new Promise((resolve, reject) => {

            db.get().collection(collection.APPLICATION_COLLECTION).find({ status: "new" }).toArray().then((application) => {

                resolve(application)

            }).catch((er) => {

                reject()
            })
        })
    },


    getApprovedApplication: () => {

        return new Promise((resolve, reject) => {

            db.get().collection(collection.APPLICATION_COLLECTION).find({ status: "approved" }).toArray().then((application) => {

                resolve(application)

            }).catch((e) => {

                reject()
            })
        })
    },


    getDeclinedApplication: () => {


        return new Promise((resolve, reject) => {

            db.get().collection(collection.APPLICATION_COLLECTION).find({ status: "declined" }).toArray().then((application) => {

                resolve(application)

            }).catch((e) => {

                reject()
            })
        })

    },


    applicationStatusUpdate: (data) => {

        return new Promise((resolve, reject) => {

            db.get().collection(collection.APPLICATION_COLLECTION).updateOne({ _id: objectId(data.id) },

                {
                    $set: {

                        status: data.status
                    }
                }
            ).then(() => {

                resolve()

            }).catch(() => {
                reject()
            })
        })
    },


    getIndividualApplication: (id) => {

        return new Promise((resolve, reject) => {

            db.get().collection(collection.APPLICATION_COLLECTION).findOne({ _id: objectId(id) }).then((application) => {

                resolve(application)
            }).catch((err) => {

                console.log(err);
                reject()
            })
        })
    },


    addSlot: (data) => {

        return new Promise((resolve, reject) => {

            db.get().collection(collection.SLOT_COLLECTION).insertOne(data).then(() => {

                resolve()
            }).catch(() => {

                reject()
            })
        })
    },


    getSlots: () => {

        return new Promise((resolve, reject) => {

            db.get().collection(collection.SLOT_COLLECTION).find().toArray().then((slots) => {

                resolve(slots)

            }).catch(() => {

                reject()
            })
        })
    },

    
    bookSlot: (data) => {

        return new Promise((resolve, reject) => {
            db.get().collection(collection.SLOT_COLLECTION).updateOne({ _id: objectId(data.slotid) },

                {
                    $set: {
                        company: data.change,
                        status: true
                    }
                }).then(() => {

                    db.get().collection(collection.APPLICATION_COLLECTION).updateOne({ company: data.change },
                        {
                            $set: {
                                status: 'booked'
                            }
                        }
                    )
                    resolve()

                }).catch(() => {

                    reject()
                })
        })
    }
}