import { Box, Flex, Text, Container } from "@chakra-ui/layout";
import { FC, useRef, useState, useEffect } from "react";
import { ReactComponent as ButtonArrowRight } from "../../svgs/arrowRight.svg";
import { ReactComponent as BottomArrow } from "../../svgs/howWillHelpBottomArrow.svg";
import { ReactComponent as Home } from "../../svgs/home.svg";
import { ReactComponent as SmileyFace } from "../../svgs/smileyFace.svg";
import { ReactComponent as Idea } from "../../svgs/idea.svg";
//import { ReactComponent as Aplus } from "../../svgs/Aplus.svg";
import { HelpCard } from "./helpCard";
import { Image } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { ArrowLeft, ArrowRight, CurveLeft, CurveRight } from "./animatedSvgs";
import { Spacer } from "../shared/spacer";
import { useWindowDimensions } from "../../hooks";
//import { useInView } from "react-intersection-observer";
import childImage from "../../images/howWillHelpChild.png";
import Aplus from "../../images/Aplus.png";
import { isMobile } from "react-device-detect";
import { ExternalLink } from "../externalLink/externalLink";

export interface HowWillMathGapsHelpYouProps {}

export const HowWillMathGapsHelpYou: FC<HowWillMathGapsHelpYouProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions();

  const [currentWidth, setCurrentWidth] = useState<number>(0);
  useEffect(() => {
    setCurrentWidth(width);
  }, [width]);
  return (
    <Box
      backgroundColor="#FFF1DB"
      pt={{ base: "50px", md: "79px" }}
      pb={{ base: "40px", md: "60px" }}
      ref={ref}
    >
      <Container maxWidth="1400px">
        <Flex alignItems="flex-end" justifyContent="center" mb="20px">
          <Box display={{ base: "none", xl: "block" }}>
            <ArrowLeft />
          </Box>
          <Text
            fontSize={{ base: "48px", md: "56px", lg: "64px" }}
            color="black.main"
            fontWeight={800}
            textAlign="center"
          >
            How MathGaps will {currentWidth > 768 && <br />} help you
          </Text>
          <Box display={{ base: "none", xl: "block" }}>
            <ArrowRight />
          </Box>
        </Flex>
        <Flex justifyContent="center" display={{ base: "flex", md: "none" }}>
          <Box ml="25px">
            <Image height={"auto"} width={"380px"} src={childImage} />
          </Box>
        </Flex>
        <Flex alignItems="flex-start" justifyContent="center">
          <Flex
            display={{ base: "none", xl: "flex" }}
            flexDirection="column"
            alignItems="center"
          >
            <HelpCard
              title="See a big boost in confidence"
              icon={<SmileyFace />}
            />
            <Box mt="20px" mb="23px">
              <CurveLeft />
            </Box>
            <Box ml="47px">
              <HelpCard
                title="Improve your maths grades"
                icon={<Image height={"auto"} width={"32px"} src={Aplus} />}
              />
            </Box>
          </Flex>
          <Flex
            display={{ base: "flex", xl: "none" }}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <HelpCard
              title="Prevent confusion during class"
              icon={<SmileyFace />}
            />
            <Box my="24px" width="100%">
              <HelpCard
                title="Fill any gaps from remote learning"
                icon={<Home />}
              />
            </Box>
            <Box mb="24px" width="100%">
              <HelpCard title="See a big boost in confidence" icon={<Idea />} />
            </Box>
            <HelpCard
              title="Improve your maths grades"
              icon={<Image height={"auto"} width={"32px"} src={Aplus} />}
            />
          </Flex>
          <Box
            display={{ base: "none", md: "block" }}
            mr={{ base: "-30px", xl: "65px" }}
            ml={{ base: "25px", xl: "80px" }}
          >
            <Image height={"auto"} width={"380px"} src={childImage} />
          </Box>
          <Flex
            display={{ base: "none", xl: "flex" }}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <HelpCard title="Prevent confusion during class" icon={<Idea />} />
            <Box mt="20px" mb="23px">
              <CurveRight />
            </Box>
            <Box mr="47px">
              <HelpCard
                title="Fill any gaps from remote learning"
                icon={<Home />}
              />
            </Box>
          </Flex>
        </Flex>
        <Flex
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="center"
          mt="30px"
        >
          <Box width="210px" display={{ base: "none", xl: "block" }}>
            <Spacer />
          </Box>
          <Flex
            alignItems="center"
            flexDirection={{ base: "column", md: "row" }}
            backgroundColor="rgba(50,50,50,0.05)"
            padding="32px"
            borderRadius="10px"
          >
            <Text
              fontSize="24px"
              fontWeight={700}
              color="black.main"
              textAlign={{ base: "center", md: "left" }}
              width={{ md: "226px", xl: "auto" }}
            >
              Access these amazing benefits!
            </Text>
            <Box mx="12px" display={{ base: "none", md: "block" }}>
              <BottomArrow />
            </Box>
            {isMobile ? null : (
              <ExternalLink linkSuffix="signup">
                <Button
                  variant="primary"
                  size="lg"
                  mt={{ base: "12px", md: 0 }}
                  flex={{ md: 1 }}
                  width="100%"
                  maxWidth={{ base: "380px", md: "340px" }}
                >
                  <Text mr="12px">Get started for FREE!</Text>
                  <ButtonArrowRight />
                </Button>
              </ExternalLink>
            )}
          </Flex>

          <Box width="210px" display={{ base: "none", xl: "block" }}>
            <Spacer />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
