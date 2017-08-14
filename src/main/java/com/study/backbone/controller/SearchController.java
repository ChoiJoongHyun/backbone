package com.study.backbone.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.util.*;

@RestController
@RequestMapping("/search")
@Slf4j
public class SearchController {
    private static final int MAX_NUM = 1000;

    @Autowired
    private ObjectMapper objectMapper;

    @GetMapping()
    public List<SearchList> search(String q) {
        Random random = new Random();

        List<SearchList> list = Arrays.asList(
                new SearchList("제목", random.nextInt(MAX_NUM))
                ,new SearchList("제목", random.nextInt(MAX_NUM))
                ,new SearchList("제목", random.nextInt(MAX_NUM))
                ,new SearchList("제목", random.nextInt(MAX_NUM))
                ,new SearchList("제목", random.nextInt(MAX_NUM))
                ,new SearchList("제목", random.nextInt(MAX_NUM))
        );

        return list;
    }

    @Data
    public static class SearchList {
        String title;
        Object content;

        public SearchList(String title, Object content) {
            this.title = title;
            this.content = content;
        }
    }

}
