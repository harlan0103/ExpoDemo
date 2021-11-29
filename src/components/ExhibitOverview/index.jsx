import chemicalProducts from '@/statics/img/chemical_products.jpg';
import clothes from '@/statics/img/clothes.jpg';
import energy from '@/statics/img/energy.jpg';
import food from '@/statics/img/food.jpg';
import hardwareTools from '@/statics/img/hardware_tools.jpg';
import homeAppliances from '@/statics/img/home_appliances.jpg';
import illumination from '@/statics/img/illumination.jpg';
import machine from '@/statics/img/machine.jpg';
import medicalTreatment from '@/statics/img/medicalTreatment.jpg';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
// import { LeftCircleTwoTone, RightCircleTwoTone } from "@ant-design/icons";
import { Carousel, Input, Select, Space, Typography } from 'antd';
import React, { useMemo, useState } from 'react';
import './index.scss';

const { Title, Text } = Typography;
const { Option } = Select;

const ExhibitOverview = (props) => {
    const { defatulStyle = {} } = props;

    const [exhibitInfo, setExhibitInfo] = useState({
        categoryCount: 0,
        exhibitionAreaCount: 0
    });

    const [categioryList, setCategioryList] = useState([
        {
            title: "照明",
            img: illumination,
            exhibitsCount: 0,
            exhibitorsCount: 0,
            subCategiories: ['家用灯具', '工业照明'],
        },
        {
            title: "纺织服装",
            img: clothes,
            exhibitsCount: 0,
            exhibitorsCount: 0,
            subCategiories: ['男士', '女士', '儿童'],
        },
        {
            title: "机械",
            img: machine,
            exhibitsCount: 0,
            exhibitorsCount: 0,
            subCategiories: ['矿山设备', '水泥设备', '配件'],
        },
        {
            title: "能源",
            img: energy,
            exhibitsCount: 0,
            exhibitorsCount: 0,
            subCategiories: ['风电', '火电', '太阳能'],
        },
        {
            title: "医药及医药保健",
            img: medicalTreatment,
            exhibitsCount: 0,
            exhibitorsCount: 0,
            subCategiories: ['外科', '防护', '儿童'],
        },
        {
            title: "家电",
            img: homeAppliances,
            exhibitsCount: 0,
            exhibitorsCount: 0,
            subCategiories: ['家用电器', '数码', '电脑'],
        },
        {
            title: "化工产品",
            img: chemicalProducts,
            exhibitsCount: 0,
            exhibitorsCount: 0,
            subCategiories: ['有机原料', '生物化工'],
        },
        {
            title: "五金工具",
            img: hardwareTools,
            exhibitsCount: 0,
            exhibitorsCount: 0,
            subCategiories: ['建筑五金', '日用五金', '家居五金'],
        },
        {
            title: "食品",
            img: food,
            exhibitsCount: 0,
            exhibitorsCount: 0,
            subCategiories: ['粮食和粮食制品', '肉和肉制品', '饮品'],
        },
    ]);

    const categioryCards = useMemo(() => {
        const content = (
            <Carousel
                arrows={true}
                prevArrow={<LeftOutlined />}
                nextArrow={<RightOutlined />}
                slidesToShow={3}
            >
                {
                    categioryList.map(item =>
                        <div className="exhibit-item-wrap">
                            <div className="flip-container" >
                                <div class="flipper">
                                    <div class="front"
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {/* 正面内容 */}
                                        <Title level={5}>{item.title}</Title>
                                        <img src={item.img} alt={item.title} style={{ width: 150, height: 150 }} />
                                        <Space>
                                            <div>{item.exhibitsCount}个展区</div>
                                            <div>{item.exhibitsCount}个展商</div>
                                        </Space>
                                    </div>
                                    <div class="back">
                                        {/* 背面内容 */}
                                        <Title level={5}>{item.title}</Title>
                                        {item.subCategiories.map(subCategiory => <div>{subCategiory}</div>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </Carousel>
        );

        return content;
    }, [categioryList])


    return (
        <div className="exhibit-bar" style={defatulStyle}>
            <div className="exhibit-bar-title">
                <Space align="center">
                    <div style={{ color: "rgba(0, 0, 0, 0.85)", fontWeight: 600, fontSize: 24 }}>商店+商品</div>
                    <Text>{exhibitInfo.categoryCount}个大类</Text>
                    <Text>{exhibitInfo.exhibitionAreaCount}个展区</Text>
                </Space>

                <div style={{ minWidth: 400 }}>
                    <Input.Group compact>
                        <Select defaultValue="exhibit" style={{ width: '20%' }}>
                            <Option value="exhibit">展品</Option>
                            <Option value="exhibitor">展商</Option>
                        </Select>
                        <Input.Search
                            style={{ width: '80%' }}
                            placeholder="请输入关键字"
                            enterButton="搜索"
                        />
                    </Input.Group>
                </div>

            </div>

            <div style={{ marginTop: 30, marginBottom: 30, width: '100%' }}>
                {categioryCards}
            </div>

        </div>
    )
}

export default ExhibitOverview;