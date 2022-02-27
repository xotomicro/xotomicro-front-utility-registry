package com.boilerplate.gatewayservice.exception;

public class JwtException extends RuntimeException {
    static final long serialVersionUID = 1L;

    public JwtException(String message) {
        super(message);
    }
}
