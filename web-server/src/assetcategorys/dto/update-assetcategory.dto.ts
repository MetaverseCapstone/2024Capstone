import { PrimitiveOnly } from 'src/util/types';
import { Prisma } from '@prisma/client';

export type UpdateAssetcategoryDto = PrimitiveOnly<Prisma.AssetCategoryUpdateInput>;