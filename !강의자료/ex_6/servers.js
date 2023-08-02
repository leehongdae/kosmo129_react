// server.js
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.post('/create', (req, res) => {
  const empno = req.body.empno;
  const ename = req.body.ename;
  const job = req.body.job;
  console.log("empno ---- ::: " + empno);
  console.log("ename ---- ::: " + ename);
  console.log("job ---- ::: " + job);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});