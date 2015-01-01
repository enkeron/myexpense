package org.myexpense.controller;

import org.apache.log4j.Logger;
import org.myexpense.dao.JdbcHelper;
import org.myexpense.model.Expense;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import java.util.List;

/**
 * Created by enkeron on 01.01.15.
 */

@Component
@Path("/expense")
public class ExpenseController {
    private static Logger LOG = Logger.getLogger(ExpenseController.class);
    @Autowired
    JdbcHelper jdbcHelper;

    @Path("/list")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Expense> getAllExpense(@Context HttpServletRequest request) {
//        LOG.debug(getUserId(request));
        getUserId(request);

        List<Expense> list = jdbcHelper.getAllExpense(1);
        LOG.debug("getAllExpense is successfuly done.");
        return list;
    }
    @Path("/user")
    @GET
    public void getUserIdFromSession(@Context HttpServletRequest request) {
        getUserId(request);
    }


    private void getUserId(HttpServletRequest request) {
        LOG.error("in method getUserId");
        HttpSession session = request.getSession(true);
        Object foo = session.getAttribute("userId");
        if (foo!=null) {
            LOG.error(foo.toString());
        } else {

            session.setAttribute("userId", "123");
        }


//        return (Integer) request.getAttribute("userId");
    }

}
