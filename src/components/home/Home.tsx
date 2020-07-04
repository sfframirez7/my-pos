import React from 'react'
import NewPedido from '../pedidos/NewPedido'
import Pedidos from '../pedidos/Pedidos'


const Home : React.FC<{}> = ()=> {


    return (

        <div>

            <div className="container">

                <div className="row mt-3">
                    <div className="col" >
                        <h2 className="font-weight-bold">Pedidos</h2>
                        <hr/>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-12 col-md-8 offset-md-2 ">

                        <div className="text-center">
                            <button className="btn btn-primary m-2" 
                                    type="button" data-toggle="collapse" 
                                    data-target="#collapseNewPedido" aria-expanded="false" 
                                    aria-controls="collapseExample">
                                <span className="mx-2">
                                    Nuevo Pedido
                                </span>
                                <i className="fas fa-plus"></i>
                            </button>

                        </div>
                        
                        <div className="collapse" id="collapseNewPedido">
                            <NewPedido/>
                        </div>

                    </div>
                </div>

                <div className="row my-3" >
                    <div className="col">
                        <Pedidos/>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home