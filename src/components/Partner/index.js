import React from "react";
import { Row, Col, Carousel } from 'antd';

import './index.css';

import partner_luzhou from '@/statics/img/Luzhoulaojiao.png';
import partner_langjiu from '@/statics/img/Sichuanlangjiu.png';
import partner_img from '@/statics/img/partner.png';

const Partner = () => {
    const partners = [
        partner_luzhou,
        partner_langjiu
    ];

    return(
        <div className="partner">
            <Row justify="center">
                <Col span={10} style={{ background: "white", textAlign: "center" }}>
                    <img src={partner_img} style={{ width: 400, height: 200 }} />
                </Col>

                <Col span={10} style={{ background: "white"}}>
                    <Carousel autoplay dotPosition="right">
                        {
                            partners.map(partner => (
                                <div>
                                    <img src={partner} style={{ width: 400, height: 200, marginLeft: "auto", marginRight: "auto" }} />
                                </div>
                            ))
                        }
                    </Carousel>
                </Col>
            </Row>
        </div>
    );
};

export default Partner;