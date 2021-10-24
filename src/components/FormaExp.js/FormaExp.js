import React from "react"
import Experiences from "../Cursus/Experiences"
import Formations from "../Cursus/Formations"
import dataExperiences from "../data/Expériences"
import dataFormations from "../data/Formations"

const FormaExp = () => {
	return (
		<div>
			<Formations data={dataFormations} />
			<Experiences data={dataExperiences} />
		</div>
	)
}

export default FormaExp
