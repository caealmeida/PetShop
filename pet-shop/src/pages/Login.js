import { Link } from 'react-router-dom';
import styles from '../index.css';

const Login = () => {
	return (
		<div className="flex justify-center h-screen">
			<div className="place-self-center p-6 lg:px-8 border border-sky-500 rounded w-fit bg-sky-100">
				<div>
					<h1 className="text-sky-500 text-center font-medium my-2">Cadastre-se!</h1>
					<form>
						<h2 className="text-sky-500 text-center">Dados do humano</h2>
						<div className="flex flex-col mb-2">
							<label for="username">Username</label>
							<input className="border border-sky-600 rounded" id="username" type="text"></input>
						</div>

						<div className="flex flex-col mb-2">
							<label for="password">Senha</label>
							<input className="border border-sky-600 rounded" id="password" type="password"></input>
						</div>

						<Link className="flex justify-center bg-sky-500 text-white p-2 rounded my-2" to="/home">
							Cadastrar
						</Link>
					</form>
					<div className="text-sky-500 text-center">
						<span>Não possui cadastro? </span>
						<Link to="/signin">Crie agora!</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
