import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGroup } from "../slices/group";

function GroupsPage() {
  const data = useParams();
  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchGroup(data.id));
  }, []);

  const category = categoryState.category;

  console.log(category);
  return <div>Groups Page</div>;
}

export default GroupsPage;
