import { Router } from "express";
const router = Router();

import { saveExceptions } from "../controllers/exception.js";
import { URLS } from "../constants/url.js";

router.post(URLS.EXCEPTIONS, saveExceptions);

export default router;
