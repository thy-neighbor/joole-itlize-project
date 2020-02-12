package com.neighbor.jooleuserservice.productsummary;

import com.neighbor.jooleuserservice.Contact.Contact;
import com.neighbor.jooleuserservice.productDetails.ProductDetails;
import com.neighbor.jooleuserservice.productDocumentation.ProductDocumentation;
import com.neighbor.jooleuserservice.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
    private void setupDefaultProduct() {

        if (psRepo.count() == 0) {//if nothing in database

            ProductSummary defaultPs = new ProductSummary("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test", "test.url");

            ProductDetails onePd=new ProductDetails("Here is my content 1");
            ProductDetails twoPd=new ProductDetails("Here is my content 2");
            ProductDetails threePd=new ProductDetails("Here is my content 3");
            ProductDetails fourPd=new ProductDetails("Here is my content 4");

            onePd.setPs(defaultPs);
            twoPd.setPs(defaultPs);
            threePd.setPs(defaultPs);
            fourPd.setPs(defaultPs);

            defaultPs.getProductDetails().add(onePd);
            defaultPs.getProductDetails().add(twoPd);
            defaultPs.getProductDetails().add(threePd);
            defaultPs.getProductDetails().add(fourPd);

            ProductDocumentation onePdoc =new ProductDocumentation("title 1","doc",defaultPs);
            ProductDocumentation twoPdoc =new ProductDocumentation("title 2","rvt",defaultPs);
            ProductDocumentation threePdoc =new ProductDocumentation("title 3","pdf",defaultPs);
            ProductDocumentation fourPdoc =new ProductDocumentation("title 4","dwg",defaultPs);

            defaultPs.getProductDocumentation().add(onePdoc);
            defaultPs.getProductDocumentation().add(twoPdoc);
            defaultPs.getProductDocumentation().add(threePdoc);
            defaultPs.getProductDocumentation().add(fourPdoc);

            Contact oneC = new Contact("Sales Respresentative","Tom Salesman",null,"(845)-659-9999","people@people.com","peoplearegreat.com",defaultPs);
            Contact twoC = new Contact("Manufacturer",null,"Tech Support","(845)-659-9999","people@people.com","hugefansfam.com",defaultPs);

            defaultPs.getContacts().add(oneC);
            defaultPs.getContacts().add(twoC);

            psRepo.save(defaultPs);
        }
    }
}
