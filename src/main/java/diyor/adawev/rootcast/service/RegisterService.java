package diyor.adawev.rootcast.service;



import diyor.adawev.rootcast.dto.Registerdto;
import diyor.adawev.rootcast.model.Register;
import diyor.adawev.rootcast.model.Result;
import diyor.adawev.rootcast.repository.RegisterRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RegisterService {


    @Autowired
    RegisterRepo registerRepo;

    // get all
    public List<Register> getRegisters() {
        return registerRepo.findAll();
    }

    // get byy id
    public Register getRegisterbyid(Long id) {
        return registerRepo.findById(id).get();
    }

    // create
    public Result saveRegister(Registerdto registerdto) {
        Register register = new Register();
        register.setFullName(registerdto.getFullName());
        register.setPhoneNumber(registerdto.getPhoneNumber());
        register.setEmail(registerdto.getEmail());
        registerRepo.save(register);
        return new Result(true, "success");
    }


    // update
    public Result updateRegister(Registerdto registerdto, Long id) {
        Optional<Register> register = registerRepo.findById(id);
        if (register.isPresent()) {
            Register register1 = register.get();
            register1.setFullName(registerdto.getFullName());
            register1.setPhoneNumber(registerdto.getPhoneNumber());
            register1.setEmail(registerdto.getEmail());
            registerRepo.save(register1);
            return new Result(true, "success");
        }
        return new Result(false, "error");
    }

    // delete
    public Result deleteRegister(Long id) {
        registerRepo.deleteById(id);
        return new Result(true, "success");
    }
}
