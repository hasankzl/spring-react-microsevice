package com.hospital.authservice.resource;

import com.hospital.authservice.exception.DuplicateUserException;
import com.hospital.authservice.model.*;
import com.hospital.authservice.projection.PersonProjection;
import com.hospital.authservice.projection.SimplePersonProjection;
import com.hospital.authservice.service.PersonService;
import com.hospital.authservice.service.UserService;
import com.hospital.authservice.security.JWTUtility;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class AuthResource {


    private final AuthenticationManager authenticationManager;

    private final JWTUtility jwtUtility;

    private final UserService userService;

    private final PersonService personService;

    @GetMapping("/")
    public String test() {
        return "welcome to ";
    }


    @GetMapping("/getUserDetails/{username}")
    public UserDetails getUserDetails(@PathVariable String username) {

        return userService.loadUserByUsername(username);
    }

    @PostMapping("/register")
    public void save(@RequestBody Person person) throws Exception {
        try {
            person.setRole("user");
            personService.save(person);

        } catch (Exception e) {
            throw new DuplicateUserException();
        }
    }

    @PostMapping("/login")
    public JwtResponse authenticate(@RequestBody JwtRequest jwtRequest) throws Exception {

        try {

            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            jwtRequest.getEmail(),
                            jwtRequest.getPassword()
                    )
            );


            final UserDetail userDetail = (UserDetail) authentication.getPrincipal();

            final String token = jwtUtility.generateToken(userDetail);
            return new JwtResponse(token, userDetail.getUsername(), userDetail.getAuthorities().toString());
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }


    @GetMapping("/getUserWithAppointment")
    public PersonWithAppointment getUserWithAppoinment(@RequestHeader("userId") Long userId) {
        return personService.getUserWithAppointment(userId);
    }

    @GetMapping("/findPersonById/{id}")
    public Person findPersonById(@PathVariable Long id){

        return personService.findById(id);
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable Long id){
        
        personService.deleteById(id);
    }

    @PostMapping("/setAsDoctor/{userId}/{doctorId}")
    public void setAsDoctor(@PathVariable Long userId, @PathVariable Long doctorId){

         personService.setUserAsDoctor(userId,doctorId);
    }


    @GetMapping("/findAllPersonSimple")
    public List<SimplePersonProjection> findAllSimple(){
        return personService.findAllSimple();
    }

    @GetMapping("/findAllPerson")
    public List<PersonWithDoctor> findAll(){

        return personService.findAll();
    }
}
