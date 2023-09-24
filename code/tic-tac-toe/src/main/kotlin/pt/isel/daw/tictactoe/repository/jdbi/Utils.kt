package pt.isel.daw.tictactoe.repository.jdbi

import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.KotlinPlugin
import org.jdbi.v3.postgres.PostgresPlugin
import pt.isel.daw.tictactoe.repository.jdbi.mappers.InstantMapper
import pt.isel.daw.tictactoe.repository.jdbi.mappers.PasswordValidationInfoMapper
import pt.isel.daw.tictactoe.repository.jdbi.mappers.TokenValidationInfoMapper

fun Jdbi.configureWithAppRequirements(): Jdbi {
    installPlugin(KotlinPlugin())
    installPlugin(PostgresPlugin())

    registerColumnMapper(PasswordValidationInfoMapper())
    registerColumnMapper(TokenValidationInfoMapper())
    registerColumnMapper(InstantMapper())

    return this
}
