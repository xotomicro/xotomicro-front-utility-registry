package com.boilerplate.eventservice.controller;

import com.boilerplate.eventservice.model.Event;
import com.boilerplate.eventservice.service.EventService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/events")
public class EventController {

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @ResponseBody
    @GetMapping
    public List<Event> getAll() {
        return eventService.getAll(0, 50);
    }
}
