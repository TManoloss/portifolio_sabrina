interface TituloProps {
    texto: string;
    className?: string;
}

export default function Titulo({ texto, className }: TituloProps) {
    return (
        <div className="relative w-full">
            {/* Barra de fundo */}
            <div className="absolute top-0 left-0 h-12 bg-fourt -z-10 w-1/5 rounded-r-full" />

            {/* Texto do título com fonte correta */}
            <h1 className={`text-left text-white font-fonteLogo text-4xl py-2 px-4 ${className}`}>
                {texto}
            </h1>
        </div>
    );
}
