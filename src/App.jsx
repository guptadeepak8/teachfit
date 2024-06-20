import { Link } from 'react-router-dom'



function App() {


  return (
    <div className=' w-full'>
      <h2>Click buttons to go to pages</h2>
      <Link to='/candidate'className='py-10 px-20 hover:text-blue-500 '>candidate</Link>
      <Link to='/empolyee'className='py-10 px-20 hover:text-blue-500'>Empolyee</Link>
      <Link to='/candidateform'className='py-10 px-20 hover:text-blue-500'>cadidateForm</Link>
      <Link to='/orgform'className='py-10 px-20 hover:text-blue-500'>orgForm</Link>
    </div>
  )
}

export default App
