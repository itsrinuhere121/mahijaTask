const expenseRepo = require('../model/ExpenseModel')
const getExpense = async ()=>{
   return expenseRepo
            .find()
            .then(response=>response)
            .catch(error=>{
                console.log(error);
                return error
            });
}
const  getExpenseById = async (id)=>{
    return expenseRepo
            .findById(id)
            .then(response=>response)
            .catch(error=>{
                console.log(error);
                return error
            });            
}
const saveExpense= async (expense)=>{
    const expenseObj= new expenseRepo(expense);
    return expenseObj
        .save()
        .then(response=>response)
        .catch(error=>{
            console.log(error);
            return error
        });
}
const deleteExpenseById= async(id)=>{

}
/**
 * get the expense from minimum and maximum range
 * 
 * @param {number} min - The minimum cost.
 * @param {number} max - The maximum cost.
 * @returns {number} response - List of Expenses.
 * @throws {Error} If any of the parameters are not numbers.
 */
const getExpensesByCostRange= async (min,max)=>{ 
    console.log(min)
        return expenseRepo
            .find({ cost: { $gte: min, $lte: max }})//{ cost: { $gt: max, $lt: min }
            .then(response=>{
                return response;
            })
            .catch(error=>{
                console.log(error);
                return error
            });
}
module.exports = {
    getExpense,
    getExpenseById,
    saveExpense,
    deleteExpenseById,
    getExpensesByCostRange
}