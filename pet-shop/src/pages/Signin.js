import { Link } from 'react-router-dom';

const Signin = () => {
	return (
		<div className="flex justify-center h-screen">
			<div className="place-self-center p-6 lg:px-8 border border-sky-500 rounded w-fit bg-sky-100">
				<div>
					<h1 className="text-sky-500 text-center font-medium my-2">Cadastre-se!</h1>
					<form>
						<h2 className="text-sky-500 text-center">Dados do pet 🦴</h2>
						<div className="flex flex-col mb-2">
							<label>Nome do pet</label>
							<input className="border border-sky-600 rounded" type="text"></input>
						</div>

						<div>
							<legend>Espécie:</legend>

							<div>
								<input type="radio" id="gato" name="petType" value="gato" />
								<label for="gato">Gato</label>
							</div>

							<div>
								<input type="radio" id="cachorro" name="petType" value="cachorro" />
								<label for="cachorro">Cachorro</label>
							</div>

							<div>
								<input type="radio" id="roedor" name="petType" value="roedor" />
								<label for="roedor">Roedor</label>
							</div>
						</div>

						<div className="flex flex-col mb-2">
							<label for="nascimento">Data de nascimento:</label>
							<input className="border border-sky-600 rounded" id="nascimento" type="date"></input>
						</div>

						<div className="flex flex-col mb-2">
							<label for="peso">Peso do pet em KG:</label>
							<input className="border border-sky-600 rounded" id="peso" type="number"></input>
						</div>

						<h2 className="text-sky-500 text-center">Dados do humano</h2>
						<div className="flex flex-col mb-2">
							<label for="username">Username</label>
							<input className="border border-sky-600 rounded" id="username" type="text"></input>
						</div>

						<div className="flex flex-col mb-2">
							<label for="email">Email</label>
							<input
								className="border border-sky-600 rounded"
								id="email"
								type="email"
								pattern=".+@example\.com"
								size="30"
								required
							></input>
						</div>

						<div className="flex flex-col mb-2">
							<label for="password">Senha</label>
							<input className="border border-sky-600 rounded" id="password" type="password"></input>
						</div>

						<div>
							<legend>Concorda com os termos de uso?</legend>
							<div>
								<input className="mr-2" type="checkbox" id="agree" name="interest" value="agree" />
								<label for="agree">Li e concordo com os termos de uso</label>
							</div>
							<div>
								<input className="mr-2" type="checkbox" id="marketingEmails" name="interest" value="marketingEmails" />
								<label for="marketingEmails">Quero receber novidades e emails promocionais</label>
							</div>
						</div>

						<Link className="flex justify-center bg-sky-500 text-white p-2 rounded my-2" to="/home">
							Cadastrar
						</Link>
					</form>
					<div className="text-sky-500 text-center">
						<span>Já possui cadastro? </span>
						<Link to="/">Entre agora!</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signin;
