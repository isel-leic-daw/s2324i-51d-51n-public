package pt.isel.daw.tictactoe.domain

import kotlinx.datetime.Instant

class Token(
    val tokenValidationInfo: TokenValidationInfo,
    val userId: String,
    val createdAt: Instant,
    val lastUsedAt: Instant
)
