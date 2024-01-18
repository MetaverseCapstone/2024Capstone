import { Prisma } from "@prisma/client";
import { PrimitiveOnly } from "src/util/types";

export type CreateUserDto = PrimitiveOnly<Prisma.UserCreateInput>;

