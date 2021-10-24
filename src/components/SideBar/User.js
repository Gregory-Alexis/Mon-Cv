import calendar from "../../images/calendar-event-fill.svg"
import myPhoto from "../../images/GregPhoto.jpg"
import tel from "../../images/telephone-fill.svg"
import envelope from "../../images/envelope-fill.svg"
import house from "../../images/house-door-fill.svg"

const User = () => {
	return (
		<div>
			<div className="flex flex-col items-center">
				<img
					src={myPhoto}
					alt="Mon avatar"
					style={{ width: "90px", height: "100%" }}
					className="rounded-full"
				/>
				<h1 className="font-semibold text-xl pt-2 uppercase">Grégory Alexis</h1>
				<p className="pt-1">Développeur React Junior</p>
			</div>
			<div className="pt-5 text-sm">
				<p className="flex mb-2">
					<img src={house} alt="mon adresse" className="pr-3" />
					Vitry sur Seine 94400
				</p>

				<p className="flex mb-2">
					<img src={envelope} alt="mon adresse mail" className="pr-3" />

					<a
						href="mailto:gregoryalexis.dev@gmail.com"
						target="_blank"
						rel="noreferrer"
					>
						gregalexis.dev@gmail.com
					</a>
				</p>
				<p className="flex mb-2">
					<img src={tel} alt="mon numéro de téléphone" className="pr-3" />

					<a href="tel:+33613511364" target="_blank" rel="noreferrer">
						0613511364
					</a>
				</p>
				<p className="flex mb-2">
					<img src={calendar} alt="ma date de naissance" className="pr-3" />
					Date de naissance: 26 mars 1987
				</p>
			</div>
		</div>
	)
}

export default User
