 import Image from 'next/image';
import  abal from '../../../assets/abal.jpeg';
const Homeproducts = () => {
    return (
      <div> 
        <h1> Demo Products </h1>
          <div className='grid grid-cols-4 m-10 '>
            <div className="card grid grid-rows-2 gap-10 justify-evenly border border-black">
                <div className="header">
                    <div className="image">          
                 <Image src={abal} alt="abal"/>
                    </div>
                </div>
                <div className="info">
                    <a rel="noopener noreferrer" href="#" className="block">
                        <span className="title">Facere ipsa nulla corrupti praesentium </span>
                    </a>
                    <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit ...</p>
                </div>
            </div>
            <div className="card grid grid-rows-2 gap-10 justify-evenly border border-black">
                <div className="header">
                    <div className="image">
                      
                    <Image src={abal} alt="abal"/>
                    </div>
                </div>
                <div className="info">
                    <a rel="noopener noreferrer" href="#" className="block">
                        <span className="title">Facere ipsa nulla corrupti praesentium </span>
                    </a>
                    <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit ...</p>
                </div>
            </div>
            <div className="card grid grid-rows-2 gap-10 justify-evenly border border-black">
                <div className="header">
                    <div className="image">
                      
                    <Image src={abal} alt="abal"/>
                    </div>
                </div>
                <div className="info">
                    <a rel="noopener noreferrer" href="#" className="block">
                        <span className="title">Facere ipsa nulla corrupti praesentium </span>
                    </a>
                    <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit ...</p>
                </div>
            </div>
            <div className="card grid grid-rows-2 gap-10 justify-evenly border border-black">
                <div className="header">
                    <div className="image">
                      
                    <Image src={abal} alt="abal"/>
                    </div>
                </div>
                <div className="info">
                    <a rel="noopener noreferrer" href="#" className="block">
                        <span className="title">Facere ipsa nulla corrupti praesentium </span>
                    </a>
                    <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit ...</p>
                </div>
            </div>

        </div>
      </div>
      
    );
};

export default Homeproducts;