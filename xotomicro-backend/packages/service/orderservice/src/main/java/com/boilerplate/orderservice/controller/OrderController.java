package com.boilerplate.orderservice.controller;

import com.boilerplate.orderservice.model.Order;
import com.boilerplate.orderservice.service.OrderService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @ResponseBody
    @GetMapping
    public List<Order> getAll() {
        return orderService.getAll();
    }

}
