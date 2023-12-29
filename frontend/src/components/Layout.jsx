import { Layout, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./layout.module.css";
import { paths } from "../utils";

const { Header, Content, Footer } = Layout;
const items = [
  { label: "Home", key: "1" },
  { label: "Groups", key: "2" },
];

const MyLayout = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  const location = useLocation();

  const isLandingPage = location.pathname === paths.landing;
  const isGroupsPage = location.pathname === paths.group;

  return (
    <Layout>
      <Header className={styles.nav}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          className={styles.menu}
          selectedKeys={[isLandingPage ? "1" : isGroupsPage ? "2" : "0"]}
          onClick={(item) => {
            if (item.key === "1") {
              navigate(paths.landing);
            }
            if (item.key === "2") {
              navigate(paths.group);
            }
          }}
        />
      </Header>

      <Content className={styles.content}>{children}</Content>

      <Footer className={styles.footer}>My awesome footer @Suad</Footer>
    </Layout>
  );
};
export default MyLayout;
