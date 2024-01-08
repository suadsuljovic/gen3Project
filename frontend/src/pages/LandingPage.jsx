import { useDispatch, useSelector } from "react-redux";
import CTA from "../components/CTA/CTA";
import Hero from "../components/Hero/Hero";
import LandingCategoryGroup from "../components/Popular/LandingCategoryGroup";
import { useEffect } from "react";
import { fetchNatureBlogs, fetchNewsBlogs, fetchPopularBlogs } from "../slices";

function LandingPage() {
  const popularBlogs = useSelector((state) => state.blogs.popularBlogs);
  const natureBlogs = useSelector((state) => state.blogs.natureBlogs);
  const newsBlogs = useSelector((state) => state.blogs.newsBlogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularBlogs());
    dispatch(fetchNatureBlogs());
    dispatch(fetchNewsBlogs());
  }, []);

  return (
    <>
      <Hero />
      <CTA />
      <LandingCategoryGroup data={popularBlogs?.data} title="Popular blogs" />
      <LandingCategoryGroup data={natureBlogs?.data} title="Nature blogs" />
      <LandingCategoryGroup data={newsBlogs?.data} title="News" />
    </>
  );
}

export default LandingPage;
