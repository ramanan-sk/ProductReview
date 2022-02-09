const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    brand: {
        type: String,
        required: true
    },
	model: {
        type: String,
        required: true
    },
	launced: {
        type: String,
        required: true
    },
	dimensions: {
        type: String,
        required: true
    },
	battery: {
        type: String,
        required: true
    },
	wireless_chargeing: {
        type: String,
        required: true
    },
	color: {
        type: String,
        required: true
    },
	
	rear_camera: {
        type: String,
        required: true
    },
	rear_flash: {
        type: String,
        required: true
    },
	rear_autofocus: {
        type: String,
        required: true
    },
	front_camera: {
        type: String,
        required: true
    },
	front_autofocus: {
        type: String,
        required: true
    },
	front_flash: {
        type: String,
        required: true
    },
	popup_camera: {
        type: String,
        required: true
    },

	processor: {
        type: String,
        required: true
    },
	processor_model: {
        type: String,
        required: true
    },
	ram: {
        type: String,
        required: true
    },
	internal_storage: {
        type: String,
        required: true
    },
	expandable: {
        type: String,
        required: true
    },
	
	os: {
        type: String,
        required: true
    },
	skin: {
        type: String,
        required: true
    },

	wifi: {
        type: String,
        required: true
    },
	gps: {
        type: String,
        required: true
    },
	bluetooth: {
        type: String,
        required: true
    },
	nfc: {
        type: String,
        required: true
    },
	usb: {
        type: String,
        required: true
    },
	sim_slot: {
        type: String,
        required: true
    },
	sim1: {
        type: String,
        required: true
    },
	sim2: {
        type: String,
        required: true
    },

	face_unlock: {
        type: String,
        required: true
    },
	fingerprint: {
        type: String,
        required: true
    },
	indisplay: {
        type: String,
        required: true
    },
	compass: {
        type: String,
        required: true
    },
	proximity: {
        type: String,
        required: true
    },
	accelerometer: {
        type: String,
        required: true
    },
	light_sensor: {
        type: String,
        required: true
    },
	gyroscope: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    cost: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    amazon: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item',ItemSchema);