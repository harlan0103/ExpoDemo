import NaviBar from "@/components/NaviBar/";
import SearchBar from '@/components/SearchBar';
// import { WorldMap } from '@/components/Map/';
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
import imgUrl from '@/statics/img/placeholder_img.jpg';
import flag_sg from '@/statics/img/sg.png';
import { Card, Col, Image, Layout, Row } from 'antd';
import React, { useState } from 'react';




const { Header, Footer, Content } = Layout;
const { Meta } = Card;

// 目前这些数据先写死，等后来服务端开发后，会从服务端获得数据
const nationFlags = [flag_br, flag_cn, flag_dz, flag_es, flag_fr, flag_gr, flag_jp, flag_kr, flag_nl, flag_sg];
const regions = ['上海展区', '重庆展区', '北京展区', '陕西展区', '柬埔寨展区', '泰国展区', '香港展区', '澳大利亚展区', '美国展区', '俄罗斯展区'];

const HomePage = () => {

    const [imgWidth, imgHeight] = useState(0);

    return (
        <Layout>
            <Header>
                <div>
                    <Row>
                        {/* antd组件 Menu 好像无法将子项目向右对其，目前使用 Col 将 Header 部分一分为二*/}
                        <Col span={12}> Logo </Col>
                        <Col span={12}> <NaviBar /> </Col>
                    </Row>
                </div>
            </Header>

            <Content>
                {/* 需要将图片宽度与窗口宽度保持一致 */}
                <Image src={imgUrl} preview={false} />
                {/* <WorldMap /> */}

                <SearchBar />

                {/* 国家展区以及地区展区部分 */}
                <div>
                    <Row>
                        <Col span={16} offset={4} style={{ background: "#D5D5D5" }}>
                            <Row gutter={[24, 40]} justify="space-around" align="middle">
                                <Col span={2}> 国家展区 </Col>
                                {nationFlags.map((flag, index) => (
                                    <Col key={index} span={2}> <img src={flag} style={{ width: 80, height: 50 }} /> </Col>
                                ))}
                                <Col span={2}> 更多+ </Col>

                                <Col span={2}> 地区展区 </Col>
                                {regions.map((region, index) => (
                                    <Col key={index} span={2}> {region} </Col>
                                ))}
                                <Col span={2}> 更多+ </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                {/* 新闻动态部分 */}
                <div>
                    <Card hoverable style={{ width: 240 }} cover={<img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                        <Meta title="大会活动" description="这是一个新闻小卡片" />
                        <span> 查看更多 </span>
                    </Card>
                </div>
            </Content>

            <Footer>

            </Footer>
        </Layout>
    );
};

export default HomePage;