package pt.isel.daw.e2.lists

import org.springframework.stereotype.Component

@Component
class GermanTranslator : LanguageTranslator {
    override fun translate(englishWord: String): String? {
        return if(englishWord == "Hello") {
            "Hallo"
        }else{
            null
        }
    }

    override val targetLanguage = "de"
}