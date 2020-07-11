import React, { useState } from 'react' 
import { IPedidoItem } from '../../models/PedidoModel'
import { NewPedidoItemService } from '../../services/PedidoService'
import { useParams } from 'react-router-dom'
import Loading from '../common/Loading'

const NewPedidoItem : React.FC<{}> = () => { 


    const [Client, setClient ]                =    useState("")
    const [Description, setDescription ]      =    useState("")
    const [PriceDetailed, setPriceDetailed ]  =    useState("")
    const [Price, setPrice ]                  =    useState(0.0)
    const [Cost, setCost ]                    =    useState(0.0)

    const [loading, setLoading ]              =    useState(false)

    let { pedidoUid } = useParams();

    function AddNewItem()
    {

        if(!pedidoUid)
            return

        setLoading(true)
        var model : IPedidoItem = {
            Client,
            Cost,
            Abonos : [],
            Description,
            Price,
            PriceDetailed
        }

        NewPedidoItemService(pedidoUid,model)?.then((res)=>
        {
            setClient("")
            setDescription("")
            setPriceDetailed("")
            setPrice(0.00)
            setCost(0.00)
            
            setLoading(false)
        }).catch((err)=> {
            console.log(err);
            setLoading(false)
        })
    }

     return (
         <div>
                <div className="row p-2">
                    <div className="col-12 col-md-4 text-md-right">
                        <h5 className="font-weight-bold">
                            Cliente:
                        </h5>
                    </div>
                    <div className="col-12 col-md-6 text-md-left">
                        <input type="text" className="form-control" name="txtCliente" 
                        id="txtCliente" placeholder="Cliente" value={Client} onChange={(e)=> setClient(e.target.value)}/>
                    </div>
                </div>
                <div className="row p-2">
                    <div className="col-12 col-md-4 text-md-right">
                        <h5 className="font-weight-bold">
                            Descripción del pedido:
                        </h5>
                    </div>
                    <div className="col-12 col-md-6 text-md-left">
                        <input type="text" className="form-control" name="txtDescripcion" 
                            id="txtDescripcion"  placeholder="Descripción" value={Description} onChange={(e)=> setDescription(e.target.value)}/>
                    </div>
                </div>
                <div className="row p-2">
                    <div className="col-12 col-md-4 text-md-right">
                        <h5 className="font-weight-bold">
                            Detalle del precio:
                        </h5>
                    </div>
                    <div className="col-12 col-md-6 text-md-left">
                        <input type="text" className="form-control" name="txtDescripcion" 
                            id="txtDescripcion"  placeholder="Descripción" value={PriceDetailed} onChange={(e)=> setPriceDetailed(e.target.value)}/>
                    </div>
                </div>
                <div className="row p-2">
                    <div className="col-12 col-md-4 text-md-right">
                        <h5 className="font-weight-bold">
                            Precio:
                        </h5>
                    </div>
                    <div className="col-12 col-md-6 text-md-left">
                        <input type="number" className="form-control" name="txtPrecio" 
                            id="txtPrecio"  placeholder="Precio" value={Price} onChange={(e)=> setPrice( parseFloat(e.target.value))}/>
                    </div>
                </div>
                <div className="row p-2">
                    <div className="col-12 col-md-4 text-md-right">
                        <h5 className="font-weight-bold">
                            Costo:
                        </h5>
                    </div>
                    <div className="col-12 col-md-6 text-md-left">
                        <input type="number" className="form-control" name="txtCosto" 
                            id="txtCosto"  placeholder="Costo" value={Cost} onChange={(e)=> setCost( parseFloat(e.target.value))}/>
                    </div>
                </div>


                <div className="row">
                    <div className="col text-center">
                        <Loading loading={loading}/>
                    </div>
                </div>



                <div className="row my-3">
                    <div className="col text-center">
                        <button className="btn btn-success" disabled={!Client || !Price} onClick={AddNewItem}>
                            Agregar Item
                        </button>
                    </div>
                </div>
         </div>

    )
}
export default NewPedidoItem