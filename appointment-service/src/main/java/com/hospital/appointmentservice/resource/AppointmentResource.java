package com.hospital.appointmentservice.resource;


import com.hospital.appointmentservice.model.Appointment;
import com.hospital.appointmentservice.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class AppointmentResource {

    private final AppointmentService appointmentService;



    @PostMapping("/save")
    private void save(@RequestBody Appointment appointment){

        appointmentService.save(appointment);
    }

    @DeleteMapping("/delete/{id}")
    private void delete(@PathVariable Long id)
    {
        appointmentService.delete(id);
    }



    @GetMapping("/getAppointmentByDoctor/{id}")
    private List<Appointment> getAppointmentByDoctor(@PathVariable Long id){

        return appointmentService.geAppointmentByDoctor(id);
    }

    @GetMapping("/getAppointmentByUser/{id}")
    private List<Appointment> getAppointmentByUser(@PathVariable Long id){

        return appointmentService.geAppointmentByUser(id);
    }
}
