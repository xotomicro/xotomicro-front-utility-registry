package com.boilerplate.productservice.controller;

import com.boilerplate.productservice.dto.ProductDto;
import com.boilerplate.productservice.service.ProductService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @ResponseBody
    @GetMapping
    public List<ProductDto> getAll() {
        return productService.getAll();
    }

    @ResponseBody
    @GetMapping("/{productId}")
    public ProductDto getProductById(@PathVariable("productId") Long productId) {
        return productService.getByProductId(productId);
    }

    @ResponseBody
    @PostMapping
    public ProductDto createProduct(@RequestBody ProductDto productDto) {
        return productService.createProduct(productDto);
    }
}
