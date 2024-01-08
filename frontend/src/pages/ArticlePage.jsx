import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../slices/article";

function ArticlePage() {
  const data = useParams();
  const dispatch = useDispatch();
  const articleState = useSelector((state) => state.article);

  useEffect(() => {
    dispatch(fetchArticle(data.id));
  }, []);

  console.log(articleState);
  return <div>Article Page</div>;
}

export default ArticlePage;
