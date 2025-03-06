import Apresentacao from "./Apresentacao/page"
import About from "./About/page"
import Portifolio from "./Portifolio/page"
export default function body (){
    return(
        <div>
            <Apresentacao/>

            <div className="flex justify-center items-center pt-20 w-full pb-10">
                <About/>
            </div>
            <div className="pb-10">
                <Portifolio/>
            </div>
        </div>
    )
}