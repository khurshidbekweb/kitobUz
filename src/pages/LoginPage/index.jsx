import "./index.css";
function index() {
  return (
    <>
      <div className="wrapperDash">
        <div className="container">
          <div className="flex justify-center items-center h-[100vh]">
            <div className="forma flex flex-col justify-center gap-4 w-[25%] h-[40%] border-4 border-sky-500 rounded-md">
              <h1 className="login text-center text-xl font-bold">Login</h1>
              <form className=" flex flex-col justify-center items-center gap-4 ">
                <label className="flex items-center justify-end">
                  <input
                    type="text"
                    required
                    placeholder="User"
                    className="border-2 border-sky-500  rounded bg-slate-200 focus:outline-none pr-5"
                  />
                  <i className="bx bx-user absolute mr-1"></i>
                </label>
                <label className="flex items-center justify-end">
                  <input
                    type="password"
                    id="password"
                    required
                    placeholder="Password"
                    className="border-2 border-sky-500  rounded bg-slate-200 focus:outline-none pr-5"
                  />
                  <i className="bx bx-lock-alt absolute mr-1"></i>
                </label>
                <button className="btn bg-cyan-500 border-1 border-sky-500 rounded px-5 py-1 font-medium ">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
