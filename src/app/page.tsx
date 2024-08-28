import HomeOne from "@/component/homes/home-one";
import HomeThree from "@/component/homes/home-three";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Bico - ICO & Crypto Landing React Next js Template",
};
const index = () => {
  return (
    <Wrapper>
      <HomeThree />
    </Wrapper>
  );
};

export default index;
