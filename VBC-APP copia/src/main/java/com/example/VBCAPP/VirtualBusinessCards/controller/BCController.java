package com.example.VBCAPP.VirtualBusinessCards.controller;

import com.example.VBCAPP.VirtualBusinessCards.entity.BusinessCards;
import com.example.VBCAPP.VirtualBusinessCards.repository.VbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping(path="/businesscards")
public class BCController {

    @Autowired
    private VbcRepository vbcRepository;

    @GetMapping("/users")
    public List<BusinessCards> getAllBusinesscards() {
        return vbcRepository.findAll();
    }

    @GetMapping("/user/{id}")
    public Optional<BusinessCards> findById(@PathVariable int id) {
        return vbcRepository.findById(id);
    }

    @PostMapping("/newuser")
    public void updateNewUserByQuery(@RequestBody BusinessCards businessCards){
        System.out.println(businessCards);
        vbcRepository.save (businessCards);
    }
    @DeleteMapping("/deleteuser/{id}")
   void deleteById(@PathVariable int id ){
        vbcRepository.deleteById(id);
    }

    @PutMapping("/businesscards/{id}")
    public void updateBusinesscard(@RequestBody BusinessCards businessCards, @PathVariable Integer id) {
        vbcRepository.save(businessCards);
    }

}
