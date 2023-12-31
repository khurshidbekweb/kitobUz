import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import bookImg from "../../assets/image/bookImg.png";
import Header from "../../components/Header/index.jsx";
import Cards from "../../components/Cards";
import { useQuery } from "@tanstack/react-query";
import { getAllBooks } from "../../utils/getAllProducts";

const Home = () => {
  const data = useQuery({
    queryKey: ["get_all_book"],
    queryFn: getAllBooks,
  });
  return (
    <>
      <Header />
      <Hero />
      <section className="main p-5">
        <div className="container">
          <div className="main-inner mb-5">
            <h1 className="title mt-16 text-center font-bold text-4xl">
              Siz izlagan Kitoblar
            </h1>
            <ul className="cards mt-10 flex gap-5">
                {data.data?.map((item)=>{
                  return <Cards key={item.id} product={item} />
                })}
            </ul>
          </div>
        </div>
      </section>
      <section className="main">
        <div className="container">
          <div className="main-inner mb-5">
            <h2 className="title mt-16 font-semibold text-3xl">
              Tavsiya etilgan Kitoblar
            </h2>
            <ul className="cards mt-10 flex gap-5">
              <li className="card border-2 rounded-xl ">
                <img src={bookImg} alt="book image" />
                <div className="px-5 flex flex-col gap-2 mt-3 mb-2">
                  <h2 className="font-bold text-2xl">Ihyou Ulumid din</h2>
                  <p className="opacity-50 font-medium text-lg">
                    Abu Homid G’azzoliy
                  </p>
                  <a href="#" className="text-blue-500">
                    Vaqtincha Almashtiraman
                  </a>
                  <p className="">
                    Holati: <span className="font-medium">O’rtacha</span>
                  </p>
                </div>
              </li>
              <li className="card border-2 rounded-xl ">
                <img src='https://176.53.162.53:9000/books/0699d42d-735d-49fc-a84d-8c5946e14ab9.jpeg' alt="book image" />
                <div className="px-5 flex flex-col gap-2 mt-3 mb-2">
                  <h2 className="font-bold text-2xl">Ihyou Ulumid din</h2>
                  <p className="opacity-50 font-medium text-lg">
                    Abu Homid G’azzoliy
                  </p>
                  <a href="#" className="text-blue-500">
                    Vaqtincha Almashtiraman
                  </a>
                  <p className="">
                    Holati: <span className="font-medium">O’rtacha</span>
                  </p>
                </div>
              </li>
              <li className="card border-2 rounded-xl ">
                <img src={bookImg} alt="book image" />
                <div className="px-5 flex flex-col gap-2 mt-3 mb-2">
                  <h2 className="font-bold text-2xl">Ihyou Ulumid din</h2>
                  <p className="opacity-50 font-medium text-lg">
                    Abu Homid G’azzoliy
                  </p>
                  <a href="#" className="text-blue-500">
                    Vaqtincha Almashtiraman
                  </a>
                  <p className="">
                    Holati: <span className="font-medium">O’rtacha</span>
                  </p>
                </div>
              </li>
              <li className="card border-2 rounded-xl ">
                <img src={bookImg} alt="book image" />
                <div className="px-5 flex flex-col gap-2 mt-3 mb-2">
                  <h2 className="font-bold text-2xl">Ihyou Ulumid din</h2>
                  <p className="opacity-50 font-medium text-lg">
                    Abu Homid G’azzoliy
                  </p>
                  <a href="#" className="text-blue-500">
                    Vaqtincha Almashtiraman
                  </a>
                  <p className="">
                    Holati: <span className="font-medium">O’rtacha</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="main">
        <div className="container">
          <div className="main-inner mb-20">
            <h2 className="title mt-16 font-semibold text-3xl">
              Bolalar kitobi
            </h2>
            <ul className="cards mt-10 flex gap-5">
              <li className="card hover:shadow-lg transition-shadow border-2 rounded-xl ">
                <img src={bookImg} alt="book image" />
                <div className="px-5 flex flex-col gap-2 mt-3 mb-2">
                  <h2 className="font-bold text-2xl">Ihyou Ulumid din</h2>
                  <p className="opacity-50 font-medium text-lg">
                    Abu Homid G’azzoliy
                  </p>
                  <a href="#" className="text-blue-500">
                    Vaqtincha Almashtiraman
                  </a>
                  <p className="">
                    Holati: <span className="font-medium">O’rtacha</span>
                  </p>
                </div>
              </li>
              <li className="card border-2 rounded-xl ">
                <img src={bookImg} alt="book image" />
                <div className="px-5 flex flex-col gap-2 mt-3 mb-2">
                  <h2 className="font-bold text-2xl">Ihyou Ulumid din</h2>
                  <p className="opacity-50 font-medium text-lg">
                    Abu Homid G’azzoliy
                  </p>
                  <a href="#" className="text-blue-500">
                    Vaqtincha Almashtiraman
                  </a>
                  <p className="">
                    Holati: <span className="font-medium">O’rtacha</span>
                  </p>
                </div>
              </li>
              <li className="card border-2 rounded-xl ">
                <img src={bookImg} alt="book image" />
                <div className="px-5 flex flex-col gap-2 mt-3 mb-2">
                  <h2 className="font-bold text-2xl">Ihyou Ulumid din</h2>
                  <p className="opacity-50 font-medium text-lg">
                    Abu Homid G’azzoliy
                  </p>
                  <a href="#" className="text-blue-500">
                    Vaqtincha Almashtiraman
                  </a>
                  <p className="">
                    Holati: <span className="font-medium">O’rtacha</span>
                  </p>
                </div>
              </li>
              <li className="card border-2 rounded-xl ">
                <img src={bookImg} alt="book image" />
                <div className="px-5 flex flex-col gap-2 mt-3 mb-2">
                  <h2 className="font-bold text-2xl">Ihyou Ulumid din</h2>
                  <p className="opacity-50 font-medium text-lg">
                    Abu Homid G’azzoliy
                  </p>
                  <a href="#" className="text-blue-500">
                    Vaqtincha Almashtiraman
                  </a>
                  <p className="">
                    Holati: <span className="font-medium">O’rtacha</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
