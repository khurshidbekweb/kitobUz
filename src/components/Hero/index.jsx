
import "./index.css"
const Hero = () => {

  return (
    <>
      <div className="hero  pt-20">
        <div className="container">
          <div className="hero-inner">
            <form action="#" className="flex dark:text-black items-center justify-center mt-12">
                <label htmlFor="heroSearch" className="flex relative items-center justify-between w-[500px] border-2  rounded-md">
                <i className='bx bx-search absolute left-2 top-2 text-xl' ></i>
                <input type="search" id="heroSearch" placeholder="search..." className=" pl-8 py-2 w-[100%] shadow dark:bg-white focus:outline-none" />
                <button className="btn bg-sky-400 px-3 py-2 rounded text-white">Search</button>
                </label>
            </form>
           <div className="select flex items-center gap-4 mt-12 justify-center">
           <select name="#" id="" className="px-4 dark:text-black rounded drop-shadow-xl focus:outline-none py-2 bg-stone-200 w-[200px] font-semibold">
                <option hidden disabled selected>Janr</option>
                <option value="1" >AAA</option>
                <option value="1" >BBB</option>
                <option value="1" >CCC</option>
            </select>
            <select name="#"  className="px-4 dark:text-black rounded drop-shadow-xl focus:outline-none py-2 bg-stone-200 w-[200px] font-semibold">
                <option hidden disabled selected>Avtor</option>
                <option value="1" >AAA</option>
                <option value="1" >BBB</option>
                <option value="1" >CCC</option>
            </select>
            <select name="#" id="" className="px-4 dark:text-black rounded drop-shadow-xl focus:outline-none py-2 bg-stone-200 w-[200px] font-semibold">
                <option hidden disabled selected>Kitob holati</option>
                <option value="new" >Yangi</option>
                <option value="normal" >Oddiy</option>
                <option value="old" >Eski</option>
            </select>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
