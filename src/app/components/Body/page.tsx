import Apresentacao from "./Apresentacao/page"
import About from "./About/page"
import Portifolio from "./Portifolio/page"
import Portifolio2 from "./Portifolio2/page"
import Portifolio3 from "./Portifolio3/page"
import Portifolio4 from "./Portifolio4/page"
import Curriculo from "./Curriculo/page"
export default function body (){
    return(
        <div>
            <Apresentacao/>

            <div className="flex justify-center items-center pt-20 w-full pb-10">
                <About/>
            </div>
            <div>
                <Curriculo/>
            </div>
            <div className="">
                <Portifolio/>
            </div>
            <div className="">
                <Portifolio2/>
            </div>
            <div>
                <Portifolio3/>
            </div>
            <div>
                <Portifolio4/>
            </div>
        </div>
    )
}