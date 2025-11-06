package diyor.adawev.rootcast.repository;


import diyor.adawev.rootcast.model.Register;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegisterRepo extends JpaRepository<Register, Long> {
}
