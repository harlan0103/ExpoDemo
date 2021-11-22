import React from "react";
import { Layout, Row, Col, Image, List, Card } from 'antd';

import imgUrl from '../statics/img/placeholder_img.jpg';    // PLACEHOLDER

// Nation flags
import flag_br from '../statics/img/br.png';
import flag_cn from '../statics/img/cn.png';
import flag_dz from '../statics/img/dz.png';
import flag_es from '../statics/img/es.png';
import flag_fr from '../statics/img/fr.png';
import flag_gr from '../statics/img/gr.png';
import flag_jp from '../statics/img/jp.png';
import flag_kr from '../statics/img/kr.png';
import flag_nl from '../statics/img/nl.png';
import flag_sg from '../statics/img/sg.png';

import NaviBar from "./NaviBar";

const { Header, Footer, Content } = Layout;
const { Meta } = Card;


class HomePage extends React.Component {

    // Set image width as windows width
    state = {
        imgWidth: 0,
        imgHeight: 0,
    };

    componentDidMount() {
        
    };

    render() {
        return(
            <Layout>
                <Header>
                    <div>
                        <Row>   
                            {/* antd组件 Menu 好像无法将子项目向右对其，目前使用 Col 将 Header 部分一分为二*/}
                            <Col span={12}> Logo </Col>
                            <Col span={12}> <NaviBar/> </Col>
                        </Row>
                    </div>
                </Header>

                <Content>
                    {/* 需要将图片宽度与窗口宽度保持一致 */}
                    <Image src={ imgUrl } preview={false} />


                    {/* 国家展区以及地区展区部分 */}
                    <div>
                        <Row>
                            <Col span={16} offset={4} style={{ background:"#D5D5D5" }}>
                                <Row gutter={[24, 40]} justify="space-around" align="middle">
                                    <Col span={2}> 国家展区 </Col>
                                    <Col span={2}> <img src={flag_br} style={{width:80, height:50}}/> </Col>
                                    <Col span={2}> <img src={flag_cn} style={{width:80, height:50}}/> </Col>
                                    <Col span={2}> <img src={flag_dz} style={{width:80, height:50}}/> </Col>
                                    <Col span={2}> <img src={flag_es} style={{width:80, height:50}}/> </Col>
                                    <Col span={2}> <img src={flag_fr} style={{width:80, height:50}}/> </Col>
                                    <Col span={2}> <img src={flag_gr} style={{width:80, height:50}}/> </Col>
                                    <Col span={2}> <img src={flag_jp} style={{width:80, height:50}}/> </Col>
                                    <Col span={2}> <img src={flag_kr} style={{width:80, height:50}}/> </Col>
                                    <Col span={2}> <img src={flag_nl} style={{width:80, height:50}}/> </Col>
                                    <Col span={2}> <img src={flag_sg} style={{width:80, height:50}}/> </Col>
                                    <Col span={2}> 更多+ </Col>

                                    <Col span={2}> 地区展区 </Col>
                                    <Col span={2}> 上海展区 </Col>
                                    <Col span={2}> 重庆展区 </Col>
                                    <Col span={2}> 北京展区 </Col>
                                    <Col span={2}> 陕西展区 </Col>
                                    <Col span={2}> 柬埔寨展区 </Col>
                                    <Col span={2}> 泰国展区 </Col>
                                    <Col span={2}> 香港展区 </Col>
                                    <Col span={2}> 澳大利亚展区 </Col>
                                    <Col span={2}> 美国展区 </Col>
                                    <Col span={2}> 俄罗斯展区 </Col>
                                    <Col span={2}> 更多+ </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>

                    {/* 新闻动态部分 */}
                    <div>
                        <Card hoverable style={{width:240}} cover={<img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
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

};

export default HomePage;