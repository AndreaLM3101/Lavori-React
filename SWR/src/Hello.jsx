import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

export function Hello () {
    const language = useContext(LanguageContext)

    if (language === "it") {
        return <h2 className="styleHelloIt">Buongiorno, Mondo!</h2>;
      } else if (language === "en") {
        return <h2 className="styleHelloEn">Hello, World!</h2>;
      } else if (language === "fr") {
        return <h2 className="styleHelloFr">Bonjour, Monde!</h2>;
      }
    }