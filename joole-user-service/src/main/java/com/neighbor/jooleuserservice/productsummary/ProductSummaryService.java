package com.neighbor.jooleuserservice.productsummary;

import com.neighbor.jooleuserservice.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductSummaryService {

    @Autowired
    private ProductSummaryRepository psRepo;

    @Transactional
    public List<ProductSummary> getAllProductSummaries() {
        List<ProductSummary> ps = new ArrayList<>();
        psRepo.findAll().forEach(ps::add);
        return ps;
    }

    @Transactional
    public ProductSummary getByModel(String model){
        //return testUsers.stream().filter(t -> t.getUsername().equals(subjectUsername)).findFirst().get();
        return psRepo.findByModel(model);
    }

    @Transactional
    public ProductSummary getById(Integer id){
        //return testUsers.stream().filter(t -> t.getUsername().equals(subjectUsername)).findFirst().get();
        return psRepo.getOne(id);
    }

    @Transactional
    public void deletePsById(Integer id) {
        psRepo.deleteById(id);
    }

    @Transactional
    public boolean addProduct(ProductSummary ps) {
        return psRepo.save(ps)!= null;
    }

    @PostConstruct
    private void setupDefaultUser() {
        //-- just to make sure there is an ADMIN user exist in the database for testing purpose
        if (psRepo.count() == 0) {//if nobody in database create new user
            ProductSummary defaultPs = new ProductSummary("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test");
            psRepo.save(defaultPs);
        }
    }
}
