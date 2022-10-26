import { useState, useEffect } from "react"

const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()

        

        console.log('enviando formulario')
    }


  return (
    <div className="md:w-1\2 lg:w-2/5">
        <h1 className="font-black text-3xl text-center">Seguimiento Pacientes</h1>

        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {''}
            <span className="text-indigo-500 font-bold">Administralos</span>
        </p>

        <form 
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5">
            <div className="mb-5">
                <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre de la Mascota</label>

                <input 
                    id="mascota"
                    type="texto" 
                    placeholder="Nombre de la Mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded"
                    value={nombre}
                    onChange={(e)=> setNombre(e.target.value)}
                    />
                    
            </div>
            <div className="mb-5">
                <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre del Propietario</label>

                <input 
                    id="propietario"
                    type="texto" 
                    placeholder="Nombre del Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded"
                    value={propietario}
                    onChange={(e)=> setPropietario(e.target.value)}
                    />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>

                <input 
                    id="email"
                    type="email" 
                    placeholder="Email del Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
            </div>
            <div className="mb-5">
                <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>

                <input 
                    id="alta"
                    type="date" 
                    
                    className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded"
                    value={fecha}
                    onChange={(e)=> setFecha(e.target.value)}
                    />
            </div>
            <div>
                <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                    Sintomas
                </label>

                <textarea  
                    id="sintomas" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
                    placeholder="Describe los Sintomas"
                    value={sintomas}
                    onChange={(e)=> setSintomas(e.target.value)}
                    
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