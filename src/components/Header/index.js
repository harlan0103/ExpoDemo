import React from "react";
import { Row, Col, Typography, Affix, Space  } from 'antd';

import './index.css';
import NaviBar from "../NaviBar";
import expo_logo from '@/statics/img/expo_logo.png';

const { Title } = Typography;

const CustomeHeader = () => {
    return(
        <div>
            <Affix offsetTop={0}>
                <div className="header">
                <Row justify="center" align="middle">
                    <Col span={10}>
                        <img src={ expo_logo } style={{ width: 330, height: 100 }}/>                        
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