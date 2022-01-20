import React from "react";
import { format } from "../../helper/helper";
import Avatar from "@mui/material/Avatar";
import "./CommentItem.scss";
import Rating from "@mui/material/Rating";

const CommentItem = ({ comments }) => {
	return (
		<div>
			{comments.map((comment) => {
				return (
					<div className="comments-item" key={comment.name}>
						<div className="comments-item__avatar">
							<Avatar alt={comment.name} src={comment.img ? comment.img : ""} />
						</div>
						<div className="comments-item__message">
							<p className="comments-item__name">
								{comment.name}
								<span className="comments-item__time">
									{format(comment.timestamp)}
								</span>
							</p>
							<Rating
								name="read-only"
								value={comment.rate ? comment.rate : 0}
								readOnly
								size="small"
							/>
							<p className="comments-item__comment">{comment.comment}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CommentItem;
