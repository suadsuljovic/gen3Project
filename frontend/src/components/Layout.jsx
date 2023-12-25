import { Layout, Menu, theme } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
const { Header, Content, Footer } = Layout;
const items = [
  { label: "Home", key: "1" },
  { label: "Groups", key: "2" },
];
const MyLayout = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  const location = useLocation();

  const isLandingPage = location.pathname === "/";

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
          selectedKeys={[isLandingPage ? "1" : "2"]}
          onClick={(item) => {
            if (item.key === "1") {
              navigate("/");
            }
            if (item.key === "2") {
              navigate("/groups");
            }
          }}
        />
      </Header>

      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default MyLayout;
