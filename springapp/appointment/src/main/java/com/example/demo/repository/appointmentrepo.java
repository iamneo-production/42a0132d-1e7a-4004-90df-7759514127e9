/*package com.example.demo.repository;

public interface appointmentrepo {

}*/
package com.example.demo.repository;

import com.example.demo.model.appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface appointmentrepo extends JpaRepository<appointment, Long> {
    // You can add custom query methods here if needed
}

