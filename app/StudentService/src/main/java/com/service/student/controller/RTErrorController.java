package com.service.student.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

@RestController
public class RTErrorController implements ErrorController {
	
	 @RequestMapping("/error")
	 public JsonNode handleError(HttpServletRequest request) {
        Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
        Exception exception = (Exception) request.getAttribute("javax.servlet.error.exception");

        ObjectMapper mapper = new ObjectMapper();
        ObjectNode errorJson = mapper.createObjectNode();

        if (status != null) {
            Integer statusCode = Integer.parseInt(status.toString());
            errorJson.put("status", statusCode);
        } else {
            errorJson.put("status", HttpStatus.NOT_FOUND.value());
        }

        if (exception != null) {
            errorJson.put("message", exception.getCause().getMessage());
        } else {
            errorJson.put("message", "Web service is not found, or you have entered incorrect/insufficient parameters.");
        }

        return errorJson;
    }

    @Override
    public String getErrorPath() {
        return "/error";
    }
}
