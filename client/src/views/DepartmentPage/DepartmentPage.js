import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import { connect } from "react-redux";
import { getDepartmentById } from "./action.js";
import TeamSection from "views/Components/TeamSection";
import { useParams } from "react-router-dom";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const DepartmentPage = (props) => {
  let { departmentId } = useParams();

  const [department, setDepartment] = useState({
    doctorList: [],
  });
  useEffect(async () => {
    const data = await getDepartmentById(departmentId);

    setDepartment(data);
  }, [departmentId]);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Parallax
        filter
        image={
          require("../../images/department-image-" + departmentId + ".png")
            .default
        }
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={9}>
              <h1 className={classes.title}>{department.name}</h1>
              <h4>
                <div
                  style={{ color: "white !important" }}
                  dangerouslySetInnerHTML={{ __html: department.description }}
                />
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <TeamSection doctorList={department.doctorList} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(DepartmentPage);
