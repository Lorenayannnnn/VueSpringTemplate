package com.backend.backenddemo.constant.enums;

import io.swagger.annotations.ApiModelProperty;

public enum ApiResponseCode {
   SUCCESS(0, "成功"),
   FAILED(1, "失败"),
   SYSTEM_EXCEPTION(30001, "发生错误。请联系工作人员");

   @ApiModelProperty("Returning code")
   public Integer code;
   @ApiModelProperty("Returning message")
   public String message;

   ApiResponseCode(Integer code, String message){
       this.code = code;
       this.message = message;
   }
}
