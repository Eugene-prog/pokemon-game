import style from "./Layout.module.css";

const Layout = ({ title = "This is title", urlBg, colorBg, children }) => {
	const layoutBg = {
		backgroundImage: urlBg ? `url(${urlBg}` : "none",
		backgroundColor: colorBg ? `${colorBg}` : "none",
	};

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
							<p>{children}</p>
						</div>
					</article>
				</div>
			</section>
		</>
	);
};

export default Layout;
