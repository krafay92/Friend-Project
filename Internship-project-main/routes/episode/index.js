import express from "express";
import authValidation from "../../validations/episode.validation.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.get("/", authenticate,  controllers.getAll);
router.get("/:id", authenticate,  controllers.get);
router.post("/",validate(authValidation.register), controllers.add);
router.delete("/:id", authenticate,  controllers.delete);
router.patch("/", authenticate,  controllers.update);
router.get("/season/:id", controllers.getBySeason);

export default router;