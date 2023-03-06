import { useContext } from "react"
import { EdificioContext} from '../../content/Edificio'

export default function Locatario(){
    const {idEdificio} = useContext(EdificioContext)
    console.log(idEdificio)
    return(
        <h1>{idEdificio}</h1>
    )
}