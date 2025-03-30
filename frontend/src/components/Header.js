import { ReactComponent as LogoIcon } from "../images/logo.svg";
import { ReactComponent as SearchIcon } from "../images/search.svg";

function Header({listData, setListData}) {
	return (
		<header className="header">
			<div className="container">
				<LogoIcon className="header__logo" />
				<div className="header__search">
					<div className="header__search-input">
						<input class="gisUrl" type="text" placeholder="Введите ссылку на бизнес-аккаунт" />
						<button onClick={() => {
							fetch('http://127.0.0.1:5000/getData', {
								method: "POST",
								headers: {
									"Content-Type": "application/json",
								},
								body: JSON.stringify({ url: document.querySelector(".gisUrl").value })
							})
							.then((response) => {
								return response.json();
							})
							.then((data) => {
								console.log(data);

								data = data.result.items;
								data.sort((a, b) => b.reviews.general_rating - a.reviews.general_rating);
								setListData(data);
							});
						}}>
							<SearchIcon />
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;