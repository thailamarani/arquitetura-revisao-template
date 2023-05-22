import { Request, Response } from "express";
import { ProductInputDTO } from "../dtos/getProduct.dto";
import { ProductBusiness } from "../business/ProductBusiness";
import { CreateProductInputDTO } from "../dtos/createProduct.dto";

export class ProductController {
    constructor(
        private productBusiness: ProductBusiness
    ) { }

    public getProduct = async (req: Request, res: Response) => {
        try {
            const input: ProductInputDTO = {
                q: req.query.q as string
            }

            const result = await this.productBusiness.getProduct(input)
            res.status(200).send({ result })

        } catch (error) {
            console.log(error)
            if (error instanceof Error) {
                res.status(400).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }

    public createProduct = async (req: Request, res: Response) => {
        try {
            const input: CreateProductInputDTO = {
                id: req.body.id,
                name: req.body.name,
                price: req.body.price,
                brandId: req.body.brandId
            }

            const result = await this.productBusiness.createProduct(input)

        } catch (error) {
            console.log(error)
            if (error instanceof Error) {
                res.status(400).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
    }
    }
}