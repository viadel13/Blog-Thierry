import { useEffect, useState } from 'react'
import Navbar from '../Navbar/Index'
import '../../assets/css/contact.css'

const Contact = () => {
  const[contactMount, setContactMount] = useState(false)
  
  useEffect(()=>{
    setContactMount(true)

    return ()=> setContactMount(false)
  },[])

  return (
    <>
      <Navbar contactMount={contactMount} />
    </>
  )
}

export default Contact
