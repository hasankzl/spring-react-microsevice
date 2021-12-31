package com.hospital.hospitalservice.resource;


import com.hospital.hospitalservice.model.Doctor;
import com.hospital.hospitalservice.payload.DoctorWithAppointment;
import com.hospital.hospitalservice.projection.DoctorAppointmentProjection;
import com.hospital.hospitalservice.projection.DoctorProjection;
import com.hospital.hospitalservice.projection.SimpleDoctorProjection;
import com.hospital.hospitalservice.service.DoctorService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.Path;
import java.util.List;

@RestController
@RequestMapping("/doctor")
@RequiredArgsConstructor
@Slf4j
public class DoctorResource {

    private final DoctorService doctorService;


    @PostMapping("/save")
    public void save(@RequestBody Doctor doctor){
    log.info("doctor save {}",doctor);
     doctorService.save(doctor);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id){

        doctorService.delete(id);
    }

    @GetMapping("/findAll")
    public List<DoctorProjection> findAll(){

       return doctorService.findAll();
    }

    @GetMapping("/findById/{id}")
    public DoctorProjection findById(@PathVariable Long id){
        return doctorService.findById(id);
    }

    @GetMapping("/findSimpleById/{id}")
    public SimpleDoctorProjection findSimpleById(@PathVariable Long id){
        return doctorService.findByIdSimple(id);
    }


    @GetMapping("/findAllByDepartment/{id}")
    public List<DoctorAppointmentProjection> findAllByDepartment(@PathVariable Long id){
        return doctorService.findAllAppointmentProjection(id);
    }

    @GetMapping("/getDoctorWithAppointment/{id}")
    public DoctorWithAppointment getDoctorWithAppointment(@PathVariable Long id){

        return  doctorService.getDoctorWithAppointment(id);
    }


}
