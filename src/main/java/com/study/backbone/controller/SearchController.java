package com.study.backbone.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/search")
@Slf4j
public class SearchController {

    @GetMapping()
    public Object search(String q) {
        log.info("searchController gogo~ : {}", q);
        Map<String, Object> result = new HashMap<>();
        result.put("title", "제목");
        result.put("content", new Date());
        return result;
    }

}
