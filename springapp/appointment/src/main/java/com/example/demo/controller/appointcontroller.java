/*package com.example.demo.controller;

public class appointcontroller {

	public appointcontroller() {
		// TODO Auto-generated constructor stub
	}

}*/
package com.example.demo.controller;

import com.example.demo.model.appointment;
import com.example.demo.service.appointmentservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class appointcontroller {

    private final appointmentservice appointmentService;

    @Autowired
    public appointcontroller(appointmentservice appointmentService) {
        this.appointmentService = appointmentService;
    }

    @PostMapping("/appointments")
    public appointment submitAppointment(@RequestBody appointment appointment) {
        // Perform booking submission logic here (e.g., validation, business rules, etc.)
        // Save the appointment using the service
        return appointmentService.saveAppointment(appointment);
    }
}

