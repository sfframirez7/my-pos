import React, { useState, useEffect } from 'react' 
import Pedido from './Pedido'
import { IPedido } from '../../models/PedidoModel'
import { GetPedidos } from '../../services/PedidoService'

const Pedidos : React.FC<{}> = () => { 

    const [pedidos, setPedidos] = useState<IPedido[]>([])


    useEffect(()=> {
        LoadPedidos()
    }, [])

    function LoadPedidos()
    {
        GetPedidos().onSnapshot((snap)=> {
            var _pedidos : IPedido[] = []
            snap.forEach((doc)=> {
                const { CreatedAt , Description, Pedido} = doc.data();

                var _pedido : IPedido = {
                    CreatedAt,
                    Description,
                    Id : doc.id,
                    Pedido

                }
                _pedidos.push(_pedido)
            })
            setPedidos(_pedidos)
        })

    }

     return (
         <div>
             <div className="container">
                 <div className="row">
                     <div className="col-12 col-md-10 offset-md-1 ">

                         {pedidos.map((pedido, index)=> {
                             return (
                                 <div key={index}>
                                     <Pedido pedido={pedido}/>

                                 </div>
                             )
                         })}
                 
                     </div>
                 </div>
             </div>
         </div>

    )
}
export default Pedidos