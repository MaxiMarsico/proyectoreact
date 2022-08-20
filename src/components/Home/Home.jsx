

import React from 'react';
import bg_dog from '../../assets/img/bg-dog.png';
import './Home.css';



const Home = () => {
  return (
   
    <div  className="home w-screen h-full flex justify-center ">
        <div className=" w-5/6 h-full grid grid-cols-2 items-center bg-themeOrange">
          <div className="flex-col mt-20 ml-20 ">

            <h3 className=' text-xl max-w-sm '> <span className="text-themeMainBrown">Good food </span> 
                for a <span className="text-themeMainBrown">Good Animal</span></h3>

            <h1 className=' font-krona text-6xl m-2'> PET SHOP </h1>

            <p className=' max-w-md  font-poppins'>It is more important for us that you spend more time with your pets,
            and we will select the best diet and bring it to you.</p>
            

            <button className='button font-poppins ml-6 mb-16 mt-3 py-1.5 px-14 border-2 rounded-xl border-themeLight bg-themeCian '> <a href= "#!" > ORDER </a> </button>
          </div>
          <div className="flex justify-end  h-full">
            <img src={bg_dog} alt="background dog" className="w-1/2 mt-20 mr-20"/>
          </div>
        </div>
     </div>
    
  )
}

export default Home
