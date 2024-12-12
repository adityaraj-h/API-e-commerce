const express = require("express");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.get("/status", (_, response) => {
  const status = {
    Status: "Running right now",
  };

  response.send(status);
});

app.post("/login",(request,response)=>{
  
})