package com.boilerplate.eventservice.repository;

import com.boilerplate.eventservice.model.Event;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends ElasticsearchRepository<Event, String> {
}
