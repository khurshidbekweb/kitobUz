
function index() {
  return (
    <div className="Footer bg-black">
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
                  <h5 className="w-[160px] p-4 text-start">Umid qilamizki, bizdan yaxshi foyda kurdingiz</h5>
                  <ul className="list flex w-[500px] justify-between items-center">
                    <li className="item"><a href="#" className="link text-white">Biz haqimizda</a></li>
                    <li className="item"><a href="#" className="link text-white">Asosiy</a></li>
                    <li className="item"><a href="#" className="link text-white">E`lonlar</a></li>
                    <li className="item"><a href="#" className="link text-white">Kontaktlar</a></li>
                  </ul>
        </div>
        <hr />
        </div>
    </div>
  )
}

export default index