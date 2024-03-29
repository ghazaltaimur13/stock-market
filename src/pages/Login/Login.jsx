import React from "react";
import LoginForm from "components/Login";
import { useAuth } from "contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { DASHBOARD } from "constants/navigationConstants";
import { useTranslation } from "react-i18next";

function LoginPage() {
	const { loggedIn } = useAuth();
	const { t } = useTranslation();

	return (loggedIn ? <Navigate to={DASHBOARD} />
		:
		<div className="global-section-container flex-col pt-5 pb-5">
			<div className="container col-md-4 col-12 grey-background mx-auto p-4">
				<h1 className="sub-page-section-header text-start mb-4">
					{t("Login")}
				</h1>
				<LoginForm />
			</div>
		</div>
	);
}

export default LoginPage;
