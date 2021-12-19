package com.hospital.authservice.service;


import com.hospital.authservice.model.Person;
import com.hospital.authservice.service.PersonService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class UserService  implements UserDetailsService {

    private final PersonService personService;




    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        Person person = personService.findByEmail(email);

        if(person != null){
            return new User(email,person.getPassword(),new ArrayList<>());
        }
        else{
            throw new UsernameNotFoundException("not found");
        }
    }
}
