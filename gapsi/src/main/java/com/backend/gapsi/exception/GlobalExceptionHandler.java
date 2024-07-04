package com.backend.gapsi.exception;

import com.backend.gapsi.dto.CustomResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import org.springframework.context.support.DefaultMessageSourceResolvable;
//import org.springframework.dao.DataIntegrityViolationException;
//import org.springframework.dao.QueryTimeoutException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.http.HttpStatus;

import java.util.List;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(NoDataFound.class)
    public ResponseEntity<CustomResponse> noDataFoundException(NoDataFound ex){
        return new ResponseEntity<>(CustomResponse
                .builder()
                .codError(HttpStatus.BAD_REQUEST.value())
                .serverError(HttpStatus.BAD_REQUEST.toString())
                .descError("NO DATA FOUND: " + ex.getMessage())
                .results("Values: " + ex.getObject())
                .build()
                , HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(InvalidDataProvided.class)
    public ResponseEntity<CustomResponse> invalidDataProvided(InvalidDataProvided ex){
        return new ResponseEntity<>(CustomResponse
                .builder()
                .codError(HttpStatus.BAD_REQUEST.value())
                .serverError(HttpStatus.BAD_REQUEST.toString())
                .descError("INVALID DATA PROVIDED: " + ex.getMessage())
                .results("Values: " + ex.getObject())
                .build()
                , HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<CustomResponse> constraintViolationException(ConstraintViolationException ex, HttpServletRequest request){
        List<String> errors = ex.getConstraintViolations()
                .stream()
                .map(ConstraintViolation::getMessage)
                .toList();
        return new ResponseEntity<>(CustomResponse
                .builder()
                .codError(HttpStatus.BAD_REQUEST.value())
                .serverError(HttpStatus.BAD_REQUEST.toString())
                .descError("INVALID DATA PROVIDED: " + errors.toString())
                .results(request.getServletPath())
                .build()
                , HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<CustomResponse> methodArgumentNotValidException(MethodArgumentNotValidException ex, HttpServletRequest request){
        List<String> errors = ex.getFieldErrors()
                .stream()
                .map(DefaultMessageSourceResolvable::getDefaultMessage)
                .toList();
        return new ResponseEntity<>(CustomResponse
                .builder()
                .codError(HttpStatus.BAD_REQUEST.value())
                .serverError(HttpStatus.BAD_REQUEST.toString())
                .descError("INVALID DATA PROVIDED: " + errors.toString())
                .results(request.getServletPath())
                .build()
                , HttpStatus.BAD_REQUEST
        );
    }

    /*@ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<CustomResponse> dataIntegrityViolationException(DataIntegrityViolationException ex, HttpServletRequest request){
        return new ResponseEntity<>(CustomResponse
                .builder()
                .codError(HttpStatus.BAD_REQUEST.value())
                .serverError(HttpStatus.BAD_REQUEST.toString())
                .descError("INVALID DATA PROVIDED: " + ex.getMostSpecificCause().getMessage())
                .results(request.getServletPath())
                .build()
                , HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(QueryTimeoutException.class)
    public ResponseEntity<CustomResponse> dataIntegrityViolationException(QueryTimeoutException ex, HttpServletRequest request){
        return new ResponseEntity<>(CustomResponse
                .builder()
                .codError(HttpStatus.BAD_REQUEST.value())
                .serverError(HttpStatus.BAD_REQUEST.toString())
                .descError("INVALID DATA PROVIDED: " + ex.getMostSpecificCause().getMessage())
                .results(request.getServletPath())
                .build()
                , HttpStatus.BAD_REQUEST
        );
    }*/

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<CustomResponse> illegalArgumentException(IllegalArgumentException ex, HttpServletRequest request){
        return new ResponseEntity<>(CustomResponse
                .builder()
                .codError(HttpStatus.BAD_REQUEST.value())
                .serverError(HttpStatus.BAD_REQUEST.toString())
                .descError("INVALID DATA PROVIDED: " + ex.getMessage())
                .results(request.getServletPath())
                .build()
                , HttpStatus.BAD_REQUEST
        );
    }
}
