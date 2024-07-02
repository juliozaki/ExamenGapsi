package com.backend.gapsi.exception;

import lombok.Getter;

@Getter
public class NoDataFound extends RuntimeException{
    private final String object;
    public NoDataFound(String message, String object){
        super(message);
        this.object = object;
    }
}
