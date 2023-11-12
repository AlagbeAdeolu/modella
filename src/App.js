import React from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Models from "./components/Models";
import Magazines from "./components/Magazines";
import Contact from "./components/Contact";
function App() {
  return (
    <Layout>
      <Hero />
      <Featured />
      <Models />
      <Magazines />
      <Contact />
    </Layout>
  );
}

export default App;
