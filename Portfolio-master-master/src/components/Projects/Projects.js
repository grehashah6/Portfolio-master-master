import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import unicode from "../../Assets/Projects/unicode.png";
import sih from "../../Assets/Projects/sih.png";
import suicide from "../../Assets/Projects/suicide.png";
import evslot from "../../Assets/Projects/evslot.png";
import billionables from "../../Assets/billionables.png";
import audious from "../../Assets/Audious.png";


function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={sih}
							isBlog={false}
							title="Mentor Dots"
							description="Nurturing entrepreneurs requires a platform that provides robust support throughout the entire process to convert brilliant ideas into solid business models. The feature available in Mentor Dots are 
              User Verification, Pitch deck generator, Mentor mentee Recommendation system, Voice Bot and Multilingual Website with 5 different languages"
							ghLink="https://github.com/grehashah6/SIH-TeamEnemiesOfSyntaxx"
							// demoLink="https://chatify-49.web.app/"
						/>
					</Col>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={evslot}
							isBlog={false}
							title="EV Slot Booking"
							description="React JS and React Native were used to develop a versatile web and mobile application that is cross-platform compatible and
              enables users to easily reserve hourly charging slots conveniently. Also implemented GPS-based filtering for users to find nearby charging stations, resulting in an increase in user
              satisfaction."
							ghLink="https://github.com/grehashah6/EV-Slot-Booking-Frontend"
							demoLink="https://findmyplug.netlify.app"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={unicode}
							isBlog={false}
							title="DJ Unicode"
							description="DJ Unicode's website is the go-to for students keen on coding and collaboration. It offers coding resources, emphasizes teamwork, and hosts coding competitions and project showcases. With career support and a supportive community, it's the ideal platform to bridge the gap between learning and succeeding."
							ghLink="https://github.com/djunicode/djunicode-website"
							demoLink="https://www.djunicode.in/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={billionables}
							isBlog={false}
							title="Billionables"
							description="Billionables is a software where a Differently Abled person can avail features available in the site and can use any of the availble tools are figure gesture detection, object detection, text to speech , speech to text , mental health care , font family This all the features are totally working and the chatbot is available on the home page to help the user to solve the problems they are facing while using the app and the instant solution is provided on the problem."
							ghLink="https://github.com/grehashah6/BillionAbless"
							demoLink="https://pedantic-tereshkova-409fb4.netlify.app/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={audious}
							isBlog={false}
							title="De-Fi music app - Audious"
							description="All the times, we know that the real owner of a particular song does not remain the 'OWNER' of the song. Usually, massive apps like youtube or spotify buys it. Huge personalities will be attracted to our website because they will own their Songs and eventually sell the users if a particular user is interested to buy it. The user can listen to the songs and also buy it using Tezos wallet"
							ghLink="https://github.com/grehashah6/Code-Warriors"
							// demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
						/>
					</Col>

					{/* <Col md={4} className="project-card">
						<ProjectCard
							imgPath={emotion}
							isBlog={false}
							title="Face Recognition and Emotion Detection"
							description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
							ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
							// demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
						/>
					</Col> */}
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
