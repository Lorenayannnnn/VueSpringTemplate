package com.backend.backenddemo.constant;

import com.backend.backenddemo.constant.enums.ApiResponseCode;
import lombok.Data;

import java.io.Serializable;

@Data
public class ApiResponse implements Serializable {
    public Integer code;
    public String message;

    public static ApiResponse builder () {
        return new ApiResponse();
    }

    public ApiResponse() {
        code = ApiResponseCode.SUCCESS.code;
        message = ApiResponseCode.SUCCESS.message;
    }

    public ApiResponse(ApiResponseCode response) {
        code = response.code;
        message = response.message;
    }

    public ApiResponse(Integer code, String message) {
        this.code = code;
        this.message = message;
    }
}
