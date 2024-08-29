import Image from "next/image";

import shape_1 from "@/assets/img/shape/ti_shape.png";
import shape_2 from "@/assets/img/shape/ti_shape2.png";
import img_1 from "@/assets/img/token/t_info_img.png";
import img_2 from "@/assets/img/icon/metric.png";
import img_3 from "@/assets/img/icon/moon.webp";

const ProjectComponent = () => {
  return (
    <section className="token-info pos-rel pt-120 pb-20">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-4">
            <div className="token-info__title sec-title mb-95 text-center text-xl-start">
              <h5 className="sec-title__subtitle">Projects</h5>
              <h2 className="sec-title__title">
                ICO Tokens <br /> Project
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="token-info--info-wrap ul_li">
              <ul className="token-info__list token-info--start">
                <li>
                  <Image width={150} height={150} src={img_2} alt="" />
                  <h4 className="mt-2">Metric Coin (MTRC)</h4>
                  <div className="flex flex-col gap-2">
                    <span>PT. Metricpack Mandiri</span>
                    <br />
                    <span>June 8, 2023 (9:00AM GMT)</span>
                    <br />
                    <span>Supply: 1.000.000 MTRC</span>
                    <br />
                    <span>Available: 1.000.000 MTRC</span>
                    <br />
                    <span>Status: Active</span>
                  </div>
                </li>
                <li>
                  <Image width={150} height={150} src={img_3} alt="" />
                  <h4 className="mt-2">Moon Coin (MNRC)</h4>
                  <div className="flex flex-col gap-2">
                    <span>Coming Soon</span>
                    <br />
                    <span>Coming Soon</span>
                    <br />
                    <span>Supply: 1.000.000 MTRC</span>
                    <br />
                    <span>Available: 1.000.000 MTRC</span>
                    <br />
                    <span>Status: Coming Soon</span>
                  </div>
                </li>
                <li>
                  <Image width={150} height={150} src={img_2} alt="" />
                  <h4 className="mt-2">Metric Coin (MTRC)</h4>
                  <div className="flex flex-col gap-2">
                    <span>Coming Soon</span>
                    <br />
                    <span>Coming Soon</span>
                    <br />
                    <span>Supply: 1.000.000 MTRC</span>
                    <br />
                    <span>Available: 1.000.000 MTRC</span>
                    <br />
                    <span>Status: Coming Soon</span>
                  </div>
                </li>
              </ul>
              <ul className="token-info__list token-info--end">
                <li>
                  <Image width={150} height={150} src={img_2} alt="" />
                  <h4 className="mt-2">Metric Coin (MTRC)</h4>
                  <div className="flex flex-col gap-2">
                    <span>Coming Soon</span>
                    <br />
                    <span>Coming Soon</span>
                    <br />
                    <span>Supply: 1.000.000 MTRC</span>
                    <br />
                    <span>Available: 1.000.000 MTRC</span>
                    <br />
                    <span>Status: Coming Soon</span>
                  </div>
                </li>
                <li>
                  <Image width={150} height={150} src={img_2} alt="" />
                  <h4 className="mt-2">Metric Coin (MTRC)</h4>
                  <div className="flex flex-col gap-2">
                    <span>PT. Metricpack Mandiri</span>
                    <br />
                    <span>June 8, 2023 (9:00AM GMT)</span>
                    <br />
                    <span>Supply: 1.000.000 MTRC</span>
                    <br />
                    <span>Available: 1.000.000 MTRC</span>
                    <br />
                    <span>Status: Active</span>
                  </div>
                </li>
                <li>
                  <Image width={150} height={150} src={img_2} alt="" />
                  <h4 className="mt-2">Metric Coin (MTRC)</h4>
                  <div className="flex flex-col gap-2">
                    <span>PT. Metricpack Mandiri</span>
                    <br />
                    <span>June 8, 2023 (9:00AM GMT)</span>
                    <br />
                    <span>Supply: 1.000.000 MTRC</span>
                    <br />
                    <span>Available: 1.000.000 MTRC</span>
                    <br />
                    <span>Status: Active</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="token-info__shape">
        <div className="shape shape--1">
          <Image src={shape_1} alt="" />
        </div>
        <div className="shape shape--2">
          <Image src={shape_2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ProjectComponent;
