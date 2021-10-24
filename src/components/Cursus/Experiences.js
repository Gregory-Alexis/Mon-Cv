import React from "react"

const Experiences = ({ data }) => {
	return (
		<div>
			<h2 className="font-bold uppercase tracking-widest pt-5 text-xl">
				Expériences
			</h2>

			{data.map((el) => {
				return (
					<div className=" md:grid md:grid-cols-2">
						<div className="mt-5 ">
							<p className="font-semibold">{el.date}</p>
						</div>
						<div className="block">
							<h3 className="mt-5 font-bold">{el.entreprise}</h3>
							<p>{el.poste}</p>
							<p className="font-bold text-darkBlue">{el.location}</p>
							<ul>
								{el.mission.map((el) => {
									return (
										<li className="mt-2 list-inside list-disc">{el.title}</li>
									)
								})}
							</ul>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Experiences
