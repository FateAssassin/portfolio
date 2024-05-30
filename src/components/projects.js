import "../styles/projects.css";
import food from "../assets/food.png";
import github from "../assets/github.jpg";
import reconnect from "../assets/reconnect.png";

export default function Projects() {
  return (
    <div className="projects appearanimate">
      <ProjectsCard name="Recipe4You" description="Recipe4You is a recipe-finder made in React" imageURL={food} projectURL="https://github.com/FateAssassin/RecipeForYou" />
      <ProjectsCard name="Reconnect" description="Reconnect is a E-Shop, which sells high quality Discord-Bots." imageURL={reconnect} projectURL="https://discord.gg/NpAU73vCFz" />
      <ProjectsCard name="GitHub" description="You may see more projects on my GitHub page." imageURL={github} projectURL="https://github.com/FateAssassin/" />
    </div>
  );
}

function ProjectsCard(props) {

  return (
    <div className="project-card">
      <img src={props.imageURL} alt="project" />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <a href={props.projectURL}>Read More</a>
    </div>
  );
}