import React from "react";
import "./Home.css";
import { Images } from "../../constants/Images";
import { Container } from "react-bootstrap";
import SolutionsComp from "../../components/SolutionsComp/SolutionsComp";
import QualityComp from "../../components/QualityComp/QualityComp";

export default function Home() {

  const solutions = {
      head:'We Are All In One IT Solution & Technology Company',
      head2:'We are technology solutions providing company all over the world doing over 3years.',
      head3:`We believe in true partnerships with our clients. Become one of them. he world's best brands trust us with their products. Explore our selected cases and convince yourself of our pragmatic and user-centered approach.`,
  }

  const clients = {
    head:'Our Trusted Clients Who Achieved Pro Results',
    head2:'we actually  look into our experts accounts with view only access or screen sharing to see with our own eyes.',
    head3:`We believe in true partnerships with our clients. Become one of them. he world's best brands trust us with their products. Explore our selected cases and convince yourself of our pragmatic and user-centered approach. `,
}

const quality ={
  head:`We Provid The Best Quality Services`,
  head2:`We are technology solutions providing company all over the world doing 3years.`
}

  return (
    <>
    <Container fluid> 
      {/* <img src={Images.home.image1} alt="img" /> */}
      <SolutionsComp sol={solutions}/>
      <QualityComp quality={quality} />

      {/* <SolutionsComp cli={clients}/> */}

      </Container>
    </>
  );
}
