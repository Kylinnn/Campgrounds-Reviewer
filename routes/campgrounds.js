var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");

//Index Route - campground page
router.get("/", function(req, res) {
    Campground.find({}, function(err, allCampgrounds) {
        if(err)
            console.log(err);
        else
            res.render("campgrounds/index", {campgrounds: allCampgrounds, currentUser: req.user});
    });
});

//Create Route - add new campgrounds
router.post("/", middleware.isLoggedIn, function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username : req.user.username
    };
    var newCamp = {name: name, image: image, description: desc, author: author};
    Campground.create(newCamp, function(err, newlyCreated) {
       if(err)
           console.log(err);
       else
           res.redirect("/campgrounds");
    });
});

// New Route - form to add a new camp
router.get("/new", middleware.isLoggedIn, function(req, res) {
   res.render("campgrounds/new"); 
});

// Show Route - show a specific campground
router.get("/:id", function(req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
       if(err)
           console.log(err);
       else
           res.render("campgrounds/show", {campground: foundCampground});
    });
});

// Edit Route
router.get("/:id/edit", middleware.checkCampgroundOwner, function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground) {
        if(err)
            res.redirect("/campgrounds");
        else
            res.render("campgrounds/edit", {campground: foundCampground});
    });
});

// Update Route
router.put("/:id", middleware.checkCampgroundOwner, function(req, res) {
   Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground) {
      if(err)
         res.redirect("/campgrounds");
      else
         res.redirect("/campgrounds/" + req.params.id);
   });
});

// Destroy Route
router.delete("/:id", middleware.checkCampgroundOwner, function(req, res) {
   Campground.findByIdAndRemove(req.params.id, function(err){
      if(err)
         res.redirect("/campgrounds");
      else
         res.redirect("/campgrounds");
   });
});

module.exports = router;