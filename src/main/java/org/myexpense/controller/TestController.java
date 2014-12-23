package org.myexpense.controller;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

/**
 * Created by enkeron on 23.12.14.
 */

@Component
@Path("/test")
public class TestController  {
    private static Logger LOG = Logger.getLogger(AuthController.class);


    @GET
    @Path("/simple")
    public void simpleTest() {
        LOG.error(".ajax is successfully done!");
    }

}
