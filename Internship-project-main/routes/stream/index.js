import express from "express";
import authValidation from "../../validations/stream.validation.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import authenticate from "../../middlewares/authenticate.js";


const router = express.Router();
router.get("/", authenticate,  controllers.getAll);
router.get("/userhistory", authenticate,  controllers.userHistory);
router.get("/:id", authenticate,  controllers.getUser);
router.post("/", validate(authValidation.register), controllers.register);
router.delete("/:id", authenticate,  controllers.deleteUser);
router.patch("/:id", validate(authValidation.updateUser), controllers.updateUser);


export default router;