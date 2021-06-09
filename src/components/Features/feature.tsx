import { Box, Flex, Text } from "@chakra-ui/layout";
import { FC } from "react";
import { Image } from "@chakra-ui/react";

export interface FeatureProps {
  title: string;
  dotColor: string;
  content: { icon: string; label: string }[];
}

export const Feature: FC<FeatureProps> = ({ title, content, dotColor }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      px="40px"
      initial="initial"
    >
      <Box position="relative">
        <Text
          mb="45px"
          fontWeight={700}
          fontSize="24px"
          zIndex="2"
          position="relative"
        >
          {title}
        </Text>
        <Box
          position="absolute"
          height="37px"
          width="37px"
          borderRadius="100%"
          backgroundColor={dotColor}
          top="0"
          left="calc(50% - 18px)"
          opacity="0.2"
        />
      </Box>
      <Flex flexDirection={{ base: "column", md: "row", lg: "column" }}>
        {content.map(({ icon, label }) => (
          <Box key={label} mb="40px" mx={{ base: "0", md: "40px", lg: "0" }}>
            <IconAndLabel icon={icon} label={label} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export interface IconAndLabelProps {
  icon: string;
  label: string;
}

export const IconAndLabel: FC<IconAndLabelProps> = ({ icon, label }) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Box mb="16px">
        <Image height={"60px"} width={"60px"} src={icon} />
      </Box>
      <Text
        fontFamily="Inter"
        fontWeight={500}
        fontSize="18px"
        color="#323232"
        maxWidth="225px"
        textAlign="center"
      >
        {label}
      </Text>
    </Flex>
  );
};
