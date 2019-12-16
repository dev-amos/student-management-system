package com.service.module.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.service.module.dao.ResultsRepository;

@RestController
@RequestMapping("/api")
public class ResultsController {
	private final ResultsRepository repo;
	
	public ResultsController(ResultsRepository repo) {
		this.repo = repo;
	}

	@CrossOrigin
	@GetMapping("module/getResults")
	public JsonNode getResults(@RequestParam(name="student_id") int student_id) {
		ObjectMapper mapper = new ObjectMapper();
		ObjectNode node = mapper.createObjectNode();
		
		Iterable<String[]> response = repo.getResults(student_id);
		
		if (((Collection<?>) response).size() == 0) {
			node.put("status", HttpStatus.NOT_FOUND.value());
			node.put("message", "No results information found for student.");
		} else {
			ArrayNode resultsNode = mapper.createArrayNode();
			
			for (Object[] row : response) {
				ObjectNode resultNode = mapper.createObjectNode();
				resultNode.put("module_id", (String)row[0]);
				resultNode.put("result", (String)row[1]);
				resultsNode.add(resultNode);
			}
			
			node.put("status", HttpStatus.OK.value());
			node.set("value", resultsNode);
		}
		return node;
	}
	}
