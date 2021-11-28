import { Drawer, Typography } from 'antd';
import React, { useState } from 'react';
import Exhibition from '../../components/Exhibition';
import ExhibitOverview from '../../components/ExhibitOverview';
import CustomFooter from '../../components/Footer';
import CustomeHeader from '../../components/Header';
import NewsAction from '../../components/NewsAction';
import Partner from '../../components/Partner';
import ProductCatalog from "../../components/ProductCatalog";
import SearchBar from '../../components/SearchBar';
import { WorldMap } from './Map/';

// 目前这些数据先写死，等后来服务端开发后，会从服务端获得数据
const { Text } = Typography;

const HomePage = () => {
    const [visible, setVisible] = useState(false);

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
                {/* <Image src={ imgUrl } preview={false} /> */}
                <WorldMap />

                {/* <WorldMap /> */}

                {/* 搜索栏 */}
                <SearchBar />

                {/* 国家展区以及地区展区部分 */}
                <Exhibition />

                {/* 新闻动态部分 */}
                <NewsAction />

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