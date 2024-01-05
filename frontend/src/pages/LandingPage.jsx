import { Button, Typography, theme } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLoading, fetchBlogs } from "../slices";
const { Title, Text } = Typography;

const { useToken } = theme;

function LandingPage() {
  const token = useToken();
  const blogsState = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  console.log(blogsState);

  useEffect(() => {
    dispatch(changeLoading());
    dispatch(fetchBlogs());
  }, []);

  return (
    <div>
      Landing Page
      <Button type="text">Text</Button>
      <Typography>
        <Title>ovo je title</Title>
        <Text>Ovo je text</Text>
      </Typography>
    </div>
  );
}

export default LandingPage;
