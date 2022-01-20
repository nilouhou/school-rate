import React from "react";
import { format } from "../../helper/helper";
import "./CommentItem.scss";

const CommentItem = ({ comments }) => {
	return (
		<div>
			{comments.map((comment) => {
				return (
					<div className="comments-item" key={comment.id}>
						<div className="comments-item__avatar"></div>
						<div className="comments-item__message">
							<p className="comments-item__name">
								{comment.name}
								<span className="comments-item__time">
									{format(comment.timestamp)}
								</span>
							</p>
							<p className="comments-item__comment">{comment.comment}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CommentItem;
