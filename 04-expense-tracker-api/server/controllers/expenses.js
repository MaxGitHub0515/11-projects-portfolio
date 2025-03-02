
import Expense from "../models/Expense.js";
import {StatusCodes} from 'http-status-codes';
import asyncWrapper from "../middleware/async.js";
import { getDateFilter } from "../../utils/filterExpenses.js";

// Filtering

export const getAllExpenses = asyncWrapper(async(req, res)=> {
    
    const { filter, startDate, endDate } = req.query;

    const dateQuery = getDateFilter(filter, startDate, endDate);
    const filterQuery = dateQuery ? {date:dateQuery} : {};

    const expenses = await Expenses.find(filterQuery)
    if(!expenses) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success: false, })
    }
    res.status(StatusCodes.OK).json({success:true, data:expenses });


}) 
