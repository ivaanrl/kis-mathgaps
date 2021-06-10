import {
  Flex,
  Text,
  Container,
  chakra,
  Box,
  Image,
  Button,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { ReactComponent as ArrowRight } from "../../svgs/arrowRight.svg";
import { useWindowDimensions } from "../../hooks";
import { HeroImage } from "./heroImage";
import { motion } from "framer-motion";
//import BackgroundImageSmall from "../../images/heroBgSmall.png";
//import BackgroundImageMobile from "../../images/heroBgMobile.png";
import HeroShape from "../../images/hero-shape.png";
import { ExternalLink } from "../externalLink/externalLink";
import { isMobile } from "react-device-detect";

export interface HeroProps {}

const MotionBox = chakra(motion.div);

const variants = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export const Hero: FC<HeroProps> = () => {
  //const location = useLocation();
  const [currentWidth, setCurrentWidth] = useState<number>(1000);
  const [currentHeight, setCurrentHeight] = useState<number>(1000);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    setCurrentWidth(width);
    setCurrentHeight(height);
  }, [width, height]);

  return (
    <>
      <MotionBox
        initial="initial"
        animate="final"
        variants={variants}
        position="relative"
      >
        <Container maxWidth="1440px">
          <Flex
            flexDirection="column"
            justifyContent={{ base: "flex-start", md: "center" }}
            height={{
              base: "90vh",
              md: "75vh",
            }}
            minHeight={{ base: "640px", md: "750px" }}
            maxHeight={{
              base: "none",
              md: "1000px",
              lg: "1100px",
            }}
            pt={{
              base: currentHeight < 690 ? "60px" : "100px",
              md: " 50px",
            }}
            //pt={{ base: "140px", lg: "20px", xl: "5%" }}
            pb={{ base: "0px", md: "300px" }}
          >
            <Flex
              flexDirection="column"
              justifyContent="center"
              mx="auto"
              px={{ lg: "40px" }}
              pt={{ base: "0px", lg: "95px" }}
              zIndex="2000000000"
            >
              <Flex
                //position="absolute"
                //top="80px"

                mt={{ base: 0, md: "130px" }}
                justifyContent="center"
                zIndex="200"
                maxWidth="1100px"
              >
                <HeroImage />
              </Flex>
              <Box
                //mt={{ base: "160px", md: "430px" }}
                mt={{ base: "-70px", md: "-140px" }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                height="fit-content"
                overflow="hidden"
              >
                <Text
                  color="blue.dark"
                  fontSize={
                    currentHeight > 1900 && currentWidth < 2000
                      ? "80px"
                      : {
                          base: "36px",
                          md: "58px",
                          lg: "64px",
                          "3xl": "80px",
                        }
                  }
                  fontWeight={800}
                  textAlign="center"
                  lineHeight={
                    currentHeight > 1900 && currentWidth < 2000
                      ? "90px"
                      : {
                          base: "46px",
                          md: "64px",
                          lg: "64px",
                          "3xl": "86px",
                        }
                  }
                  maxWidth={
                    currentHeight > 1900 && currentWidth < 2000
                      ? "1200px"
                      : { base: "648px", md: "1000px", "3xl": "790px" }
                  }
                  mb="28px"
                >
                  Find and fill every gap{" "}
                  {width > 768 && currentWidth < 2000 && <br />}
                  in your maths knowledge
                </Text>
                <Text
                  color="blue.dark"
                  opacity="0.6"
                  fontFamily="Inter"
                  fontWeight={500}
                  fontSize={
                    currentHeight > 1900 && currentWidth < 2000
                      ? "40px"
                      : { base: "18px", lg: "21px", "3xl": "28px" }
                  }
                  textAlign={{ base: "center", lg: "left" }}
                  maxWidth={{ base: "240px", md: "none" }}
                >
                  An essential tool for KIS Academics students in years 8-10
                </Text>
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                initial="initial"
                animate="final"
              >
                {isMobile ? null : (
                  <ExternalLink linkSuffix="signup">
                    <Button
                      variant="primary"
                      size="lg"
                      mt={{ base: "28px", "3xl": "48px" }}
                      minWidth={
                        currentHeight > 1900 && currentWidth < 2000
                          ? "550px"
                          : { "3xl": "600px" }
                      }
                    >
                      <Text mr="12px">Get started</Text>
                      <ArrowRight />
                    </Button>
                  </ExternalLink>
                )}
              </Box>
            </Flex>

            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              margin="auto"
              justifyContent="center"
              background="linear-gradient(141deg, rgba(177,232,255,1) 0%, rgba(146,142,247,1) 21%, rgba(146,142,247,1) 34%, rgba(158,209,252,1) 67%, rgba(189,236,255,1) 89%);"
            />
            <Box
              position="absolute"
              left="0"
              right="0"
              bottom="0"
              margin="auto"
              justifyContent="center"
              zIndex="10000"
            >
              <Image
                width="100%"
                height={{ base: "10px", md: "20px", lg: "40px" }}
                src={HeroShape}
              />
            </Box>
          </Flex>
        </Container>
      </MotionBox>
    </>
  );
};
