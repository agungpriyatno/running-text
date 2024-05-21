import { RunningTextProvider } from "@/components/context/RunningTextProvider";
import { RunningText } from "@/components/RunningText";
import { TConfig } from "@/types/running-text";

// NOTE
// Sesuaikan lagi delay apa bila mengubah container / panel / speed

const CONFIG: TConfig = {
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
