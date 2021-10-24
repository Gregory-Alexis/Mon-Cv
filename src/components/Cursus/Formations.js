import React from "react"

const Formations = ({ data }) => {
	return (
		<div className="">
			<h2 className="font-bold uppercase tracking-widest pt-5 text-xl">
				Formations
			</h2>

			{data.map((el) => {
				return (
					<div className=" md:grid md:grid-cols-2">
						<div className="mt-5">
							<p className="font-semibold">{el.date}</p>
						</div>
						<div className="mt-5">
							<h3 className="font-semibold">{el.entreprise}</h3>
							<p>{el.title}</p>
							<p className="font-bold text-darkBlue">{el.location}</p>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Formations
