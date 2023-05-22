import { Product, ProductDBResponse } from "../models/Product";
import { ProductDatabase } from "../database/ProductDatabase";
import { ProductInputDTO } from "../dtos/getProduct.dto";
import { CreateProductInputDTO } from "../dtos/createProduct.dto";

export class ProductBusiness{
    constructor(
        private productDatabase: ProductDatabase){}
    
    public getProduct = async (input: ProductInputDTO): Promise<ProductDBResponse[]> => {
        const { q } = input
        let productDB: ProductDBResponse[];
        if(q){
            productDB = await this.productDatabase.getProductByName(q)
        } else {
            productDB = await this.productDatabase.getAllProducts()
        }

        return productDB
    }

    public createProduct = async (input: CreateProductInputDTO) => {
        const { id, name, price, brandId } = input

        if(typeof id !== "string"){
            throw new Error("id precisa ser string")
        }

        if(typeof name !== "string"){
            throw new Error("name precisa ser string")
        }

        if(typeof price !== "number"){
            throw new Error("price precisa ser number")
        }

        if(typeof brandId !== "string"){
            throw new Error("brandId precisa ser string")
        }

        const idExists = await this.productDatabase.getProductById(id)

        if(idExists){
            throw new Error("Id já existe no Banco de Dados.")
        }

        const newProduct = new Product(id, name, price, brandId)

        const result = await this.productDatabase.createProduct(newProduct)

    }
}