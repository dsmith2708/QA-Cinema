package com.qa.cinema.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.qa.cinema.models.Message;

public interface MessageRepository extends JpaRepository<Message, Long> {
}
