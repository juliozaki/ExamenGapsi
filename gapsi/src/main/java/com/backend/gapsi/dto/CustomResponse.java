package com.backend.gapsi.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CustomResponse {
    private int codError;
    private String serverError;
    private String descError;
    private Object results;
}