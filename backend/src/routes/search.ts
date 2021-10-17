import { Router } from "express";
import searchController from "../controllers/search";

const route = Router();

route.get("/search", searchController.getSearch);

export default route;
