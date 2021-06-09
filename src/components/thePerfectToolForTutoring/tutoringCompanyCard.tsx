import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { FC } from "react";
import {
  tutoringCompaniesInfo,
  tutoringCompanyType,
} from "../../shared/tutoringCompanies";
import HandEmoji from "../../images/handEmoji.png";
import { Spacer } from "../shared/spacer";

export interface TutoringCompanyCardProps {
  tutoringCompany: tutoringCompanyType;
}

export const TutoringCompanyCard: FC<TutoringCompanyCardProps> = ({
  tutoringCompany,
}) => {
  const currentCompany = tutoringCompaniesInfo[tutoringCompany];

  return (
    <Flex
      flexDirection={{ base: "column", sm: "row" }}
      alignItems="center"
      justifyContent="center"
    >
      <Box width="100%" display={{ base: "none", sm: "block" }}>
        <Spacer color="rgba(50,50,50,0.8)" />
      </Box>
      <Box display={{ base: "none", sm: "block" }} minWidth="33px">
        <Image width="33px" height="auto" src={HandEmoji} />
      </Box>
      <Text
        mx="12px"
        fontWeight="800"
        fontSize="24px"
        lineHeight="29px"
        color="black.main"
        whiteSpace="nowrap"
      >
        Trusted by
      </Text>

      <Image
        width={currentCompany.logoWidth}
        height="auto"
        src={currentCompany.logo}
      />

      <Box width="100%" display={{ base: "none", sm: "block" }}>
        <Spacer color="rgba(50,50,50,0.8)" />
      </Box>
    </Flex>
  );
};
