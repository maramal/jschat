import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Servidor está corriendo y funcionando.")
});

export default router;