import { ThemeProvider } from "./Context"; // Đường dẫn đến file chứa ThemeProvider
import LandingPage from "./LandingPage/LandingPage";

function App() {
  return (
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
