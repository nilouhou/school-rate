import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";
import "./Map.scss";

const Map = ({ schools }) => {
	console.log(schools);
	const isMobile = useMediaQuery("(min-width:600px)");
	const defaultProps = {
		center: {
			lat: 0,
			lng: 0,
		},
		zoom: 13,
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
		<div style={{ height: "88vh", width: "100%" }} className="map">
			<GoogleMapReact
				bootstrapURLKeys={{ key: "" }}
				defaultCenter={{ lat: 49.28500059925005, lng: -123.11400985419304 }}
				defaultZoom={defaultProps.zoom}
				margin={[50, 50, 50, 50]}
				options={""}
				// onChange={""}
				// onChildClick={""}
			>
				{schools.map((school) =>
					school.fields.school_name ? (
						<Marker
							key={school.recordid}
							lat={school.fields.geom.coordinates[1]}
							lng={school.fields.geom.coordinates[0]}
							text={school.fields.school_name}
						/>
					) : null
				)}
			</GoogleMapReact>
		</div>
	);
};

export default Map;
