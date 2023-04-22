import React from "react"
import projects from "../data/projects"
import Wrapper from "../Components/pageWrapper"
import Section from "../Components/section"
import Showcase from "../Components/showcase"
import Roulette from "../Components/roulette"
import createMapping from "../utils/mapObject"
import GetInTouch from "../Components/getInTouch"
import Card from "../Components/card"
import SocialNetworks from "../data/contact"


export default function ProjectPage() {
	return (
		<Wrapper>
			<Section title="projects" id="projects">
				<Showcase></Showcase>
				<Roulette>
					{
						createMapping(projects, (id, card, i) => (
							<Card {...card} url={card.url + "#projects"} key={i} />
						))
					}
				</Roulette>
			</Section>
			{/* <Section title="experience">
			</Section>
			<Section title="contact" id="">
				 <BackgroundVideo playsInline autoPlay muted loop>
                <source src={video} type="video/webm" />
              </BackgroundVideo> 
				<GetInTouch socialNetworks={SocialNetworks} ></GetInTouch>
			</Section> */}
		</Wrapper>
	)
}