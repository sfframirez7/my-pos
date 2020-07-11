
import { IPedido, IPedidoItem } from "../models/PedidoModel";
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

export function GetPedido(pedidoUid : string)
{
    const DB = Firebase.firestore()
    
    return DB.collection("pedidos").doc(pedidoUid)
}


export function NewPedidoItemService(pedidoUid: string, pedido : IPedidoItem)
{
    if(!pedidoUid)
        return 

    const DB = Firebase.firestore();

    return DB.collection("pedidoItems").doc(pedidoUid).collection("items").add({
        Client          : pedido.Client,
        Description     : pedido.Description,
        PriceDetailed   : pedido.PriceDetailed,
        Price           : pedido.Price,
        Abonos          : [],
        Cost            : pedido.Cost
    })
}

export function GetPedidoItems(pedidoUid : string)
{
    const DB = Firebase.firestore()
    
    return DB.collection("pedidoItems").doc(pedidoUid).collection("items")
}