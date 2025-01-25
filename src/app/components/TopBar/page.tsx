import Logo from "./components/Header/Logo/page"
import Botoes from "./components/Header/botoes/botoes"

export default function topbar(){
    return (
        <header className="pad-10 flex justify-between">
            <div><Logo/></div>   
            <nav className="flex items-center"><Botoes/></nav>
        </header>
    )
}