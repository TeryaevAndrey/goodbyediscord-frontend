import { ToastContainer } from "react-toastify";
import { ThemeContextProvider } from "./shared/contexts";
import { useRouter } from "./shared/hooks";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeContextProvider>
      <div>{useRouter()}</div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeContextProvider>
  );
}

export default App;
