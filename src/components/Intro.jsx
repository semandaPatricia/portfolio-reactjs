function Intro() {
    return (
      <div className='flex justify-center flex-col items-center'>
          <div className='h-[120px] border-r-[1px] mt-[-20px]'/>
          <div className='w-[5px] h-[5px] bg-orange-600 rounded-full'></div>
          <h2 className='mt-5 text-black font-medium text-[13px]
          tracking-widest'>HELLO! My name is </h2>
          <h2 className='text-[50px] font-bold text-black tracking-widest
          mt-5'>Fitzgerald <br></br>Mark</h2>
          <img src="" alt="avatarpic"
          className='w-[160px] h-[160xp] bg-gray-200 p-7 rounded-full'
          />
      </div>
    )
  }
  
  export default Intro