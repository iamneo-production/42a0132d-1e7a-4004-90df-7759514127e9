/*package com.example.demo.service;

public class appointmentservice {

	public appointmentservice() {
		// TODO Auto-generated constructor stub
	}

}*/
package com.example.demo.service;

import com.example.demo.model.appointment;
import com.example.demo.repository.appointmentrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class appointmentservice {

    private final appointmentrepo appointmentRepository;

    @Autowired
    public appointmentservice(appointmentrepo appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    public appointment saveAppointment(appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    // Add other service methods if needed
}

