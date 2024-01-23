import { Prisma } from "prisma/basic";
import { DeepPartial, PrimitiveOnly } from "src/util/types";

export type CreateAssetcategoryDto = PrimitiveOnly<Prisma.AssetCategoryUncheckedCreateInput>;

export type AssetCategoryType = DeepPartial<Prisma.AssetCategoryMaxAggregateOutputType>;