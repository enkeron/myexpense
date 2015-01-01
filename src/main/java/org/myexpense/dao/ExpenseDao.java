package org.myexpense.dao;

import org.myexpense.model.Expense;

import java.util.List;

/**
 * Created by enkeron on 01.01.15.
 */
public interface ExpenseDao {
    public List<Expense> getAllExpense();
}
