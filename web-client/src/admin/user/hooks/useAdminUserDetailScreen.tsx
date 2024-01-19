import { is } from 'immer/dist/internal';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Flag } from 'src/api/admin/flagsApi';
import {
  BusinessSubaccount,
  useUpdateSubAccountByIdMutation,
} from 'src/api/businesssubaccountsApi';
import {
  CompanyInfo,
  CompanyInfoUpdateInput,
  useUpdateCompanyInfoByIdMutation,
} from 'src/api/companyInfosApi';
import { TermConsentHistory, useCreateTermConsentHistoryMutation, useFindTermConsentHistoryByuserIdQuery } from 'src/api/TermConsentHistoriesAPi';
import {
  useFindUserQuery,
  User,
  UserType,
  useUpdateUserByAdminMutation,
} from 'src/api/usersApi';
import { setUser } from 'src/data/accountSlice';
import { useTypedSelector } from 'src/store';

interface hookMember {
  user: User | undefined;
  userType: UserType;
  companyInfo: CompanyInfo | undefined;
  subAccountArray: BusinessSubaccount[] | undefined;
  selectedSubAccountIndex: number;
  flags: Flag[];

  userId: number;
  loginId: string;
  username: string;
  nickname: string;
  phone: string;

  password: string;
  repassword: string;

  subaccountModalDisplayState: 'flex' | 'none';

  onClickRouterUser: () => void;
  onClickSaveUser: () => void;
  onClickUserType: (uT: UserType) => void;
  onClickUpdateUser: () => void;
  onChangeCompanyInfo: (companyInfo: CompanyInfo) => void;
  onChangeSubAccount: (subAccount: BusinessSubaccount[]) => void;
  setSelectedSubAccountIndex: (index: number) => void;

  onChangeLoginId: (loginId: string) => void;
  onChangeUsername: (username: string) => void;
  onChangeNickname: (nickname: string) => void;
  onChangePhone: (phone: string) => void;

  onChangePw: (password: string) => void;
  onChangeRePw: (repassword: string) => void;

  onClickSubAccountReset: (id?: number) => void;

  setSubAccountDetailModal: (display: boolean) => void;
  openSubAccountDetailModal: (data: BusinessSubaccount) => void;

  modalDisplayState: 'flex' | 'none';
  onClickCompleted: () => void;
  modalContent: any;

  //마케팅동의
  checkTermEvent: boolean;
  onClickChangeTermEvent: () => void;
  termConsenter: TermConsentHistory[];
}

