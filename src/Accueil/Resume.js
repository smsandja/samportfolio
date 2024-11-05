import { Link } from "react-router-dom/cjs/react-router-dom";

const Resume = ({projets}) => {
    return ( 
       <div className="font-google">
            <div className="flex flex-col md:flex-row w-full  h-64" style={{ height: 450 }}>
                <div className=" flex-1 w-full md:w-32 bg-cover sm:bg-cover bg-[url('./picture/R21.jpg')] ...">
                
                </div>
                <div className="flex-1 w-full p-10 md:w-32  md:p-32  font-google text-2xl bg-amber-300 ...">
                    <h2 className="font-bold">Salut ! </h2>
                    <p>Je m'appelle Sam</p>
                    <p> Developpeur Full Stack et j'aime le tennis ! </p>
                    <p>*('=')*</p>
                </div>
            </div>
            <div>
                <h2 className="text-center font-bold p-12 text-2xl">Récents projets</h2>
                <p className="text-wrap text-center text-xl md:text-wrap w-100">En tant que Dev et Assistant projet, voici quelques projets récents sur lesquels j'ai travaillé</p> 
                    <ul  className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 sm:mt-10 sm:pt-5">
                        {projets.map((projet) => (
                            <li key={projet.id}>
                                <div className="flex items-center gap-x-6">
                                    <img alt="" src="#" className="h-16 w-16 rounded-full" />
                                    <div>
                                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{projet.title}</h3>
                                    <p className="text-sm/6 font-semibold text-indigo-600">{projet.body}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/dev"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Voir les projets
            </Link>
          </div>
       </div> 
     );
}
 
export default Resume;