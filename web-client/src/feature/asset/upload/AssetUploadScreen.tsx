import { NextPage } from 'next';
import Image from 'next/image';
import { Flex, FlexCenter, FlexRow } from 'src/common/styledComponents';
import Header from 'src/common/header/Header';
import { MainFooter } from 'src/common/footer/MainFooter';

const LoginScreen: NextPage = () => {

  return (
    <Flex>
      <Flex css={{ minHeight: '100vh' }}>
        <Header
          hasBorder
          LeftComponent={
            <div
              onClick={() => {
                window.history.back();
              }}
              css={{
                transform: 'rotate(-180deg)',
                height: 24,
                width: 24,
                position: 'relative',
                cursor: 'pointer',
              }}>
              <Image
                src="/image/icon/arrow-right-black-tail.svg"
                layout="fill"
                alt="arrow"
              />
            </div>
          }
          CenterComponent={
            <div css={{ color: '#222', fontSize: 16, fontWeight: 500 }}>
              에셋 업로드
            </div>
          }
        />
        <div>
            
        </div>
      </Flex>
      <MainFooter />
    </Flex>
  );
};
export default LoginScreen;
