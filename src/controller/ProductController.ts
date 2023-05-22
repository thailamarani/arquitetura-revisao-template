import { Request, Response } from "express";
import { ProductInputDTO } from "../dtos/getProduct.dto";
import { ProductBusiness } from "../business/ProductBusiness";
import { CreateProductInputDTO, CreateProductSchema } from "../dtos/createProduct.dto";
import { BaseError } from "../errors/BaseError";
import { ZodError } from "zod";
import { EditProductSchema } from "../dtos/editProduct.dto";
import { DeleteProductSchema } from "../dtos/deleteProduct.dto";

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
            const input = CreateProductSchema.parse({
                id: req.body.id,
                name: req.body.name,
                price: req.body.price,
                brandId: req.body.brandId
            })

            const result = await this.productBusiness.createProduct(input)

            res.status(201).send(result)

        } catch (error) {
            console.log(error)
            if (error instanceof ZodError) {
                res.status(400).send(error.issues[0].message)
            } else if (error instanceof BaseError) {
                res.status(400).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }

    public editProduct = async (req: Request, res: Response) => {
        try {
            const input = EditProductSchema.parse({
                id: req.params.id,
                name: req.body.name,
                price: req.body.price,
                brandId: req.body.brandId
            })

            const result = await this.productBusiness.editProduct(input)
            res.status(200).send(result)
            
        } catch (error) {
            console.log(error)
            if (error instanceof ZodError) {
                res.status(400).send(error.issues[0].message)
            } else if (error instanceof BaseError) {
                res.status(400).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }

    public deleteProduct = async (req: Request, res: Response) => {
        try {
            const input = DeleteProductSchema.parse ({
                id: req.params.id
            })

            const result = await this.productBusiness.deleteProduct(input)

            res.status(200).send(result)
        
        } catch (error) {
            console.log(error)
            if (error instanceof ZodError) {
                res.status(400).send(error.issues[0].message)
            } else if (error instanceof BaseError) {
                res.status(400).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }
}