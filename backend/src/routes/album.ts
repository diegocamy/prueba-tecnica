import { Router } from "express";
import albumController from "../controllers/album";

const route = Router();

route.post("/getAlbums", albumController.getAlbums);

export default route;
