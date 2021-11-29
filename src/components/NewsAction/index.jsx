import activitiesImg from '@/statics/img/activities.png';
import exhibitionNewsImg from '@/statics/img/exhibition_news.png';
import backgroundImg from '@/statics/img/new_action_background.png';
import notificationImg from '@/statics/img/notification.png';
import { Card, Space, Typography, Row, Col } from 'antd';
import React, { useMemo, useRef } from 'react';
import './index.scss';

const { Title } = Typography;
const { Meta } = Card;

const NewsAction = (props) => {
    const { defatulStyle = {} } = props;

    const newsList = useRef([
        {
            title: '大会活动',
            img: activitiesImg
        },
        {
            title: '展会动态',
            img: exhibitionNewsImg
        },
        {
            title: '通知公告',
            img: notificationImg
        },
    ]);

    const newCards = useMemo(() => {
        const content =
            <Space size={ 200 } style={{ width: '100%', justifyContent: 'center' }}>
                {newsList.current.map(item =>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={item.img} />}
                    >
                        <Meta title={item.title} description="查看更多 >" />
                    </Card>
                )}
            </Space>

        return content
    }, [newsList])

    return (
        <div
            style={{
                width: '100%',
                position: 'relative',
                marginTop: 30
            }}
        >
            <img src={backgroundImg} alt="backgroundImg" style={{ width: '100%' }} />
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <div
                    style={{
                        // width: "60%"
                        ...defatulStyle,
                        width: "100%",
                    }}
                >
                    <Title level={2}>新闻与活动</Title>
                    {newCards}
                </div>
            </div>

        </div>
    )
}

export default NewsAction;