import { Provider } from "react-redux";
import { StatusBar } from "react-native";
import { store } from "./src/store/index";
import { Navigation } from "./src/screens/navigation";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <StatusBar backgroundColor="white" barStyle="dark-content" />
    </Provider>
  );
}
