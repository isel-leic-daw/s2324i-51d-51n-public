package com.example.demo

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class ExampleController(
    private val greetingsService: GreetingsService
) {

    @GetMapping("/some/path")
    fun handle0() = greetingsService.getGreetings()
}