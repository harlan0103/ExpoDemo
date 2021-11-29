import expo_logo from '@/statics/img/expo_logo.png';
import { Affix, Col, Row } from 'antd';
import React from "react";
import NaviBar from "../NaviBar";
import './index.css';


const CustomeHeader = () => {
    return (
        <div>
            <Affix offsetTop={0}>
                <div className="header">
                    <Row justify="center" align="middle" style={{ background: 'rgb(245, 245, 245)' }}>
                        <Col span={10}>
                            <img src={expo_logo} style={{ width: 330, height: 100 }} />
                        </Col>

                        <Col span={10}>
                            <NaviBar />
                        </Col>
                    </Row>
                </div>
            </Affix>
        </div>
    );
};

export default CustomeHeader;