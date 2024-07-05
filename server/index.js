import express from "express";


const PORT = 3000;

const app = express();


app.get("/api", (req, res) => {
    res.json({message: "Hellow from server"});
});


app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`);
})
