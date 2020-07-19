import React from 'react' 
import { IPedidoItem } from '../../models/PedidoModel'

import Moment from 'moment';

import NewAbono from './NewAbono';
import { useState } from 'react';
import { useEffect } from 'react';

type IProps = {
    item : IPedidoItem
}

const PedidoItem : React.FC<IProps> = (props) => { 
    
    const [total, setTotal] = useState(0.0)

    useEffect(()=> {
        var _total = 0
        props.item.Abonos.map((abono, index)=> {
               return _total += abono.Amount 
        })
        setTotal(_total)
    }, [])

     return (
         <div className="m-1 my-2">
               <div className="card">
                    <div className="card-header">
                        {props.item.Client}
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{props.item.Description}</h4>
                        <p className="card-text">{props.item.PriceDetailed}</p>
                    </div>
                    <div className="d-flex justify-content-between p-1 px-3">
                        <h5 className="">Abonos:</h5>
                        <button className="btn btn-link p-0" 
                                type="button" data-toggle="collapse" 
                                data-target={"#collapseNewAbono"+ props.item.Id} aria-expanded="false" 
                                aria-controls="collapseExample">
                            <span className="mx-2">
                                Nuevo Abono
                            </span>
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>

                    <div className="collapse card p-2 m-2" id={"collapseNewAbono"+ props.item.Id}>
                        <NewAbono PedidoItemId={props.item.Id}/>
                    </div>
                
                    <ul className="list-group list-group-flush">
                        {props.item.Abonos.map((abono, index)=> {
                            return (
                                <li className="list-group-item d-flex justify-content-between align-items-center py-0" key={index}>
                                    <div className="p-0 m-0">
                                        <p className="p-0 m-0">
                                            {abono.Type}
                                        </p>  
                                        <span className="p-0 m-0 text-muted">{ Moment(abono.CreateAt).format('MMMM Do YYYY, h:mm:ss a') }</span>
                                    </div>
                                    <span className="badge badge-primary badge-pill badge-info">{parseFloat( abono.Amount.toString())}</span>
                                </li>

                            )
                        })}
                      
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <span className="font-weight-bold">Total:</span>
                            <span className="badge badge-primary badge-pill">{total}</span>
                        </li>
                    </ul>

                    {/* <div className="card-footer">
                        2 days ago
                    </div> */}
                </div>

         </div>

    )
}
export default PedidoItem