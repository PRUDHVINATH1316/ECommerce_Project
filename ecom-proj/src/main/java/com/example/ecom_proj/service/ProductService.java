package com.example.ecom_proj.service;

import com.example.ecom_proj.model.Product;
import com.example.ecom_proj.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepo repo;

    public List<Product> getAllproducts() {
     return  repo.findAll();
    }



    public Product getProductByid(int id) {
        return  repo.findById(id).orElse(null);
    }

    public Product addProduct(Product product, MultipartFile imageFile) throws IOException {
        product.setImageName(imageFile.getOriginalFilename());
        product.setImageName(imageFile.getContentType());
        product.setImageDate(imageFile.getBytes());
       return repo.save(product);

    }

    public Product updateProduct(int id, Product product, MultipartFile imageFile) throws IOException {
        product.setImageDate(imageFile.getBytes());
        product.setImageName(imageFile.getOriginalFilename());
        product.setImageName(imageFile.getContentType());

       return repo.save(product);

    }

    public void deleteproduct(int id) {
        repo.deleteById(id);
    }

    public List<Product> searchproducts(String keyword) {
       return  repo.searchProducts(keyword);
    }
}
