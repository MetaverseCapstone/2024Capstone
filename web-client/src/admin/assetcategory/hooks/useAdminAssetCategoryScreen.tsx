import moment from 'moment';
import router from 'next/router';
import assetcategory from 'pages/admin/assetcategory';
import { useRef } from 'react';
import { RefObject } from 'react';
import { useEffect, useState } from 'react';
import { AssetCategory, AssetCategoryClass, useCreateAssetCategoryMutation, useFindAdminAllAssetCategoryMutation, useFindAdminChildAssetCategoryMutation, useRemoveAssetCategoryMutation, useUpdateAssetCategoryMutation } from 'src/api/assetcategoriesApi';

import { setUser } from 'src/data/accountSlice';
import { useTypedSelector } from 'src/store';

interface hookMember {
  // user: User[];
  // general: User[];
  // business: User[];
  tableTitle: string;
  table: AssetCategoryClass[] | [];
  onClickChangeTable: (cate: string) => void;

  page: number;
  take: number;
  totalCount: number;
  setPage: (page: number) => void;

  searchText: string;
  searchType: string;

  isUnfoldList: {
    [key: number]: boolean;
  };

  modifiedId: number | undefined;

  onClickRemoveUser: (id: number) => void;
  onClickCheckItem: (notice: AssetCategory) => void;
  onClickCheckAll: () => void;
  onClickDeleteChecked: () => void;
  deleteUserArray: AssetCategory[];

  onChangeSearchType: (val: string) => void;
  onChangeSearchText: (val: string) => void;
  onClickSearch: () => void;

  onClickCreateCategory: (name: string, code: string, parentId?: number) => void;

  onClickModifyCategory: (id: number, name: string, code: string) => void;

  searchCategoryById: (id: number, childTable: AssetCategoryClass[]) => AssetCategoryClass | undefined;

  onClickUnfoldCategory: (parentCategory: AssetCategoryClass, isUnfold: boolean) => void;
  onClickToModify: (id?: number, categoryName?: string, categoryCode?: string) => void;

  onClickDeleteCategory: (id:number) => void;
  onClickDisableCategory: (id:number, isDisable:boolean) => void;
}

