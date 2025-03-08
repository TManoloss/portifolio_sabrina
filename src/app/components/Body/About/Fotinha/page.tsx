import test1 from '../../../../../images/sabrina.png';
export default function foto() {
    return (
        <div>
            <img 
                src={test1.src}    
                alt="Profile pic" 
                style={{
                    width: '15vw',
                    height: '15vw',
                    borderRadius: '50%',
                    objectFit: 'cover'
                }} 
                
            />
        </div>
    );
}