package pt.isel.daw.tictactoe.domain

import kotlinx.datetime.Clock
import kotlinx.datetime.Instant
import org.springframework.security.crypto.password.PasswordEncoder
import java.security.MessageDigest
import java.security.SecureRandom
import java.util.*

class UsersDomain(
    private val passwordEncoder: PasswordEncoder,
    private val config: UsersDomainConfig
) {

    fun generateTokenValue(): String =
        ByteArray(config.tokenSizeInBytes).let { byteArray ->
            SecureRandom.getInstanceStrong().nextBytes(byteArray)
            Base64.getUrlEncoder().encodeToString(byteArray)
        }

    fun canBeToken(token: String): Boolean = try {
        Base64.getUrlDecoder()
            .decode(token).size == config.tokenSizeInBytes
    } catch (ex: IllegalArgumentException) {
        false
    }

    fun validatePassword(password: String, validationInfo: PasswordValidationInfo) = passwordEncoder.matches(
        password,
        validationInfo.validationInfo
    )

    fun createPasswordValidationInformation(password: String) = PasswordValidationInfo(
        validationInfo = passwordEncoder.encode(password)
    )

    fun isTokenTimeValid(
        clock: Clock,
        token: Token
    ): Boolean {
        val now = clock.now()
        return token.createdAt <= now &&
            (now - token.createdAt) <= config.tokenTtl &&
            (now - token.lastUsedAt) <= config.tokenRollingTtl
    }

    fun getTokenExpiration(token: Token): Instant {
        val absoluteExpiration = token.createdAt + config.tokenTtl
        val rollingExpiration = token.lastUsedAt + config.tokenRollingTtl
        return if (absoluteExpiration < rollingExpiration) {
            absoluteExpiration
        } else {
            rollingExpiration
        }
    }

    fun createTokenValidationInformation(token: String): TokenValidationInfo =
        TokenValidationInfo(hash(token))

    // TODO it could be better
    fun isSafePassword(password: String) = password.length > 4

    val maxNumberOfTokensPerUser = config.maxTokensPerUser

    companion object {
        private fun hash(input: String): String {
            val messageDigest = MessageDigest.getInstance("SHA256")
            return Base64.getUrlEncoder().encodeToString(
                messageDigest.digest(
                    Charsets.UTF_8.encode(input).array()
                )
            )
        }
    }
}
