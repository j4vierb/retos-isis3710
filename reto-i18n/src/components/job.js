import React from "react";
import { FormattedDate, FormattedNumber, useIntl } from "react-intl";

const Job = (props) => {
	const intl = useIntl();

	const salary = props.offer.salary;
	let format = "";
	if (salary === 1_000_000) {
		format = 'formatMillion'
	} else if (salary > 1_000_000) {
		format = 'formatMillions'
	}

	let formattedNum = "";
	if (format.length === 0) {
		formattedNum = intl.formatNumber(salary, { useGrouping: true, minimumFractionDigits: 0, maximumFractionDigits: 0 });
	} else {
		formattedNum = intl.formatMessage(
			{ id: format },
			{
				value: intl.formatNumber(
					salary / 1_000_000,
					{
						useGrouping: true,
						minimumFractionDigits: 2,
						maximumFractionDigits: 2
					}
				)
			}
		)
	}

	return (
		<tr>
			<th scope="row">{props.offer.id}</th>
			<td>{props.offer.name}</td>
			<td>{props.offer.company}</td>
			<td>
				{formattedNum}
			</td>
			<td>{props.offer.city}</td>
			<td>
				<FormattedDate
					value={new Date(props.offer.date)}
					year='numeric'
					month='long'
					day='numeric'
					weekday='long'
				/>
			</td>
			<td>
				<FormattedNumber
					value={props.offer.views}
					useGrouping={true}
				/>
			</td>
		</tr>
	);
};

export default Job;
