import Interest from "../SideBar/Interest"
import Skill from "../SideBar/Skill"

const Skills = () => {
	return (
		<>
			<div className="pt-3">
				<h2 className="font-bold uppercase tracking-widest text-xl">
					Compétences
				</h2>
				<Skill title="HTML" rating="3" />
				<Skill title="CSS" rating="3" />
				<Skill title="JAVASCRIPT" rating="3" />
				<Skill title="REACT" rating="3" />
			</div>
			<div className="pt-3">
				<h2 className="font-bold uppercase tracking-widest text-xl">Langues</h2>
				<Skill title="ANGLAIS" rating="3" />
				<Skill title="FRANCAIS" rating="5" />
			</div>
			<Interest />
		</>
	)
}

export default Skills
