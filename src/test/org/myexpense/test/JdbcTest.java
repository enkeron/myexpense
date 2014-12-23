package org.myexpense.test;

import junit.framework.Assert;
import org.apache.log4j.Logger;
import org.junit.Test;

import org.myexpense.dao.JdbcHelper;
import org.myexpense.dao.impl.AuthDaoImpl;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import javax.sql.DataSource;
import java.sql.*;

import static org.junit.Assert.assertEquals;

/**
 * Created by enkeron on 18.12.14.
 */
public class JdbcTest {
    private static final String QUERY_GET_USER_ID = "select user_id from USER where login=? and password=?";
    private static Logger LOG = Logger.getLogger(JdbcTest.class);
    private int userId;

    @Test
    public void testReadMysql() {

        try {
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/expense", "root", "root");
            System.out.println("HELLO IN CONNECTION");


        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testUserId() throws SQLException {

//        ApplicationContext context =
//                new ClassPathXmlApplicationContext("/WEB-INF/applicationContext.xml");
//
//        JdbcHelper jdbcHelper = (JdbcHelper) context.getBean("jdbcHelper");
//
//        DataSource dataSource = jdbcHelper.getDataSource();
        Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/expense", "root", "root");
        try {
//            Connection connection = dataSource.getConnection();
            System.out.println("HELLO IN CONNECTION");

            PreparedStatement ps = connection.prepareStatement(QUERY_GET_USER_ID);
            ps.setString(1, "dev");
            ps.setString(2, "dev");

            ResultSet rs = ps.executeQuery();

            if (!rs.isBeforeFirst()) {
                LOG.error("Have no id with these parameters");
            } else if(rs.next()) {
                userId = rs.getInt(1);
                LOG.error(userId);

            }
            assertEquals(1, userId);
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            connection.close();
        }

    }
    @Test
    public void testAuth() {
        AuthDaoImpl authDao = new AuthDaoImpl();


    }

    @Test
    public void testSpring() {
        ApplicationContext ctx=new ClassPathXmlApplicationContext("applicationContext.xml");

    }
}
