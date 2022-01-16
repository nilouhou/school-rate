import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";
import "./Map.scss";

const Map = () => {
	const isMobile = useMediaQuery("(min-width:600px)");
	const defaultProps = {
		center: {
			lat: 0,
			lng: 0,
		},
		zoom: 11,
	};

	const Marker = ({ text }) => (
		<div
			style={{
				color: "white",
				background: "red",
				padding: "15px 10px",
				display: "inline-flex",
				textAlign: "center",
				alignItems: "center",
				justifyContent: "center",
				borderRadius: "100%",
				transform: "translate(-50%, -50%)",
			}}
		>
			{text}
		</div>
	);

	return (
		<div style={{ height: "100vh", width: "100%" }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: "" }}
				defaultCenter={{ lat: 12.270622, lng: 109.108154 }}
				defaultZoom={defaultProps.zoom}
				margin={[50, 50, 50, 50]}
				options={""}
				// onChange={""}
				// onChildClick={""}
			>
				{/* {places.map((place) =>
						place.name ? (
							<Marker
								key={place.location_id}
								lat={Number(place.latitude)}
								lng={Number(place.longitude)}
								text={place.name}
							/>
						) : null
					)} */}
			</GoogleMapReact>
		</div>
	);
};

export default Map;
