package org.myexpense.dao;

import org.apache.log4j.Logger;
import org.myexpense.model.Expense;
import org.springframework.beans.factory.annotation.Autowired;

import javax.sql.DataSource;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by enkeron on 18.12.14.
 */

public class JdbcHelper {
    private static Logger LOG = Logger.getLogger(JdbcHelper.class);

    @Autowired
    private DataSource dataSource;

    Connection conn;
    private static final String QUERY_GET_USER_ID = "select user_id from USER where login=? and password=?";
    private static final String QUERY_GET_ALL_EXPENSE = "select * from EXPENSE";


    public int getUserIdByLogPas(String login, String password)  {

        try {
            conn = dataSource.getConnection();

            PreparedStatement ps = conn.prepareStatement(QUERY_GET_USER_ID);
            ps.setString(1, login);
            ps.setString(2, password);

            ResultSet rs = ps.executeQuery();

            if (!rs.isBeforeFirst()) {
                LOG.error("Have no id with these parameters");
            } else if(rs.next()) {
//                LOG.error(userId);
                return rs.getInt(1);
            }
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return 0;
    }

    public List<Expense> getAllExpense(int userId) {
        List<Expense> list = new ArrayList<Expense>();
            try {
            conn = dataSource.getConnection();

            PreparedStatement ps = conn.prepareStatement(QUERY_GET_ALL_EXPENSE);
            ResultSet rs = ps.executeQuery();

            while(rs.next()) {
                list.add(new Expense(rs.getInt("EXP_ID"), rs.getDouble("AMOUNT"), rs.getDate("EXP_DATE"),
                        rs.getString("EXP_NOTE"), rs.getInt("EXP_CATEGORY_ID"), rs.getInt("EXP_USER_ID")));
                LOG.debug("add new expense to list");
            }

            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return list;
    }

    public DataSource getDataSource() {
        return dataSource;
    }

    public void setDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
    }

}
