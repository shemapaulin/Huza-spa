import pic from '../assets/pic1.jpg'

const homepage = () => {
    const pic1 ={
        backgroundImage: `url(${pic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '90vh',
        marginLeft: '160px',
        marginRight: '160px'

    }
  return (
    <>
  
  <section className='h-screen '>
  <div className="w-full h-[30%] bg-gray-300 flex flex-row justify-between items-center p-[70px] text-[#415941] font-bold font-lora  ">
      <h1 className="text-2xl">HUZA MOBILE SPA</h1>

      <div className="flex flex-row gap-[50px]" >
      <h2>ABOUT</h2>
       <h2>SERVICES</h2> 
        <h2>PACKAGES</h2>
          <h2>CONTACT</h2>
      </div>
     
    </div>
    
    <div className="w-[80%] h-[70%] flex flex-col justify-center items-center z-10 absolute inset-y-[20%] gap-10" style={pic1}>
     <h1 className="text-[#415941] font-bold font-lora text-5xl">Relax, Refresh, Revitalize</h1>
     <h1 className='text-[#415941] font-bold font-lora text-2xl'>RESTORATIVE MASSAGE THERAPY</h1>
     <button className="w-[161px] h-[40px] bg-[#415941] text-white font-bold font-lora p-8 flex items-center justify-center text-1xl ">View Services</button>
     
    </div>
  </section>
  
    </>
  )
}

export default homepage