import z from "zod";

export interface CreateProductInputDTO{
    id: string,
    name: string,
    price: number,
    brandId: string
}

export const CreateProductSchema = z.object({
    id: z.string({
        invalid_type_error: "id deve ser string"})
        .min(4, "mínimo de 4 caracteres"),
    name: z.string({
        invalid_type_error: "name deve ser string"})
        .min(2),
    price: z.number({
        invalid_type_error: "price deve ser number"})
    .min(3),
    brandId: z.string({
        invalid_type_error: "brandId deve ser string"})
    .min(4)
}).transform(data => data as CreateProductInputDTO)