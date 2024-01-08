import { Card, Flex } from "antd";
import { getImageUrl, paths } from "../../utils";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

function BlogsGroup(props) {
  const { data } = props;
  const navigate = useNavigate();

  return (
    <Flex wrap="wrap" align="center" gap="middle">
      {data?.map((article) => {
        return (
          <Card
            key={article.id}
            hoverable
            style={{ width: 240 }}
            onClick={() => navigate(paths.article.replace(":id", article.id))}
            cover={
              <img
                alt="example"
                src={getImageUrl(article.attributes.cover.data.attributes.url)}
              />
            }
          >
            <Meta
              title={article.attributes.title}
              description={article.attributes.description}
            />
          </Card>
        );
      })}
    </Flex>
  );
}

export default BlogsGroup;
