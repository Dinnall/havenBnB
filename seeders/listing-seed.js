const Sequelize = require('../models').Sequelize;
const sequelize = require('../models').sequelize;
const Listing = require('../models').Listing;

//Listing.sync will create the Listing table
Listing.sync({force: true})
//add the following six listings to the database:
.then(() => Listing.bulkCreate([
	{
	  description: 'Spacious log cabin. Beautiful neighborhood with much to see and do!',
	  zipCode: '10002',
	  images: ['http://hbu.h-cdn.co/assets/16/28/980x490/1468520678-1468440512-tiny-home-index.jpg'],
	  guestLimit: 4,
	  availability: 1,
	  UserId: 1
	},
	{
	  description: "Trailer home available in the suburbs of Staten Island. It's a quiet and safe, neighborhood.",
	  zipCode: '10019',
	  images: ['https://s-media-cache-ak0.pinimg.com/564x/9c/1e/41/9c1e41cc08cf9c5b268af157c42de11f.jpg'],
	  guestLimit: 6,
	  availability: 1,
	  UserId: 2
	},
	{
	  description: "One room available, with two bunk beds.The room is available until and including Dec, 31st.",
	  zipCode: '10029',
	  images: ['http://www.wrigleyhostel.com/img/airbnb/4bed.jpg'],
	  guestLimit: 1,
	  availability: 0,
	  UserId: 4
	},	
	{
	  description: " Treehouse with two windows.One bunk bed",
	  zipCode: '11101',
	  images: ['https://treehousevineyards.com/wp-content/uploads/2014/08/753_100_0512.jpg'],
	  guestLimit: 1,
	  availability: 1,
	  UserId: 3
	},		
	{
	  description: "My place is close to Empire State Building, Korea Town, Macy's, Penn Station, Herold Square, . You’ll love my place because of Walking distance from everything. My place is good for couples, solo adventurers, and business travelers.",
	  zipCode: '10207',
	  images: ['https://a2.muscache.com/im/pictures/b6157654-bc37-4402-b54d-d95ddfa1e034.jpg'],
	  guestLimit: 2,
	  availability: 0,
	  UserId: 5
	}
]))

.catch((err) => console.log(err));
