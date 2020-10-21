import { Router } from "express";
import XlsxController from "./controllers/XlsxController";


const routes = new Router();


routes.get('/list', XlsxController.readFile)

export default routes;