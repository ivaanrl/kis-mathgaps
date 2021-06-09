import { Box } from "@chakra-ui/layout";
import { FAQ } from "./components/faq/faq";
import { Features } from "./components/Features";
import { FooterCta } from "./components/footerCTA";
import { Hero } from "./components/Hero";
import { HowMathGapsWork } from "./components/howMathgapsWork";
import { HowWillMathGapsHelpYou } from "./components/howWillMathGapsHelpYou";
import { StartForFree } from "./components/startForFreeUpgrade";
import { ThePerfectToolForTutoring } from "./components/thePerfectToolForTutoring";

function App() {
  return (
    <>
      <Hero />
      <Box
        mt={{
          base: "180px",
          md: "100px",
        }}
      >
        <Features />
      </Box>
      <Box mt="100px">
        <HowMathGapsWork />
      </Box>
      <HowWillMathGapsHelpYou />
      <Box mt={{ base: "40px", md: "80px" }}>
        <ThePerfectToolForTutoring />
      </Box>
      <Box>
        <StartForFree />
      </Box>
      <FAQ />
      <Box
        mt={{ base: "40px", md: "100px" }}
        mb={{ base: "60px", md: "100px" }}
      >
        <FooterCta />
      </Box>
    </>
  );
}

export default App;
