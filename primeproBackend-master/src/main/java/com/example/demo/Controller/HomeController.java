package com.example.demo.Controller;

import com.example.demo.repo.UserRepo;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/home")
@PreAuthorize("permitAll()")
public class HomeController {

    @Autowired
    UserRepo userRepo;

    @GetMapping("/")
    public ResponseEntity<?> homeGet(HttpServletRequest request, Principal principal) {
        try {
            System.out.println(request.isUserInRole("ROLE_ADMIN"));
            System.out.println(principal.getName());

        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println("Welcome to home page");
        return ResponseEntity.status(HttpStatus.OK).body("user");
    }
}
