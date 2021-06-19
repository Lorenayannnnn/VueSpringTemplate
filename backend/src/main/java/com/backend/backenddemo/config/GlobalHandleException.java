package com.backend.backenddemo.config;

import com.backend.backenddemo.constant.ApiException;
import com.backend.backenddemo.constant.ApiResponse;
import com.backend.backenddemo.constant.enums.ApiResponseCode;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;

// 配合ExceptionHandler使用，增强controller控制
@RestControllerAdvice
public class GlobalHandleException {

    public GlobalHandleException(){}

    @ExceptionHandler
    public ApiResponse globalExceptionHandler(HttpServletRequest request, Exception exp) {
        ApiResponse response = new ApiResponse(ApiResponseCode.SYSTEM_EXCEPTION);
        if (exp instanceof ApiException) {
            Integer code = ((ApiException)exp).getCode();
            return new ApiResponse(code, exp.getMessage());
        }
        return response;
    }
}
