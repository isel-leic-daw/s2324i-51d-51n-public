package pt.isel.daw.tictactoe.repository

interface Transaction {

    val usersRepository: UsersRepository

    fun rollback()
}
