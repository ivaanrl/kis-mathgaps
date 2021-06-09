import { Box, Flex, Text } from "@chakra-ui/layout";
import { FC, useState, useEffect } from "react";
import { Image } from "@chakra-ui/react";
import { Spacer } from "../shared/spacer";
import { useWindowDimensions } from "../../hooks";
import { IconButton } from "@chakra-ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Magnifier from "../../images/howItWorksMagnifier.png";
import Checkmark from "../../images/howItWorksCheckmark.png";
import Rocket from "../../images/howItWorksRocket.png";

export interface PageSwitcherProps {
  selected: number;
}

export interface MobilePageSwitcherProps {
  selected: number;
}

export const MobilePageSwitcher: FC<MobilePageSwitcherProps> = ({
  selected,
}) => {
  const { width } = useWindowDimensions();

  const [currentWidth, setCurrentWidth] = useState<number>(0);
  useEffect(() => {
    setCurrentWidth(width);
  }, [width]);
  return (
    <>
      <Box width="100%">
        {selected === 0 && (
          <MobilePageSwitcherItem
            icon={Magnifier}
            title="Test your skills"
            subtitle="Quickly identify all of your missing skills"
            index={0}
            selected={selected}
          />
        )}
        {selected === 1 && (
          <MobilePageSwitcherItem
            icon={Checkmark}
            title="Fill your knowledge gaps"
            subtitle="Learning programs personalised for you"
            index={1}
            selected={selected}
          />
        )}
        {selected === 2 && (
          <MobilePageSwitcherItem
            icon={Rocket}
            title={
              currentWidth < 1280
                ? "Track your progress"
                : "Track your improvement"
            }
            subtitle="Easily view data on your capability"
            index={2}
            selected={selected}
          />
        )}
      </Box>

      <Flex
        alignItems="center"
        justifyContent="flex-end"
        width="100%"
        position="relative"
      >
        <Flex position="absolute" top="40%" right="calc(50% - 33px)">
          <Box
            width="12px"
            height="12px"
            borderRadius="100%"
            backgroundColor="green.main"
            opacity={selected === 0 ? 1 : 0.5}
          />
          <Box
            mx="10px"
            width="12px"
            height="12px"
            borderRadius="100%"
            backgroundColor="green.main"
            opacity={selected === 1 ? 1 : 0.5}
          />
          <Box
            width="12px"
            height="12px"
            borderRadius="100%"
            backgroundColor="green.main"
            opacity={selected === 2 ? 1 : 0.5}
          />
        </Flex>

        {selected > 0 && (
          <IconButton
            padding="0"
            size="lg"
            _focus={{}}
            _active={{}}
            backgroundColor="transparent"
            _hover={{
              color: "green.main",
            }}
            icon={<ChevronLeftIcon h={14} w={7} />}
            aria-label="go back a slide"
          />
        )}

        <IconButton
          padding="0"
          _focus={{}}
          _active={{}}
          backgroundColor="transparent"
          _hover={{
            color: "green.main",
          }}
          icon={<ChevronRightIcon h={14} w={7} />}
          aria-label="go forward a slide"
        />
      </Flex>
    </>
  );
};

export const MobilePageSwitcherItem: FC<PageSwitcherItemProps> = ({
  icon,
  title,
  subtitle,
  selected,
  index,
}) => {
  const { width } = useWindowDimensions();

  const [currentWidth, setCurrentWidth] = useState<number>(0);
  useEffect(() => {
    setCurrentWidth(width);
  }, [width]);
  return (
    <Box
      minHeight="110px"
      flex="1"
      display="flex"
      alignItems="center"
      padding="16px"
      borderRadius="10px"
      width="100%"
      backgroundColor="green.main"
      _hover={{
        cursor: "pointer",
      }}
    >
      <Box minHeight="24px" minWidth="24px">
        <Image
          src={icon}
          height={currentWidth < 1280 ? "24px" : "50px"}
          width={currentWidth < 1280 ? "24px" : "50px"}
        />
      </Box>
      <Flex
        ml={{ base: "10px", lg: "24px" }}
        flexDirection="column"
        alignItems="flex-start"
      >
        <Text
          fontSize="20px"
          fontWeight={700}
          color="white.main"
          _hover={{
            cursor: "pointer",
          }}
        >
          {title}
        </Text>
        <Text
          //display={{ base: "none", xl: "block" }}
          fontFamily="Inter"
          fontWeight={500}
          fontSize="16px"
          color="white.main"
          _hover={{
            cursor: "pointer",
          }}
        >
          {subtitle}
        </Text>
      </Flex>
    </Box>
  );
};

