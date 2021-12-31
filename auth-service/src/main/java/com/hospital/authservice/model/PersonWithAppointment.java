package com.hospital.authservice.model;


import lombok.Data;

import java.util.List;

@Data
public class PersonWithAppointment {

    private Person person;

    private List<AppointmentWithDoctor> appointmentList;

}
