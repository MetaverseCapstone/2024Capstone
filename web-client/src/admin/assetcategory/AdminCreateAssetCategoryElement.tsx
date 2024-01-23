import { InputStyle, StyledButton, TheadSmall } from "src/common/styledAdmin";
import { Flex, FlexCenter, FlexRow } from "src/common/styledComponents";
import { useAdminCreateAssetCategoryElement } from "./hooks/useAdminCreateAssetCategoryElement";
import { fenxyBlue } from "src/util/constants/style";
import Image from 'next/image';

export const AdminCreateAssetCategoryElement = ({
    modifiedId,
    targetId,
    inputAction,
    startAction,
    categoryName,
    categoryCode

}: {
    modifiedId?: number;
    targetId: number;
    inputAction: (name: string, code: string) => void;
    startAction: (id?: number) => void;
    categoryName?: string;
    categoryCode?: string;
}) => {
    const hookMember = useAdminCreateAssetCategoryElement({ categoryCode, categoryName });
    return modifiedId === targetId ?
        <FlexRow
            css={{
                '>div': {
                    marginRight: 10,
                },
            }}>
            <FlexRow>
                <TheadSmall css={{ alignSelf: 'center' }}>카테고리 이름</TheadSmall>
                <Flex css={{ color: '#999', padding: `0` }}>
                    <InputStyle
                        value={hookMember.modifiedCategoryName}
                        onChange={(e) => hookMember.onChangeCategoryName(e.target.value)}
                    />
                </Flex>
            </FlexRow>
            <FlexRow>
                <TheadSmall css={{ alignSelf: 'center' }}>카테고리 코드</TheadSmall>
                <Flex css={{ color: '#999', padding: `0` }}>
                    <InputStyle
                        value={hookMember.modifiedCategoryCode}
                        onChange={(e) => hookMember.onChangeCategoryCode(e.target.value)}
                    />
                </Flex>
            </FlexRow>
            <StyledButton
                onClick={() => {
                    inputAction(hookMember.modifiedCategoryName, hookMember.modifiedCategoryCode)
                }}
                css={{ background: fenxyBlue }}>
                적용
            </StyledButton>
            <FlexCenter>
                <Image
                    src={`/image/admin/icon/x-circle-gray.svg`}
                    width={24}
                    height={24}
                    alt="되돌리기"
                    onClick={
                        () => startAction()
                    }
                    css={{ cursor: 'pointer' }}
                />
            </FlexCenter>

        </FlexRow> :

        <FlexRow
            css={{
                '>div': {
                    paddingRight: 10,
                },
            }}>
            {categoryName ? <FlexCenter>{categoryName}</FlexCenter> : undefined}
            {categoryCode ? <FlexCenter>{categoryCode}</FlexCenter> : undefined}
            <Flex css={{ display: 'inline-block' }}>
                <StyledButton
                    onClick={() => {
                        hookMember.onChangeCategoryCode(categoryCode ? categoryCode : '');
                        hookMember.onChangeCategoryName(categoryName ? categoryName : '');
                        startAction(targetId);
                    }}
                    css={{ background: fenxyBlue,marginLeft:0, }}>
                    {categoryName ? '수정' : '추가'}하기
                </StyledButton>
            </Flex>

        </FlexRow>

};