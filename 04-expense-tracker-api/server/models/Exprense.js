import mongoose from "mongoose";
import messages from "../config/msg.js"
const ExpenseSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    amount: {
        type:Number,
        required: true,
        min: [0.01, messages.Exprenses.amount.min]
    },
   
    date: {
        type: Date,
        // when an expense is created
        default: Date.now
    },

    categories: {
        type: String,
        require: true,
        enum: ["Groceries", "Leisure", "Electronics", "Utilities", "Clothing", "Health"]
    },
    //A short description of the expense
    note: {
        type: String,
        maxlength: [200, messages.Exprenses.note.maxLength] 
    }

})