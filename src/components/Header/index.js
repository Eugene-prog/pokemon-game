import style from "./Header.module.css";

const Header = ({
	title = "This is title",
	descr = "This is Description!",
}) => {
	return (
		<>
			<header className={style.root}>
				<div className={style.forest}></div>
				<div className={style.container}>
					<h1>{title}</h1>
					<p>{descr}</p>
				</div>
			</header>
		</>
	);
};

export default Header;
