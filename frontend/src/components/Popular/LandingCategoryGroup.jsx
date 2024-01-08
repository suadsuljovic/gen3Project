import { Divider, Typography } from "antd";

import Container from "../Container/Container";

import BlogsGroup from "../BlogsGroup/BlogsGroup";

const { Title } = Typography;

function LandingCategoryGroup(props) {
  const { title, data } = props;

  return (
    <Container>
      <section>
        <Title>{title}</Title>
        <Divider />
        <BlogsGroup data={data} />
      </section>
    </Container>
  );
}

export default LandingCategoryGroup;
