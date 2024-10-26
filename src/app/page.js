import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ImagesStack from "@/components/images-stack";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Hero />
      {/* <ImagesStack /> */}
      <Footer />
    </Fragment>
  )
}