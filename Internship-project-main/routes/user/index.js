import express from "express";
import authValidation from "../../validations/user.validation.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.get("/", controllers.getAll);
router.get("/:id",  controllers.getUser);
router.post("/register", validate(authValidation.register), controllers.register);
router.post("/login",  controllers.login);
router.delete("/:id",  controllers.deleteUser);
router.patch("/",  validate(authValidation.updateUser),controllers.updateUser);


export default router;
