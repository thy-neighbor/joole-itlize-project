package com.neighbor.jooleuserservice.user;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class UserService {
    private List<User> testUsers = new ArrayList<>(Arrays.asList(
            new User("test","test","test@test.com","test","image"),
            new User("test1","test1","test1@test.com","test1","image1"),
            new User("test2","test2","test2@test.com","test2","image2")
    ));

    public List<User> getTestUsers() {
        return testUsers;
    }

    public User getByUsername(String subjectUsername){
        return testUsers.stream().filter(t -> t.getUsername().equals(subjectUsername)).findFirst().get();
    }

    public void createUser(User user) {
        testUsers.add(user);
    }

    public void deleteByUsername(String subjectUsername) {
        testUsers.removeIf(t -> t.getUsername().equals(subjectUsername));
    }
}
