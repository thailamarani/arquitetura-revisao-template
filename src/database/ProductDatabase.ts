import { Product, ProductDBResponse } from "../models/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase{
    static PRODUCT_TABLE = "products"

    public getProductByName = async (q: string): Promise<ProductDBResponse[]> => {
        const result: ProductDBResponse[] = await BaseDatabase.connection(ProductDatabase.PRODUCT_TABLE)
            .where({name: q}) //ou where("name", "LIKE", `%${q}%`)

        return result
    }

    public getAllProducts = async (): Promise<ProductDBResponse[]> => {
        const result: ProductDBResponse[] = await BaseDatabase.connection(ProductDatabase.PRODUCT_TABLE)
        return result
    }

    public getProductById = async (id: string): Promise<ProductDBResponse> => {
        const [result]: ProductDBResponse[] = await BaseDatabase.connection(ProductDatabase.PRODUCT_TABLE)
        .where({id})

        return result
    }

    public createProduct = async (product: Product): Promise<void> => {
        await BaseDatabase.connection(ProductDatabase.PRODUCT_TABLE).insert(product.getDBModel())
    }

    public editProductById =async (product: ProductDBResponse): Promise<void> => {
        await BaseDatabase.connection(ProductDatabase.PRODUCT_TABLE)
        .update({
            name: product.name,
            price: product.price,
            brand_id: product.brand_id
        }).where({
            id: product.id
        })
    }

    public deleteProductById = async (id: string): Promise<void> => {
        await BaseDatabase.connection(ProductDatabase.PRODUCT_TABLE)
        .del().where({id})
    }

}