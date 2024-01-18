import { PrimitiveOnly } from 'src/util/types';
import { Prisma } from '@prisma/client';

export type UpdateUserDto = PrimitiveOnly<Prisma.UserUpdateInput>;
