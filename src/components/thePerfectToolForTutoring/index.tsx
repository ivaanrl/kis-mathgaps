import { Box, Text, Flex, Container } from "@chakra-ui/layout";
import { Image as ChakraImage } from "@chakra-ui/react";
import { FC, useRef, useState, useEffect } from "react";
import Node from "./node";
import { Spacer } from "../shared/spacer";
import { useWindowDimensions } from "../../hooks";
import TutoringMobile from "../../images/tutoringMobile.png";
import TutoringDesktopSmall from "../../images/tutoringDesktopSmall.png";
import TutoringMobileImage from "../../images/tutoringMobileImage.png";
import Stopwatch from "../../images/stopwatch.png";
import Book from "../../images/book.png";
import Teacher from "../../images/teacher.png";
import Chartup from "../../images/chartUp.png";
import { TutoringCompanyCard } from "./tutoringCompanyCard";
export interface ThePerfectToolForTutoringProps {}

export const ThePerfectToolForTutoring: FC<ThePerfectToolForTutoringProps> =
  () => {
    //const location = useLocation();
    const ref = useRef<HTMLDivElement>(null);
    const firstNodeRef = useRef<HTMLDivElement>(null);
    const secondNodeRef = useRef<HTMLDivElement>(null);
    const thirdNodeRef = useRef<HTMLDivElement>(null);
    const fourthNodeRef = useRef<HTMLDivElement>(null);
    const { width } = useWindowDimensions();

    const [currentWidth, setCurrentWidth] = useState<number>(0);
    useEffect(() => {
      setCurrentWidth(width);
    }, [width]);

    return (
      <Container maxWidth="1100px" mx={{ base: "0px", xl: "auto" }} ref={ref}>
        <Flex
          alignItems="center"
          justifyContent="center"
          mb={{ base: "60px", md: 0 }}
        >
          <Flex
            flexDirection="column"
            alignItems={{ base: "center", md: "flex-start" }}
            mr={{ base: "0", md: "21px", xl: "53px" }}
          >
            <Text
              fontSize={{ base: "48px", xl: "64px" }}
              lineHeight={{ base: "52px", xl: "78px" }}
              color="black.main"
              fontWeight={800}
              mb="46px"
              textAlign={{ base: "center", md: "left" }}
            >
              Enhance the impact {currentWidth > 768 && <br />} of KIS tutoring
            </Text>
            <Box
              display={{ base: "block", md: "none" }}
              position="relative"
              width="243px"
              height="281px"
              mx="auto"
              mb="30px"
            >
              <ChakraImage width="100%" height="auto" src={TutoringMobile} />
            </Box>
            <Node
              ref={firstNodeRef}
              title="More time is spent teaching"
              description={
                "Tutors no longer need to spend time manually diagnosing past gaps."
              }
              icon={Stopwatch}
            />
            <Box my="24px" width="100%" height="1px">
              <Spacer />
            </Box>
            <Node
              ref={secondNodeRef}
              title="New concepts are learnt faster"
              description={
                "Tutors will not teach advanced concepts unless students are ready to learn them."
              }
              icon={Book}
            />
            <Box my="24px" width="100%" height="1px">
              <Spacer />
            </Box>
            <Node
              ref={thirdNodeRef}
              title="Weaknesses are prioritised"
              description={
                "Tutors know exactly where the student struggles and can focus their attention on areas of need."
              }
              icon={Teacher}
            />
            <Box my="24px" width="100%" height="1px">
              <Spacer />
            </Box>
            <Node
              ref={fourthNodeRef}
              title="Progress is easily measured"
              description={
                "A live knowledge report allows for easy observation of improvement."
              }
              icon={Chartup}
            />
          </Flex>
          <Box
            display={{ base: "none", xl: "block" }}
            position="relative"
            flex="1"
            //width="497px"
            //height="550px"
          >
            <ChakraImage //width='100%' height='100%'
              height="auto"
              width="497px"
              src={TutoringDesktopSmall}
            />
          </Box>
          <Box
            display={{ base: "none", md: "block", xl: "none" }}
            position="relative"
            minWidth="261px"
            width="261px"
            height="617px"
          >
            <ChakraImage width="100%" height="auto" src={TutoringMobileImage} />
          </Box>
        </Flex>

        <Box mb="76px" mt="100px">
          <TutoringCompanyCard tutoringCompany={"kisacademics"} />
        </Box>
      </Container>
    );
  };
