package com.hospital.authservice.service;


import com.hospital.authservice.model.Person;
import com.hospital.authservice.model.UserDetail;
import com.hospital.authservice.service.PersonService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService  implements UserDetailsService {

    private final PersonService personService;




    @Override
    public UserDetail loadUserByUsername(String email) throws UsernameNotFoundException {
        Person person = personService.findByEmail(email);

        List<GrantedAuthority> list = new ArrayList<>();
        GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(person.getRole());
        list.add(grantedAuthority);
        if(person != null){
            UserDetail userDetail = new UserDetail();
            userDetail.setId(person.getId());
            userDetail.setEmail(email);
            userDetail.setPassword(person.getPassword());
            userDetail.setAuthorities(list);
            return userDetail;
        }
        else{
            throw new UsernameNotFoundException("not found");
        }
    }
}
