import { useEffect, useState } from 'react';

interface hookMember {
    modifiedCategoryName: string;
    modifiedCategoryCode: string;

    onChangeCategoryName: (name: string) => void;
    onChangeCategoryCode: (code: string) => void;
}

export function useAdminCreateAssetCategoryElement(
    {categoryCode, categoryName}:
    {categoryCode?:string, categoryName?:string}
): hookMember {

    const [modifiedCategoryName, setModifiedCategoryName] = useState(categoryName??'');
    const [modifiedCategoryCode, setModifiedCategoryCode] = useState(categoryCode??'');

    const onChangeCategoryName = (name: string) => {
        setModifiedCategoryName(name);
    };
    const onChangeCategoryCode = (code: string) => {
        const result = code.replace(/[^a-z1-9]/g, '')
        setModifiedCategoryCode(result);
    };

    return {

        modifiedCategoryCode,
        modifiedCategoryName,

        onChangeCategoryCode,
        onChangeCategoryName
    };
}