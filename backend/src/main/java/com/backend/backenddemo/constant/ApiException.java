package com.backend.backenddemo.constant;

import com.backend.backenddemo.constant.enums.ApiResponseCode;
import lombok.Data;

@Data
public class ApiException extends RuntimeException{
    private Integer code;
    private ApiResponseCode response;

    public ApiException(String message) {
        super(message);
    }

    public ApiException(ApiResponseCode response) {
        super(response.message);
        this.code = response.code;
        this.response = response;
    }
}
