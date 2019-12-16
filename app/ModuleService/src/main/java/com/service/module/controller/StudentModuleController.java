package com.service.module.controller;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

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
import com.service.module.dao.StudentModuleRepository;

@RestController
@RequestMapping("/api")
public class StudentModuleController {
	private final StudentModuleRepository repo;
	
	public StudentModuleController(StudentModuleRepository repo) {
		this.repo = repo;
	}
	
	@CrossOrigin
	@GetMapping("module/getClasslist")
	public JsonNode getClassList(@RequestParam("module_id") String module_id, @RequestParam("student_id") int student_id) {
		
		ObjectMapper mapper = new ObjectMapper();
		ObjectNode node = mapper.createObjectNode();
		
		Iterable<Integer> studentIdList = repo.getClassList(module_id, student_id);
		
		if (((Collection<?>) studentIdList).size() == 0) {
			node.put("status", HttpStatus.NOT_FOUND.value());
			node.put("message", "No results information found for student.");
		} else {
			node.put("status", HttpStatus.OK.value());
			node.set("value", mapper.valueToTree(studentIdList));
		}
		
		return node;
				
		/*String urlText = "http://127.0.0.1:8081/api/students?ids=";
		
		for (Integer i: studentIdList) {
			urlText += Integer.toString(i);
			urlText += ",";
		}
		
		urlText = urlText.substring(0,urlText.length()-1);
		
		try {			
			URL url = new URL(urlText);
			HttpURLConnection con = (HttpURLConnection) url.openConnection();
			con.setRequestMethod("GET");
			
			con.setRequestProperty("Content-Type", "application/json");
			
			int status = con.getResponseCode();
			BufferedReader in = new BufferedReader(
					  new InputStreamReader(con.getInputStream()));
			
			String inputLine = "default";
			
			StringBuffer content = new StringBuffer();
			while ((inputLine = in.readLine()) != null) {
			    content.append(inputLine);
			}
			in.close();
					
			con.disconnect();
			
			return content.toString();
			
		} catch (Exception e) {
			System.out.println(e);
			return "error";
		}*/
	}
}
