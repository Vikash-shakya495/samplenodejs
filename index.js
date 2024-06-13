import express from 'express';
const app = express();
const port = 3000;
app.use("/",(req,res)=>{
res.json({message: "hello from express app"});
});

app.listen(3000,()=>{
    console.log(`Server running on http://localhost:${port}`);
});