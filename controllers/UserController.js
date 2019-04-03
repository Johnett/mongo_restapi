const User = require("../models/User");

exports.listAllUsers = (req, res) => {
  User.find({}, (err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(user);
  });
};

exports.createNewUser = (req, res) => {
  let newUser = new User(req.body);
  newUser.save((err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(user);
  });
};

exports.readUser = (req, res) => {
  User.findById(req.params.userid, (err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(user);
  });
};

exports.updateUser = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.userid },
    req.body,
    { new: true },
    (err, user) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(user);
    }
  );
};

exports.deleteUser = (req, res) => {
  User.remove({ _id: req.params.userid }, (err, user) => {
    if (err) {
      res.status(404).send(err);
    }
    if(user){
      // res.status(200).json({ message: "User not found" });
      res.json({message: "User successfully deleted"});
    }else{
      res.json({message: "User not found"});
    }
    // res.status(200).json({ message: "User successfully deleted" });
  });
};
