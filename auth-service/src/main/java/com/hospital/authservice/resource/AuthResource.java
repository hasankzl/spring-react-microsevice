package com.hospital.authservice.resource;

import com.hospital.authservice.exception.DuplicateUserException;
import com.hospital.authservice.model.JwtRequest;
import com.hospital.authservice.model.JwtResponse;
import com.hospital.authservice.model.Person;
import com.hospital.authservice.service.PersonService;
import com.hospital.authservice.service.UserService;
import com.hospital.authservice.security.JWTUtility;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class AuthResource {


    private final AuthenticationManager authenticationManager;
    private final JWTUtility jwtUtility;

    private final UserService userService;
    private final PersonService personService;
    @GetMapping("/")
    public String test(){
        return "welcome to ";
    }


    @GetMapping("/getUserDetails/{username}")
    public UserDetails getUserDetails(@PathVariable String username){

        return  userService.loadUserByUsername(username);
    }

    @PostMapping("/register")
    public void save(@RequestBody Person person) throws Exception {
        try {
            personService.save(person);
        }
        catch (Exception e){
            throw  new DuplicateUserException();
        }
    }
    @PostMapping("/login")
    public JwtResponse authenticate(@RequestBody JwtRequest jwtRequest) throws Exception {

        try {

            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            jwtRequest.getEmail(),
                            jwtRequest.getPassword()
                    )
            );
        }catch (BadCredentialsException e){
            throw new Exception("INVALID_CREDENTIALS",e);
        }

        final UserDetails userDetails = userService.loadUserByUsername(jwtRequest.getEmail());

        final String token = jwtUtility.generateToken(userDetails);

        return  new JwtResponse(token,userDetails.getUsername());

    }
}
