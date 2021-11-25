import React from "react";

import NavBar from "../components/NavBar";
import SignInSide from "../components/SignInSide";
import TestComp from "../components/TestComp";
import SimpleContainer from "../components/SimpleContainer";

/*import { Helmet } from "react-helmet";
import MainBanner from "../components/Web/MainBanner";
import HomeCourses from "../components/Web/HomeCourses";
import HowMyCoursesWork from "../components/Web/HowMyCoursesWork";
import ReviewsCourses from "../components/Web/ReviewsCourses";*/

export default function Home() {
  return (
    <>
      <NavBar />
      <SignInSide />
    </>
  );
}
