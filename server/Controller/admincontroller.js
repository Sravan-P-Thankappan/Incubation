

const adminHelper = require('../Helpers/adminhelper')

module.exports = {

    login: (req, res) => {

        adminHelper.doLogin(req.body).then((response) => {

            res.json({ token: response, })

        }).catch((er) => {

            res.json(er)

        })

    },


    totalUser: (req, res) => {

        adminHelper.getUsersCount().then((response) => {
            res.json(response)
        }).catch((err) => {

            res.json({ message: 'no' })
        })
    },


    totalApplication: (req, res) => {

        adminHelper.getApplicationCount().then((response) => {
            res.json(response)
        }).catch((err) => {

            res.json({ message: "No Document" })
        })
    },


    totalSlot:(req,res)=>{

        adminHelper.getSlotCount().then((response)=>{

            res.json(response)
        }).catch((err)=>{

            res.json({messge:'No Documents'})
        })
    },


    getApplication: (req, res) => {

        adminHelper.getApplication().then((response) => {

            res.json(response)
        }).catch(() => {

            res.json({ message: 'no documents' })
        })

    },


    newApplication: (req, res) => {

        adminHelper.getNewApplication().then((response) => {

            res.json(response)

        }).catch((er) => {

            res.json({ message: 'no document' })

        })
    },


    approvedApplication: (req, res) => {

        adminHelper.getApprovedApplication().then((response) => {
           
          
                 
                res.json(response)

           
        }).catch(() => {

            res.json({ module: 'No Documents' })
        })
    },


    declinedApplication: (req, res) => {

        adminHelper.getDeclinedApplication().then((response) => {

            res.json(response)

        }).catch(() => {

            res.json({ message: 'no document' })
        })

    },


    statusUpdate: (req, res) => {

        let data = {
            id: req.headers.id,
            status: req.headers.status
        }
        adminHelper.applicationStatusUpdate(data).then((response) => {

            res.json({ message: 'success' })


        }).catch((err) => {

            res.json({ message: 'failed' })

        })

    },


    individualApplication: (req, res) => {

        id = req.headers.id

        adminHelper.getIndividualApplication(id).then((response) => {

            res.json(response)
        }).catch(() => {

            res.json({ message: "No documents" })
        })
    },


    addSlot: (req, res) => {

        adminHelper.addSlot(req.body).then((response) => {

            res.json({ message: 'slot added successfully' })
        }).catch(() => {

            res.json({ message: 'failed' })
        })

    },


    getSlots: (req, res) => {

        adminHelper.getSlots().then((response) => {

            res.json(response)

        }).catch(() => {
            res.json({ messge: 'no slots' })
        })
    },


    bookSlot: (req, res) => {

        adminHelper.bookSlot(req.body).then((response) => {

            res.json({ message: 'slot booked' })
        }).catch((er) => {

            res.json({ message: 'slot not booked' })
        })
    }
}