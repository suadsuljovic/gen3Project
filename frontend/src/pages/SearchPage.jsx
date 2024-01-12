import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { searchArticle } from "../slices/search";

function SearchPage() {
  const params = useParams();
  const searchState = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const list = searchState?.list?.data;

  console.log(list);

  useEffect(() => {
    dispatch(searchArticle(params.q));
  }, [params.q, dispatch]);

  return (
    <div>
      {list &&
        list.map((item, index) => {
          return <p key={index}>{item.attributes.title}</p>;
        })}
    </div>
  );
}

export default SearchPage;
