import express from "express";
const router = express.Router();
import {shortenUrl,redirect}  from "../controllers/urlController.js"

router.post('/api/shorten',shortenUrl);
router.get('/:shortCode',redirect);

export default router;
