import Heading from "./../../Components/Heading";
import GitHubIcon from "@mui/icons-material/GitHub";
import constant from "../../constant.json";
import styles from "./styles.module.css";

function Work() {
	return (
		<section id="work">
			<Heading index="04" heading="Some of my Projects " />
			<div className={styles.container}>
				{constant.projects.map((project, index) =>
					index % 2 === 0 ? (
						<div className={styles.project}>
							<div className={styles.left}>
								<a href={project.link} target="__blank">
									<img
										src={project.image}
										className={styles.img}
										alt="project_img"
									/>
								</a>
							</div>
							<div className={styles.right}>
								<a href={project.link} className={styles.heading}>
									{project.title}
								</a>
								<p className={styles.desc}>{project.desc}</p>
								<div className={styles.skill_container}>
									{project.skills.map((skill) => (
										<p>{skill}</p>
									))}
								</div>
								<div>
									<a href="https://github.com/DarkLord125/MusicTune" className={styles.link}>
										<GitHubIcon />
									</a>
									
								</div>
							</div>
						</div>
					) : (
						<div className={styles.project}>
							<div className={styles.left}>
								<a href={project.link} className={styles.heading}>
									{project.title}
								</a>
								<p className={styles.desc}>{project.desc}</p>
								<div className={styles.skill_container}>
									{project.skills.map((skill) => (
										<p>{skill}</p>
									))}
								</div>
								<div>
									<a href="https://github.com/Dwayne232001/Unity-3D-Game-ObstacleCourseRepo" className={styles.link}>
										<GitHubIcon />
									</a>
									
								</div>
							</div>
							<div className={styles.right}>
								<a href={project.link} target="__blank">
									<img
										src={project.image}
										className={styles.img}
										alt="project_img"
									/>
								</a>
							</div>
						</div>
					)
				)}
			</div>
		</section>
	);
}

export default Work;