export function useAdminAssetCategoryScreen(): hookMember {
  // const { data: userData, refetch: userRefetch } = useFindAllUserQuery();
  const adminId = Number(useTypedSelector((state) => state.account.user?.id || -1));
  const [findAdminAllAssetCategory] = useFindAdminAllAssetCategoryMutation();
  const [RemoveAssetCategory] = useRemoveAssetCategoryMutation();

  const [updateAssetCategory] = useUpdateAssetCategoryMutation();
  const [createAssetCategory] = useCreateAssetCategoryMutation();

  const [findAdminChildAssetCategory] = useFindAdminChildAssetCategoryMutation();

  // const [categoryData, setCategoryData] = useState<AssetCategory[]>([]);

  const [isUnfoldList, setIsUnfoldList] = useState<{ [key: number]: boolean }>({});

  //***  페이징?? */
  const [totalCount, setTotalCount] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const take: number = 10;

  const [searchType, setSearchType] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');


  useEffect(() => {
    setSearchType('');
    // resetData();
    changePageAndSearchCategory(page);
  }, []);

  // const resetData = async () => {
  //   let result: any = await findAdminAllAssetCategory({ page, take });
  //   console.log(result)
  //   if (result.data) {
  //     result = result.data;
  //     (result.data);
  //     setTotalCount(result.count);
  //   }
  // };


  async function changePageAndSearchCategory(page: number, item?: whereQuery) {
    let where = {
      searchType: item?.searchType || searchType,
      searchText: item?.searchText || searchText,
    };
    let result: any = await findAdminAllAssetCategory({ page, take, ...where });

    if (result.data) {
      result = result.data;
      if (result.data?.length === 0 && page - 1 > 0) {
        changePageAndSearchCategory(page - 1, item);
      } else {
        const categoryData = result.data as AssetCategory[];

        setPage(page);
        // setCategoryData(result.data);
        setTotalCount(result.count);
        setTable(await refetchCurrentTable(categoryData.map(item => new AssetCategoryClass(item)))?? []);
      }
    }
  }

  const onClickSearch = async () => {
    changePageAndSearchCategory(1, { searchType, searchText });
  }

  //***페이징 */

  // useEffect(() => {
  //   if (categoryData) {
  //     console.log('success');
  //     // setUser(userData);
  //     setTable(categoryData.map(item=>new AssetCategoryClass(item)));
  //   }
  // }, [categoryData]);

  const [tableTitle, setTableTitle] = useState<string>('category');
  const [table, setTable] = useState<AssetCategoryClass[]>([]);

  const [deleteCategoryArray, setDeleteCategoryArray] = useState<AssetCategory[]>([]);

  const onClickCheckAll = () => {
    const array: AssetCategory[] = [];
    if (table) {
      if (deleteCategoryArray.length === table.length) {
        setDeleteCategoryArray([]);
      } else {
        table?.map((item, index) => {
          array.push(item);
        });
        setDeleteCategoryArray(array);
      }
    }
  };

  const onClickCheckItem = (category: AssetCategory) => {

    const clone = [...deleteCategoryArray];
    console.log(clone.includes(category));
    if (clone.includes(category)) {
      const idx = clone.indexOf(category);
      if (idx > -1) clone.splice(idx, 1);
    } else {
      clone.push(category);
    }
    setDeleteCategoryArray(clone);
  };

  const onClickDeleteChecked = async () => {
    console.log(deleteCategoryArray);

    await Promise.all(
      deleteCategoryArray.map(async (item, index) => {
        if (item.id) await RemoveAssetCategory({ id: item.id });
      }),
    );
    setDeleteCategoryArray([]);
    // noticeRefetch();
    if (page) changePageAndSearchCategory(page);
  };

  const onClickCreateCategory = async (name: string, code: string, parentId?: number) => {
    const result: any = await createAssetCategory({
      categoryCode: code,
      categoryName: name,
      parentId: parentId,
      userId: adminId
    });

    if (!result?.data) {
      alert(result.error?.data.message);
    } else {
      SetModifiedId(undefined);
      if (page) {
        changePageAndSearchCategory(page);
      }
    }
  }

  const onClickModifyCategory = async (id: number, name: string, code: string) => {
    const result: any = await updateAssetCategory({
      id,
      body: {
        categoryCode: code,
        categoryName: name,
        userId: adminId
      }
    });

    if (!result?.data) {
      alert(result.error?.data.message);
    } else {
      SetModifiedId(undefined);
      if (page) {
        changePageAndSearchCategory(page);
      }
    }
  }

  const onClickDeleteCategory = async (id:number) => {
    const toDelete = confirm("정말 삭제하시겠습니까?");
    if(!toDelete) return;
    const result:any = await RemoveAssetCategory({ id });
    // noticeRefetch();
    if(result?.data) {
      if (page) changePageAndSearchCategory(page);
    }
  }

  const onClickDisableCategory = async (id:number, isDisable:boolean) => {
    const result: any = await updateAssetCategory({
      id,
      body: {
        isDisable,
        userId: adminId
      }
    });

    if (result?.data) {
      if (page) {
        changePageAndSearchCategory(page);
      }
    }
  }

  const searchCategoryById = (id: number, childTable = table): AssetCategoryClass | undefined => {
    if (!childTable || childTable.length == 0) return undefined;
    for (let i = 0; i < childTable.length; i++) {
      if (childTable[i].id == id) return childTable[i];
      else if ((childTable[i].childCategory ?? []).length > 0) return searchCategoryById(id, childTable[i].childCategory);
    }
  }

  const refetchCurrentTable = async (childTable = table) => {
    if (!childTable || childTable.length == 0) return undefined;
    for (let i = 0; i < childTable.length; i++) {
      if(isUnfoldList[childTable[i].id] === true) {
        await setChildCategory(childTable[i]);
        if ((childTable[i].childCategory ?? []).length > 0) childTable[i].childCategory = await refetchCurrentTable(childTable[i].childCategory);
      }
    }

    return childTable;
  }

  const setChildCategory = async (parentCategory: AssetCategoryClass) => {
    const result: any = await findAdminChildAssetCategory({ parentId: parentCategory.id });
    if (result.data && result.data.length > 0) {
      const categories = result.data as AssetCategory[];
      parentCategory.childCategory = categories.map(item => new AssetCategoryClass(item, parentCategory));
      // setTable(table);
    }
  }

  const onClickUnfoldCategory = async (parentCategory: AssetCategoryClass, isUnfold: boolean) => {
    if (isUnfold) {
      if (!parentCategory.childCategory) {
        await setChildCategory(parentCategory);
      }
    }

    const temp = {
      ...isUnfoldList,
      [parentCategory.id]: isUnfold
    };
    setIsUnfoldList(temp);
  }

  const [modifiedId, SetModifiedId] = useState<number>();

  const onClickToModify = (id?: number, categoryName = '', categoryCode = '') => {
    SetModifiedId(id);
  }

  return {
    // user,
    // general,
    // business,
    tableTitle,
    table,
    onClickChangeTable: (cate: string) => {
      // ChangeTable(cate);
      setTableTitle(cate);
    },

    page,
    take,
    totalCount,
    setPage,

    searchText,
    searchType,

    isUnfoldList,

    modifiedId,

    onClickCheckItem,
    onClickCheckAll,
    onClickDeleteChecked,
    deleteUserArray: deleteCategoryArray,
    onClickRemoveUser: async (id: number) => {
      await RemoveAssetCategory({ id });
      // noticeRefetch();
      if (page) changePageAndSearchCategory(page);
    },
    onChangeSearchType: (val: string) => {
      setSearchType(val);
    },
    onChangeSearchText: (val: string) => {
      setSearchText(val);
    },
    onClickSearch,

    onClickCreateCategory,

    onClickUnfoldCategory,
    searchCategoryById,

    onClickModifyCategory,
    onClickToModify,

    onClickDeleteCategory,
    onClickDisableCategory,
  };
}

interface whereQuery {
  searchType?: string;
  searchText?: string;
}

type SearchType = '' | '코드' | '이름';