import React from "react";
import data from "../../product.json";
import { Col, Row, Layout, Space, Typography, Rate } from "antd";
import { Image } from "antd";
import "../../Style/tableDetail.css";
import BreadCrumb from "../../components/organism/BreadCrumb";

import { useParams } from "react-router-dom";

const TableDetail = () => {
  const { dataId } = useParams();
  let newData;
  if (dataId !== undefined) {
    newData = data?.find((item) => item.id === +`${dataId}`);
  }

  return (
    <Layout className="h100">
      <BreadCrumb />
      <Row className="p2">
        <Col span={7}>
          <Image
            alt="example"
            src={newData.thumbnail}
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              objectFit: "contain"
            }}
            className="div-img"
          />
          <Space className="xs" align="center">
            <Image.PreviewGroup style={{ padding: "1%" }}>
              <Space size="small" align="center" className="xs">
                {newData.images.map((data, index) => (
                  <span key={index}>
                    <Image src={data} className="img" />
                  </span>
                ))}
              </Space>
            </Image.PreviewGroup>
          </Space>
        </Col>
        <Col span={12} style={{ padding: "2%" }}>
          <Typography.Title level={2}>Iphone</Typography.Title>
          <Rate allowHalf defaultValue={newData.rating} className="mt" />
          <Typography.Title level={3} className="mt">
            Brand
          </Typography.Title>
          <Typography.Title level={4} className="mt" type="secondary">
            {newData.brand}
          </Typography.Title>
          <Typography.Title level={3} className="mt">
            Category
          </Typography.Title>
          <Typography.Title level={4} type="secondary" className="mt">
            {newData.category}
          </Typography.Title>
          <Typography.Title level={3} className="mt">
            Price
          </Typography.Title>
          <Typography.Title level={4} className="mt" type="secondary">
            $ {newData.price}
          </Typography.Title>
          <Typography.Title level={3} className="mt">
            Discount
          </Typography.Title>
          <Typography.Title level={4} className="mt" type="secondary" delete>
            $ {newData.discountPercentage}
          </Typography.Title>
        </Col>
      </Row>
      <Row className="m">
        <Col>
          <Typography.Title level={2}>Description</Typography.Title>
          <Typography.Title level={5}>{newData.description}</Typography.Title>
        </Col>
      </Row>
    </Layout>
  );
};

export default TableDetail;
