import { IMG_BASE_URL } from "../../constants/img.constant"


function Index(props) {
  return (
    <>
        <li className="card border-2 rounded-xl overflow-hidden">
                <img src={IMG_BASE_URL+props.product.image} alt={props.product.id} className="w-[280px] h-[250px]"/>
                <div className="px-5 flex flex-col gap-2 mt-3 mb-2">
                    <h2 className="font-bold text-2xl">{props.product.title}</h2>
                    <p className="opacity-50 font-medium text-lg">{props.product.author.value}</p>
                    <p className="font-medium text-lg">{props.product.genre.value}</p>                  
                    <p className="">Holati: <span className="font-medium">{props.product.status}</span></p>
                </div>
        </li>
    </>
  )
}

export default Index