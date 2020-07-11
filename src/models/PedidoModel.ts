export interface IPedido {
        Id          : string
        Pedido      : string
        Description : string
        CreatedAt   : string        
}

export interface IPedidoItem {
        Id?             : string
        Client          : string
        Description     : string
        PriceDetailed   : string
        Price           : number
        Abonos          : IAbono[]
        Cost            : number
}


export interface IAbono {
        CreateAt        : string
        Type            : string
        Amount          : number

}