const Home = () => {
	return (
		<div className="flex flex-col">
			<h1 className="text-4xl text-center p-4 bg-sky-500 text-white">Pet Shop Fase 2</h1>
			<h2 className="text-4xl text-center pt-12 text-sky-500">Conheça nossos serviços</h2>
			<div className="m-32">
				<section className="flex w-fit">
					<div className="mr-20">
						<img src={require('../images/banho.png')} />
					</div>
					<div>
						<img src={require('../images/tosa.png')} />
					</div>
				</section>
			</div>
			<div className="flex  flex-col items-center mb-48">
				<h2 className="text-4xl text-center py-12 text-sky-500">Produtos da Pet Shop Fase 2</h2>
				<section className="flex mx-12">
					<div className="border border-sky-600 rounded w-96 h-96 py-4 mr-4">
						<h3 className="text-2xl text-center text-sky-500">Mordedor Benebone</h3>
						<img
							className="px-12"
							src="https://cdn.awsli.com.br/800x800/1613/1613936/produto/112114972/41b3c38801.jpg"
						/>
						<span className="flex text-xl justify-center text-sky-700">Apenas R$95,00</span>
					</div>
					<div className="border border-sky-600 rounded w-96 h-96 py-4 mr-4">
						<h3 className="text-2xl text-center text-sky-500">Caminha</h3>
						<img
							className="px-12"
							src="https://a-static.mlcdn.com.br/450x450/caminha-cama-cachorro-pet-e-gato-soft-fofinha-g-70x70-c-ziper-lavavel-cinza-edecasaenxovais/edecasaenxovais/15817476732/cf6205870d74373025dcce5ae57a86e0.jpeg"
						/>
						<span className="flex text-xl justify-center text-sky-700">Apenas R$195,00</span>
					</div>
					<div className="border border-sky-600 rounded w-96 h-96 py-4 mr-4">
						<h3 className="text-2xl text-center text-sky-500 pb-6">Ração Golden</h3>
						<img className="px-4" src="https://m.media-amazon.com/images/I/51evYtl1ScL._AC_UL320_.jpg" />
						<span className="flex text-xl justify-center text-sky-700 py-6">Apenas R$195,00</span>
					</div>
					<div className="border border-sky-600 rounded w-96 h-96">
						<h3 className="text-2xl text-center text-sky-500">whiskas sache</h3>
						<img
							className="px-12"
							src="https://agrosolo.fbitsstatic.net/img/p/sache-whiskas-para-gatos-acima-de-1-ano-sabor-carne-ao-molho-85g-78374/270865.jpg"
						/>
						<span className="flex text-xl justify-center text-sky-700 py-6">Apenas R$7,00</span>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Home;
