const loremIpsum = require("lorem-ipsum").loremIpsum;
const mysql = require('mysql');

const listing_type_options = ['Entire place', 'Private room', 'Hotel room', 'Shared room'];
const listing_category_options = ['apartment','house', 'hotel', 'cabin', 'bnb'];

//seedDB for listings table
for (let i = 0; i < 100; i ++) {
  let listing_id = 10001 + i;
  let listing_title = loremIpsum({
    count: 1,
    format:  "plain",
    sentenceLowerBound: 3,
    sentenceUpperBound: 6,
    units: "words"
  });
  let listing_type =  listing_type_options[Math.floor(Math.random() * 4)];
  let listing_category = listing_category_options[Math.floor(Math.random() * 5)];
  let night_price = 100 + Math.random() * 100;
  let avg_review = 2 + Math.random() * 3;
  let num_review = 2 + Math.random() * 50;
  let number_beds = Math.random() * 6;
  let is_fav = i % 20 === 0 ? true : false;
  //INSERT INTO TABLE
}

//seedDB for listing_images
for (let i = 0; i < 100; i ++) {
  let listing_id = 10001 + i;
  for (let j = 0; j < 5; j++) {
    let image_url = 'https://picsum.photos/450/300'
    //INSERT INTO TABLE
  }

}


