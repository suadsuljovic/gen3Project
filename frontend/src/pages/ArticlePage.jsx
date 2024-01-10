import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../slices/article";
import { getImageUrl } from "../utils";
import { Typography } from "antd";
import Markdown from "react-markdown";

const { Title, Text } = Typography;

function ArticlePage() {
  const data = useParams();
  const dispatch = useDispatch();
  const articleState = useSelector((state) => state.article);

  useEffect(() => {
    dispatch(fetchArticle(data.id));
  }, []);

  const article = articleState.article;

  if (!article.data) {
    return null;
  }

  return (
    <div>
      <img
        src={getImageUrl(
          article?.data?.attributes?.cover?.data?.attributes?.url
        )}
        style={{ width: "100%", height: 300 }}
      ></img>
      <Title>{article.data.attributes.title}</Title>
      <Text>{article.data.attributes.description}</Text>
      <Markdown>{article.data.attributes.blocks[0].body}</Markdown>
    </div>
  );
}

export default ArticlePage;
