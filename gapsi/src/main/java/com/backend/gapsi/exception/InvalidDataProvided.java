package com.backend.gapsi.exception;

import lombok.Getter;

@Getter
public class InvalidDataProvided extends RuntimeException{
    private final String object;
    public InvalidDataProvided(String message, String object){
        super(message);
        this.object = object;
    }
}