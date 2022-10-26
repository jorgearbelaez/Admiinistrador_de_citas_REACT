

const Formulario = () => {
  return (
    <div className="md:w-1\2 lg:w-2/5">
        <h1 className="font-black text-3xl text-center">Seguimiento Pacientes</h1>

        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {''}
            <span className="text-indigo-500 font-bold">Administralos</span>
        </p>

        <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
            <div className="mb-5">
                <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre de la Mascota</label>

                <input 
                    id="mascota"
                    type="texto" 
                    placeholder="Nombre de la Mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded"/>
            </div>
            <div className="mb-5">
                <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre del Propietario</label>

                <input 
                    id="propietario"
                    type="texto" 
                    placeholder="Nombre del Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded"/>
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>

                <input 
                    id="email"
                    type="email" 
                    placeholder="Email del Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded"/>
            </div>
            <div className="mb-5">
                <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>

                <input 
                    id="alta"
                    type="date" 
                    
                    className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded"/>
            </div>
            <div>
                <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                    Sintomas
                </label>

                <textarea  
                    id="sintomas" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
                    placeholder="Describe los Sintomas"
                    
                />                
            </div>

            <input 
                type="submit" 
                className="bg-indigo-500 w-full p-3 rounded text-white uppercase font-bold hover:bg-indigo-900 cursor-pointer transition-all"
                value="Agregar Paciente"
                />



        </form>

    </div>
  )
}

export default Formulario