export function useAdminUserDetailScreen(): hookMember {
  const router = useRouter();

  const adminUserId = useTypedSelector((state) => state.account.user?.id || -1);

  const { data: user, refetch: userRefetch } = useFindUserQuery({
    id: Number(router.query.id),
  });

  const [updateUserByAdmin] = useUpdateUserByAdminMutation();
  const [updateCompanyInfoById] = useUpdateCompanyInfoByIdMutation();
  const [updateSubAccountById] = useUpdateSubAccountByIdMutation();

  //동의사항 데이터
  const [createTermConsentHistory] = useCreateTermConsentHistoryMutation();
  const {data: termConsenterData, refetch: termConsenterDataRefetch} = useFindTermConsentHistoryByuserIdQuery({
    userId: Number(router.query.id)
  });

  const [modalDisplayState, setModalDisplayState] = useState<'flex' | 'none'>(
    'none',
  );
  const [modalContent, setModalContent] = useState<any>(<div></div>);

  const onClickCompleted = () => {
    setModalDisplayState('none');
  };
  // 회원분류
  const [userType, setUserType] = useState<UserType>('HAPPYCALL');

  // 유저정보
  const [userId, setUserId] = useState<number>(-1);
  const [loginId, setLoginId] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const [password, setPassword] = useState<string>('');
  const [repassword, setRepassword] = useState<string>('');

  //
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | undefined>(
    undefined,
  );

  const [selectedSubAccountIndex, setSelectedSubAccountIndex] =
    useState<number>(-1);
  const [subAccountArray, setSubAccountArray] = useState<
    BusinessSubaccount[] | undefined
  >(undefined);

  const [flags, setFlags] = useState<Flag[]>([]);

  const [subaccountModalDisplayState, setSubaccountModalDisplayState] =
    useState<'flex' | 'none'>('none');
  const setSubAccountDetailModal = (display: boolean) => {
    setSubaccountModalDisplayState(display ? 'flex' : 'none');
  };

  //마케팅 동의
  const [checkTermEvent, setCheckTermEvent] = useState<boolean>(false);
  const [termConsenter, setTermConsenter] = useState<TermConsentHistory[]>([]);

  useEffect(() => {
    userRefetch();
  }, []);

  useEffect(() => {
    console.log(subAccountArray);
  }, [subAccountArray]);

  useEffect(()=>{
    if(router.query.id) {
      const userId = Number(router.query.id);
      console.log(userId,'router!!')
      setUserId(userId)
    }
  },[router])

  useEffect(() => {
    if (user) {
      setUserType(user.userType);
      setCompanyInfo(user.CompanyInfo?.[0]);
      setSubAccountArray(user.BusinessSubaccount);
      setFlags(user.Flag || []);
      setLoginId(user.loginId);
      setUsername(user.username);
      setNickname(user.nickname);
      setPhone(user.phone);

      setCheckTermEvent(user.termEvent || false);
    }
  }, [user]);

  //마케팅 동의자 리스트
  useEffect(()=>{
    if(termConsenterData) {
      setTermConsenter(termConsenterData);
    }
  },[termConsenterData])

  const onClickUpdateUser = async () => {
    //
    console.log(userType);

    let isModified = false;

    if (password !== '' || repassword !== '') {
      let pw = password;
      let checkNumber = pw.search(/[0-9]/g);
      let checkEnglish = pw.search(/[a-z]/gi);

      // if (!/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/.test(pw)) {
      //   setModalContent(
      //     <div css={{ textAlign: 'center' }}>
      //       <span css={{ fontWeight: 'bold' }}>비밀번호</span>
      //       <br />
      //       숫자+영문자+특수문자 조합으로
      //       <br />
      //       8자리 이상 사용해야 합니다.
      //     </div>,
      //   );
      //   setModalDisplayState('flex');
      //   return;
      // } else if (checkNumber < 0 || checkEnglish < 0) {
      //   setModalContent(
      //     <div css={{ textAlign: 'center' }}>
      //       <span css={{ fontWeight: 'bold' }}>비밀번호</span>
      //       <br />
      //       숫자와 영문자를 혼용하여야 합니다.
      //     </div>,
      //   );
      //   setModalDisplayState('flex');
      //   return;
      // } else {
      //   console.log('통과');
      // }

      if(pw.length < 8 || pw.length > 16) {
        setModalContent(
          <div css={{ textAlign: 'center' }}>
            <span css={{ fontWeight: 'bold' }}>비밀번호</span>
            <br />
            8자 이상, 16자 이하로 작성해주세요.
          </div>,
        );
        setModalDisplayState('flex');
        return;
      }  
      else {
        console.log('통과')
      }
      //
      pw = repassword;
      checkNumber = pw.search(/[0-9]/g);
      checkEnglish = pw.search(/[a-z]/gi);

      if(pw.length < 8 || pw.length > 16) {
        setModalContent(
          <div css={{ textAlign: 'center' }}>
            <span css={{ fontWeight: 'bold' }}>비밀번호 확인</span>
            <br />
            8자 이상, 16자 이하로 작성해주세요.
          </div>,
        );
        setModalDisplayState('flex');
        return;
      }      
      else {
        console.log('통과')
      }

      // if (!/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/.test(pw)) {
      //   setModalContent(
      //     <div css={{ textAlign: 'center' }}>
      //       <span css={{ fontWeight: 'bold' }}>비밀번호 확인</span>
      //       <br />
      //       숫자+영문자+특수문자 조합으로
      //       <br />
      //       8자리 이상 사용해야 합니다.
      //     </div>,
      //   );
      //   setModalDisplayState('flex');
      //   return;
      // } else if (checkNumber < 0 || checkEnglish < 0) {
      //   setModalContent(
      //     <div css={{ textAlign: 'center' }}>
      //       <span css={{ fontWeight: 'bold' }}>비밀번호 확인</span>
      //       <br />
      //       숫자와 영문자를 혼용하여야 합니다.
      //     </div>,
      //   );
      //   setModalDisplayState('flex');
      //   return;
      // } else {
      //   console.log('통과');
      // }
      //
      if (password !== repassword) {
        setModalDisplayState('flex');
        setModalContent(
          <div css={{ textAlign: 'center' }}>
            <span css={{ fontWeight: 'bold' }}>비밀번호</span>
            <br />
            비밀번호와 비밀번호 확인이 일치하지 않습니다.
          </div>,
        );
        return;
      }
    }

    if (user) {
      const updateUser: {
        userId: number;
        userType?: string;
        username?: string;
        phone?: string;
        password?: string;
        termEvent?: boolean;
      } = { userId: Number(user.id) };
      if (userType !== user.userType) updateUser.userType = userType;
      if (username !== user.username) updateUser.username = username;
      if (phone !== user.phone) updateUser.phone = phone;
      if (password !== user.loginPw) updateUser.password = password;
      if (checkTermEvent !== user.termEvent) updateUser.termEvent = checkTermEvent;

      console.log(updateUser, 'updateUser');

      const resultUser: any = await updateUserByAdmin(updateUser);
      if (resultUser.data) isModified = true;

      if(updateUser.termEvent !== undefined) {
        await createTermConsentHistory({
          body: {
            consent: updateUser.termEvent,
            termType: 'EVENT'
          },
          userId: Number(user.id),
          consenterId: adminUserId
        })
      }
    }

    const updateCompanyInfo = checkCompanuinfo();
    if (companyInfo && updateCompanyInfo) {
      const resComp: any = await updateCompanyInfoById({
        id: Number(companyInfo.id),
        body: updateCompanyInfo,
      });

      if (resComp.data) isModified = true;
    }

    const curSubAccountArray = user?.BusinessSubaccount;
    if (subAccountArray && curSubAccountArray) {
      await Promise.all(
        subAccountArray.map(async (item, index) => {
          const curSubAccount = curSubAccountArray[index];

          if (
            curSubAccount &&
            curSubAccount.id === item.id &&
            (curSubAccount.name !== item.name ||
              curSubAccount.phone !== item.phone)
          ) {
            const updateDto: BusinessSubaccount = {
              name: item.name,
              phone: item.phone,
              accountStartDay: item.accountStartDay,
            };
            console.log(updateDto, item.id);
            const resSub: any = await updateSubAccountById({
              id: Number(item.id),
              body: updateDto,
            });

            if (resSub.data) isModified = true;
            return item;
          }
        }),
      );
    }

    if (isModified) {
      if(confirm('수정되었습니다!(확인 시 목록으로)')) router.back();
      setPassword('');
      setRepassword('');
      userRefetch();
      termConsenterDataRefetch();
      
    }
  };

  const openSubAccountDetailModal = (data: BusinessSubaccount) => {
    setSubaccountModalDisplayState('flex');
    if (subAccountArray)
      setSelectedSubAccountIndex(
        subAccountArray.findIndex((el) => el.id === data.id),
      );
  };

  const onChangeCompanyInfo = (companyInfo: CompanyInfo) => {
    setCompanyInfo(companyInfo);
  };

  const onChangeSubAccount = (subAccount: BusinessSubaccount[]) => {
    setSubAccountArray(subAccount);
  };

  const onChangeLoginId = (loginId: string) => {
    setLoginId(loginId);
  };
  const onChangeUsername = (username: string) => {
    setUsername(username);
  };
  const onChangeNickname = (nickname: string) => {
    setNickname(nickname);
  };
  const onChangePhone = (phone: string) => {
    setPhone(phone);
  };

  const onClickSubAccountReset = (id?: number) => {
    if (!subAccountArray || !user?.BusinessSubaccount || !id) return;

    const findIndex = user.BusinessSubaccount.findIndex((el) => el.id === id);
    const modiIndex = subAccountArray.findIndex((el) => el.id === id);
    if (subAccountArray[modiIndex] && user.BusinessSubaccount[findIndex]) {
      const resetData = user.BusinessSubaccount[findIndex];
      setSubAccountArray(
        subAccountArray.map((item) => {
          if (item.id === id) {
            return resetData;
          }

          return item;
        }),
      );
    }
  };

  const checkCompanuinfo = (): CompanyInfoUpdateInput | undefined => {
    const companyDataSet = user?.CompanyInfo?.[0];
    if (!companyInfo || !companyDataSet) return undefined;
    const userCompanyInfo = companyInfo;

    const updateInput: CompanyInfoUpdateInput = {
      constructorType:
        userCompanyInfo.constructorType !== companyDataSet.constructorType
          ? userCompanyInfo.constructorType
          : undefined,
      ceoName:
        userCompanyInfo.ceoName !== companyDataSet.ceoName
          ? userCompanyInfo.ceoName
          : undefined,
      companyName:
        userCompanyInfo.companyName !== companyDataSet.companyName
          ? userCompanyInfo.companyName
          : undefined,
      businessNumber:
        userCompanyInfo.businessNumber !== companyDataSet.businessNumber
          ? userCompanyInfo.businessNumber
          : undefined,
      postcode:
        userCompanyInfo.postcode !== companyDataSet.postcode
          ? userCompanyInfo.postcode
          : undefined,
      subAddress:
        userCompanyInfo.subAddress !== companyDataSet.subAddress
          ? userCompanyInfo.subAddress
          : undefined,
      // sido: (userCompanyInfo.sido !== userDataset.sido) ? userDataset.sido : undefined,
      // sigungu: (userCompanyInfo.sigungu !== userDataset.sigungu) ? userDataset.sigungu : undefined,
      businessStatus:
        userCompanyInfo.businessStatus !== companyDataSet.businessStatus
          ? userCompanyInfo.businessStatus
          : undefined,
      businessSector:
        userCompanyInfo.businessSector !== companyDataSet.businessSector
          ? userCompanyInfo.businessSector
          : undefined,
      phone:
        userCompanyInfo.phone !== companyDataSet.phone
          ? userCompanyInfo.phone
          : undefined,
      cellPhone:
        userCompanyInfo.cellPhone !== companyDataSet.cellPhone
          ? userCompanyInfo.cellPhone
          : undefined,
      fax:
        userCompanyInfo.fax !== companyDataSet.fax
          ? userCompanyInfo.fax
          : undefined,
      email:
        userCompanyInfo.email !== companyDataSet.email
          ? userCompanyInfo.email
          : undefined,
      taxBill:
        userCompanyInfo.taxBill !== companyDataSet.taxBill
          ? userCompanyInfo.taxBill
          : undefined,
      taxBillEmail:
        userCompanyInfo.taxBillEmail !== companyDataSet.taxBillEmail
          ? userCompanyInfo.taxBillEmail
          : undefined,

      bank:
        userCompanyInfo.bank !== companyDataSet.bank
          ? userCompanyInfo.bank
          : undefined,
      accountNumber:
        userCompanyInfo.accountNumber !== companyDataSet.accountNumber
          ? userCompanyInfo.accountNumber
          : undefined,
      depositorName:
        userCompanyInfo.depositorName !== companyDataSet.depositorName
          ? userCompanyInfo.depositorName
          : undefined,
      isCertified:
        userCompanyInfo.isCertified !== companyDataSet.isCertified
          ? userCompanyInfo.isCertified
          : undefined,
    };

    return updateInput;
  };


  //마케팅 동의
  const onClickChangeTermEvent = () => {
    setCheckTermEvent(!checkTermEvent);
  }

  return {
    user,
    userType,
    companyInfo,
    subAccountArray,
    selectedSubAccountIndex,
    flags,

    userId,
    loginId,
    username,
    nickname,
    phone,

    password,
    repassword,

    subaccountModalDisplayState,

    modalDisplayState,
    modalContent,
    onClickCompleted,

    onClickRouterUser: () => {
      router.push(`/admin/user/`);
    },
    onClickSaveUser: () => {
      console.log(user);
    },
    onClickUserType: async (uT: UserType) => {
      setUserType(uT);
    },
    onClickUpdateUser,
    onChangeCompanyInfo,
    onChangeSubAccount,
    setSelectedSubAccountIndex,

    onChangeLoginId,
    onChangeNickname,
    onChangePhone,
    onChangeUsername,

    onChangePw: (password: string) => {
      setPassword(password);
    },
    onChangeRePw: (repassword: string) => {
      setRepassword(repassword);
    },

    onClickSubAccountReset,

    setSubAccountDetailModal,
    openSubAccountDetailModal,

    //마케팅동의
    checkTermEvent,
    onClickChangeTermEvent,
    termConsenter,
  };
}
