import { StaticImageData } from "next/image";

import thumb_1 from "@/assets/img/team/team_01.png";
import thumb_2 from "@/assets/img/team/team_02.png";
import thumb_3 from "@/assets/img/team/team_03.png";
import thumb_4 from "@/assets/img/team/team_04.png";

import home_3thumb_1 from "@/assets/img/team/img_01.png";
import home_3thumb_2 from "@/assets/img/team/cto.png";
import home_3thumb_3 from "@/assets/img/team/cfo.png";
import home_3thumb_4 from "@/assets/img/team/img_04.png";
import home_3thumb_5 from "@/assets/img/team/ceo.jpg";

interface DataType {
  id: number;
  page: string;
  thumb: StaticImageData;
  title: string;
  designation: string;
}
[];

const team_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    thumb: thumb_1,
    title: "Yevhen Oleksiy",
    designation: "Blockchain Architect",
  },
  {
    id: 2,
    page: "home_1",
    thumb: thumb_2,
    title: "Pavlo Fedor",
    designation: "Marketing Manger",
  },
  {
    id: 3,
    page: "home_1",
    thumb: thumb_3,
    title: "Serhii Anatolii",
    designation: "Founder & CEO",
  },
  {
    id: 4,
    page: "home_1",
    thumb: thumb_4,
    title: "Ivan Petrov",
    designation: "Blockchain Engineer",
  },

  // home_3

  {
    id: 1,
    page: "home_3",
    thumb: home_3thumb_5,
    title: "Mr. Han",
    designation: "CEO",
  },
  {
    id: 2,
    page: "home_3",
    thumb: home_3thumb_2,
    title: "Muhardin H.",
    designation: "CTO",
  },
  {
    id: 3,
    page: "home_3",
    thumb: home_3thumb_3,
    title: "Mr. ",
    designation: "CFO",
  },
  {
    id: 4,
    page: "home_3",
    thumb: home_3thumb_4,
    title: "David Williams",
    designation: "CMO",
  },
];

export default team_data;
