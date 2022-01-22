import GoogleMapReact from "google-map-react";
import styleMap from "./styleMap";
import "./Map.scss";

const Map = ({ schools, setChildClicked }) => {
	const defaultProps = {
		center: {
			lat: 0,
			lng: 0,
		},
		zoom: 13,
	};

	const options = {
		styles: styleMap,
		disableDefaultUI: true,
		zoomControl: true,
	};

	const K_SIZE = 40;
	const Marker = ({ text }) => (
		<div
			style={{
				position: "absolute",
				width: K_SIZE,
				height: K_SIZE,
				left: -K_SIZE / 2,
				top: -K_SIZE / 2,

				border: "5px solid #5bccf6",
				borderRadius: K_SIZE,
				backgroundColor: "#fcde67",
				textAlign: "center",
				color: "#009bc3",
				fontSize: 16,
				fontWeight: "bold",
				padding: 4,
				cursor: "pointer",
			}}
		>
			{text}
		</div>
	);

	return (
		<div style={{ height: "88vh", width: "100%" }} className="map">
			<GoogleMapReact
				bootstrapURLKeys={{ key: "" }}
				defaultCenter={{ lat: 49.28500059925005, lng: -123.11400985419304 }}
				defaultZoom={defaultProps.zoom}
				margin={[50, 50, 50, 50]}
				options={options}
				// onChange={""}
				onChildClick={(child) => setChildClicked(child)}
			>
				{schools.map((school) =>
					school.name ? (
						<Marker
							key={school.recordid}
							lat={school.geom.coordinates[1]}
							lng={school.geom.coordinates[0]}
							text={school.rank}
						/>
					) : null
				)}
			</GoogleMapReact>
		</div>
	);
};

export default Map;
