package com.backend.gapsi.controller;

import com.backend.gapsi.dto.CustomResponse;
import com.backend.gapsi.model.Supplier;
import com.backend.gapsi.serviceImp.SupplierJsonImp;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "supplier")
@Validated
public class SupplierController {

    @Autowired
    private SupplierJsonImp supplierJsonImp;

    //@PostMapping("saveSupplier")   @NotNull @Valid @RequestBody Supplier supplier
    //@GetMapping("saveSupplier")
    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("saveSupplier")
    public ResponseEntity<String> saveSupplier(@NotNull @Valid @RequestBody Supplier supplier){

        String response = supplierJsonImp.saveSupplier(supplier);

        if(response.equals("Supplier Created")){
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }else {
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }

    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("getSuppliers")
    public ResponseEntity<Object> getSupliers(){

        List<Supplier> supplier = supplierJsonImp.getSuppliers();

        return new ResponseEntity<>(supplier, HttpStatus.OK);
    }

    //@DeleteMapping("deleteSupplier")   @NotNull @Valid @RequestBody Supplier supplier
    //@GetMapping("deleteSupplier")
    //@DeleteMapping("deleteSupplier/{rfc}")
    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("deleteSupplier/{rfc}")
    public ResponseEntity<String> deleteSupplier(@PathVariable("rfc") String rfc){
        Supplier supplier = new Supplier();
        supplier.setRfc(rfc);
        boolean response = supplierJsonImp.deleteSupplier(supplier);

        if(response){
            return new ResponseEntity<>("Supplier has been delete", HttpStatus.CREATED);
        }else {
            return new ResponseEntity<>("Not Supplier", HttpStatus.BAD_REQUEST);
        }
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("getBienvenida")
    public ResponseEntity<String> getBienvenida(){

        return new ResponseEntity<>("Bienvenido Candidato 1", HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("getVersion")
    public ResponseEntity<String> getVersion(){

        return new ResponseEntity<>("Versión 0.0.1", HttpStatus.OK);
    }

}
