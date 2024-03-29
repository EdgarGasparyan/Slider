import './App.css';
import React,{useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel,FreeMode} from "swiper";
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/free-mode";


// import "./styles.css";
const App = () =>  {
  const [products, setProducts] = useState([
    { 
      id:1,
      value: "asjdlkasdklajsdlkajskldjaslkdj",
  
    },
    {
      id:2,
      value: "asjdlkasdklajsdlkajskldjaslkdj",

    },
    {
      id:3,
      value: "asjdlkasdklajsdlkajskldjaslkdj",

    },
    {
      id:4,
      value: "asjdlkasdklajsdlkajskldjaslkdj",
    },
    {
      id:5,
      value: "asjdlkasdklajsdlkajskldjaslkdj",
    },
    {
      id:6,
      value: "asjdlkasdklajsdlkajskldjaslkdj",
    },
    {
      id:7,
      value: "asjdlkasdklajsdlkajskldjaslkdj",
    },
    {
      id:7,
      value: "asjdlkasdklajsdlkajskldjaslkdj",
    },
    {
      id:8,
      value: "asjdlkasdklajsdlkajskldjaslkdj",
    },
    {
      id:9,
      value: "asjdlkasdklajsdlkajskldjaslkdj",
    },
    {
      id:10,
      value: "asjdlkasdklajsdlkajskldjaslkdj",
    },
  ]);
  
  const hadleAdd = () => {
    setProducts([...products, {
      id:99,
      value:"asjdlkasdklajsdlkajskldjaslkdj "
    }])
  }

  return (
    <>
    <div className='carusel_content'>
<Swiper 
      modules={[Mousewheel,FreeMode]}
    
      spaceBetween={20}
      // slidesPerView={'auto'}
      loop={false}
      mousewheel={true}
      freeMode={true}
      // breakpoints={{
      //   991.98: {
      //     width: 991.98,
      //     slidesPerView: 3,
      //   },
      //   768.98: {
      //     width: 768.98,
      //     slidesPerView: 2,
      //   },
      //   320.98: {
      //     width: 320.98,
      //     slidesPerView: 1,
      //   },

      // }}
    >
    
      {products.map((item) => (
        <SwiperSlide key={item.id} >
           <div className='slide_box'>{item.value}</div>
        </SwiperSlide>
      ))}
    </Swiper>
    <div><button className='add_button' onClick={hadleAdd}> Add New Wallet +</button></div>
    </div>

        
        
    </>
  );
}

export default App;



// {products.map((item) => (
//   <SwiperSlide key={item.id} >
//    <p>{item.value}</p>
//   </SwiperSlide>
// ))}

// className={styles.swiper_slide}

// style={{backgroundColor:'blue',  height: "50px",}}