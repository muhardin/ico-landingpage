import Blog from "@/component/blogs/blog";
import Breadcrumb from "@/component/common/Breadcrumb";
import ContactForm from "@/component/homes/home-three/ContactForm";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";

const page = () => {
  return (
    <Wrapper>
      <HeaderThree />
      <Breadcrumb title="Projects & Partner" page_title="Projects & Partner" />
      <div className="">Test</div>
      <ContactForm />
      <FooterThree />
    </Wrapper>
  );
};

export default page;
