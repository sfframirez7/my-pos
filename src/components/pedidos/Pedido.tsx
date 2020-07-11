import React from 'react' 
import Moment from 'moment';

import { IPedido } from '../../models/PedidoModel'
import { Link } from 'react-router-dom';



type IProps = {
    pedido : IPedido
}

const Pedido : React.FC<IProps> = (props) => { 

     return (
         <div>

            <div className="list-group">
                <Link to={"pedido/"+props.pedido.Id} className="list-group-item list-group-item-action d-flex ">

                    <div className="flex-column align-items-start flex-grow-1 ">

                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{props.pedido.Pedido}</h5>
                        </div>
                        <p className="mb-1">{props.pedido.Description}</p>
                        <small className="text-muted ">{ Moment(props.pedido.CreatedAt).fromNow()}</small>
                    </div>
                    <div className="mx-md-3 align-self-center"> 
                        <i className="fas fa-arrow-right fa-2x text-primary "></i>
                    </div>

                </Link>
            </div>

         </div>

    )
}
export default Pedido