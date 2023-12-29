import { Layout, Menu, theme } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./layout.module.css";

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
  const isGroupsPage = location.pathname === "/";

  return (
    <Layout>
      <Header className={styles.nav}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          className={styles.menu}
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

      <Content className={styles.content}>{children}</Content>

      <Footer className={styles.footer}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default MyLayout;
