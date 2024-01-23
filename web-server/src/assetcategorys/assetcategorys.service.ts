import { ForbiddenException, Injectable } from '@nestjs/common';
import { AssetCategoryType, CreateAssetcategoryDto } from './dto/create-assetcategory.dto';
import { UpdateAssetcategoryDto } from './dto/update-assetcategory.dto';
import { PrismaService } from 'src/global/prisma.service';

@Injectable()
export class AssetcategorysService {
  constructor(private prisma: PrismaService) { }

  async createAssetCategory(createAssetcategoryDto: CreateAssetcategoryDto) {

    // let categoryCode = createAssetcategoryDto.categoryCode;

    // if (createAssetcategoryDto.parentId) {
    //   let tmp: AssetCategoryType;
    //   let searchId = createAssetcategoryDto.parentId;
    //   do {
    //     tmp = (await this.prisma.assetCategory.findUnique({
    //       where: {
    //         id: searchId
    //       }
    //     }));
    //     categoryCode = tmp.categoryCode + "-" + categoryCode;
    //     searchId = tmp.parentId;
    //   } while (tmp.parentId != null)
    // }

    const category = await this.findAssetCategoryByCode(createAssetcategoryDto.categoryCode);

    if(category) {
      throw new ForbiddenException('중복되는 카테고리 코드입니다.');
    }

    return this.prisma.assetCategory.create({
      data: {
        ...createAssetcategoryDto,
        // categoryCode
      }
    })
  }

  findAllAssetCategory() {
    return this.prisma.assetCategory.findMany({
      orderBy: [
        {
          categoryCode: 'asc'
        }
      ]
    });
  }

  findAllAssetCategoryEnable() {
    return this.prisma.assetCategory.findMany({
      orderBy: [
        {
          id: 'asc',
        }
      ],
      where: {
        isDisable: false,
        parentId: null,
      },
      include: {
        childCategory: {
          where: {
            isDisable: false,
          },
          orderBy: {
            id: 'asc'
          }
        }
      }
    });
  }

  findChildAssetCategory(parentId: number) {
    return this.prisma.assetCategory.findMany({
      orderBy: [
        {
          id: 'desc',
        }
      ],
      where: {
        isDisable: false,
        parentId: parentId == 0 ? null : parentId,
      }
    });
  }

  findAdminChildAssetCategory(parentId: number) {
    return this.prisma.assetCategory.findMany({
      orderBy: [
        {
          id: 'asc',
        }
      ],
      where: {
        parentId: parentId == 0 ? null : parentId,
      }
    });
  }

  async findAdminAllAssetCategory(
    skip: number,
    take: number,
    searchType: string,
    searchText: string,
  ) {
    const where: any = {};

    if (searchType === '이름') {
      where.categoryName = { contains: searchText };
    } else if (searchType === '코드') {
      where.categoryCode = { contains: searchText };
    }

    const count = await this.prisma.assetCategory.count({
      where: {
        ...where,
        parentId: null
      },
    });
    const result =
      count > 0
        ? await this.prisma.assetCategory.findMany({
          where: {
            ...where,
            parentId: null
          },
          skip: (skip - 1) * take,
          take: take,
          orderBy: {
            id: 'asc',
          },
          // include: {
          //   childCategory: {
          //     orderBy: {
          //       id: 'asc'
          //     }
          //   }
          // }
        })
        : [];

    return { count: count, data: result };
  }

  findAssetCategoryOne(id: number) {
    return this.prisma.assetCategory.findUnique({
      where: {
        id:id
      }
    })
  }

  findAssetCategoryByCode(categoryCode: string, extendId?:number) {
    return this.prisma.assetCategory.findUnique({
      where: {
        categoryCode,
        NOT:{
          id:extendId
        }
      }
    })
  }

  async updateAssetCategory(id: number, updateAssetcategoryDto: UpdateAssetcategoryDto) {

    if (updateAssetcategoryDto.categoryCode && typeof updateAssetcategoryDto.categoryCode === 'string') {

      // let depth = 0;
      // let categoryCodeLength:number = 0;
      // {
      //   let searchId = id;
      //   let tmp:AssetCategoryType = (await this.prisma.assetCategory.findUnique({
      //     where: {
      //       id: searchId
      //     },
      //     select: {
      //       parentId: true,
      //       categoryCode:true
      //     }
      //   }));
      //   categoryCodeLength = tmp.categoryCode.split("-").at(-1).length;
      //   while (tmp.parentId != null) {
      //     searchId = tmp.parentId;
      //     tmp = (await this.prisma.assetCategory.findUnique({
      //       where: {
      //         id: searchId
      //       },
      //       select: {
      //         parentId: true
      //       }
      //     }));
      //     depth++;
      //   } 
      // }

      // let searchIds = [id];

      // do {
      //   searchIds.forEach(id=>{
      //     this.prisma.assetCategory.updateMany({
      //       where: {
      //         parentId: id
      //       },
      //       data: {
      //         categoryCode: {

      //         }
      //       }
      //     })
          
      //   })

      // } while (true)
      const category = await this.findAssetCategoryByCode(updateAssetcategoryDto.categoryCode, id);

      if(category) {
        throw new ForbiddenException('중복되는 카테고리 코드입니다.');
      }
    }

    return this.prisma.assetCategory.update({
      where: {
        id,
      },
      data: {
        ...updateAssetcategoryDto,
      },
    });
  }

  updateAssetCategoryDisalbe(id:number, isDisable:boolean) {
    return this.prisma.assetCategory.update({
      where: {
        id
      },
      data: {
        isDisable
      }
    })
  }

  removeAssetCategory(id: number) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
