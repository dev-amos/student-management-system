package com.service.student.controller;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

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
import com.service.student.dao.StudentRepository;
import com.service.student.entity.Student;

@RestController
@RequestMapping("/api")
public class StudentController {
	
	@Autowired
	private StudentRepository studentRepository;

	@CrossOrigin
	@GetMapping("student/getStudents")
	public JsonNode getStudents(@RequestParam("ids") String idsStr) {
		ObjectMapper mapper = new ObjectMapper();
		ObjectNode node = mapper.createObjectNode();
		
		List<Integer> ids = Arrays.stream(idsStr.split(","))
								  .map(id -> Integer.parseInt(id))
								  .collect(Collectors.toList());
		
		Iterable<Student> students = studentRepository.findAllById(ids);
		
		if (((Collection<?>) students).size() == 0) {
			node.put("status", HttpStatus.NOT_FOUND.value());
			node.put("message", "No students found.");
		} else {
			node.put("status", HttpStatus.OK.value());
			node.set("value", mapper.valueToTree(students));
		}
		return node;
	}
	
	@CrossOrigin
	@GetMapping("student/getDetails")
	public JsonNode getDetails(@RequestParam("email") String email) {
		ObjectMapper mapper = new ObjectMapper();
		ObjectNode node = mapper.createObjectNode();
		
		Iterable<Student> students = studentRepository.findByEmail(email);
		
		if (((Collection<?>) students).size() == 0) {
			node.put("status", HttpStatus.NOT_FOUND.value());
			node.put("message", "No student found with this email");
		} else {
			node.put("status", HttpStatus.OK.value());
			node.set("value", mapper.valueToTree(students.iterator().next()));
		}
		return node;
	}

}
