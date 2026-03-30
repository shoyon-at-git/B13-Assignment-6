import './App.css'
import Banner from './assets/components/banner/Banner/Banner'
import NavBar from './assets/components/navbar/NavBar'

function App() {
  
  return (
    <>
    <header>
      <NavBar></NavBar>
    </header>
    <main>
      <section>
        <Banner></Banner>
      </section>
      <section id='testimonial' className='bg-[#4F39F6] px-5 xl:px-50 py-4 xl:py-15 flex justify-between flex-wrap xl:flex-nowrap text-white'>
        <div className=' border-r px-10 md:px-31 border-white/50 flex flex-col items-center gap-2 md:gap-3'>
          <h1 className='text-3xl xl:text-6xl font-bold xl:font-extrabold'>50k+</h1>
          <p className='font-normal xl:font-medium text-sm xl:text-2xl'>Active Users</p>
        </div>
        <div className=' border-white/50 flex flex-col items-center gap-2 md:gap-3'>
          <h1 className='text-3xl xl:text-6xl font-bold xl:font-extrabold'>200+</h1>
          <p className='font-normal xl:font-medium text-sm xl:text-2xl'>Premium Tools</p>
        </div>
        <div className='border-l px-10 md:px-31 flex flex-col items-center gap-2 md:gap-3'>
          <h1 className='text-3xl xl:text-6xl font-bold xl:font-extrabold'>4.9</h1>
          <p className='font-normal xl:font-medium text-sm xl:text-2xl'>Rating</p>
        </div>
      </section>
      
    </main>
    </>
  )
}

export default App
