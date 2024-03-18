import express from 'express';
import  fetch from 'node-fetch';
const app = express();
const port = process.env.PORT || 5510;

//example
app.get('/api/hello', (req, res) => {
  fetch('https://swapi.dev/api/people/2/?format=json')
  .then(response => response.json())
  .then(json => res.json(json)); 
});

app.get('/api/:id', (req, res) =>{
  res.json({name:"pujan",id:req.params.id});
});

app.listen(port, () => console.log(`Server listening on port ${port}`));