import Apresentacao from "./Apresentacao/page"
import About from "./About/page"

export default function body (){
    return(
        <div>
            <Apresentacao/>

            <div className="flex justify-center items-center pt-20 w-full">
                <About/>
            </div>
        </div>
    )
}