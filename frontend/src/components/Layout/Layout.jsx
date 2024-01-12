import { Layout, Menu } from "antd";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./layout.module.css";
import { paths } from "../../utils";
import { Input } from "antd";
// import { useDispatch } from "react-redux";
// import { searchArticle } from "../../slices/search";
const { Search } = Input;

const { Header, Content, Footer } = Layout;
const items = [
  { label: "Home", key: "1" },
  { label: "Groups", key: "2" },
];

const MyLayout = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const { q } = useParams();
  // const dispatch = useDispatch();

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
        <Search
          placeholder="input search text"
          onSearch={(value) => {
            // navigate("/search/" + value);
            navigate(paths.search.replace(":q", value));
            // dispatch(searchArticle(value));
          }}
          defaultValue={q}
          style={{
            width: 200,
          }}
        />
      </Header>

      <Content>{children}</Content>

      <Footer className={styles.footer}>My awesome footer @Suad</Footer>
    </Layout>
  );
};
export default MyLayout;
