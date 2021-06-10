import { Box, Container, Flex, Text } from "@chakra-ui/layout";
import { useState, useEffect, forwardRef } from "react";
import { useWindowDimensions } from "../../hooks";
import { ReactComponent as TextDecoration } from "../../svgs/TextDecoration.svg";
import { MobilePageContent, PageContentSwitcher } from "./pageContent";
import { PageSwitcher } from "./PageSwitcher";

export interface HowMathGapsWorkProps {}

export const HowMathGapsWork = forwardRef<HTMLDivElement, HowMathGapsWorkProps>(
  (_, mainRef) => {
    const { width } = useWindowDimensions();

    const [currentWidth, setCurrentWidth] = useState<number>(0);
    useEffect(() => {
      setCurrentWidth(width);
    }, [width]);

    return (
      <Box
        ref={mainRef}
        pt={{ base: "30px", md: "80px" }}
        pb={{ base: "60px", md: "108px" }}
        bg="white.snow"
      >
        <Container maxWidth="1400px">
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            margin="auto"
          >
            <Flex
              justifyContent="center"
              fontSize={{ base: "48px", md: "54px", xl: "64px" }}
              fontWeight={800}
              mb={{ base: "30px", md: "70px" }}
            >
              <Box
                position="relative"
                textAlign="center"
                display={{ base: "none", md: "inline" }}
              >
                <span style={{ color: "#30C18B" }}>How </span>
                <Box
                  position="absolute"
                  top="-15px"
                  left={{ base: "50px", md: "-30px" }}
                >
                  <TextDecoration />
                </Box>
                <Text color="black.main" display="inline">
                  does {currentWidth < 768 && <br />} MathGaps work?
                </Text>
              </Box>
            </Flex>
            <Flex
              px="26px"
              flexDirection="column"
              alignItems={{ base: "flex-start", md: "center" }}
            >
              <Box width="100%" display={{ base: "none", md: "block" }}>
                <PageSwitcher selected={5} />
              </Box>
              {currentWidth < 768 ? (
                <MobilePageContent selected={0} />
              ) : (
                <PageContentSwitcher selected={0} />
              )}
            </Flex>
            <Flex
              my={currentWidth < 768 ? "0px" : "60px"}
              px="26px"
              flexDirection="column"
              alignItems={{ base: "flex-start", md: "center" }}
            >
              {currentWidth < 768 ? null : <PageContentSwitcher selected={1} />}
            </Flex>
            <Flex
              px="26px"
              flexDirection="column"
              alignItems={{ base: "flex-start", md: "center" }}
            >
              {currentWidth < 768 ? null : <PageContentSwitcher selected={2} />}
            </Flex>
          </Flex>
        </Container>
      </Box>
    );
  },
);
