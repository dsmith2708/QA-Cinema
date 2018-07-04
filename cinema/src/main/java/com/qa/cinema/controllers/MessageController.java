package com.qa.cinema.controllers;

import java.util.List;
import com.qa.cinema.models.Message;
import com.qa.cinema.repositories.MessageRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/messages")
public class MessageController {

	@Autowired
	private MessageRepository repo;
	
	@GetMapping
	public List<Message> getAllMessages() {
		return repo.findAll();
	}
	
	@PostMapping
	public void addMessage(@RequestBody Message message) {
		java.time.LocalDate.now();
		message.setPostTime(java.time.LocalDate.now());
		repo.save(message);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteMessage(@PathVariable("id") Long id) {
		repo.deleteById(id);
	}
	
}
