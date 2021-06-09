import { Box, Flex, Text } from "@chakra-ui/layout";
import { FC, useRef, useState, useEffect } from "react";
import { ReactComponent as FreeUnderline } from "../../svgs/freeUnderline.svg";
import { Image } from "@chakra-ui/react";
import { ReactComponent as StartFreeRightBackground } from "../../svgs/startFreeRightBackground.svg";
import { PricingTier } from "../pricingTier";
import { ReactComponent as Close } from "../../svgs/close.svg";
import { useWindowDimensions } from "../../hooks";
import LeftBackground from "../../images/startFreeLeftBackground.png";
import { ProHeader } from "./proHeader";

export interface StartForFreeUpgradeLaterProps {}

export const StartForFree: FC<StartForFreeUpgradeLaterProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions();

  const [currentWidth, setCurrentWidth] = useState<number>(0);
  useEffect(() => {
    setCurrentWidth(width);
  }, [width]);
  return (
    <Box ref={ref}>
      <Flex
        position="relative"
        backgroundColor="blue.main"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        pt="71px"
        pb="88px"
        px="40px"
      >
        <Box position="absolute" left="220px" top="0" bottom="0" width="300px">
          <Image width="100%" height="100%" src={LeftBackground} />
        </Box>
        <Box
          position="absolute"
          right="200px"
          top="20px"
          bottom="0"
          width="300px"
        >
          <StartFreeRightBackground />
        </Box>
        <Flex
          alignItems="center"
          fontSize={{ base: "36px", md: "48px", lg: "56px" }}
          fontWeight={800}
          color="white.main"
          mb="16px"
        >
          <Box position="relative">
            <Text>
              Start for free. {currentWidth < 768 && <br />} Upgrade later.
            </Text>
            <Box
              position="absolute"
              bottom={{ base: "55px", md: "0px" }}
              right={{ base: "15px", md: "360px", lg: "430px" }}
            >
              <FreeUnderline />
            </Box>
          </Box>
        </Flex>
        <Text
          color="white.main"
          fontFamily="Inter"
          opacity="0.6"
          fontSize="18px"
          fontWeight={{ base: 400, lg: 500 }}
          textAlign="center"
          display={{ base: "none", md: "block" }}
        >
          Start your MathGaps journey for free. Take the fundamentals test and
          determine where your gaps lie. {width > 1000 && <br />}
          If you are loving MathGaps, upgrade to Premium to access more tests,
          your full results and other cool features.
        </Text>
      </Flex>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems={{ base: "center", md: "flex-start" }}
      >
        <Box
          borderRadius="10px"
          mt={{ base: "40px", md: 0 }}
          mr={{ base: 0, md: "30px" }}
          maxWidth={{ base: "80%", md: "none" }}
        >
          <PricingTier
            header={
              <Text
                fontSize="21px"
                fontWeight="600"
                color="blue.dark"
                ml="9px"
                lineHeight="32px"
              >
                Starter - Free
              </Text>
            }
            price={0}
            bps={[
              { text: "Fundamental gaps assessment" },
              { text: "Comprehensive knowledge report" },
              {
                text: "Gaps assessment for each topic",
                icon: (
                  <Box
                    opacity="0.4"
                    height="24px"
                    width="24px"
                    padding="6px"
                    ml="-3px"
                    mr="2px"
                  >
                    <Close />
                  </Box>
                ),
                strikeThrough: true,
              },
              {
                text: "Personalised learning roadmap",
                icon: (
                  <Box
                    opacity="0.4"
                    height="24px"
                    width="24px"
                    padding="6px"
                    ml="-3px"
                    mr="2px"
                  >
                    <Close />
                  </Box>
                ),
                strikeThrough: true,
              },
              {
                text: "Analytics on capability",
                icon: (
                  <Box
                    opacity="0.4"
                    height="24px"
                    width="24px"
                    padding="6px"
                    ml="-3px"
                    mr="2px"
                  >
                    <Close />
                  </Box>
                ),
                strikeThrough: true,
              },
            ]}
          />
        </Box>

        <Box
          borderRadius="10px"
          mt={{ base: "40px", md: "-50px" }}
          maxWidth={{ base: "80%", md: "none" }}
        >
          <PricingTier
            header={<ProHeader />}
            price={4}
            description="week"
            bps={[
              { text: "Fundamental gaps assessment" },
              { text: "Comprehensive knowledge report" },
              { text: "Gaps assessment for each topic" },
              { text: "Personalised learning roadmap" },
              { text: "Analytics on capability" },
            ]}
          />
        </Box>
      </Flex>
    </Box>
  );
};
