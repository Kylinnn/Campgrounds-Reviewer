var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg",
        description: "our next adventure starts here. Search by the facility name if you know exactly where you want to go - we'll find that one along with others in the area. Or enter a city, state, street name or zip code for recommendations near your destination."
    },
    {
        name: "Desert Mesa",
        image: "https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg",
        description: "our next adventure starts here. Search by the facility name if you know exactly where you want to go - we'll find that one along with others in the area. Or enter a city, state, street name or zip code for recommendations near your destination."
    },
    {
        name: "Canyon Floor",
        image: "https://farm8.staticflickr.com/7205/7121863467_eb0aa64193.jpg",
        description: "our next adventure starts here. Search by the facility name if you know exactly where you want to go - we'll find that one along with others in the area. Or enter a city, state, street name or zip code for recommendations near your destination."
    }
];

function seedDB() {
    // remove all campgrounds
    Campground.remove({}, function(err) {
        // if(err)
        // {
        //     console.log(err);
        // }
        // else
        // {
        //     console.log(("removed campgrounds"));
        //     data.forEach(function(seed) {
        //     Campground.create(seed, function(err, campground) {
        //         if(err)
        //         {
        //             console.log(err);
        //         }
        //         else
        //         {
        //             console.log("Added a camp");
        //             // create a comment
        //             Comment.create(
        //                 {
        //                     text: "This place is great, but wish there was internet",
        //                     author: "Homer"
        //                 }, function(err, comment) {
        //                     if(err)
        //                     {
        //                         console.log(err);
        //                     }
        //                     else
        //                     {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Created a new comment");
        //                     }
        //                 });
        //         }
        //     });
        // });
        // }
    });
    
    // add few campgrounds
}

module.exports = seedDB;
