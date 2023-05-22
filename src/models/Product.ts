export class Product{
    constructor(
        private id: string,
        private name: string,
        private price: number,
        private brandId: string
    ){}

    public getDBModel(){
        return{
        id: this.id,
        name: this.name,
        price: this.price,
        brand_id: this.brandId
        }
    }

    public getId(): string{
        return this.id
    }

    public getName(): string{
        return this.name
    }

    public getPrice(): number{
        return this.price
    }

    public getBrandId(): string{
        return this.brandId
    }
}

export interface ProductDBResponse{
    id: string,
    name: string,
    price: number,
    brand_id: string
}

