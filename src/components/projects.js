import "../styles/projects.css";
import food from "../assets/food.png";
import github from "../assets/github.jpg";
import reconnect from "../assets/reconnect.png";
import todo from "../assets/todo.png";

export default function Projects() {
  return (
    <div className="projects appearanimate">
      <ProjectsCard name="Recipe4You" description="Recipe4You is a recipe-finder made in React" imageURL={food} projectURL="https://recipe-for-you.vercel.app/" />
      <ProjectsCard name="Reconnect" description="Reconnect is a E-Shop, which sells high quality Discord-Bots." imageURL={reconnect} projectURL="https://discord.gg/NpAU73vCFz" button/>
      <ProjectsCard name="ToDoList" description="This ToDo List has solely been made with react and localstorage." imageURL={todo} projectURL="https://to-do-app-ten-beige.vercel.app/"/>
      <ProjectsCard name="GitHub" description="You may see more projects on my GitHub page." imageURL={github} projectURL="https://github.com/FateAssassin/" button />
    </div>
  );
}

function ProjectsCard(props) {

  return (
    <div className="project-card">
      <img src={props.imageURL} alt="project" />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      {props.button
        ? <a href={props.projectURL}>See more</a>
        : <a href={props.projectURL}>See project</a>
      }
    </div>
  );
}