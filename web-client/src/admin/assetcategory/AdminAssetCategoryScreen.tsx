import AdminHeader from 'src/common/header/AdminHeader';
import {
    BorderRoundedContent,
    ContentHeader,
    InputStyle,
    StyledButton,
} from 'src/common/styledAdmin';
import { Flex, FlexCenter, FlexRow, FlexRowCenter } from 'src/common/styledComponents';
import AdminTable from 'src/common/table/AdminTable';
import { fenxyBlue } from 'src/util/constants/style';
import GetSeoulTime from 'src/common/time/GetSeoulTime';
import { User } from 'src/api/usersApi';
import { useAdminAssetCategoryScreen } from './hooks/useAdminAssetCategoryScreen';
import { useAssetCategoryTable } from 'src/common/table/hooks/useAssetCategoryTable';
import Image from 'next/image';
import { AssetCategoryClass } from 'src/api/assetcategoriesApi';

const btnCheckBoxStyle = {
    width: 120,
    marginLeft: -1,
    lineHeight: '36px',
    border: '1px solid #eee',
    display: 'inline-flex',
    justifyContent: 'center',
    color: '#999',
    cursor: 'pointer',
    '&.active': {
        background: fenxyBlue,
        borderColor: fenxyBlue,
        color: 'white',
    },
};

