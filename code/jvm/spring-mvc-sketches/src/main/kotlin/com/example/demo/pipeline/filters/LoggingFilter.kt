package com.example.demo.pipeline.filters

import jakarta.servlet.FilterChain
import jakarta.servlet.http.HttpFilter
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Component
import org.springframework.util.StopWatch

@Component
class LoggingFilter : HttpFilter() {

    override fun doFilter(request: HttpServletRequest, response: HttpServletResponse, chain: FilterChain) {
        val stopWatch = StopWatch().apply {
            start()
        }
        chain.doFilter(request, response)
        stopWatch.stop()
        logger.info(
            "method:{}, path:{}, status:{}, duration:{}",
            request.method,
            request.requestURI,
            response.status,
            stopWatch.totalTimeMillis
        )
    }

    companion object {
        private val logger = LoggerFactory.getLogger(LoggingFilter::class.java)
    }
}