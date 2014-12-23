package org.myexpense.dao.impl;

import org.apache.log4j.Logger;
import org.myexpense.dao.AuthDao;
import org.myexpense.dao.JdbcHelper;
import org.springframework.beans.factory.annotation.Autowired;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by enkeron on 20.12.14.
 */
public class AuthDaoImpl implements AuthDao {
    private static Logger LOG = Logger.getLogger(AuthDaoImpl.class);
//
    @Autowired
    JdbcHelper jdbcHelper;

    private Connection conn;
    private int userId;

    private static final String QUERY_GET_USER_ID = "select user_id from USER where login=? and password=?";


    public int authenticate(String login, String password) {

        userId = jdbcHelper.getUserIdByLogPas(login, password);
//        LOG.error(userId);


        return userId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}
