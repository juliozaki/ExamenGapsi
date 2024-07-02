package com.backend.gapsi.serviceImp;

import com.backend.gapsi.model.Supplier;
import com.backend.gapsi.service.FileJson;

import java.io.*;
import java.net.URISyntaxException;
import java.net.URL;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.nio.file.Paths;
import java.util.List;

@Service
public class FileJsonImp implements FileJson {

    public File getFileFromResource(String archivo) throws URISyntaxException {

        ClassLoader cargador = getClass().getClassLoader();
        URL resource = cargador.getResource(archivo);
        if (resource == null) {
            throw new IllegalArgumentException("archivo no encontrado" + archivo);
        } else {
            return new File(resource.toURI());
        }
    }


    public List<Supplier> getData() throws URISyntaxException {

        //File archivo = getFileFromResource("Suppliers.json");
        File archivo = new File("Suppliers.json");
        System.out.println(archivo);
        ObjectMapper mapper = new ObjectMapper();
        try {
            //mapper.readValue(archivo, Supplier.class);
            List<Supplier> suppliers = mapper.readValue(archivo, new TypeReference<List<Supplier>>(){});
            System.out.println(suppliers);
            return suppliers;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }


    public void saveData(List <Supplier> supplier) throws URISyntaxException {
        ObjectMapper mapper = new ObjectMapper();

        System.out.println(supplier);
        try {
            File archivo = new File("Suppliers.json");
            archivo.createNewFile();
            mapper.writeValue(archivo, supplier);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
