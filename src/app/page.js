import { Banner } from "./frontend/components/Banner";
import CollegeLife from "./frontend/components/CollegeLife";
import FeaturedColleges from "./frontend/components/FeaturedColleges";
import Reviews from "./frontend/components/Reviews";
import StudentResearch from "./frontend/components/StudentResearch";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedColleges />
      <CollegeLife />
      <StudentResearch />
      <Reviews />
    </div>
  );
}
