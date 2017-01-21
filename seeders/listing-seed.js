const Sequelize = require('../models').Sequelize;
const sequelizeConnection = require('../models').sequelizeConnection;
const Listing = require('../models').Listing;

//Listing.sync will create the Listing table
Listing.sync({force: true})
//add the following six listings to the database:
.then(() => Listing.bulkCreate([
	{
	  description: 'Spacious log cabin. Beautiful neighborhood with much to see and do!',
	  images: ['http://hbu.h-cdn.co/assets/16/28/980x490/1468520678-1468440512-tiny-home-index.jpg'],
	  guestLimit: 4,
	  availability: 1,
	  UserId: 1
	},
	{
	  description: "Trailer home available in the suburbs of Staten Island. It's a quiet and safe, neighborhood.",
	  images: ['https://s-media-cache-ak0.pinimg.com/564x/9c/1e/41/9c1e41cc08cf9c5b268af157c42de11f.jpg'],
	  guestLimit: 6,
	  availability: 1,
	  UserId: 2
	},
	{
	  description: "One room available, with two bunk beds.The room is available until and including Dec, 31st.",
	  images: ['http://www.wrigleyhostel.com/img/airbnb/4bed.jpg'],
	  guestLimit: 1,
	  availability: 0,
	  UserId: 4
	},	
	{
	  description: " Treehouse with two windows.One bunk bed",
	  images: ['https://treehousevineyards.com/wp-content/uploads/2014/08/753_100_0512.jpg'],
	  guestLimit: 1,
	  availability: 1,
	  UserId: 3
	},	
	{
	  description: "My place is close to Gracie Mansion, Carl Schurz Park, Whole Foods, Fairway Market, Central Park, The Guggenheim Museum, Holy Trinity Church, Shake Shack, Barnes and Noble, Duane Reade and so much more.... You’ll love my place because of The original art, central location, the coziness, the light, and comfortable bed.... My place is good for couples, solo adventurers, and business travelers.",
	  images: ['https://a2.muscache.com/im/pictures/c2a41884-7729-481e-9292-2fcd76bf9257.jpg'],
	  guestLimit: 2,
	  availability: 1,
	  UserId: 6
	},	
	{
	  description: "My place is close to Empire State Building, Korea Town, Macy's, Penn Station, Herold Square, . You’ll love my place because of Walking distance from everything. My place is good for couples, solo adventurers, and business travelers.",
	  images: ['https://a2.muscache.com/im/pictures/b6157654-bc37-4402-b54d-d95ddfa1e034.jpg'],
	  guestLimit: 2,
	  availability: 0,
	  UserId: 5
	},
		{
	  description: "My place is my glam pad. NYC is full of hidden treasures and my place is definitely one of them. On the out skirts of the city for some peace, yet a short train ride from all the noise, culture and fun your little heart desires.",
	  images: ['https://a2.muscache.com/im/pictures/55884155-493c-411a-8e12-c09d03ccc8e4.jpg?aki_policy=xx_large'],
	  guestLimit: 2,
	  availability: 1,
	  UserId: 7
	},
		{
	  description: "This is a wonderful art-filled apartment in a historic landmark building that houses The Bronx Documentary Center, an arts and cultural center, on the lower floors. The apartment is very large (1000 sf) and has enormous windows in every room. A great space to relax or get work done. There is a large outdoor patio on the ground floor that you can use to relax.",
	  images: ['https://a2.muscache.com/im/pictures/b6157654-bc37-4402-b54d-d95ddfa1e034.jpg'],
	  guestLimit: 4,
	  availability: 1,
	  UserId: 8
	},
]))

.catch((err) => console.log(err));
