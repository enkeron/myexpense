package org.myexpense.controller;

import org.apache.log4j.Logger;
import org.myexpense.dao.impl.AuthDaoImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.ws.rs.*;

import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.IOException;


/**
 * Created by enkeron on 18.12.14.
 */

@Component
@Path("/auth")
public class AuthController {
    private static Logger LOG = Logger.getLogger(AuthController.class);

    @Autowired
    AuthDaoImpl authDao;

    public AuthController() {
        LOG.error("in constructor");

    }

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String test() {
        return "you are in the test";
    }

    @GET
    @Path("/enk")
    public Response firstResponse() {
        String result = "hello world";
        LOG.debug("in test method ");
        return Response.status(404).entity(result).build();
    }

    @Path("/login")
    @POST
    public void tryToLogin(@FormParam("login") String login,
                               @FormParam("password") String password,
                               @Context HttpServletRequest request,
                               @Context HttpServletResponse response) throws IOException{
        int userId;

        LOG.error("login " + login + " password " + password);

        userId = authDao.authenticate(login, password);
        HttpSession mySession = request.getSession();
        if (userId != 0) {
            request.getSession().setAttribute("userId", userId);
            LOG.info("Authenticated");
            response.sendRedirect(request.getContextPath() + "/dashboard.html");
        } else {
            LOG.info("Not authenticated");
            response.sendRedirect(request.getContextPath() + "/login.html?error=true");
        }



    }

}
