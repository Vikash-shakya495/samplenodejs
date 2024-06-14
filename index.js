import express from 'express';

const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default to 3000

app.use("/", (req, res) => {
    res.json({ message: "hello from express app" });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
