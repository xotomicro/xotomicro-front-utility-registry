package com.boilerplate.eventservice.service;

import com.boilerplate.eventservice.model.Event;
import com.boilerplate.eventservice.repository.EventRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class EventService {

    private final EventRepository eventRepository;

    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public List<Event> getAll(int page, int size) {
        return eventRepository.findAll(PageRequest.of(page, size)).stream().collect(Collectors.toList());
    }

    public void save(Event event) {
        eventRepository.save(event);
    }
}
