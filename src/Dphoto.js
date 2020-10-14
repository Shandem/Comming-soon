import React from 'react';

const Dphoto = () => {
    return (
        <div>
            <img src={process.env.PUBLIC_URL + 'hero-desktop.jpg'} 
                            alt='Modle' className='Dphoto'></img>
        </div>
    );
}

export default Dphoto;
