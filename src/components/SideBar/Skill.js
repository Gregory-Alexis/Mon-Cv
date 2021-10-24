const Skill = ({ title, rating }) => {
	return (
		<div className="flex justify-between items-center pt-2">
			<p>{title}</p>
			<div>
				<div className={`circle ${rating > 0 && "circle-full"}`}></div>
				<div className={`circle ${rating > 1 && "circle-full"}`}></div>
				<div className={`circle ${rating > 2 && "circle-full"}`}></div>
				<div className={`circle ${rating > 3 && "circle-full"}`}></div>
				<div className={`circle ${rating > 4 && "circle-full"}`}></div>
			</div>
		</div>
	)
}

export default Skill
