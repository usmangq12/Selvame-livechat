import React, { useState } from "react";
import {
  Button,
  Row,
  Col,
  Layout,
  Typography,
  Image,
  Input,
  Menu,
  Tag,
} from "antd";
import {
  PictureOutlined,
  PaperClipOutlined,
  GifOutlined,
  SmileOutlined,
  VideoCameraAddOutlined,
  CloseOutlined,
  ArrowsAltOutlined,
  PlusOutlined,
  EllipsisOutlined
} from "@ant-design/icons";

function App() {
  const [enableMessaging, setEnableMessaging] = useState(false);
  const { Text, Title } = Typography;
  const { TextArea } = Input;
  const [size] = useState<any>('large');

  const handleMessagingClick = () => {
    setEnableMessaging(enableMessaging);
  };

  function log(e: any) {
    console.log(e);
  }

  const addUser = () => {}
  
  return (
    <div>
      <Row>
        <Col span={24}>
          <Button
            type="primary"
            style={{ margin: 8 }}
            onClick={() => handleMessagingClick()}
          >
            Messaging
          </Button>
        </Col>

        <Col xs={2} sm={4} md={6} lg={6} xl={7}></Col>
        <Col xs={20} sm={16} md={12} lg={10} xl={8}>
          <Layout className="layout" style={{ backgroundColor: "#fff" }}>
            <div style={{ height: "40px" }}>
              <hr style={{ borderWidth: "thin" }} />
              <Title style={{ float: "left" }} level={5}>
                New message
              </Title>
              <CloseOutlined style={{ float: "right", marginTop: 3 }} />
              <ArrowsAltOutlined
                style={{ float: "right", marginRight: 10, marginTop: 3 }}
              />
            </div>

            <div>
              <hr />
              <Tag closable onClose={log}>
              Emma Watson
              </Tag>
              
              
          <PlusOutlined size={size} style={{float: "right", margin: 5}} onClick={() => addUser}/>
          
              <hr />
            </div>
            <div>
              <Image
                width={70}
                style={{
                  borderRadius: "50%",
                }}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              <br />
              <Title level={4}>Emma Watson</Title>
              <Text>
                Data Engineering | Bigdata | Cloud | AWS 2X | Hadoop | Spark |
                Python
              </Text>
              <hr />
            </div>

            <TextArea
              maxLength={1000}
              placeholder={"Write a message..."}
              autoSize={{ minRows: 4, maxRows: 9 }}
              style={{ width: "100%", maxWidth: "100%", marginTop: 150 }}
            />

            <Menu theme="light" mode="horizontal" style={{backgroundColor: "#eeeeee"}}>
              <Menu.Item key="1" icon={<PictureOutlined />} />
              <Menu.Item key="2" icon={<PaperClipOutlined />} />
              <Menu.Item key="3" icon={<GifOutlined />} />
              <Menu.Item key="4" icon={<SmileOutlined />} />
              <Menu.Item key="5" icon={<VideoCameraAddOutlined />} />
              <EllipsisOutlined style={{ float: "right", marginTop: 18, marginRight: 8 }}/>
              <Button style={{backgroundColor: "#D6D6D6", float: "right", margin: 8}}>Send</Button>
            </Menu>

          </Layout>
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={9}></Col>
      </Row>
    </div>
  );
}

export default App;
