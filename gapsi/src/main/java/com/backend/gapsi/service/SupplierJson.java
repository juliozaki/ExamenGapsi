package com.backend.gapsi.service;

import com.backend.gapsi.model.Supplier;

import java.util.List;

public interface SupplierJson {
    List<Supplier> getSuppliers();
    String saveSupplier(Supplier supplier);
    boolean serchSupplier(String rfc, List<Supplier> suppliers);
    boolean deleteSupplier (Supplier supplier);
}
