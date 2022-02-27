package com.boilerplate.orderservice.service;

import com.boilerplate.orderservice.model.Order;
import com.boilerplate.orderservice.repository.OrderRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class OrderService {

    private static final Logger logger = LoggerFactory.getLogger(OrderService.class);

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Order> getAll() {
        return orderRepository.findAll();
    }

    public void save(Order order) {
        orderRepository.save(order);
    }

    @Cacheable(value = "order", unless = "#result == null")
    public Order getByProductName(String productName) {
        logger.info("Get order by product name: {}", productName);
        return orderRepository.findByProductName(productName);
    }
}
