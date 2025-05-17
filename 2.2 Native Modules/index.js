import { writeFile, readFile } from "fs";

writeFile("message1.txt", "Hello from Node.js", (err) => {
    if (err) throw err;
    console.log("File created!");
});

readFile("message1.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
})