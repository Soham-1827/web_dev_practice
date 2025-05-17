import express from "express";
import bodyParser from "body-parser"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var brandname = ""

app.use(bodyParser.urlencoded({extended: true}));

function brandName(req, res, next) {
  console.log(req.body)
  brandname = req.body['street'] + req.body['pet'];
  next()
}

app.use(brandName)
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post("/submit", (req, res) => {
  console.log(brandname);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
