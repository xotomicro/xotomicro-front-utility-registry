package com.boilerplate.userservice.service;

import com.boilerplate.userservice.dto.UserDto;
import com.boilerplate.userservice.model.User;
import com.boilerplate.userservice.repository.UserRepository;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserDto> getAll() {
        return userRepository.findAll().stream().map(User::toUserDto).collect(Collectors.toList());
    }

    public User getByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
