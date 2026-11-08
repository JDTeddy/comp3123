import Welcome from "./welcome";

export default function Home() {
  let courseDetails = {
    title: "Welcome to Fullstack Development - I",
    lab: "React JS Programming Week09 Lab exercise",
    college: "George Brown College, Toronto",
  };

  return (
    <div className="App">
      <Welcome courseDetails={courseDetails} />
    </div>
  );
}