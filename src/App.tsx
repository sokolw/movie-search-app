import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Navbar } from './Navbar/Navbar';

export default function App() {
  return <MantineProvider theme={theme}><Navbar></Navbar></MantineProvider>;
}
