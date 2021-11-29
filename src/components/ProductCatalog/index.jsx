import { Col, Row } from 'antd';
import React, { useMemo, useState } from 'react';
import './index.scss';

const ProductCatalog = (props) => {
    const { defatulStyle = {} } = props;

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

        let rowIndex = -1;
        const categioryGrid = categioryList.reduce((acc, cur, index) => {
            if (index % 4 === 0) {
                acc.push([cur]);
                rowIndex += 1;
                return acc;
            } else {
                acc[rowIndex].push(cur);
                return acc;
            }
        }, []);


        const content = categioryGrid.map(row =>
            <Row justify="space-between">
                {row.map(col =>
                    <Col>
                        <div className="catalog-item catalog-item-cover">{col.title}</div>
                    </Col>
                )}
            </Row>
        );
        return content;
    }, [categioryList])


    return (
        <div
            className="product-catalog"
            style={{
                ...defatulStyle
            }}
        >
            <div className="product-catalog-body">
                {categioryCards}
            </div>
        </div>
    )
}

export default ProductCatalog;