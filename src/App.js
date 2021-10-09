import React, {Suspense} from "react";
import LoadingComponent from "./Components/loadingComponent.component";
const RSSFeed =  React.lazy(() => import("./Backend/rssdata.backend"));
const About =  React.lazy(() => import("./Components/about.component"));
const Footer =  React.lazy(() => import("./Components/footer.component"));
const Head =  React.lazy(() => import("./Components/head.component"));
const CSer =  React.lazy(() => import("./Components/home-ser.component"));
const Intern =  React.lazy(() => import("./Components/Interns.component"));
const IScroll =  React.lazy(() => import("./Components/iscroll.component"));
const Location =  React.lazy(() => import("./Components/location.component"));
const Navbar =  React.lazy(() => import("./Components/navbar.component"));
const RSS =  React.lazy(() => import("./Components/rss.component"));
const Services =  React.lazy(() => import("./Components/services.component"));
const Video =  React.lazy(() => import("./Components/Video.component"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingComponent/>}>
        <Navbar/>
        <Head/>
        <CSer/>
        <Services/>
        <Video/>
        <RSS/>
        <IScroll/>
        <Intern/>
        <About/>
        <Location/>
        <Footer/>

        <RSSFeed/>
      </Suspense>
    </div>
  );
}

export default App;
