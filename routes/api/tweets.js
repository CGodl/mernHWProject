const express = require("express");
const router = express.Router();
const passport = require('passport')

router.get("/test", (req, res) => res.json({ msg: "This is the tweets route" }));

router.post('/',
  passport.authenticate('jwt', { session: false}),
  (req, res) => {
    const  { isValid,}

  }

)

module.exports = router;