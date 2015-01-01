package org.myexpense.dao.impl;

import org.apache.log4j.Logger;
import org.myexpense.dao.ExpenseDao;
import org.myexpense.dao.JdbcHelper;
import org.myexpense.model.Expense;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by enkeron on 01.01.15.
 */
public class ExpenseDaoImpl implements ExpenseDao {
    private static Logger LOG = Logger.getLogger(ExpenseDaoImpl.class);

    @Autowired
    JdbcHelper jdbcHelper;


    @Override
    public List<Expense> getAllExpense() {


        return null;
    }
}
