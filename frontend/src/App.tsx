import "./index.css";
import Provider from "./api/Provider"

const App: React.FC<{}> = () => {
  return (
    <>
      <Provider>
        <h1>Hello from App</h1>
      </Provider>
    </>
  )
}

export default App;