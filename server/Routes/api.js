var express = require("express");
var router = express.Router();

var userModule = require("../../modules/userModule");
router.get("/getuser", function (req, res) {
  userModule
    .find({})
    .exec()
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.post("/postuser", function (req, res, next) {
  var userD = new userModule({
    email: req.body.email,
    username: req.body.username,
    address: req.body.address,
    mobno: req.body.mobno,
  });
  userD
    .save()
    .then((doc) => {
      res.status(200).json({
        message: "data inserted successfully",
        result: doc,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});
router.get("/gettoupdate/:id", function (req, res) {
  userModule
    .findById(req.params.id)
    .exec()
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.put("/updateuser/:id", function (req, res) {
  userModule.findById(req.params.id, function (err, data) {
    if (err) throw err;
    data.username = req.body.username ? req.body.username : data.username;
    data.email = req.body.email ? req.body.email : data.email;
    data.address = req.body.address ? req.body.address : data.address;
    data.mobno = req.body.mobno ? req.body.mobno : data.mobno;
    data
      .save()
      .then((doc) => {
        res.status(200).json({
          message: "data updated successfully",
        });
      })
      .catch((err) => {
        res.json(err);
      });
  });
});
router.delete("/deleteuser/:id", function (req, res) {
  userModule
    .findByIdAndRemove({ _id: req.params.id })
    .exec()
    .then((doc) => {
      res.status(200).json({
        message: "deleted",
        result: doc,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;
