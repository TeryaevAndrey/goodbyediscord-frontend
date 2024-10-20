import { ThemeContextProvider } from "./shared/contexts";
import { useRouter } from "./shared/hooks";

function App() {
  return (
    <ThemeContextProvider>
      <div>{useRouter()}</div>;
    </ThemeContextProvider>
  );
}

export default App;
