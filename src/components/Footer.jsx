import { FaInstagram, FaTwitter, FaTwitch } from "react-icons/fa";

function Footer() {
  return (
    <div className='container bg-[#5DA5A4] border-2 h-24 text-white text-lg text-center p-3'>
      <div className='show-desktop'>
       <span>© OpenBootCamp 
        <span className='invisible sm:visible'> - </span>
        <span>Open WeekApps - 2022
        </span>
       </span> 
      <FaInstagram />
      <FaTwitter />
      <FaTwitch />
      </div>
    </div>
  )
}

export default Footer