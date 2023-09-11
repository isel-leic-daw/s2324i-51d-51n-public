package pt.isel.daw.e0.first

import org.slf4j.LoggerFactory
import org.springframework.context.annotation.AnnotationConfigApplicationContext
import org.springframework.beans.factory.getBean

private val log = LoggerFactory.getLogger("main")

// Interface with some functionality.
// This is the dependency
interface InterfaceA
interface InterfaceB

// An implementation of that interface.
class ComponentA : InterfaceA {
    init {
        log.info("ComponentA ctor.")
    }
}

// A dependent on the dependency
// Constructor Injection
class ComponentB(
    val dependency: InterfaceA
) : InterfaceB {
    init {
        log.info("ComponentB ctor.")
    }
}

class ComponentC(
    val dependency: InterfaceB,
    val anotherDependency: InterfaceA,
){
    init {
        log.info("ComponentC ctor.")
    }
}

fun main() {
    log.info("## Example: illustrates the use of a context with statically defined components/beans.")

    log.info("Creating the context.")
    val context = AnnotationConfigApplicationContext()
    log.info("Context created.")

    log.info("Registering components/beans explicitly via class to `context.register.")
    context.register(
        ComponentC::class.java,
        ComponentA::class.java,
        ComponentB::class.java,
    )

    log.info("Refresh the context to take into consideration the new bean definitions.")
    context.refresh()

    log.info("Getting beans.")
    val componentC = context.getBean<ComponentC>()

    log.info("ComponentC instance - {}.", componentC)
    val anotherComponentC = context.getBean<ComponentC>()
    val componentB = context.getBean<ComponentB>()

    log.info("componentC - {}, anotherComponentC - {}.", componentC, anotherComponentC)
    log.info("componentC.dependency - {}, componentB - {}.", componentC.dependency, componentB)
    log.info("B.A = {}, C.A = {}", componentB.dependency, componentC.anotherDependency)
}