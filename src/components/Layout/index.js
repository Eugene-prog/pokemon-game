import style from "./Layout.module.css";

const Layout = ({
	title = "This is title",
	descr = "This is Description!",
	urlBg,
	colorBg = "white",
}) => {
	const layoutBg = urlBg
		? { backgroundImage: `url(${urlBg})` }
		: { backgroundColor: `${colorBg}` };
	// const layoutBg = {
	// 	backgroundImage: urlBg && `url("${urlBg}")`,
	// 	backgroundColor: { colorBg },
	// };

	return (
		<>
			<section className={style.root} style={layoutBg}>
				<div className={style.wrapper}>
					<article>
						<div className={style.title}>
							<h3>{title}</h3>
							<span className={style.separator}></span>
						</div>
						<div className={[style.desc, style.full].join(" ")}>
							<p>{descr}</p>
						</div>
					</article>
				</div>
			</section>
		</>
	);
};

export default Layout;
