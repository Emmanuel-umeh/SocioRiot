const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
var passport = require("passport");
// var dotenv = require('dotenv')
// import strategy from "passport-facebook";


// const FacebookStrategy = strategy.Strategy;


// User Model
const User = require('../../models/User');

// @route   POST api/auth
// @desc    Auth user
// @access  Public
router.post('/', (req, res) => {
  const { email, password } = req.body;

  console.log(email, password)
  // Simple validation
  if(!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check for existing user
  User.findOne({ "local.email" :email })
    .then(user => {
      if(!user) return res.status(400).json({ msg: 'User Does not exist' });

      // Validate password
      console.log("user password", user.local.password)
      console.log(password)
      bcrypt.compare(password, user.local.password)
        .then(isMatch => {
          if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

          console.log(user._id)

          jwt.sign(
            { id: user._id },
            'jwtSecret',
            { expiresIn:10000 },
            (err, token) => {
              if(err) throw err;
              res.status(200).json({
                token,
                user: {
                  id: user._id,
                //   method : user.method,
                  firstName:user.local.firstName,
                  lastName:user.local.lastName,
                  username:user.local.username,
                  email:user.local.email,
                  companyName:user.local.companyName,
                  companyType:user.local.companyType,
                  industry:user.local.industry,
                  country  :user.local.country,
                  date :user.local.date
                }
              });
            }
          )
        })
    })   .catch(e => {
      // res.redirect("/");
      console.log(e);
    });
});


module.exports = router;