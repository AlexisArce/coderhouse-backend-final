import express from "express";
const { Router } = express;
const router = new Router();

router.get("/", async (req, res) => {
  res.json("Hola!!!!");
});

export default router;
