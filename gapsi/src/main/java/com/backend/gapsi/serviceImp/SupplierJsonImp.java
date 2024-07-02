package com.backend.gapsi.serviceImp;

import com.backend.gapsi.model.Supplier;
import com.backend.gapsi.service.SupplierJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.List;

import java.net.URISyntaxException;

@Service
public class SupplierJsonImp implements SupplierJson {

    @Autowired
    private FileJsonImp fileJsonImp;


    @Override
    public List <Supplier> getSuppliers() {
        try {
            return fileJsonImp.getData();
        } catch (URISyntaxException e) {
            throw new RuntimeException(e);
        }
    }


    public String saveSupplier(Supplier supplier) {
        /*supplier.setRfc("FUPJ86");
        supplier.setFecha_alta("01-02-2024");
        supplier.setDireccion("calle");

        Supplier supplier1=new Supplier();
        supplier1.setRfc("FUPJ90");
        supplier1.setFecha_alta("01-02-2024");
        supplier1.setDireccion("calle");

        List<Supplier> suppliers = new ArrayList<>();
        suppliers.add(supplier);
        suppliers.add(supplier1);*/

        List<Supplier> suppliers = getSuppliers();

        if (serchSupplier(supplier.getRfc(), suppliers)){
            return "Supplier already exist";
        }else {

            try {
                suppliers.add(supplier);
                fileJsonImp.saveData(suppliers);
            } catch (URISyntaxException e) {
                throw new RuntimeException(e);
            }
            return "Supplier Created";
        }
    }

    public boolean serchSupplier(String rfc, List<Supplier> suppliers) {
        boolean encontrado = false;
        boolean cont = true;

        Iterator<Supplier> iterator = suppliers.iterator();
        while (iterator.hasNext() && cont) {

            Supplier supplier = iterator.next();
            if(supplier.getRfc().equals(rfc)){
                cont = false;
                encontrado = true;
            }
        }

        return encontrado;
    }

    @Override
    public boolean deleteSupplier(Supplier supplier) {
        boolean eliminado = false;
        List<Supplier> suppliers = getSuppliers();

        if (suppliers.removeIf(supplier1 -> supplier1.getRfc().equals(supplier.getRfc()))){
            try {
                fileJsonImp.saveData(suppliers);
                eliminado = true;
            } catch (URISyntaxException e) {
                throw new RuntimeException(e);
            }
        }

        return eliminado;
    }
}
