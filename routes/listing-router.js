const listingRouter = require('express').Router();
const Listing = require('../models').Listing;

const getListings = (req, res) => {
	Listing.findAll()
	.then((listings) => {
		res.send(listings)
	})
	.catch((err) => {
		console.log('ERROR GETTING LISTINGS ======>', err)
		res.sendStatus(500)
	})
}

const createListing = (req, res) => {
	Listing.create({
		description: req.body.description,
		images: [req.body.images],
		guestLimit: req.body.guestLimit,
		availability: req.body.availability
	}) //provide props UserId
	.then((newListing) => {
		res.send(newListing)
	})
	.catch((err) => {
		console.log('ERROR CREATING LISTING ======> ', err)
		res.sendStatus(500)
	})
}

const getOneListing = (req, res) => {
	Listing.findById(req.params.id)
	.then((listing) => {
		res.send(listing)
	})
	.catch((err) => {
		console.log("ERROR GETTING ONE LISTNG====>", err)
		res.sendStatus(500)
	})
}

//present url is /api/listing
listingRouter.route('/')
	.get(getListings)

listingRouter.route('/')
	.post(createListing)

listingRouter.route('/:id')
	.get(getOneListing)

module.exports = listingRouter;