export const PageSwitcher: FC<PageSwitcherProps> = ({ selected }) => {
  const { width } = useWindowDimensions();

  const [currentWidth, setCurrentWidth] = useState<number>(0);
  useEffect(() => {
    setCurrentWidth(width);
  }, [width]);

  return (
    <Flex flexDirection="column">
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "flex-start", md: "center" }}
        justifyContent="space-between"
        width="100%"
        //maxWidth={{ base: "none", xl: "330px" }}
        mb="20px"
      >
        <PageSwitcherItem
          icon={Magnifier}
          title="Test your skills"
          subtitle="Quickly identify all of your missing skills"
          index={0}
          selected={selected}
        />
        <Box
          display={{ base: "none", md: "block" }}
          mx="12px"
          height="100px"
          width="1px"
        >
          <Spacer vertical />
        </Box>
        <Box
          display={{ base: "block", md: "none" }}
          my={{ base: "12px", md: "24px" }}
          w="100%"
          h="1px"
        >
          <Spacer />
        </Box>
        <PageSwitcherItem
          icon={Checkmark}
          title="Fill your knowledge gaps"
          subtitle="Learning programs personalised for you"
          index={1}
          selected={selected}
        />
        <Box
          display={{ base: "none", md: "block" }}
          mx="12px"
          height="100px"
          width="1px"
        >
          <Spacer vertical />
        </Box>
        <Box
          display={{ base: "block", md: "none" }}
          my={{ base: "12px", md: "24px" }}
          w="100%"
          h="1px"
        >
          <Spacer />
        </Box>
        <PageSwitcherItem
          icon={Rocket}
          title={
            currentWidth < 1280
              ? "Track your progress"
              : "Track your improvement"
          }
          subtitle="Easily view data on your capability"
          index={2}
          selected={selected}
        />
      </Flex>
      {/*<Flex justifyContent="center">
        <Box
          width="12px"
          height="12px"
          borderRadius="100%"
          backgroundColor="green.main"
          opacity={selected === 0 ? 1 : 0.5}
        />
        <Box
          mx="10px"
          width="12px"
          height="12px"
          borderRadius="100%"
          backgroundColor="green.main"
          opacity={selected === 1 ? 1 : 0.5}
        />
        <Box
          width="12px"
          height="12px"
          borderRadius="100%"
          backgroundColor="green.main"
          opacity={selected === 2 ? 1 : 0.5}
        />
        </Flex>*/}
    </Flex>
  );
};

export interface PageSwitcherItemProps {
  icon: string;
  title: string;
  subtitle: string;
  index: number;
  selected: number;
}

export const PageSwitcherItem: FC<PageSwitcherItemProps> = ({
  icon,
  title,
  subtitle,
  selected,
  index,
}) => {
  const { width } = useWindowDimensions();

  const [currentWidth, setCurrentWidth] = useState<number>(0);
  useEffect(() => {
    setCurrentWidth(width);
  }, [width]);

  return (
    <Box
      minHeight={{ base: "0", md: "110px" }}
      flex="1"
      display="flex"
      alignItems="center"
      padding="16px"
      borderRadius="10px"
      width="100%"
      backgroundColor={
        currentWidth < 768 ? "#30C18B" : selected === index ? "#30C18B" : "#fff"
      }
      //_hover={{
      //  cursor: "pointer",
      //}}
    >
      <Box minHeight="24px" minWidth="24px">
        <Image
          src={icon}
          height={width < 1280 ? "24px" : "50px"}
          width={width < 1280 ? "24px" : "50px"}
        />
      </Box>
      <Flex
        ml={{ base: "10px", lg: "24px" }}
        flexDirection="column"
        alignItems="flex-start"
      >
        <Text
          fontSize="20px"
          fontWeight={700}
          color={selected === index ? "#fff" : "#000"}
          _hover={{
            cursor: "pointer",
          }}
        >
          {title}
        </Text>
        <Text
          //display={{ base: "none", xl: "block" }}
          fontFamily="Inter"
          fontWeight={500}
          fontSize="16px"
          color={selected === index ? "#fff" : "#000"}
          _hover={{
            cursor: "pointer",
          }}
        >
          {subtitle}
        </Text>
      </Flex>
    </Box>
  );
};
