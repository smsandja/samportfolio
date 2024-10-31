const Resume = () => {
    return ( 
       <div>
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
       </div> 
     );
}
 
export default Resume;