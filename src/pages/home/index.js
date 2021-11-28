import imgUrl from '@/statics/img/placeholder_img.jpg';
import { Drawer, Image, Typography } from 'antd';
import React, { useState } from 'react';
import Exhibition from '../../components/Exhibition';
import ExhibitOverview from '../../components/ExhibitOverview';
import CustomFooter from '../../components/Footer';
import CustomeHeader from '../../components/Header';
import Partner from '../../components/Partner';
import ProductCatalog from "../../components/ProductCatalog";
import SearchBar from '../../components/SearchBar';

const { Text } = Typography;

const HomePage = () => {
    const [visible, setVisible] = useState(true);

    const onClose = () => {
        setVisible(false);
    };

    const cookieCommonStyle = {
        backgroundColor: "rgb(51,51,51)",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <>
            <CustomeHeader />

            <div>
                {/* 需要将图片宽度与窗口宽度保持一致 */}
                <Image src={imgUrl} preview={false} />

                {/* <WorldMap /> */}

                {/* 搜索栏 */}
                <SearchBar />

                {/* 国家展区以及地区展区部分 */}
                <Exhibition />

                {/* 新闻动态部分 */}

                {/* 商品类别目录 */}
                <ProductCatalog />

                {/* 展商+商品 */}
                <ExhibitOverview />

                {/* 世博联盟战略合作伙伴 */}
                <Partner />

            </div>

            {/* 页尾 版权信息 备案 */}
            <CustomFooter />

            {/* cookie 弹窗 */}
            <Drawer
                placement="bottom"
                onClose={onClose}
                visible={visible}
                height={120}
                headerStyle={{ display: 'none' }}
                drawerStyle={{
                    ...cookieCommonStyle,
                    width: '100%'
                }}
                bodyStyle={{
                    ...cookieCommonStyle,
                    width: '80%',
                }}
            >
                <Text style={{ color: 'white', fontSize: 20 }}>
                    如您同意我们采集您的 Cookies 等信息并向您推送最新相关资讯，
                </Text>
                <Text
                    underline
                    style={{ color: 'red', fontSize: 20, cursor: 'pointer' }}
                    onClick={() => onClose()}
                >
                    点击此处
                </Text>
            </Drawer>
        </>
    );
};

export default HomePage;