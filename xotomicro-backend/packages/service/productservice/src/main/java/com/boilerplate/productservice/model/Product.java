package com.boilerplate.productservice.model;

import com.boilerplate.productservice.dto.ProductDto;

import javax.persistence.*;

@Table(name = "product", schema = "public")
@Entity(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    public Product() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ProductDto toProductDto() {
        return new ProductDto(id, name, description);
    }

    public static Product fromProductDto(ProductDto productDto) {
        var product = new Product();
        product.setName(productDto.getName());
        product.setDescription(productDto.getDescription());
        return product;
    }
}
