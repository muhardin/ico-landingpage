import Blog from "@/component/blogs/blog";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Blog Bico - ICO & Crypto Landing React Next js Template",
};
const index = () => {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  );
};

export default index;
