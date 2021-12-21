package com.hospital.hospitalservice.resource;


import com.hospital.hospitalservice.model.Doctor;
import com.hospital.hospitalservice.service.DoctorService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/doctor")
@RequiredArgsConstructor
public class DoctorResource {

    private final DoctorService doctorService;


    @PostMapping("/save")
    public Doctor save(@RequestBody Doctor doctor){

        return doctorService.save(doctor);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@RequestParam Long id){

        doctorService.delete(id);
    }

    @GetMapping("/findAll")
    public void findAll(){

        doctorService.findAll();
    }

}
