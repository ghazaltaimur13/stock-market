import React from "react";
import LoginForm from "components/LoginV2";
import { useAuth } from "contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { DASHBOARD } from "constants/navigationConstants";

function LoginPage() {
	const { loggedIn } = useAuth();

	return (loggedIn ? <Navigate to={DASHBOARD} />
		:
		<div className="global-section-container flex-col pt-5 pb-5">
			<div className="container col-md-4 col-12 mx-auto p-4">
				<LoginForm />
			</div>
		</div>
	);
}

export default LoginPage;
