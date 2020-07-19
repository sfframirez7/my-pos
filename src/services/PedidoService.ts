
import { IPedido, IPedidoItem, IAbono } from "../models/PedidoModel";
import { Firebase } from "../config/config";
import PedidoItem from "../components/pedidos/PedidoItem";


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
        Cost            : pedido.Cost,
        CreatedAt       : new Date().toISOString()
    })
}

export function GetPedidoItems(pedidoUid : string)
{
    const DB = Firebase.firestore()
    
    return DB.collection("pedidoItems").doc(pedidoUid).collection("items").orderBy("CreatedAt", "desc")
}

export function NewPedidoItemAbono(pedidoUid : string, pedidoItemUid : string, abono : IAbono)
{
    const DB = Firebase.firestore()
    
    var _abono = {
        Type : abono.Type,
        Amount : abono.Amount,
        CreatedAt : abono.CreateAt
    }

    var d = + new Date()

    var key = d.toString();
    var obj : any= {};
    obj[key] = _abono;


    return DB.collection("pedidoItems").doc(pedidoUid).collection("items").doc(pedidoItemUid).set(
    {   "Abonos" : 
        obj
    }, {merge : true})
}