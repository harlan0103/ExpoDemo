import chemicalProducts from '@/statics/img/chemical_products.jpg';
import food from '@/statics/img/food.jpg';
import hardwareTools from '@/statics/img/hardware_tools.jpg';
import homeAppliances from '@/statics/img/home_appliances.jpg';
import { Input, Select, Space, Typography } from 'antd';
import React, { useMemo, useState } from 'react';
import './index.scss';


const { Title, Text } = Typography;
const { Option } = Select;

const ExhibitOverview = () => {
    const [exhibitInfo, setExhibitInfo] = useState({
        categoryCount: 0,
        exhibitionAreaCount: 0
    });

    const [categioryList, setCategioryList] = useState([
        {
            title: "家电",
            img: homeAppliances,
            exhibitsCount: 0,
            exhibitorsCount: 0,
        },
        {
            title: "化工产品",
            img: chemicalProducts,
            exhibitsCount: 0,
            exhibitorsCount: 0,
        },
        {
            title: "五金工具",
            img: hardwareTools,
            exhibitsCount: 0,
            exhibitorsCount: 0,
        },
        {
            title: "食品",
            img: food,
            exhibitsCount: 0,
            exhibitorsCount: 0,
        },
    ])


    const categioryCards = useMemo(() => {
        const content =
            <Space size={[50, 50]} wrap>
                {
                    categioryList.map(item =>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'white',
                                width: 220,
                                height: 220
                            }}
                        >
                            <Title level={5}>{item.title}</Title>
                            <img src={item.img} alt={item.title} style={{ width: 150, height: 150 }} />
                            <Space>
                                <div>{item.exhibitsCount}个展区</div>
                                <div>{item.exhibitsCount}个展商</div>
                            </Space>
                        </div>
                    )
                }
            </Space>;

        return content;
    }, [categioryList])


    return (
        <div className="exhibit-bar">
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

            <div style={{ marginTop: 30, marginBottom: 30, width: "80%" }}>
                {categioryCards}
            </div>

        </div>
    )
}

export default ExhibitOverview;