const AdminAssetCategoryScreen = () => {
    const hookMember = useAdminAssetCategoryScreen();

    const tableHookMemeber = useAssetCategoryTable(hookMember.totalCount, hookMember.take, 5, hookMember.setPage);

    const minWidth = 500;

    const AssetCategoryElement = function (categoryList: AssetCategoryClass[]) {
        {
            categoryList.map((item, index) => {
                // const tableCssTheme: any = tableCss ? tableCss(item) : {};
                return (
                    <FlexRow
                        key={'row_' + index.toString()}
                        css={{
                            borderBottom: '1px solid #f5f5f5',
                            '>div': {
                                fontsize: 12,
                                width: 24,
                                height: 24,
                                color: '#999',
                                paddingLeft: 10,
                            },
                        }}>
                        <Image
                            src={`/image/admin/icon/arrow-${hookMember.isUnfoldList[item.id] === true ? 'down' : 'up'}-gray-500.svg`}
                            width={16}
                            height={16}
                            alt="이전 버튼"
                        />
                        <div>{item.categoryName}</div>
                        <div>{item.categoryCode}</div>
                        <Image
                            src={`/image/admin/icon/arrow-${hookMember.isUnfoldList[item.id] === true ? 'down' : 'up'}-gray-500.svg`}
                            width={16}
                            height={16}
                            alt="이전 버튼"
                        />
                        {/* {
                            hookMember.isUnfoldList[item.id] === true ? {

                            } : {

                            }
                        } */}
                    </FlexRow>
                );
            })
        }
    }

    const AssetCategoryTree = function () {
        return <Flex>
            <FlexRow>
                <Flex css={{ color: '#333', marginBottom: 4, fontWeight: 500 }}>
                    전체 {hookMember.totalCount}
                </Flex>
            </FlexRow>
            {/* 페이징 */}
            <Flex>
                <FlexRow
                    css={{
                        marginTop: 30,
                        gap: 4,
                        justifyContent: 'center',
                        alignItems: 'center',
                        '>div': {
                            fontsize: 12,
                            width: 24,
                            height: 24,
                            borderRadius: 8,
                            color: '#999',
                            cursor: 'pointer',
                        },
                        '>.btnPageNum:hover, >.btnPageNum.active': {
                            background: fenxyBlue,
                            color: '#fff',
                        },
                    }}>
                    <FlexCenter onClick={tableHookMemeber.onClickPrevPageGroup}>
                        <Image
                            src={'/image/admin/table/arrow-left.svg'}
                            width={16}
                            height={16}
                            alt="이전 버튼"
                        />
                    </FlexCenter>
                    {/*  */}
                    {/* {console.log(datas.length % basicItemCount)} */}
                    {tableHookMemeber.pageArray.map((item) => (
                        <FlexCenter
                            onClick={() => {
                                hookMember.setPage(item);
                            }}
                            className={'btnPageNum ' + (item === hookMember.page && 'active')}
                            key={item}>
                            {item}
                        </FlexCenter>
                    ))}
                    <FlexCenter onClick={tableHookMemeber.onClickNextPageGroup}>
                        <Image
                            src={'/image/admin/table/arrow-right.svg'}
                            width={16}
                            height={16}
                            alt="다음 버튼"
                        />
                    </FlexCenter>
                </FlexRow>
            </Flex>
            {/* 테이블 헤더 */}
            <FlexRow
                css={{
                    borderTop: '2px solid #4A5864',
                    backgroundColor: '#f5f5f5',
                    marginTop: 30,
                    color: '#333',
                    fontSize: 14,
                    '>div': {
                        borderLeft: 0,
                        borderTop: 0,
                        padding: 10,
                    },
                    minWidth: minWidth, // TODO
                }}>
            </FlexRow>
            {/* 테이블 로우 */}
            <Flex css={{ fontSize: 14, color: '#333' }}>
                {hookMember.table.map((item, index) => {
                    // const tableCssTheme: any = tableCss ? tableCss(item) : {};
                    return (
                        <FlexRow
                            key={'row_' + index.toString()}
                            css={{
                                display: 'flex',
                                alignItems: 'center',
                                borderBottom: '1px solid #f5f5f5',
                                '>div': {
                                    padding: 10,
                                },
                            }}>
                        </FlexRow>
                    );
                })}
            </Flex>
        </Flex>
    }

    return (
        <div css={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
            <AdminHeader active={'에셋관리'} activeItem={'카테고리관리'} />
            <div css={{ marginLeft: 240, padding: 20, minWidth: 1100 }}>
                <FlexRow
                    css={{
                        paddingBottom: 20,
                        alignItems: 'center',
                        borderBottom: '2px solid #4A5864',
                    }}>
                    <div
                        css={{
                            fontSize: 18,
                            color: '#333',
                            fontWeight: 'bold',
                            flexGrow: 1,
                            lineHeight: '32px',
                        }}>
                        카테고리관리
                    </div>
                </FlexRow>

                <BorderRoundedContent>
                    <ContentHeader>검색</ContentHeader>
                    <Flex css={{ padding: 30 }}>
                        <FlexRow
                            css={{
                                minHeight: 60,
                                alignItems: 'center',
                                borderBottom: '1px solid #eee',
                            }}>
                            <div
                                css={{
                                    width: 150,
                                    paddingLeft: 30,
                                }}>
                                검색어
                            </div>
                            <select
                                css={{
                                    width: 160,
                                    marginRight: 10,
                                    height: '36px',
                                    border: '1px solid #eee',
                                    color: '#999',
                                }}
                                onChange={(e) => {
                                    hookMember.onChangeSearchType(e.target.value);
                                }}>
                                {/* <option value="없음">없음</option> */}
                                <option value="코드">닉네임</option>
                                <option value="이름">이름</option>
                            </select>
                            <InputStyle
                                type="text"
                                placeholder="검색어를 입력해주세요."
                                css={{
                                    width: 320,
                                    height: 36,
                                    fontSize: 14,
                                    border: '1px solid #eee',
                                }}
                                value={hookMember.searchText}
                                onChange={(e) => hookMember.onChangeSearchText(e.target.value)}
                            />
                            <StyledButton
                                onClick={hookMember.onClickSearch}
                                css={{ border: 0, background: fenxyBlue, color: 'white' }}>
                                검색
                            </StyledButton>
                        </FlexRow>
                    </Flex>
                </BorderRoundedContent>

                <BorderRoundedContent>
                    <Flex css={{ padding: 30 }}>
                        <FlexRow
                            css={{
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                                height: 32,
                            }}>
                        </FlexRow>
                        <Flex css={{ paddingTop: 20 }}>
                            <AssetCategoryTree />
                        </Flex>
                    </Flex>
                </BorderRoundedContent>
            </div>
        </div>
    );
};

export default AdminAssetCategoryScreen;
