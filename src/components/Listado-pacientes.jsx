
import Paciente from "./Paciente"




const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <>
            <h2 className="font-black text-3xl text-center" >Listado-pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                  Administra tus {''} 
                  <span className="text-indigo-600 font-bold  ">Pacientes y Citas</span>
            </p>


            {pacientes.map((paciente, index)=>{

              return(
                  <Paciente 
                  // key={index}// mala practica por temas de performance
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                  />
                )
            })}
        </>
          ) : (
            <>
              <h2 className="font-black text-3xl text-center" >No hay pacientes</h2>
              <p className="text-xl mt-5 mb-10 text-center">
                  Agrega tus pacientes {''} 
                  <span className="text-indigo-600 font-bold  ">Aqui los podras ver</span>
              </p>
             
            </>            
          )}

       
        

     </div>
  )
}

export default ListadoPacientes