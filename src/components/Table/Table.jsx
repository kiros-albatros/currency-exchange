import "./Table.scss";

const Table = ({ title, count }) => {
	return (
		<div className="table">
			<h6 className="table__name">{title}</h6>
			<p className="table__row">
				1 <b>EUR</b> {"=>"} {count} <b>{title}</b>
			</p>
		</div>
	);
};

export default Table;
