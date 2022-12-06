import { Category } from "./category";
import { ResponseModel } from "./responseModel";

export interface CategoryModelResponse extends ResponseModel
{
    data:Category
}