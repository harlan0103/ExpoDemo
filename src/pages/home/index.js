import imgUrl from '@/statics/img/placeholder_img.jpg';
import { Layout, Drawer, Image, Typography, Card } from 'antd';
import React, { useState } from 'react';
import Exhibition from '../../components/Exhibition';
import ExhibitOverview from '../../components/ExhibitOverview';
import CustomFooter from '../../components/Footer';
import CustomeHeader from '../../components/Header';
import Partner from '../../components/Partner';
import ProductCatalog from "../../components/ProductCatalog";
import SearchBar from '../../components/SearchBar';

import { WorldMap } from './Map/';

// Nation flags
import flag_br from '@/statics/img/br.png';
import flag_cn from '@/statics/img/cn.png';
import flag_dz from '@/statics/img/dz.png';
import flag_es from '@/statics/img/es.png';
import flag_fr from '@/statics/img/fr.png';
import flag_gr from '@/statics/img/gr.png';
import flag_jp from '@/statics/img/jp.png';
import flag_kr from '@/statics/img/kr.png';
import flag_nl from '@/statics/img/nl.png';
import flag_sg from '@/statics/img/sg.png';

import NaviBar from "@/components/NaviBar/";

const { Header, Footer, Content } = Layout;
const { Meta } = Card;


// 目前这些数据先写死，等后来服务端开发后，会从服务端获得数据
const nationFlags = [ flag_br, flag_cn, flag_dz, flag_es, flag_fr, flag_gr, flag_jp, flag_kr, flag_nl, flag_sg ];
const regions = [ '上海展区', '重庆展区', '北京展区', '陕西展区', '柬埔寨展区', '泰国展区', '香港展区', '澳大利亚展区', '美国展区', '俄罗斯展区' ];
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
                {/* <Image src={ imgUrl } preview={false} /> */}
                <WorldMap />

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