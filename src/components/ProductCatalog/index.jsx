import { Space } from 'antd';
import React, { useMemo, useState } from 'react';
import './index.scss';

const ProductCatalog = () => {

    const [categioryList, setCategioryList] = useState([
        {
            title: "电器及家具",
            url: 'url',
        },
        {
            title: "照明",
            url: 'url',
        },
        {
            title: "汽车及配件",
            url: 'url',
        },
        {
            title: "机械",
            url: 'url',
        },
        {
            title: "五金工具",
            url: 'url',
        },
        {
            title: "建材",
            url: 'url',
        },
        {
            title: "化工产品",
            url: 'url',
        },
        {
            title: "能源",
            url: 'url',
        },
        {
            title: "日用消费品",
            url: 'url',
        },
        {
            title: "礼品",
            url: 'url',
        },
        {
            title: "装饰品",
            url: 'url',
        },
        {
            title: "纺织品",
            url: 'url',
        },
    ])

    const categioryCards = useMemo(() => {
        const content =
            <Space size={[50, 50]} wrap>
                {
                    categioryList.map(item =>
                        <div className="catalog-item catalog-item-cover">
                            {item.title}
                        </div>
                    )
                }
            </Space>;

        return content;
    }, [categioryList])


    return (
        <div className="product-catalog">
            <div className="product-catalog-body">
                {categioryCards}
            </div>
        </div>
    )
}

export default ProductCatalog;