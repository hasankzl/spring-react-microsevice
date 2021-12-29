package com.hospital.appointmentservice.repository;

import com.hospital.appointmentservice.model.Appointment;
import com.hospital.appointmentservice.projection.AppointmentProjection;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface AppointmentRepository  extends JpaRepository<Appointment,Long> {



    List<AppointmentProjection> findByDoctorId(Long id);

    List<Appointment> findByUserId(Long id);
}
