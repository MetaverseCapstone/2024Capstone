import { Prisma } from "@prisma/client";
import { PrimitiveOnly } from "src/util/types";

export type CreateAssetcategoryDto = PrimitiveOnly<Prisma.AssetCategoryCreateInput>;
