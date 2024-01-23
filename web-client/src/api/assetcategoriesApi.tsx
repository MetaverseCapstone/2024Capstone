import { createApi } from '@reduxjs/toolkit/query/react';
import fetchCompat from 'src/util/fetchCompat';
import { fetchCompatBaseQuery } from 'src/util/fetchCompatBaseQuery';
import { User } from './usersApi';

export const assetCategoriesApi = createApi({
    reducerPath: 'assetcategoriesApi',
    baseQuery: fetchCompatBaseQuery('assetcategory'),
    tagTypes: ['AssetCategorys'],
    endpoints: (builder) => ({
        createAssetCategory: builder.mutation<
            AssetCategory,
            {
                categoryCode: string;
                categoryName: string;
                parentId?: number;
                userId?: number;
            }
        >({
            query: (arg) => ({
                method: 'POST',
                url: ``,
                body: arg
            }),
        }),
        findAllAssetCategory: builder.query<
            AssetCategory[],
            void
        >({
            query: (arg) => ({
                method: 'GET',
                url: `all`,
            }),
            // providesTags: ['AssetCategorys'],
        }),
        findAllAssetCategoryEnable: builder.query<
            AssetCategory[],
            void
        >({
            query: (arg) => ({
                method: 'GET',
                url: ``,
            }),
            // providesTags: ['AssetCategorys'],
        }),
        findChildAssetCategory: builder.mutation<
            AssetCategory[],
            {
                parentId?: number;
            }
        >({
            query: (arg) => ({
                method: 'GET',
                url: `child/${arg.parentId ?? 0}`,
            }),
            // providesTags: ['AssetCategorys'],
        }),
        findAdminChildAssetCategory: builder.mutation<
            AssetCategory[],
            {
                parentId?: number;
            }
        >({
            query: (arg) => ({
                method: 'GET',
                url: `admin/child/${arg.parentId ?? 0}`,
            }),
            // providesTags: ['AssetCategorys'],
        }),
        findAdminAllAssetCategory: builder.mutation<
            { count: number; data: AssetCategory[]; },
            {
                page: number;
                take: number;
                searchType?: string;
                searchText?: string;
            }
        >({
            query: (arg) => ({
                method: 'GET',
                url: `admin?page=${arg.page}&take=${arg.take}&searchType=${arg.searchType}&searchText=${arg.searchText}`,
            }),
        }),
        findAssetCategoryOne: builder.query<AssetCategory, { id: number }>({
            query: (arg) => ({
                method: 'GET',
                url: `${arg.id}`,
            }),
        }),
        updateAssetCategory: builder.mutation<
            AssetCategory,
            {
                id: number,
                body: AssetCategoryUpdateInput
            }
        >({
            query: (arg) => ({
                method: 'PATCH',
                url: `${arg.id}`,
                body: arg.body
            }),
        }),
        updateAssetCategoryDisalbe: builder.mutation<
            AssetCategory,
            {
                id: number,
                isDisale: boolean
            }
        >({
            query: (arg) => ({
                method: 'PATCH',
                url: `disable/${arg.id}?isDisable=${arg.isDisale}`,
            }),
        }),
        removeAssetCategory: builder.mutation<AssetCategory, { id: number }>({
            query: (arg) => ({
                method: 'DELETE',
                url: `${arg.id}`,
            }),
        }),
    }),
});

export const {
    useCreateAssetCategoryMutation,
    useFindAdminAllAssetCategoryMutation,
    useFindAdminChildAssetCategoryMutation,
    useFindAllAssetCategoryEnableQuery,
    useFindAllAssetCategoryQuery,
    useFindAssetCategoryOneQuery,
    useFindChildAssetCategoryMutation,
    useRemoveAssetCategoryMutation,
    useUpdateAssetCategoryDisalbeMutation,
    useUpdateAssetCategoryMutation
} = assetCategoriesApi;


export type AssetCategory = {
    id: number;
    createdAt: Date | string;
    categoryCode: string;
    categoryName: string;
    parentId?: number;
    userId?: number;
    isDisable: boolean;

    AssetCategory?: AssetCategory;
    childCategory?: AssetCategory[];

    User?: User;
}

export type AssetCategoryUpdateInput = {
    createdAt?: string;
    categoryCode: string;
    categoryName: string;
    parentId?: number;
    userId?: number;
    isDisable?: boolean;
}

export class AssetCategoryClass {
    id: number;
    createdAt: Date | string;
    categoryCode: string;
    categoryName: string;
    parentId?: number;
    userId?: number;
    isDisable: boolean;

    public isDifferent(assetCategory:AssetCategory) {
        return (
            this.id != assetCategory.id ||
            this.createdAt != assetCategory.createdAt ||
            this.categoryCode != assetCategory.categoryCode ||
            this.categoryName != assetCategory.categoryName ||
            this.parentId != assetCategory.parentId ||
            this.userId != assetCategory.userId ||
            this.isDisable != assetCategory.isDisable
        )
    }

    constructor(assetCategory:AssetCategory, parent?:AssetCategoryClass) {
        this.id = assetCategory.id;
        this.createdAt = assetCategory.createdAt;
        this.categoryCode = assetCategory.categoryCode;
        this.categoryName = assetCategory.categoryName;
        this.parentId = assetCategory.parentId;
        this.userId = assetCategory.userId;
        this.isDisable = assetCategory.isDisable;

        if(parent) {
            this.AssetCategory = parent;
            // if(!this.AssetCategory || this.isDifferent(assetCategory.AssetCategory)) {
            //     this.AssetCategory = new AssetCategoryClass(assetCategory.AssetCategory);
            // }
        }
        if(assetCategory.childCategory) {
            this.childCategory = assetCategory.childCategory.map(item=>new AssetCategoryClass(item, this));
        }
    }

    AssetCategory?: AssetCategoryClass;
    childCategory?: AssetCategoryClass[];

    User?: User;
}
