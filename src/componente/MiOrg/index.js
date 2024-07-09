import { useState } from "react";
import "./MiOrg.css"

const MiOrg =(props)=>{
    console.log(props);

    // const [mostrar, actualizarMostrar] = useState(true)  
    // const manejarClick = ()=>{
    //     console.log("Mostrar/ ocultar elemento", !mostrar);
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi Organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg