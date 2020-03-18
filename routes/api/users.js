const express = require("express");
const router = express.Router();


const User = require("../../models/User");

const auth = require('../../middleware/auth');
// @route   GET api/users
// @desc    list all user
// @access  Public

router.get("/", (req, res) => {
    User.find()
      // .sort({date : -1})
      .then(users => res.json(users));
  });

  router.get('/user', auth, (req,res) =>{
    User.findById(req.user.id).select('-password')
    .then(user => res.json(user))
})


module.exports = router;