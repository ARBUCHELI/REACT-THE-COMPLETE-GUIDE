import React from 'react';
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = (props) => {

    const title = props.expenses.map ( expense => {return expense.title})
    const amount = props.expenses.map ( expense => {return expense.amount})
    const date = props.expenses.map ( expense => {return expense.date})

    return (
        <Card className="expenses">
            <ExpenseItem
                title = {title[0]}
                amount = {amount[0]}
                date = {date[0]}
            />
            <ExpenseItem
                title = {title[1]}
                amount = {amount[1]}
                date = {date[1]}
            />
            <ExpenseItem
                title = {title[2]}
                amount = {amount[2]}
                date = {date[2]}
            />
             <ExpenseItem
                title = {title[3]}
                amount = {amount[3]}
                date = {date[3]}
            />
            
        </Card>
    )

}

export default Expenses;

