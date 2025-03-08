import Foto from "./Fotinha/page"
import Texto from "./Text/page"
import Titulo from "../../Titulo/page"
export default function about (){
    return(
        <div className="w-full">
            <div className="flex justify-start">
                <Titulo texto="Sobre mim"/>
            </div>
           
            <div className="flex flex-col justify-center items-center pb-20 px-40">
                <div className="pb-5"><Foto/></div>
                
                <div><Texto/></div>
            </div>
        </div>
    )
}