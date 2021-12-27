package com.hospital.appointmentservice.repository;

import com.hospital.appointmentservice.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface AppointmentRepository  extends JpaRepository<Appointment,Long> {



    List<Appointment> findByDoctorId(Long id);

    List<Appointment> findByUserId(Long id);
}
