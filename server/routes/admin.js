
const express = require('express')

const router = express.Router()

const admincontroller = require('../Controller/admincontroller')

//-------adminLogin---------
router.post('/login',admincontroller.login)

//---------userCount--------------
router.get('/totaluser',admincontroller.totalUser)


//--------------applicationCount----------------
router.get('/totalapplication',admincontroller.totalApplication)


//----------------slotCount------------------
router.get('/totalslot',admincontroller.totalSlot)


//------------getAllApplication---------
router.get('/allapplication',admincontroller.getApplication)


//-----------getNewApplication------------
router.get('/newapplications',admincontroller.newApplication)


//-----------getApprovedApplication------------
router.get('/approvedapplication',admincontroller.approvedApplication)


//-----------getDeclinedApplication------------
router.get('/declinedapplication',admincontroller.declinedApplication)


//------------applicationStatusUpdate-----------
router.get('/statusupdate',admincontroller.statusUpdate)

//--------------getIndividualApplication-----------
router.get('/individualapplication',admincontroller.individualApplication)

//-----------addingSlot-------------
router.post('/addslot',admincontroller.addSlot)


//------------gettingSlot------------
router.get('/slots',admincontroller.getSlots)

//---------------slotBooking-----------------
router.patch('/slotbook',admincontroller.bookSlot)







module.exports = router