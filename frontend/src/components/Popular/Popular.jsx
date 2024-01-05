import { Card, Divider, Flex, Typography } from "antd";

import Container from "../Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBlogs } from "../../slices";

const { Meta } = Card;
const { Title } = Typography;

function Popular() {
  const blogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  console.log(blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <Container>
      <section>
        <Title>Latest popular blogs</Title>
        <Divider />

        <Flex wrap="wrap" align="center" gap="middle">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Flex>
      </section>
    </Container>
  );
}

export default Popular;
