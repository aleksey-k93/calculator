import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import calculateMagic from './calculate.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors({
  preflightContinue: true
}))

app.get('/', async (req, res) => {
  console.log('GET method executed, testing equation used');
  const result = calculateMagic('2+2*2*2-2*3-2');
  res.status(200).json(result);
})

app.post('/', async (req, res) => {
  console.log('POST method executed, request body = %s', req.body)
  const equation = req.body.equation;
  const result = calculateMagic(equation);
  res.status(200).json(result);
})

app.listen(3030, () => {
  console.log('Application started');
});
