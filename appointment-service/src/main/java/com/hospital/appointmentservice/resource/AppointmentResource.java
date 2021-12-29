package com.hospital.appointmentservice.resource;


import com.hospital.appointmentservice.model.Appointment;
import com.hospital.appointmentservice.payload.AppointmentWithDoctor;
import com.hospital.appointmentservice.payload.AppointmentWithPerson;
import com.hospital.appointmentservice.projection.AppointmentProjection;
import com.hospital.appointmentservice.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class AppointmentResource {

    private final AppointmentService appointmentService;



    @PostMapping("/save")
    private void save(@RequestBody Appointment appointment,@RequestHeader("userId") Long userId){

        appointment.setUserId(userId);
        appointmentService.save(appointment);
    }

    @DeleteMapping("/delete/{id}")
    private void delete(@PathVariable Long id)
    {
        appointmentService.delete(id);
    }



    @GetMapping("/getAppointmentByDoctor/{id}")
    private List<AppointmentWithPerson> getAppointmentByDoctor(@PathVariable Long id){

        return appointmentService.geAppointmentByDoctor(id);
    }

    @GetMapping("/getAppointmentByUser/{id}")
    private List<AppointmentWithDoctor> getAppointmentByUser(@PathVariable Long id){

        return appointmentService.geAppointmentByUser(id);
    }
}
