const expenseService  = require('../service/ExpenseService')

const getExpense =(request,response)=>{
     expenseService.getExpense()
       .then(data=>{
            response.send(data);
       }).catch(error=>{
            response.sendStatus(500);
       })   
}
const saveExpense =(request,response)=>{
    try{
       const expense = request.body;
       if(
        expense.name!==undefined&&
        expense.cost!==undefined&&
        expense.date!==undefined){
            expenseService
                .saveExpense(expense)
                .then(ex =>response.send(ex))
                .catch(err=>{
                    console.log(err)
                    response.status(500).send(err)}
                );
       }else{
            response.status(300).send("incomplete request");
       }
    }catch(err){
        console.log(err);
        response.sendStatus(500);
    }
}
const deleteExpense = (request,response)=>{

}
const searchExpense=(request,response)=>{

}
const getExpensesByCostRange=(request,response)=>{
   const query =  request.query;
   if(query.min!==undefined&&query.max!=undefined)
        expenseService
            .getExpensesByCostRange(query.min,query.max)
            .then(data=> response.send(data))
            .catch(err=>{
                console.log(err);
                response.status(500).send(err);
                })
    else 
        response.status(300).send("incorrect parameter");
}
module.exports ={
    getExpense,
    saveExpense,
    deleteExpense,
    searchExpense,
    getExpensesByCostRange
}