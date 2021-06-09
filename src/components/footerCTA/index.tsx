import {
  Box,
  Text,
  Button,
  Container,
  Image,
  chakra,
  Flex,
  Image as ChakraImage,
} from "@chakra-ui/react";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { FC, useState, useEffect } from "react";
import { ReactComponent as ArrowRight } from "../../svgs/arrowRight.svg";
import { ReactComponent as ButtonArrowRight } from "../../svgs/footerCTARightArrow.svg";
import { ReactComponent as ButtonArrowLeft } from "../../svgs/footerCTAleftArrow.svg";
import { useWindowDimensions } from "../../hooks";
import Bg from "../../images/footerCTABg.png";
import { isMobile } from "react-device-detect";
import { ExternalLink } from "../externalLink/externalLink";

export interface FooterCTAProps {}

const MotionBox = chakra(motion.div);
const MotionText = chakra(motion.p);

const ANGLE = 8;

export const FooterCta: FC<FooterCTAProps> = () => {
  const { scrollYProgress } = useViewportScroll();
  const { width } = useWindowDimensions();

  const [currentWidth, setCurrentWidth] = useState<number>(0);
  useEffect(() => {
    setCurrentWidth(width);
  }, [width]);
  const inputArray = [0.86, 0.96];

  const topIconY = useTransform(scrollYProgress, inputArray, [200, 0]);
  const middleIconY = useTransform(scrollYProgress, inputArray, [100, 0]);

  const [, setIsHovered] = useState<boolean>(false);

  const y = useMotionValue(0.5);
  const x = useMotionValue(0.5);

  const rotateY = useTransform(x, [0, 1], [-ANGLE, ANGLE], {
    clamp: true,
  });
  const rotateX = useTransform(y, [0, 1], [ANGLE, -ANGLE], {
    clamp: true,
  });

  const onMove = (e: any) => {
    // get position information for the card
    const bounds = e.currentTarget.getBoundingClientRect();

    // set x,y local coordinates
    const xValue = (e.clientX - bounds.x) / e.currentTarget.clientWidth;
    const yValue = (e.clientY - bounds.y) / e.currentTarget.clientHeight;

    // update MotionValues
    x.set(xValue, true);
    y.set(yValue, true);
  };

  const restoreOriginalShape = () => {
    x.set(0.5, true);
    y.set(0.5, true);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <>
      <Container maxWidth="1440px">
        <MotionBox
          display="flex"
          mt="40px"
          borderRadius="20px"
          bg="rgba(122,197,241,0.2)"
          position="relative"
          width="100%"
          height={{ base: "fit-content", md: "295px" }}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pl={{ base: "14px", lg: "70px" }}
          pr="14px"
          py={{ base: "20px", md: 0 }}
        >
          <Box
            zIndex="10"
            position="absolute"
            left="25px"
            bottom="-90px"
            height="200px"
            width="200px"
            display={{ base: "none", md: "block" }}
          >
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/mathgaps-56d5a.appspot.com/o/landing%2Fimages%2Fdivision.png?alt=media&token=1e5e1439-9b49-46d7-977a-77228efe215b"
              height={{ base: "120px", xl: "220px" }}
              width={{ base: "50%", xl: "100%" }}
            />
          </Box>
          <MotionBox
            display={{ base: "none", lg: "block" }}
            zIndex="10"
            position="absolute"
            bottom={{ base: "-40px", md: "0" }}
            left={{ base: "55%", md: "14%", xl: "245px" }}
            height="200px"
            width="200px"
            style={{ y: middleIconY }}
          >
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/mathgaps-56d5a.appspot.com/o/landing%2Fimages%2Fpi.png?alt=media&token=f26bc7fb-9703-47e3-a566-fd5a1b0a149b"
              }
              height={{ base: "120px", xl: "220px" }}
              width={{ base: "50%", xl: "100%" }}
            />
          </MotionBox>
          <MotionBox
            zIndex="10"
            position="absolute"
            left={{ base: "-10px", md: "85px" }}
            top={{ base: "20px", xl: "-55px" }}
            height="200px"
            width="200px"
            style={{ y: topIconY }}
            display={{ base: "none", md: "block" }}
          >
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/mathgaps-56d5a.appspot.com/o/landing%2Fimages%2Finfinity.png?alt=media&token=d621c559-6661-4718-8a1e-e39c48f8598c"
              height={{ base: "110px", xl: "220px" }}
              width={{ base: "50%", xl: "100%" }}
            />
          </MotionBox>
          <MotionBox
            zIndex="10"
            position="absolute"
            bottom={{ base: "-50px", md: "0" }}
            right={{ base: "45%", md: "-80px", xl: "-20px" }}
            height="200px"
            width="200px"
            style={{ y: middleIconY }}
          >
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/mathgaps-56d5a.appspot.com/o/landing%2Fimages%2Fplus.png?alt=media&token=eaa72748-9812-46c3-a2e9-846b09df468e"
              height={{ base: "120px", xl: "220px" }}
              width={{ base: "50%", xl: "100%" }}
            />
          </MotionBox>

          <MotionBox
            zIndex="10"
            position="absolute"
            right={{ base: "-100px", md: "40px", xl: "115px" }}
            top={{ base: "50px", md: "20px", xl: "-45px" }}
            height="200px"
            width="200px"
            style={{ y: topIconY }}
          >
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/mathgaps-56d5a.appspot.com/o/landing%2Fimages%2Fsum.png?alt=media&token=1d9cc200-b28a-4303-8b29-7d41a9b7a789"
              height={{ base: "120px", xl: "220px" }}
              width={{ base: "50%", xl: "100%" }}
            />
          </MotionBox>

          <Box
            zIndex="10"
            position="absolute"
            right={currentWidth > 1280 ? "160px" : { md: "60px" }}
            bottom="-90px"
            height="200px"
            width="200px"
            display={{ base: "none", lg: "block" }}
          >
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/mathgaps-56d5a.appspot.com/o/landing%2Fimages%2Froot.png?alt=media&token=74c431e6-959d-4837-b4fb-42396ba7fc3d"
              }
              height={{ base: "120px", xl: "220px" }}
              width={{ base: "50%", xl: "100%" }}
            />
          </Box>

          <MotionBox
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            borderRadius="20px"
            backgroundColor="rgba(255,255,255,0.02)"
            style={{
              filter: "blur(1px)",
            }}
            zIndex="2"
          >
            <Box
              zIndex="1"
              position="absolute"
              top="-2px"
              left="0"
              right="0"
              bottom="0"
            >
              <ChakraImage
                height={{ base: "100%", md: "300px" }}
                width="100%"
                src={Bg}
              />
            </Box>
          </MotionBox>
          <Box zIndex="10" maxHeight="140px" overflow="hidden">
            <MotionText
              fontWeight={800}
              fontSize={{ base: "36px", md: "48px", lg: "56px" }}
              lineHeight={{ base: "42px", md: "56px", lg: "62px" }}
              color="black.main"
              mb={{ base: "20px", md: "45px" }}
              maxWidth="450px"
              textAlign="center"
            >
              Where do your <br /> gaps lie?
            </MotionText>
          </Box>

          <Flex zIndex="9">
            <Box mt="-25px" mr="20px" display={{ base: "none", md: "block" }}>
              <ButtonArrowLeft />
            </Box>
            {isMobile ? null : (
              <ExternalLink linkSuffix="signup">
                <MotionBox
                  onPointerMove={onMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={restoreOriginalShape}
                  style={{
                    rotateY,
                    rotateX,
                  }}
                >
                  <Button
                    size="lg"
                    variant="primary"
                    zIndex="10"
                    mt={{ base: "5px", md: 0 }}
                  >
                    <Text mr="12px">Find out now</Text>
                    <ArrowRight />
                  </Button>
                </MotionBox>
              </ExternalLink>
            )}
            <Box mt="-30px" ml="20px" display={{ base: "none", md: "block" }}>
              <ButtonArrowRight />
            </Box>
          </Flex>
        </MotionBox>
      </Container>
    </>
  );
};
