import React , {useState  , useEffect} from 'react'
import axios from 'axios';

const Servers = () => {

    
const [servers, setServers] = useState(null);

useEffect( ()=> {
    
    const fetchdata = async() => {

        try{
            const response = await axios.get("/api/servers.json");
            setServers(response.data);
            console.log(servers);

        }catch(error){ console.log(error) }
    }
    fetchdata();
    })

useEffect(()=>{
    
},[servers])

  return (
    <div className="container-fluid ">

        <div>
            <h1 className="text-center mb-4 pt-4"> Servers </h1>
        </div>

        <div>
            <div className="row justify-content-center" >
            { servers ? (servers.slice(0,3).map( item => (
                <div className="col-xl p-2 col-lg-6  align-items-center zoom " key={item.ID}>
                    <div className="servers_item d-flex">
                        <img src={"img/products/servers/" + item.ID + ".jpg"} width="108" height="108" className="border p-2 rounded shadow" alt="imagem servers"/>
                        <div className="info text-left m-2 ">
                            
                                <ul>
                                    <li> {item.Name} </li>
                                    <li> {item.Processor}</li>
                                    <li> {item.RAM} </li>
                                    <li> {item.HD}</li>
                                </ul>
                            
                        </div>
                    </div>
                </div>
            ))):(<p> loading </p>)}
            </div> 
             {/* endof 1st row */}

            
            <div className="row justify-content-center" >
                { servers ? (servers.slice(3).map( item => (
                <div className="col-xl col-lg-6 p-2  align-items-center zoom" key={item.ID}>
                    <div className="servers_item d-flex">
                        <img src={"img/products/servers/" + item.ID + ".jpg"} width="108" height="108" className="border p-2 rounded shadow" alt="imagem servers"/>
                        <div className="info text-left m-2">
                            
                                <ul>
                                    <li> {item.Name} </li>
                                    <li> {item.Processor} </li>
                                    <li> {item.RAM} </li>
                                    <li> {item.HD} </li>
                                </ul>
                            
                        </div>
                    </div>
                    
                </div>
                ))):(<p> loading </p>)} 
            </div>
	    </div>
    </div>
  )
}

export default Servers
