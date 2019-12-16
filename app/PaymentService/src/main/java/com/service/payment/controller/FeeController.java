package com.service.payment.controller;

import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.service.payment.dao.FeesRepository;
import com.service.payment.entity.Fees;

@RestController
@RequestMapping("/api/payment")
public class FeeController {
	
	@Autowired
	private FeesRepository feesRepository;
	
	@CrossOrigin
	@GetMapping("getAmount")
	public JsonNode getAmount(@RequestParam("type") String studentType) {
		ObjectMapper mapper = new ObjectMapper();
		ObjectNode node = mapper.createObjectNode();
		
		Fees fees = null;
		
		try {
			fees = feesRepository.findById(studentType).get();
			node.put("status", HttpStatus.OK.value());
			node.put("amount", fees.getSemesterFee());
		} catch (NoSuchElementException e) {
			node.put("status", HttpStatus.NOT_FOUND.value());
			node.put("message", "Please enter a valid student type.");
		}
		
		return node;
	}

}
