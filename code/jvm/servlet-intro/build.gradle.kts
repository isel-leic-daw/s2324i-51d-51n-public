plugins {
    kotlin("jvm") version "1.8.0"
}

group = "pt.isel.daw"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    // Jetty dependencies
    implementation("org.eclipse.jetty:jetty-server:11.0.11")
    implementation("org.eclipse.jetty:jetty-servlet:11.0.11")

    // Tomcat dependencies
    implementation("org.apache.tomcat.embed:tomcat-embed-core:10.0.23")

    // For logging purposes
    implementation("org.slf4j:slf4j-api:2.0.0")
    runtimeOnly("org.slf4j:slf4j-simple:2.0.0")

    testImplementation(kotlin("test"))
}

tasks.test {
    useJUnitPlatform()
}

kotlin {
    jvmToolchain(17)
}