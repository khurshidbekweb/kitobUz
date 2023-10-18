import "./index.css"
const Hero = () => {
  return (
    <>
      <div className="hero ">
        <div className="container">
          <div className="hero-inner">
            <form action="#" className="flex items-center justify-center mt-12">
                <label htmlFor="heroSearch" className="flex relative items-center justify-between w-[500px] border-2  rounded-md">
                <i className='bx bx-search absolute left-2 top-2 text-xl' ></i>
                <input type="text" id="heroSearch" placeholder="search..." className=" pl-8 py-2  focus:outline-none" />
                <button className="btn bg-sky-400 px-3 py-2 rounded text-white">Search</button>
                </label>
            </form>
           <div className="select flex items-center gap-4 mt-12 justify-center">
           <select name="#" id="" className="px-4  rounded drop-shadow-xl focus:outline-none py-2 bg-stone-200 w-[200px] font-semibold">
                <option value="1" disabled selected>Janr</option>
                <option value="1" >AAA</option>
                <option value="1" >BBB</option>
                <option value="1" >CCC</option>
            </select>
            <select name="#" id="" className="px-4  rounded drop-shadow-xl focus:outline-none py-2 bg-stone-200 w-[200px] font-semibold">
                <option value="1" disabled selected>Avtor</option>
                <option value="1" >AAA</option>
                <option value="1" >BBB</option>
                <option value="1" >CCC</option>
            </select>
            <select name="#" id="" className="px-4  rounded drop-shadow-xl focus:outline-none py-2 bg-stone-200 w-[200px] font-semibold">
                <option value="1" disabled selected>Kitob holati</option>
                <option value="1" >AAA</option>
                <option value="1" >BBB</option>
                <option value="1" >CCC</option>
            </select>
            <select name="#" id="" className="px-4  rounded drop-shadow-xl focus:outline-none py-2 bg-stone-200 w-[200px] font-semibold">
                <option value="1" disabled selected>Kitob tili</option>
                <option value="1" >AAA</option>
                <option value="1" >BBB</option>
                <option value="1" >CCC</option>
            </select>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
