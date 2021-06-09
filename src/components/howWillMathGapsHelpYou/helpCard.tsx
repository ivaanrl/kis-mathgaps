import { Box, Flex, Text } from "@chakra-ui/layout";
import { FC, ReactNode } from "react";

export interface HelpCardProps {
  title: string;
  icon: ReactNode;
}

export const HelpCard: FC<HelpCardProps> = ({ title, icon }) => {
  return (
    <Box
      display="flex"
      pl="16px"
      pr="10px"
      py="10px"
      backgroundColor="white.main"
      borderRadius="10px"
      alignItems="center"
      width={{ base: "100%" }}
      maxWidth={{ base: "none", md: "350px" }}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        backgroundColor="orange.main"
        minHeight="58px"
        minWidth="58px"
        height="58px"
        width="58px"
        mr="16px"
        borderRadius="10px"
      >
        {icon}
      </Flex>
      <Text
        fontSize={{ base: "24px", md: "28px" }}
        lineHeight="32px"
        fontWeight={800}
        color="#000"
      >
        {title}
      </Text>
    </Box>
  );
};
