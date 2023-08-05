import './carsStyle.css';
const CarsPower = ()=>{
const carModels=['toyoto ',' swift ',' bmw ',' Benz ']
return(
    <div>
        {
            carModels.map(  (i)=>
            (
                <label className='carStyle' key={i}>{i}
                </label>
            )
            )
        }
    </div>
);
}
export default CarsPower;