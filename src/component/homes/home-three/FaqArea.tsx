import Image from "next/image";
import Link from "next/link";

import shape_1 from "@/assets/img/shape/s_shape1.png";
import shape_2 from "@/assets/img/shape/s_shape2.png";

interface DataType {
  id: number;
  title: string;
  desc_1: JSX.Element;
  list: string[];
  desc_2: JSX.Element;
}
[];

const faq_data: DataType[] = [
  {
    id: 1,
    title: "What is BICO?",
    desc_1: (
      <>
        BICO is a platform that allows companies with real businesses to create
        their own cryptocurrencies and facilitate transactions within our
        ecosystem. The BICO coin is the primary transaction tool used for
        various services on the platform :
      </>
    ),
    list: [
      "Scale of the project",
      "Listing the token on exchanges",
      "Listing the token on DEX",
    ],
    desc_2: (
      <>
        Our team assists you in every possible way, balancing the cost and
        quality of your product for maximum satisfaction. <br />
        To get a concrete assessment of your future AI solution,{" "}
        <Link href="#!">Contact us</Link> and we will quickly provide you with
        all the information you need.
      </>
    ),
  },
  {
    id: 2,
    title: "How can I participate in the BICO presale?",
    desc_1: (
      <>
        To participate, you can sign up on our investor dashboard, complete the
        KYC verification, and follow the instructions to purchase BICO coins
        during the presale period.
      </>
    ),
    list: [
      "Register on the investor dashboard",
      "Complete KYC verification",
      "Purchase BICO coins during the presale period",
      "Secure and store your purchased BICO coins",
    ],
    desc_2: (
      <>
        Our team assists you in every possible way, balancing the cost and
        quality of your product for maximum satisfaction. <br />
        To get a concrete assessment of your future AI solution,{" "}
        <Link href="#!">Contact us</Link> and we will quickly provide you with
        all the information you need.
      </>
    ),
  },
  {
    id: 3,
    title: "What are the benefits of holding BICO coins?",
    desc_1: (
      <>
        BICO coin holders can enjoy various benefits, including transaction fee
        discounts on the platform, rewards from staking programs, and voting
        rights in strategic decisions through the governance mechanism.
      </>
    ),
    list: [
      "Transaction fee discounts",
      "Rewards from staking programs",
      "Voting rights in strategic decisions",
    ],
    desc_2: (
      <>
        Our team assists you in every possible way, balancing the cost and
        quality of your product for maximum satisfaction. <br />
        To get a concrete assessment of your future AI solution,{" "}
        <Link href="#!">Contact us</Link> and we will quickly provide you with
        all the information you need.
      </>
    ),
  },
  {
    id: 4,
    title: "Is BICO compliant with regulations?",
    desc_1: (
      <>
        Yes, BICO complies with all applicable regulations in various
        jurisdictions. We also implement KYC/AML processes to ensure
        transparency and legal compliance.
      </>
    ),
    list: ["Compliance with regulations", "KYC/AML processes", "Transparency"],
    desc_2: (
      <>
        Our team assists you in every possible way, balancing the cost and
        quality of your product for maximum satisfaction. <br />
        To get a concrete assessment of your future AI solution,{" "}
        <Link href="#!">Contact us</Link> and we will quickly provide you with
        all the information you need.
      </>
    ),
  },
  {
    id: 5,
    title: "When will BICO coins be listed on cryptocurrency exchanges?",
    desc_1: (
      <>
        BICO coins are scheduled to be listed on cryptocurrency exchanges in Q1
        2025. We will announce further details as the listing date approaches.
      </>
    ),
    list: [
      "Q1 2025",
      "Listing on cryptocurrency exchanges",
      "Announcement of further details",
    ],
    desc_2: (
      <>
        Our team assists you in every possible way, balancing the cost and
        quality of your product for maximum satisfaction. <br />
        To get a concrete assessment of your future AI solution,{" "}
        <Link href="#!">Contact us</Link> and we will quickly provide you with
        all the information you need.
      </>
    ),
  },
  {
    id: 6,
    title: "Are there any referral or airdrop programs?",
    desc_1: (
      <>
        Yes, we will launch referral and airdrop programs as part of our
        marketing strategy to increase community participation.
      </>
    ),
    list: ["Referral programs", "Airdrop programs", "Marketing strategy"],
    desc_2: (
      <>
        Our team assists you in every possible way, balancing the cost and
        quality of your product for maximum satisfaction. <br />
        To get a concrete assessment of your future AI solution,{" "}
        <Link href="#!">Contact us</Link> and we will quickly provide you with
        all the information you need.
      </>
    ),
  },
];

const FaqArea = () => {
  return (
    <section className="faq pos-rel pt-140 pb-105">
      <div className="container">
        <div className="sec-title text-center mb-35">
          <h5 className="sec-title__subtitle">FAQ</h5>
          <h2 className="sec-title__title">Frequently asked questions</h2>
        </div>
        <div className="faq__wrap">
          <div className="accordion_box clearfix" id="accordionThree">
            {faq_data.map((item) => (
              <div
                key={item.id}
                className={` block accordion-item ${
                  item.id === 1 ? "active-block" : ""
                }`}
                id={`heading${item.id}`}
              >
                <button
                  className={`acc-btn accordion-button ${
                    item.id === 1 ? "" : "collapsed"
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${item.id}`}
                  aria-expanded="true"
                  aria-controls={`collapse${item.id}`}
                >
                  <span>QA : 0{item.id}</span>
                  {item.title}
                </button>
                <div
                  id={`collapse${item.id}`}
                  className={`accordion-collapse collapse ${
                    item.id === 1 ? "show" : ""
                  }`}
                  data-bs-parent="#accordionThree"
                >
                  <div className="content accordion-body">
                    <p>{item.desc_1}</p>
                    <ul>
                      {item.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <p>{item.desc_2}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="faq__sec-shape">
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

export default FaqArea;
