import React, { useEffect, useState } from 'react' 
import NewPedidoItem from './NewPedidoItem'
import { GetPedido, GetPedidoItems } from '../../services/PedidoService'
import { useParams } from 'react-router-dom';
import { IPedido, IPedidoItem } from '../../models/PedidoModel';
import PedidoItem from './PedidoItem';
import Loading from '../common/Loading';

const SeePedido : React.FC<{}> = () => { 

    const [pedido, setPedido]           = useState<IPedido>()
    const [pedidoItems, setPedidoItem]  = useState<IPedidoItem[]>([])
    const [loading, setLoading]         = useState(false)

    let { pedidoUid } = useParams();


    useEffect(()=> {
        LoadPedido()
        LoadPedidoItems()
    }, [])

    function LoadPedido()
    {
        setLoading(true)
        GetPedido(pedidoUid).onSnapshot((snap)=> {
            
            if(snap.exists)
            {
                const data = snap.data()
                
                var _pedido : IPedido = {
                    Id          : snap.id,
                    CreatedAt   : data?.CreatedAt,
                    Description : data?.Description,
                    Pedido      : data?.Pedido
                }
                setPedido(_pedido)
            }
            setLoading(false)
        })
    }
    

    function LoadPedidoItems()
    {
        setLoading(true)
        GetPedidoItems(pedidoUid).onSnapshot((snap)=> {
            var _pedidoItems : IPedidoItem[] = []
            snap.forEach((doc)=> {
                const data = doc.data()

                var _pedido : IPedidoItem = {
                    Abonos          : data?.Abonos,
                    Client          : data?.Client,
                    Cost            : data?.Cost,
                    Description     : data?.Description,
                    Price           : data?.Price,
                    PriceDetailed   : data?.PriceDetailed,
                    Id              : doc.id
                }
                _pedidoItems.push(_pedido)
                
            })

            setPedidoItem(_pedidoItems)
            setLoading(false)
        })
    }

     return (
         <div>
               <div className="container">

                   <div className="my-card bg-white my-3 py-2">


                        <div className="row">
                            <div className="col">
                                <button className="btn mr-4" onClick={()=>window.history.back()}>
                                    <i className="fas fa-arrow-left fa-2x"></i>
                                </button>
                            </div>
                        </div>

                        <div className="row">
                           <div className="col text-center">
                               <Loading loading={loading}/>
                           </div>
                       </div>

                        <div className="row  px-3">
                            <div className="col text-center">
                                <h3 className="font-weight-bold d-inline">{pedido?.Pedido}</h3>

                                <p className="text-muted">
                                    {pedido?.Description}
                                </p>
                                <hr/>
                            </div>
                        </div>

                        <div className="text-center">
                            <button className="btn btn-primary m-1" 
                                    type="button" data-toggle="collapse" 
                                    data-target="#collapseNewPedidoItem" aria-expanded="false" 
                                    aria-controls="collapseExample">
                                <span className="mx-2">
                                    Nuevo Item
                                </span>
                                <i className="fas fa-plus"></i>
                            </button>

                        </div>
                        
                        <div className="collapse" id="collapseNewPedidoItem">
                            <NewPedidoItem/>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-10 offset-md-1 ">
                                <h4 className="mx-2">Items:</h4>
                                {pedidoItems.map((item, index)=> {
                                    return (
                                        <div key={index}>
                                            <PedidoItem item={item}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                
                   </div>
               </div>
         </div>

    )
}
export default SeePedido