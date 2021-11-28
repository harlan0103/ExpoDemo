import imgUrl from '@/statics/img/placeholder_img.jpg';
import { Image } from 'antd';
import React, { useState } from 'react';
import Exhibition from '../../components/Exhibition';
import ExhibitOverview from '../../components/ExhibitOverview';
import CustomFooter from '../../components/Footer';
import CustomeHeader from '../../components/Header';
import Partner from '../../components/Partner';
import ProductCatalog from "../../components/ProductCatalog";
import SearchBar from '../../components/SearchBar';




const HomePage = () => {

    const [imgWidth, imgHeight] = useState(0);

    return (
        <div>
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
        </div>
    );
};

export default HomePage;