import Hero from "../components/Hero";
import CardBody from "../components/CardBody";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <CardBody />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
