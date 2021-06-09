import { Box, Flex, Text } from "@chakra-ui/layout";
import { FC } from "react";
import { Spacer } from "../shared/spacer";
import { Feature } from "./feature";
import BagEmoji from "../../images/bagEmoji.png";
import ideaEmoji from "../../images/ideaEmoji.png";
import StudentEmoji from "../../images/studentEmoji.png";
import CalculatorEmoji from "../../images/calculatorEmoji.png";
import SettingsEmoji from "../../images/settingsEmoji.png";
import PencilEmoji from "../../images/pencilEmoji.png";

export interface FeaturesProps {}

export const Features: FC<FeaturesProps> = () => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Text
        fontSize="35px"
        fontWeight={700}
        color="black.main"
        lineHeight="37px"
        mb="60px"
        px="20px"
        maxWidth="900px"
        textAlign="center"
      >
        <span
          style={{
            lineHeight: "40px",
            display: "inline",
            backgroundImage: `linear-gradient(to bottom, #fff 60%, rgba(64,77,153,0.3) 50%)`,
            backgroundSize: "100% 37px",
          }}
        >
          Our best students use MathGaps to find their weaknesses and turn them
          into strengths
        </span>
      </Text>
      <Box
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        alignItems="center"
        justifyContent="center"
      >
        <Feature
          title="Who?"
          dotColor="#885FFC"
          content={[
            {
              icon: BagEmoji,
              label: "Australian maths students in years 8-11",
            },
            {
              icon: ideaEmoji,
              label: "Students looking to improve overall capability ",
            },
          ]}
        />
        <Box
          my="15px"
          height="20px"
          width="80%"
          display={{ base: "block", lg: "none" }}
        >
          <Spacer />
        </Box>
        <Box
          display={{ base: "none", lg: "block" }}
          mx="15px"
          height="400px"
          width="1px"
        >
          <Spacer vertical />
        </Box>
        <Feature
          title="Why?"
          dotColor="#FFBF00"
          content={[
            {
              icon: StudentEmoji,
              label: "Personalised learning for every student",
            },
            {
              icon: CalculatorEmoji,
              label: "Build the foundational skills required for success ",
            },
          ]}
        />
        <Box
          my="15px"
          height="20px"
          width="80%"
          display={{ base: "block", lg: "none" }}
        >
          <Spacer />
        </Box>
        <Box
          display={{ base: "none", lg: "block" }}
          mx="15px"
          height="400px"
          width="1px"
        >
          <Spacer vertical />
        </Box>
        <Feature
          title="How?"
          dotColor="#30C18B"
          content={[
            {
              icon: SettingsEmoji,
              label: "Intelligent testing and data analysis",
            },
            {
              icon: PencilEmoji,
              label: "Skill network mapped  to the Australian curriculum",
            },
          ]}
        />
      </Box>
    </Flex>
  );
};
