import Phone from '../../assets/image/phone.svg'
import Telegram from '../../assets/image/telegram.svg'
import Instagram from '../../assets/image/instagram.svg'

function Footer() {
  return (
    <div className="Footer  w-full bg-[#242424]">
        <div className="container">
        <div className="wrapperFoter flex justify-between items-center pt-[60px] p-5">
                <div className="logo">
                    <a href="#"><h1 className="text-[35px] text-white font-[800]">KitobUz</h1></a>
                </div>
                <nav className='w-[750px] flex justify-between items-center'>
                    <a href="#" className="link text-white font-medium">Almashaman</a>
                    <a href="#" className="link text-white font-medium">Vaqtincha almashaman</a>
                    <a href="#" className="link text-white font-medium">Sotaman</a>
                    <a href="#" className="link text-white font-medium">Hadya</a>
                    <a href="#" className="link text-white font-medium">Izlayapman</a>
                </nav>
                <div className="btn w-[230px] flex justify-between items-center">
                    <button className="add border p-2 px-4 rounded text-white font-medium">Add</button>
                    <button className="singIn bg-yellow-400 p-2 text-white px-4 font-medium rounded">Ro`yxatdan o`tish</button>
                </div>                
        </div>
        <div className="flex justify-between items-center text-white px-5">
                  <h5 className="w-[160px] p-2 text-start">Umid qilamizki, bizdan yaxshi foyda kurdingiz</h5>
                  <ul className="list flex w-[500px] justify-between items-center">
                    <li className="item"><a href="#" className="link text-white">Biz haqimizda</a></li>
                    <li className="item"><a href="#" className="link text-white">Asosiy</a></li>
                    <li className="item"><a href="#" className="link text-white">E`lonlar</a></li>
                    <li className="item"><a href="#" className="link text-white">Kontaktlar</a></li>
                  </ul>
        </div>
        </div>
        <span className="block w-[100%] h-[0.5px] bg-white"></span>
        <div className="container">
          <ul className="list flex justify-between items-center p-4 py-8">
            <li className="item">
              <a href="#" className="text-white"> ©2022 Thousand Sunny. All rights reserved </a>
            </li>
            <li className="item flex justify-between items-center w-[170px]">
              <a href="#" className=" rounded-full p-1"><img src={Phone} alt="telefon" /></a>
              <a href="#" className='text-white'><img src={Telegram} alt="telegram" /></a>
              <a href="#"><img src={Instagram} alt="instagram" /></a>
            </li>
            <li className="item">
              <a href="#" className="link text-white">Design by Suges group</a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Footer;