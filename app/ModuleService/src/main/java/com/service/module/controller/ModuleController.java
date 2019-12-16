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
import com.service.module.dao.ModuleRepository;

@RestController
@RequestMapping("/api")
public class ModuleController {

	private final ModuleRepository repo;
	
	public ModuleController(ModuleRepository repo) {
		this.repo  = repo;
	}
	
	@CrossOrigin
	@GetMapping("module/getModules")
	public JsonNode getModules(@RequestParam("student_id") int student_id) {
		
		ObjectMapper mapper = new ObjectMapper();
		ObjectNode node = mapper.createObjectNode();
		
		Iterable<String[]> modules = repo.getModules(student_id);
		
		if (((Collection<?>) modules).size() == 0) {
			node.put("status", HttpStatus.NOT_FOUND.value());
			node.put("THIS IS THE ERROR MESSAGE (for CI/CD test video purposes)", "No module information found for student.");
		} else {
			ArrayNode modulesNode = mapper.createArrayNode();
			
			for (Object[] row : modules) {
				ObjectNode moduleNode = mapper.createObjectNode();
				moduleNode.put("module_id", (String)row[0]);
				moduleNode.put("module_name", (String)row[1]);
				moduleNode.put("section_id", (String)row[2]);
				modulesNode.add(moduleNode);
			}
			node.put("status", HttpStatus.OK.value());
			node.set("value", modulesNode);
		}
		return node;
	}	
}
