interface TituloProps {
    texto: string;
    className?: string;
}

const Titulo: React.FC<TituloProps> = ({ texto, className }) => {
    return (
        <div className="relative w-full">
            <div className="absolute top-0 left-0 h-12 bg-fourt -z-10 w-1/5 rounded-r-full" />
            <h1 className={`text-left text-white font-fonteLogo text-4xl py-2 px-4 ${className}`}>
                {texto}
            </h1>
        </div>
    );
};

export default Titulo;

