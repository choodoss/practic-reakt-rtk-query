import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import toast from "react-hot-toast";
import styles from "./Button.module.css";
import { useUpdateCommentCountMutation } from "../../redux/commentApi";

export const Button = ({ children, counter, role = "thumbsUp", id }) => {
	const [updateCommentCount, parameters] = useUpdateCommentCountMutation();
	console.log(parameters);

	const variants = {
		[styles.thumbsUp]: role === "thumbsUp",
		[styles.thumbsDown]: role === "thumbsDown",
	};

	const onBtnHandleClick = async () => {
		console.log("click");
		try {
			await updateCommentCount({ id, [role]: counter + 1 });
		} catch (error) {
			toast.error(`Something went wrong. ${error.message}`);
		}
	};

	return (
		<button
			className={classNames(styles.button, variants)}
			type="button"
			counter={counter}
			onClick={onBtnHandleClick}
			id={id}
			disabled={parameters.isLoading}
		>
			{children}

			<span className={styles.counter}>
				<span>{parameters.isLoading && "..."}</span>
				{counter}
			</span>
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	counter: PropTypes.number.isRequired,
	role: PropTypes.string,
	id: PropTypes.string.isRequired,
};
