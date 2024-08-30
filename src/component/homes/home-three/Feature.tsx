import icon_1 from "@/assets/img/icon/f_01.svg";
import icon_2 from "@/assets/img/icon/f_02.svg";
import icon_3 from "@/assets/img/icon/f_03.svg";
import icon_4 from "@/assets/img/icon/f_04.svg";
import icon_5 from "@/assets/img/icon/f_05.svg";

import shape_1 from "@/assets/img/shape/f_shape.png";
import shape_2 from "@/assets/img/shape/s_shape1.png";
import Image, { StaticImageData } from "next/image";

interface DataType {
  id: number;
  icon: StaticImageData;
  title: JSX.Element;
}
[];

const feature_data: DataType[] = [
  {
    id: 1,
    icon: icon_1,
    title: (
      <>
        Real Businesses <br />
        Real Profits
      </>
    ),
  },
  {
    id: 2,
    icon: icon_2,
    title: (
      <>
        High Growth <br /> Potential
      </>
    ),
  },
  {
    id: 3,
    icon: icon_3,
    title: (
      <>
        Strong Community <br /> and Support
      </>
    ),
  },
  {
    id: 4,
    icon: icon_4,
    title: (
      <>
        First-Mover <br /> Advantage
      </>
    ),
  },
  {
    id: 5,
    icon: icon_5,
    title: (
      <>
        Secure <br /> Transactions <br /> & Transparent
      </>
    ),
  },
];

const Feature = () => {
  return (
    <section className="features pos-rel pb-150 mb-0-pb">
      <div className="container">
        <div className="sec-title text-center mb-95">
          <h5 className="sec-title__subtitle">WHY BICO</h5>
          <h2 className="sec-title__title mb-25">Why choose Bico?</h2>
        </div>
        <div className="feature__wrap pos-rel ul_li_between">
          {feature_data.map((item) => (
            <div key={item.id} className="feature__item text-center">
              <div className="icon">
                <Image src={item.icon} alt="" />
              </div>
              <h4>{item.title}</h4>
            </div>
          ))}
          <div className="feature__line-shape">
            <Image src={shape_1} alt="" />
          </div>
        </div>
      </div>
      <div className="feature__sec-shape">
        <Image src={shape_2} alt="" />
      </div>
    </section>
  );
};

export default Feature;
