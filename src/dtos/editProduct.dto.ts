import z from "zod";

export interface EditProductInputDTO {
        id: string,
        name?: string,
        price?: number,
        brandId?: string
}

export const EditProductSchema = z.object({
    id: z.string({
        invalid_type_error: "id deve ser string"})
    .min(4, "id precisa ter no mínimo 4 caracteres"),
    name: z.string({
        invalid_type_error: "name deve ser string"})
    .min(2, "name precisa ter no mínimo 2 caracteres")
    .optional(),
    price: z.string({
        invalid_type_error: "price deve ser number"})
    .min(2, "price precisa ter no mínimo 2 caracteres")
    .optional(),
    brandId: z.string({
        invalid_type_error: "brandId deve ser string"})
    .min(4, "brandId precisa ter no mínimo 4 caracteres")
    .optional()
}).transform(data => data as EditProductInputDTO)