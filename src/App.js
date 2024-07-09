import { useState } from 'react';
import {v4 as uuid } from 'uuid'
import './App.css';
import Header from './componente/Header/Header';
import Formulario from './componente/Formulario/Formulario';
import MiOrg from './componente/MiOrg';
import Equipo from './componente/Equipo';
import Footer from './componente/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState (false)
  const [colaboradores, actualizarColaboradores] = useState ([{
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysrm.png",
      nombre: "Genesys Rondon",
      puesto: "Desarrolladora de software e instructora",
      fav: false
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false
  }])

  const[equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }, 
])

  const cambiarMostrar = () =>{
    actualizarMostrar (!mostrarFormulario)
  }

  //registrar colaborador//
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador);
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar Colaborador//
  const eliminarColaborador = (id) =>{
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter ((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo//
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos (equiposActualizados)
  }

  //Crear equipo//
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos ([...equipos, {...nuevoEquipo, id:uuid() }])
  }

  const like = (id) =>{
    console.log("like");
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      { 
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador = {registrarColaborador}
          crearEquipo={crearEquipo}
          /> 
      }      

      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        equipos.map( (equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores= {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like ={like}
         />
        )
      }

      < Footer />

    </div>
  );
}

export default App;


