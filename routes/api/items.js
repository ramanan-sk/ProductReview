const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Items');

// @rout GET api/items
// @desc GET all items
// @access Public

router.get('/', (req,res) => {
    Item.find()
        .then(items => res.json(items))
});

// router.get('/:id', (req,res) => {
//     Item.findById(req.params.id)
//         .then(item => res.json(item))
// });

// @rout Post api/items
// @desc Create A Item
// @access Public

router.post('/', (req,res) => {
    const newItem = new Item({
        brand: req.body.brand,
        model: req.body.model,
        launced: req.body.launced,
        dimensions: req.body.dimensions,
        battery: req.body.battery,
        wireless_chargeing: req.body.wireless_chargeing,
        color: req.body.color,
        
        rear_camera: req.body.rear_camera,
        rear_flash: req.body.rear_flash,
        rear_autofocus: req.body.rear_autofocus,
        front_camera: req.body.front_camera,
        front_autofocus: req.body.front_autofocus,
        front_flash: req.body.front_flash,
        popup_camera: req.body.popup_camera,

        processor: req.body.processor,
        processor_model: req.body.processor_model,
        ram: req.body.ram,
        internal_storage: req.body.internal_storage,
        expandable: req.body.expandable,
        
        os: req.body.os,
        skin: req.body.skin,

        wifi: req.body.wifi,
        gps: req.body.gps,
        bluetooth: req.body.bluetooth,
        nfc: req.body.nfc,
        usb: req.body.usb,
        sim_slot: req.body.sim_slot,
        sim1: req.body.sim1,
        sim2: req.body.sim2,

        face_unlock: req.body.face_unlock,
        fingerprint: req.body.fingerprint,
        indisplay: req.body.indisplay,
        compass: req.body.compass,
        proximity: req.body.proximity,
        accelerometer: req.body.accelerometer,
        light_sensor: req.body.light_sensor,
        gyroscope: req.body.gyroscope,

        review: req.body.review,

        cost:req.body.cost,
        rating:req.body.rating,
        amazon: req.body.amazon
    });
    newItem.save().then(item => res.json(item));
});

// @rout DELETE api/items
// @desc delete a item
// @access Public

router.delete('/:id', (req,res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;