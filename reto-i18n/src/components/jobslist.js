import React, { useState } from "react";
import Job from "./job";
import { FormattedMessage, useIntl } from "react-intl";

const OFFERS = [
	{
		id: "0001",
		name: "Manager",
		company: "Schneider Electric",
		salary: 9349023,
		city: "Bogotá, Colombia",
		date: "2019-03-26",
		views: 1450000
	},
	{
		id: "0002",
		name: "Software Engineer",
		company: "Google Inc.",
		salary: 20000,
		city: "Palo Alto, CA, USA",
		date: "2019-03-27",
		views: 1004500
	},
	{
		id: "0003",
		name: "Nurse",
		company: "Clínica La Aurora",
		salary: 1000000,
		city: "Cali, Colombia",
		date: "2019-03-28",
		views: 221450
	},
	{
		id: "0004",
		name: "Teacher",
		company: "Universidad de los Andes",
		salary: 1580000,
		city: "Bogotá, Colombia",
		date: "2019-03-28",
		views: 3000
	},
]

const JobsList = () => {
	const [offers] = useState(OFFERS);
	const intl = useIntl();
	const theme = intl.locale.startsWith('en') ? 'table-dark' : 'table-light';
	return (
		<div>
			<table className="table">
				<thead className={theme}>
					<tr>
						<th scope="col">#</th>
						<th scope="col"><FormattedMessage id="Position" /></th>
						<th scope="col"><FormattedMessage id="Company" /></th>
						<th scope="col"><FormattedMessage id="Salary" /></th>
						<th scope="col"><FormattedMessage id="City" /></th>
						<th scope="col"><FormattedMessage id="PublicationDate" /></th>
						<th scope="col"><FormattedMessage id="Views" /></th>
					</tr>
				</thead>
				<tbody>
					{offers.map((e, i) => (
						<Job key={i} offer={e} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default JobsList;
