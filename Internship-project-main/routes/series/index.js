import express from "express";
import authValidation from "../../validations/series.validation.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import authenticate from "../../middlewares/authenticate.js";


const router = express.Router();
router.get("/",  controllers.getAll);
router.get("/:id", authenticate,  controllers.get);
router.post("/", validate(authValidation), controllers.add);
router.delete("/:id", authenticate,  controllers.delete);
router.patch("/:id", authenticate,  controllers.update);


export default router;