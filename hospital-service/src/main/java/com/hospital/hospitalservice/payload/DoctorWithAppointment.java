package com.hospital.hospitalservice.payload;

import com.hospital.hospitalservice.projection.DoctorProjection;
import lombok.Data;

import java.util.List;

@Data
public class DoctorWithAppointment {
    private DoctorProjection doctor;
    private List<AppointmentWithPerson> appointmentWithPersonList;
}
