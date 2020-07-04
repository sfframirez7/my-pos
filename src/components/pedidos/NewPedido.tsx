import React, { useState } from 'react' 
import { IPedido } from '../../models/PedidoModel'
import { NewPedidoService } from '../../services/PedidoService'
import Loading from '../common/Loading'

const NewPedido : React.FC<{}> = () => { 

    const [pedido, setPedido]                           = useState("")
    const [pedidoDescription, setpedidoDescription]     = useState("")
    const [loading, setLoading]                         = useState(false)

    function NewPedido()
    {
        if(!pedido || !pedidoDescription)
            return

        setLoading(true)

        var modelPedido : IPedido = {
            CreatedAt   : new Date().toISOString(),
            Description : pedidoDescription,
            Pedido      : pedido,
            Id          : ""
        } 

        NewPedidoService(modelPedido)
        .then((res) => {
            console.log(res);
            setLoading(false)
            setPedido("")
            setpedidoDescription("")
        }).catch((err) => {
            setLoading(false)
            console.log(err);
        });
    }


     return (
         <div className="my-card p-3 m-2 bg-white">

             <div className="text-center">
                 <h4 className="font-weight-bold">
                     Nuevo Pedido
                 </h4>
                 <hr/>
             </div>
            <div className="form-group">
                <label htmlFor="txtPedido">Pedido:</label>
                <input type="text" 
                    className="form-control" 
                    id="txtPedido" 
                    placeholder="Pedido"
                    value={pedido}
                    onChange={(e)=> setPedido(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="txtPedidoDescription">Description:</label>
                <textarea className="form-control" 
                    name="txtPedidoDescription" id="txtPedidoDescription" 
                    cols={30} rows={2}
                    value={pedidoDescription}
                    onChange={(e)=> setpedidoDescription(e.target.value)}>

                </textarea>
            </div>


            <div className="text-center mt-3">
               <Loading loading={loading}/>
            </div>

            <div className="text-center mt-3">
                <button className="btn btn-success" onClick={NewPedido} disabled={!pedido || !pedidoDescription}>
                    Crear Pedido
                </button>
            </div>

        </div>
       
    )
}
export default NewPedido