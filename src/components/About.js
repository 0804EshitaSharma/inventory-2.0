import React from "react";
import Button from "./Button.js";
import CustomList from "./CustomList.js";
import CustomParagraph from "./CustomParagraph.js";
import Navbar from "./Navbar.js";
import ImageContainer from "./ImageContainer.js";
import { Link } from "react-router-dom";

function About() {
  const text = ` I'm currently in my 2nd year of MEng in Electrical and Computer
              Engineering at UBC and as a Developer, I have some hands on
              expereience on technologies like Angular, Java, C++ and Spring
              Boot. I love to constantly enhance my skills by picking up new
              stuff. I am exicted to learn MERN Stack
              with the help of this Course. And I have started this journey by
              building this website. This is a simple Inventory Management
              Website which alllow users to add, view, search and delete items.
              Following are the features that it currently supports.`;

  const items2 = [
    { id: 1, text: "HTML" },
    { id: 2, text: "CSS" },
    { id: 3, text: "Javascript" }
  ];
  const items1 = [
    { id: 1, text: "Navbar with About, Home and Dashboard Sections." },
    { id: 2, text: "Search and Filter Items using search bar." },
    { id: 3, text: "Form to add new Item to Dashboard." },
    {
      id: 4,
      text: "Show All / Delete All Items along with delete individual items."
    },
  ];
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <h1>Hi, I am Eshita Sharma</h1>
          <h3>Student at UBC & Developer </h3>
          <div>
            <CustomParagraph text={text} />
            <CustomList heading="Features:" items={items1} />
            <CustomList heading="Technology Used:" items={items2} />
          </div>

          <div>
            <Link to="https://github.com/0804EshitaSharma">
              <Button label="Git Hub Profile" />
            </Link>
          </div>
        </div>
        <ImageContainer imageUrl= ".images/home.JPG" />
      </div>
    </div>
  );
}

export default About;
