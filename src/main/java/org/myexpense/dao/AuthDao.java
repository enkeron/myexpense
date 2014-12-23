package org.myexpense.dao;

import java.sql.SQLException;

/**
 * Created by enkeron on 20.12.14.
 */
public interface AuthDao {
    int authenticate(String username, String password) throws SQLException;
}
