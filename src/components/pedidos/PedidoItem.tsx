import React from 'react' 
import { IPedidoItem } from '../../models/PedidoModel'

type IProps = {
    item : IPedidoItem
}

const PedidoItem : React.FC<IProps> = (props) => { 

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
                    <div className="d-flex justify-content-between p-1">
                        <h5 className="">Abonos:</h5>
                        <button className="btn btn-link">
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Cras justo odio 
                            <span className="badge badge-primary badge-pill">14</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Cras justo odio 
                            <span className="badge badge-primary badge-pill">14</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Cras justo odio 
                            <span className="badge badge-primary badge-pill">14</span>
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