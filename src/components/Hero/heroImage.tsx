import { Flex, Box, chakra, Image } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useWindowDimensions } from "../../hooks";
//import InfinityImage from "../../images/heroInfinity.png";
//import Division from "../../images/heroDivision.png";
//import Pi from "../../images/heroPi.png";
//import Plus from "../../images/heroPlus.png";
//import Root from "../../images/heroRoot.png";
export interface HeroImageProps {}

const MotionBox = chakra(motion.div);

const infinityVariants = {
  initial: {
    x: -400,
    opacity: 0,
  },
  final: {
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
    x: 0,
    opacity: 1,
  },
};

const divisionVariants = {
  initial: {
    x: -200,
    opacity: 0,
  },
  final: {
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
    x: 0,
    opacity: 1,
  },
};

const rootVariants = {
  initial: {
    x: 200,
    opacity: 0,
  },
  final: {
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
    x: 0,
    opacity: 1,
  },
};

const plusVariants = {
  initial: {
    x: 400,
    opacity: 0,
  },
  final: {
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
    x: 0,
    opacity: 1,
  },
};

export const HeroImage: FC<HeroImageProps> = () => {
  const { width } = useWindowDimensions();
  const animationControl = useAnimation();

  useEffect(() => {
    animationControl.start("final");
  }, [animationControl]);

  const [currentWidth, setCurrentWidth] = useState<number>(0);
  useEffect(() => {
    setCurrentWidth(width);
  }, [width]);

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <MotionBox
        initial="initial"
        animate={animationControl}
        variants={infinityVariants}
        mr="-50px"
        position="relative"
        display={{ base: "none", md: "block" }}
      >
        <Image
          height={"auto"}
          width={"290px"}
          src="https://firebasestorage.googleapis.com/v0/b/mathgaps-56d5a.appspot.com/o/landing%2Fimages%2FheroInfinity.png?alt=media&token=efcb6867-bc24-43b2-bc76-5ca394b28616"
          //onLoad={() => {
          //  setReady(ready + 1);
          //}}
        />
      </MotionBox>
      <MotionBox
        initial="initial"
        animate={animationControl}
        variants={divisionVariants}
        mr={{ base: "-45px", md: "-50px" }}
        position="relative"
      >
        <Image
          height={"auto"}
          width={currentWidth < 768 ? "180px" : "290px"}
          src="https://firebasestorage.googleapis.com/v0/b/mathgaps-56d5a.appspot.com/o/landing%2Fimages%2FheroDivision.png?alt=media&token=58285af0-b168-4b2c-934d-66185485d126"
          //onLoad={() => setReady(ready + 1)}
        />
      </MotionBox>
      <Box
        position="relative"
        minHeight={{ base: "220px", md: "400px" }}
        minWidth={{ base: "169px", md: "309px" }}
        height="auto"
        width={{ base: "169px", md: "309px" }}
        mr={{ base: "-30px", md: "15px" }}
      >
        <Image
          width="100%"
          height="100%"
          src="https://firebasestorage.googleapis.com/v0/b/mathgaps-56d5a.appspot.com/o/landing%2Fimages%2FheroPiNoBg.png?alt=media&token=869480c3-3106-4650-8dc1-a91d8dc925c5"
          //onLoad={() => setReady(ready + 1)}
        />
      </Box>
      <MotionBox
        initial="initial"
        animate={animationControl}
        variants={rootVariants}
        ml={{ base: "0px", md: "-50px" }}
        mr={{ base: "-15px", md: "-0px" }}
        position="relative"
      >
        <Image
          height="auto"
          width={currentWidth < 768 ? "190px" : "290px"}
          src="https://firebasestorage.googleapis.com/v0/b/mathgaps-56d5a.appspot.com/o/landing%2Fimages%2FheroRoot.png?alt=media&token=9d031e97-b0f2-489d-b908-4a73232ce4cd"
          //onLoad={() => setReady(ready + 1)}
        />
      </MotionBox>
      <MotionBox
        initial="initial"
        animate={animationControl}
        variants={plusVariants}
        ml="-50px"
        position="relative"
        display={{ base: "none", md: "block" }}
      >
        <Image
          height="auto"
          width={"290px"}
          src="https://firebasestorage.googleapis.com/v0/b/mathgaps-56d5a.appspot.com/o/landing%2Fimages%2FheroPlus.png?alt=media&token=e17b38de-d1f3-4be1-992c-032ec6723ff3"
          //onLoad={() => setReady(ready + 1)}
        />
      </MotionBox>
    </Flex>
  );
};
