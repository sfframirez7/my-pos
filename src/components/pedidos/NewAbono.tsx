import React from 'react' 
import { useState } from 'react'
import { useEffect } from 'react'

import Loading from '../common/Loading'

import {  IAbono } from '../../models/PedidoModel'
import { useParams } from 'react-router-dom';
import { NewPedidoItemAbono } from '../../services/PedidoService';

type IProps = {
    PedidoItemId : string
}

const NewAbono : React.FC<IProps> = (props) => { 

    const [amount, setAmount]          = useState(0)
    const [loading, setLoading]        = useState(false)
    const [typesAbono, setTypesAbono]  = useState<string[]>([])
    const [typeAbono, setTypeAbono]    = useState("")

    useEffect(()=> {
        LoadTypesAbonos()
    }, [])

    function LoadTypesAbonos()
    {
        var _typesAbonos : string[]= ["Bac", "Banpais","Efectivo", "Tigo Money"]

        setTypesAbono(_typesAbonos)
    }


    let { pedidoUid } = useParams();

    function AddNewAbono()
    {
        if(!pedidoUid || !props.PedidoItemId || amount <= 0)
            return

            setLoading(true)

        var model : IAbono = {
            Amount : amount,
            CreateAt :  new Date().toISOString(),
            Type : typeAbono
        }

        NewPedidoItemAbono(pedidoUid,props.PedidoItemId!, model )
        .then((res) => {
            setAmount(0)
            setTypeAbono("")
            setLoading(false)
            
        }).catch((err) => {
            setLoading(false)
            
        });
    }

     return (
         <div>
                <div className="text-center">
                    <h4 className="font-weight-bold">
                        Nuevo Abono
                    </h4>
                </div>

               <div className="row p-2">
                    <div className="col-12 col-md-4 text-md-right">
                        <h5 className="font-weight-bold">
                            Tipo: 
                        </h5>
                    </div>
                    <div className="col-12 col-md-6 text-md-left">
                        <select className="custom-select" value={typeAbono} onChange={(e)=> setTypeAbono(e.target.value)}>
                            <option defaultValue={""}>Tipo</option>
                            {typesAbono.map((type, index)=> {
                                return (
                                    <option value={type} key={index}>{type}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>


               <div className="row p-2">
                    <div className="col-12 col-md-4 text-md-right">
                        <h5 className="font-weight-bold">
                            Cantidad:
                        </h5>
                    </div>
                    <div className="col-12 col-md-6 text-md-left">
                        <input type="number" className="form-control" name="txtCosto" 
                            id="txtCosto"  placeholder="Costo" value={amount} 
                                onChange={(e)=> setAmount( parseFloat(e.target.value ))}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col text-center">
                        <Loading loading={loading}/>
                    </div>
                </div>


                <div className="row my-3">
                    <div className="col text-center">
                        <button className="btn btn-success" disabled={!typeAbono || !amount} onClick={AddNewAbono}>
                            Agregar Abono
                        </button>
                    </div>
                </div>

         </div>

    )
}
export default NewAbono