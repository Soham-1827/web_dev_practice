import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<b>Hello World!</b>');
})

app.post('/register', (req, res) => {
  res.sendStatus(201);
})

app.put('/user/src', (req, res) => {
  res.sendStatus(200);
})

app.patch('/user/src', (req, res) => {
  res.sendStatus(200);
})


app.delete('/user/src', (req, res) => {
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
