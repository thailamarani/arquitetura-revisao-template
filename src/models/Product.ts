export class Product{
    constructor(
        private id: string,
        private name: string,
        private price: number,
        private brandId: string
    ){}
}

export interface ProductDBResponse{
    id: string,
    name: string,
    price: number,
    brand_id: string
}