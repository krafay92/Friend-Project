import express from "express";
import authValidation from "../../validations/season.validation.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import authenticate from "../../middlewares/authenticate.js";


const router = express.Router();
router.get("/",  controllers.getAll);
router.get("/:id",  controllers.get);
router.post("/", validate(authValidation.add), controllers.add);
router.delete("/:id",   controllers.delete);
router.patch("/",   controllers.update);


export default router;