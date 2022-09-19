const UserRoutes = require("express").Router();
const { authorize } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");



const {
  getAll,
  getById,
  getByUserName,
  register,
  login,
  update

} = require("./user.controller");

UserRoutes.post("/signup", upload.single("avatar"), register);
UserRoutes.post("/login", login);
UserRoutes.get("/", getAll);
UserRoutes.get("/:id", getById);
UserRoutes.get("/user/:username", [authorize], getByUserName);
UserRoutes.patch('/:id', [authorize], upload.single("avatar"), update);

module.exports = UserRoutes;
