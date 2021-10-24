import "./App.css"
import Main from "./components/Main/Main"
import SideBar from "./components/SideBar/SideBar"

function App() {
	return (
		<>
			<div className=" grid lg:grid-cols-3 xl:grid-cols-4 ">
				<div className="bg-gray-200">
					<SideBar />
				</div>
				<div className="grid lg:col-span-2 xl:col-span-3 ">
					<Main />
				</div>
			</div>
		</>
	)
}

export default App
