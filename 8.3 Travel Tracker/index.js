import express from "express";
import bodyParser from "body-parser";
import pg from "pg";


const client = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Choulwar1827",
  port: 5433,
})

client.connect();


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  const result = await client.query("SELECT country_code FROM visited_countries");
  let countries = [];
  for(let row of result.rows){
    countries.push(row.country_code);
  }
  console.log(result.rows);
  res.render("index.ejs", { countries: countries, total: countries.length });
  client.end();
});


app.post("/add", async (req, res)=>{
  const country = req.body.country;
  const countryCode = client.query("SELECT country_code FROM countries WHERE country_name = $1", [country]);
  if((await countryCode).rows.length !== 0){
    const code = (await countryCode).rows[0].country_code;
    await client.query('INSERT INTO visited_countries (country_code) VALUES ($1))', [code]);

  }
  res.redirect("/")
});
  
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
