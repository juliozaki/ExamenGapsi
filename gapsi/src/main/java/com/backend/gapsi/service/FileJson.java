package com.backend.gapsi.service;

import com.backend.gapsi.model.Supplier;

import java.io.File;
import java.net.URISyntaxException;
import java.util.List;

public interface FileJson {
    File getFileFromResource(String archivo) throws URISyntaxException;
    List<Supplier> getData() throws URISyntaxException;
    void saveData(List<Supplier> supplier) throws URISyntaxException;
}
