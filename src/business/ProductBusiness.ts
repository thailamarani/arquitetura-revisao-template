import { Product, ProductDBResponse } from "../models/Product";
import { ProductDatabase } from "../database/ProductDatabase";
import { ProductInputDTO } from "../dtos/getProduct.dto";
import { CreateProductInputDTO } from "../dtos/createProduct.dto";
import { EditProductInputDTO } from "../dtos/editProduct.dto";
import { DeleteProductInputDTO } from "../dtos/deleteProduct.dto";

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

        const idExists = await this.productDatabase.getProductById(id)

        if(idExists){
            throw new Error("Id já existe no Banco de Dados.")
        }

        const newProduct = new Product(id, name, price, brandId)

        const result = await this.productDatabase.createProduct(newProduct)

        return "Produto criado com sucesso!"

    }

    public editProduct = async (input: EditProductInputDTO): Promise<string> => {
        const { id, name, price, brandId } = input

        const isProductIdValid = await this.productDatabase.getProductById(id)

        if(!isProductIdValid){
            throw new Error("id do produto não existe")
        }

        const product = new Product( id, name || isProductIdValid.name, price || isProductIdValid.price, brandId || isProductIdValid.brand_id)

        const productDB: ProductDBResponse = {
            id: product.getId(),
            name: product.getName(),
            price: product.getPrice(),
            brand_id: product.getBrandId()
        }

        await this.productDatabase.editProductById(productDB)

        const result = "Produto editado com sucesso!"
        return result

    }

    public deleteProduct = async (input: DeleteProductInputDTO): Promise<string> => {
        const { id } = input

        const isProductIdValid = await this.productDatabase.getProductById(id)

        if(!isProductIdValid){
            throw new Error("id do produto não encontrado")
        }

        await this.productDatabase.deleteProductById(id)

        return "Produto deletado com sucesso!"
    }
}