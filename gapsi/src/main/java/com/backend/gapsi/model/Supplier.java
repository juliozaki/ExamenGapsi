package com.backend.gapsi.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Supplier {
    private String rfc;
    private String nombre;
    private String direccion;
    private String fecha_alta;
}
