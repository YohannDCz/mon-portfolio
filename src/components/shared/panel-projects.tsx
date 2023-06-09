import { useEffect } from "react";
import { carouselProjects } from "./carousel";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataShort } from "../../redux/actions";

interface CardProps {
	title: string;
	description: string;
	image: string;
	link: string;
}

export function Card({ title, description, image, link }: CardProps) {
	return (
		<a className="card item" href={link} target="_blank">
			<img src={image} alt="" className="thumbnail" />
			<div className="text">
				<div className="title">{title}</div>
				<div className="description">{description}</div>
			</div>
		</a>
	);
}

interface RootState {
	data: any;
	shortData: any;
	stackData: any;
}

export function PanelProjects() {
	const data = useSelector((state: RootState) => state.shortData);
	const dispatch = useDispatch();

	useEffect(() => {
		// @ts-ignore
		dispatch(fetchDataShort());
	}, [dispatch]);
	carouselProjects();
	return (
		<div className="other-project">
			<div className="titleseemore">
				<div className="title">AUTRES PROJETS</div>
				<a href="/projects">
					<div className="seemore">Voir plus...</div>
				</a>
			</div>
			<div className="cardsarrow carousel">
				<img
					className="arrow leftarrow"
					src="/icons/arrow.png"
					alt="The left arrow."
					style={{ transform: "rotate(180deg" }}
				/>
				<div className="cards">
					<div className="items">
						{data?.description
							?.slice(4, 10)
							.map(({ title, description, image, link }: CardProps) => (
								<Card
									key={title}
									title={title}
									description={description}
									image={image}
									link={link}
								/>
							))}
					</div>
				</div>
				<img
					className="arrow rightarrow"
					src="/icons/arrow.png"
					alt="The right arrow."
				/>
			</div>
		</div>
	);
}
