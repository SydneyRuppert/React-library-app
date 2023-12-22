import Background from '../assets/images/sky.jpeg'

function About() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 bg-white bg-opacity-50 text-black rounded'>This library is meant to help you keep track of your reading list and update it as you see fit. Enjoy!</h3>
        </div>
    </div>
  )
}

export default About