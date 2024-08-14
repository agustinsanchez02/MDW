import {Router} from "express"
import { formatMiddleware } from "../middlewares/users.middlewares.js";
import { createUsers, deleteUsers, getUser, getUsers, updateUsers } from "../controllers/users.controller.js";
const router = Router();

router.get ("/",formatMiddleware, getUsers);

router.get ("/:id", getUser);

router.post("/", createUsers);

router.put("/:id", updateUsers);

router.delete("/:id", deleteUsers);

export default router;
