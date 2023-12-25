import { useParams } from "react-router-dom";

function ArticlePage() {
  const data = useParams();

  console.log(data);
  return <div>Article Page</div>;
}

export default ArticlePage;
