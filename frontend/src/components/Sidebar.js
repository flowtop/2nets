import { ReactComponent as SearchIcon } from "../images/search.svg";
import { ReactComponent as ChartIcon } from "../images/chart.svg";
import { ReactComponent as HomepageIcon } from "../images/homepage.svg";
import { ReactComponent as HistoryIcon } from "../images/history.svg";

function Sidebar({ currentTab, setCurrentTab }) {
	return (
		<aside className="sidebar">
			<nav className="sidebar__nav">
				<div 
					className={"sidebar__nav-link" + ((currentTab == 0) ? " active" : "") } 
					onClick={
						() => { setCurrentTab(0) }
					}>
					<SearchIcon />
					<span>Анализ рынка</span>
				</div>
				<div 
					className={"sidebar__nav-link" + ((currentTab == 1) ? " active" : "") } 
					onClick={
						() => { setCurrentTab(1) }
					}>
					<HomepageIcon />
					<span>Главная</span>
				</div>
				<div 
					className={"sidebar__nav-link" + ((currentTab == 2) ? " active" : "") } 
					onClick={
						() => { setCurrentTab(2) }
					}>
					<ChartIcon />
					<span>Статистика</span>
				</div>
				<div 
					className={"sidebar__nav-link" + ((currentTab == 3) ? " active" : "") } 
					onClick={
						() => { setCurrentTab(3) }
					}>
					<HistoryIcon />
					<span>Прошлые запросы</span>
				</div>
			</nav>
		</aside>
	);
}

export default Sidebar;