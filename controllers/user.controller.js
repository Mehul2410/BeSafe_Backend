const User = require("../models/user");
const CustomErrorHandler = require("../services/CustomErrorHandler");

const userController = {
  async me(req, res, next) {
    try {
      const user = await User.findOne({ _id: req.user._id }).select(
        "-password -updatedAt -__v"
      );
      if (!user) {
        return next(CustomErrorHandler.notFound());
      }
      res.json(user);
      console.log(user);
    } catch (err) {
      return next(err);
    }
  },
  async allUsers(req, res, next) {
    try {
      const user = await User.find().select(
        "-password -updatedAt -__v -email -active -role -userDetails -createdAt -updatedAt"
      );
      if (!user) {
        return next(CustomErrorHandler.notFound());
      }
      res.json(user);
      console.log(user);
    } catch (err) {
      return next(err);
    }
  },
};

module.exports = userController;
