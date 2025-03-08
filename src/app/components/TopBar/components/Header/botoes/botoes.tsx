import Button from "../../button/Button"



export default function botoes (){
    return(
        <div>
            <nav className="font-fonteLogo text-black flex justify-between" aria-label="Navegação principal">
                <ul className="flex items-center">
                    <li className="w-auto mx-2 text-base"><Button name="Home " /></li>
                    <span id="" className="border-l border-fourt h-6 mx-2"></span>
                    <li className="w-auto mx-2 text-base"><Button name="Sobre mim" /></li>
                    <span className="border-l border-fourt h-6 mx-2"></span>
                    <li className="w-auto mx-2 text-base"><Button name="Curriculo" /></li>
                    <span className="border-l border-fourt h-6 mx-2"></span>
                    <li className="w-auto mx-2 text-base"><Button name="Portifólio" /></li>
                    <span className="border-l border-fourt h-6 mx-2"></span>
                    <li className="w-auto mx-2 text-base"><Button name="Contato" /></li>
                </ul>
            </nav>
        </div>
    )
}