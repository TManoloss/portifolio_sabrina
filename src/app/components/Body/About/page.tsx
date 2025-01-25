import Foto from "./Fotinha/page"
import Texto from "./Text/page"
import Titulo from "./Titulo/page"
export default function about (){
    return(
        <div className="w-full">
            <div className="flex justify-start">
                <Titulo/>
            </div>
           
            <div className="flex flex-col justify-center items-center px-40">
                
                <Foto/>
                <Texto/>
            </div>
        </div>
    )
}