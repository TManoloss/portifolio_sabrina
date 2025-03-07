interface TituloProps {
    texto: string;
    className?: string;
}

export default function Titulo({ texto, className }: TituloProps) {
    return(
        <div className="relative w-full">
            <div className="absolute top-0 left-0 right-0 h-12 bg-fourt -z-10 w-1/5 rounded-r-full" />
            <h1 className={`p='10px' text-second ${className}`}>{texto}</h1>
        </div>
    )
}