
import { IPedido } from "../models/PedidoModel";
import { Firebase } from "../config/config";

export function NewPedidoService(pedido : IPedido)
{
    const DB = Firebase.firestore();

    return DB.collection("pedidos").add({
        Pedido          : pedido.Pedido,
        Description     : pedido.Description,
        CreatedAt       : pedido.CreatedAt,
    })

}


export function GetPedidos()
{
    const DB = Firebase.firestore()

    return DB.collection("pedidos").orderBy("CreatedAt", "desc")
}