import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import 'bootstrap/dist/css/bootstrap.css';

import localeEsMessages from "./locales/es"
import localeEnMessages from "./locales/en"

import JobsList from "./components/jobslist";

const messages = {
	"en": localeEnMessages,
	"es": localeEsMessages
}

const userLanguage = navigator.language.split('-')[0];
console.log("The language of the navigator is: " + userLanguage)
const locale = messages[userLanguage] ? userLanguage : 'en';

ReactDOM.render(
	<IntlProvider
		locale={locale}
		messages={messages[locale]}
	>
		<JobsList />
	</IntlProvider>,
	document.getElementById("root")
);
