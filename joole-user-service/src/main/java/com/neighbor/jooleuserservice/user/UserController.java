package com.neighbor.jooleuserservice.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/hello")
    public String sayHi(){
        return "hi";
    }

    @GetMapping("/api/users")
    public List<User> getAllUsers(){
        return userService.getTestUsers();
    }

    @GetMapping("/api/users/id")
    public List<User> getOneUser(){
        return Arrays.asList(
                new User("test","test","test@test.com","test","image"),
                new User("test1","test1","test1@test.com","test1","image1"),
                new User("test2","test2","test2@test.com","test2","image2")
        );
    }

    @GetMapping("/api/users/{name}")
    public User getUserByName(@PathVariable String name){
        return userService.getByUsername(name);
    }

    @RequestMapping(value="/api/users", method=RequestMethod.POST)
    public void addUser(@RequestBody User user){
        userService.createUser(user);
    }

    @DeleteMapping("/api/users/{name}")
    public void deleteUserByName(@PathVariable String name){
        userService.deleteByUsername(name);
    }
}
