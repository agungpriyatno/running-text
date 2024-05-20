import { RunningTextProvider } from "@/components/context/RunningTextProvider";
import { RunningText } from "@/components/RunningText";

const CONFIG = {
  container: { width: 1920, height: 160 },
  panel: { width: 80, height: 40 },
  length: 83,
  delay: 0.8,
  speed: 100,
};

const HomePage = () => {
  return (
    <RunningTextProvider config={CONFIG}>
      <RunningText />
    </RunningTextProvider>
  );
};

export default HomePage;
