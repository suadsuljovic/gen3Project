import { Divider, Typography } from "antd";

import Container from "../Container/Container";

import BlogsGroup from "../BlogsGroup/BlogsGroup";
import { useNavigate } from "react-router-dom";
import { paths } from "../../utils";

const { Title } = Typography;

function LandingCategoryGroup(props) {
  const { title, data, id } = props;
  const navigate = useNavigate();

  console.log(id);

  return (
    <Container>
      <section>
        <Title onClick={() => navigate(paths.group.replace(":id", id))}>
          {title}
        </Title>
        <Divider />
        <BlogsGroup data={data} />
      </section>
    </Container>
  );
}

export default LandingCategoryGroup;
