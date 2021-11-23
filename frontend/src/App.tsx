import "./index.css";
import Provider from "./api/Provider"
import Table from "./components/Table"

const App: React.FC = () => {
  return (
    <>
      <Provider>
        <Table />
      </Provider>
    </>
  )
}

export default App;