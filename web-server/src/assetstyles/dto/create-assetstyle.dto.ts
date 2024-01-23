import { Prisma } from "prisma/basic";
import { PrimitiveOnly } from "src/util/types";

export type CreateAssetstyleDto = PrimitiveOnly<Prisma.AssetStyleCreateInput>;
