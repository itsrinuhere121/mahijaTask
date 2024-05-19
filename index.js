//packages 
const express = require('express')
const bodyParser = require('body-parser');
const endpoints = require('./RequestEndpoints')
const expenseController = require('./controller/ExpenseController')
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

// mongo DB connection
mongoose.connect('mongodb://root:password@localhost:27017')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

app.get(endpoints.getExpense,expenseController.getExpense);
app.post(endpoints.saveExpense,expenseController.saveExpense);
app.get(endpoints.saveExpense,expenseController.searchExpense);
app.get("/expense/query",expenseController.getExpensesByCostRange);

app.listen(5000,()=>{
    console.log("server started at : "+5000);
})