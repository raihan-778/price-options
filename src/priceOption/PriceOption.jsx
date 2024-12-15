import PropTypes from 'prop-types';




function PriceOption({option}) {
    console.log("price-option",option)
    const {name,price,features}=option
    return (
        <div className='m-3 flex-col'>
            {/* <h1 className="5xl">{name}</h1>
            <p className='text-2xl font-semibold'>{price}</p>
            <ul>
                {features.map((feature,idx)=><li key={idx}>{feature}</li>)}
            </ul> */}
{/* Daisy Ui Component */}
            <div className="card bg-stone-400 text-black w-96 h-96 mb-3 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <ul>
                {features.map((feature,idx)=><li key={idx}>{feature}</li>)}
            </ul>
            <p className='text-2xl font-semibold'>{price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
}

PriceOption.propTypes = {
    option:PropTypes.object
};

export default PriceOption;