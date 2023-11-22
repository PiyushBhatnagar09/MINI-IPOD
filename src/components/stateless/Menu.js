import React from "react";

// Functional Menu Component to Render the Various MENUs
const Menu = (props) => {
	
	// Unpacking the Props
	const { menu } = props;
	const {
		optionsIndex, //options is an array in 'menu', so optionindex tells which index is currently we at
		musicIndex, //which music we are playing
		settingsIndex, //which setting we are at
		options, //array in menu
		musicVisible, //is music page visible
		menuVisible, //is menu visible
		settingsVisible, //is setting visible
	} = menu;

	let show = "No Show Available"; //just initializing
	let menuArray, musicArray, settingsArray, value;
	
	// To check the Menu Visibility
	if (menuVisible === "yes") {
		show = "menu";
		menuArray = options.map((object) => {
			const temp = Object.keys(object);
			return temp[0];
		});
		const val = menuArray[optionsIndex];
		value = val;
	}
	if (musicVisible === "yes") {
		show = "music";
		musicArray = options[optionsIndex].music;
		const val = musicArray[musicIndex];
		value = val;
	}
	if (settingsVisible === "yes") {
		show = "settings";
		settingsArray = options[optionsIndex].settings;
		const val = settingsArray[settingsIndex];
		value = val;
	}
	
	// Used in JSX Rendering
	const divStyling = (item) => {
		if (value === item) {
			return { backgroundColor: "cyan", paddingTop: "12px" };
		}
		return {};
	};
	const imgStyling = (item) => {
		if (value === item) {
			return { display: "initial", marginBottom: "15px" };
		}
		return {};
	};
	
	// Menu to be Rendered
	let RenderMenu = "Will be rendered in the future";

	// Main Menu
	if (show === "menu") {
		RenderMenu = menuArray.map((item) => {
			//displaying options in the menu with the arrow image > also
			return (
				<div className={item} style={divStyling(item)} id="options">
					<p style={styles.text}>{item}</p>
					<img
						src="https://cdn-icons-png.flaticon.com/512/81/81068.png"
						alt="select"
						style={imgStyling(item)}
					/>
				</div>
			);
		});
	}
	// Music Menu
	else if (show === "music") {
		RenderMenu = musicArray.map((item) => (
			<div className={item} style={divStyling(item)} id="options">
				<p style={styles.text}>{item}</p>
				<img
					src="https://cdn-icons-png.flaticon.com/512/81/81068.png"
					alt="select"
					style={imgStyling(item)}
				/>
			</div>
		));
	}
	// Settings Menu
	else if (show === "settings") {
		RenderMenu = settingsArray.map((item) => (
			<div className={item} style={divStyling(item)} id="options">
				<p style={styles.text}>{item.replace("-", " ")}</p>
				<img
					src="https://cdn-icons-png.flaticon.com/512/81/81068.png"
					alt="select"
					style={imgStyling(item)}
				/>
			</div>
		));
	}
	
	// Rendering the Menu as a whole
	return (
		<div
			className={menuVisible === "no" ? "menu hide" : "menu"}
			style={styles.menu}
		>
			<div className="ipod-title" style={styles.title}>
				<p style={{ borderRadiusTopLeft: "10%" }}>Ipod</p>
			</div>
			{RenderMenu}
		</div>
	);
	
};

const styles = {
	title: {
		fontSize: "1.7rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		textShadow: "1px 2px 0px lightgray",
		borderRadiusTopLeft: "10%",
	},
	text: {
		marginLeft: "1rem",
		textTransform: "capitalize",
	},
	menu: {
		backgroundColor: "lightcyan",
		borderRadiusTopLeft: "10%",
	},
};

export default Menu;
