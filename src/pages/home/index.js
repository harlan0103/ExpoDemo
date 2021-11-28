import React, { useState } from 'react';
import { Image } from 'antd';

import imgUrl from '@/statics/img/placeholder_img.jpg';

import { WorldMap } from '@/components/Map/';

import Exhibition from '../../components/Exhibition';
import Partner from '../../components/Partner';
import CustomeHeader from '../../components/Header';
import CustomFooter from '../../components/Footer';

const HomePage = () => {

    const [imgWidth, imgHeight] = useState(0);

    return (
        <div>
            <CustomeHeader />

            <div>
                {/* 需要将图片宽度与窗口宽度保持一致 */}
                <Image src={ imgUrl } preview={false} />

                {/* <WorldMap /> */}



                {/* 国家展区以及地区展区部分 */}
                <Exhibition/>

                {/* 新闻动态部分 */}



                {/* 世博联盟战略合作伙伴 */}
                <Partner />

            </div>

            {/* 页尾 版权信息 备案 */}
            <CustomFooter />
        </div>
    );
};

export default HomePage;