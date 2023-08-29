package com.example.demo

import org.springframework.stereotype.Component

@Component
class DefaultGreetingService : GreetingsService {
    override val greeting: String = "Hello DAW"
}