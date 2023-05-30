import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import algo from "../../Assets/Projects/algo.png";

import ut from "../../Assets/Projects/ut.png";
import food from "../../Assets/Projects/food.png";
import nq from "../../Assets/Projects/nq.png";
import sc from "../../Assets/Projects/sc.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={algo}
              isBlog={false}
              title="AlgoVisuals"
              description="AlgoVisuals is a Sorting Algorithm Visualization with Input Range project is an interactive and educational tool designed to showcase various sorting algorithms in action. It provides a visual representation of how different sorting algorithms operate on a given range of input values, enabling users to understand their functionality and performance."
              ghLink="https://github.com/Harshin1V/AlgoVisuals"
              demoLink="https://algo-visuals.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sc}
              isBlog={false}
              title="ShirtCraft"
              description="This ShirtCraft using Three.js  is an innovative and interactive web application that allows users to personalize and customize their own shirt designs in real-time. Powered by Three.js, a popular JavaScript library for 3D graphics, this project provides users with a seamless and immersive experience to create unique shirt designs tailored to their preferences."
              ghLink="https://github.com/Harshin1V/ShirtCraft"
              demoLink="https://three-js-flax.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ut}
              isBlog={false}
              title="WatchWave"
              description="Project Watchwave is an innovative and exciting endeavor that aims to provide users with an exceptional video-sharing platform reminiscent of the popular platform YouTube. As a clone of YouTube, Watchwave has been meticulously crafted to offer a seamless and immersive video streaming experience for content creators and viewers alike."
              ghLink="https://github.com/Harshin1V/youtube_clone"
              demoLink="https://youtube-clone-harshin1v.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Foodify"
              description="Introducing Foodify, an innovative food ordering project that aims to revolutionize the way people discover, order, and enjoy their favorite meals. With Foodify, satisfying your cravings is just a few clicks away, providing a seamless and convenient platform for users to indulge in a wide variety of culinary delights."
              ghLink="https://github.com/Harshin1V/Foodify"
              demoLink="https://foodify-nine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nq}
              isBlog={false}
              title="NQueenVisualization"
              description="NQueenVisualization, an engaging and interactive project that aims to visually demonstrate the renowned N Queens problem. This project offers an innovative way to understand and explore the complexities of this classic chess puzzle."
              ghLink="https://github.com/Harshin1V/NQueenVisualization"
              demoLink="https://n-queen-visualization.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
