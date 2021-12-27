package com.hospital.appointmentservice.converter;



import com.hospital.appointmentservice.model.APPOINTMENT_MINUTE;
import com.hospital.appointmentservice.model.WORK_HOUR;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.stream.Stream;

@Converter(autoApply = true)
public class WorkHourConverter implements AttributeConverter<WORK_HOUR,String> {
    @Override
    public String convertToDatabaseColumn(WORK_HOUR work_hour) {
        if(work_hour == null){
            return null;
        }
        return work_hour.toString();
    }

    @Override
    public WORK_HOUR convertToEntityAttribute(String value) {
        if(value == null){
            return null;
        }
        return Stream.of(WORK_HOUR.values())
                .filter(c -> c.toString().equals(value))
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);
    }
}
