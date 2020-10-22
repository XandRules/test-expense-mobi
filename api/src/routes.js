import { Router } from "express";
import XlsxController from "./controllers/XlsxController";
import multer from "multer";
import multerConfig from "./config/multer";
import FileController from "./controllers/FileController";

const routes = new Router();

const upload = multer(multerConfig);

routes.get('/list/:filename', XlsxController.readFile)

routes.post("/file", upload.single("file"), FileController.store);

export default routes;