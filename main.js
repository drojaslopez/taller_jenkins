import express from "express";

const app = express();
app.use(express.json());

let items = ["Elemento 1", "Elemento 2"];

app.get("/tasks", (req, res) => {  
  
  res.status(200).json({message:`Hola, soy una respuesta GET`});  
});

app.get("/tasks/:id", (req, res) => {
  const id = req.params;
  res.status(200).json({message:`Hola, soy una respuesta GET con ${id}`,id});  
});

app.post("/home", (req, res) => {
  const { item } = req.body;
  if (!item) {
    return res.status(400).json({ error: "Item is required" });
  }
  items.push(item);
  res.status(201).json({ message: "Item added", items });
});


const PORT = 3000;

app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
