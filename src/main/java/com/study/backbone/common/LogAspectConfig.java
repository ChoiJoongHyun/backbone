package com.study.backbone.common;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.StopWatch;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@Aspect
@Component
@Slf4j
public class LogAspectConfig {

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private HttpServletRequest request;

    @Around("execution(* com.study.backbone.controller..*(..))")
    public Object log(ProceedingJoinPoint joinPoint) throws Throwable {
        String uri = request.getRequestURI();
        String method = request.getMethod();

        log.info("Request URL : {}, Method : {}, Params : {}", uri, method, getParameterValues(request));

        Object pointObject = joinPoint.proceed();

        String response;
        try {
            response = objectMapper.writeValueAsString(pointObject);
        } catch (Exception e) {
            log.error("err : {}", e);
            response = "";
        }
        log.info("Response URL : {}, Method : {}, Params : {}", uri, method, response);

        return pointObject;
    }

    /**
     * request 요청 string 으로 변환
     * */
    private String getParameterValues(HttpServletRequest request) throws JsonProcessingException {
        Map<String, String> map = new HashMap<>();
        Map<String, String[]> parameters = request.getParameterMap();
        for(Map.Entry<String, String[]> entry : parameters.entrySet()) {
            String key = entry.getKey();
            String[] value = entry.getValue();
            if (value != null && value.length > 0) {
                map.put(key, value[0]);
            }
        }
        return map.toString();
    }
}
