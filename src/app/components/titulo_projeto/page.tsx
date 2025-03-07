const Title: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
    return (
      <h2 className={`text-black text-2xl font-bold ml-20  ${className}`}>{text}</h2>
    );
  };

export default Title;