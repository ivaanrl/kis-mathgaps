import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { FC } from "react";
import { isMobile } from "react-device-detect";
import {
  tutoringCompaniesInfo,
  tutoringCompanyType,
} from "../../shared/tutoringCompanies";
import { ReactComponent as ArrowRight } from "../../svgs/arrowRight.svg";
import { ExternalLink } from "../externalLink/externalLink";

export interface TutoringCompanyCardProps {
  tutoringCompany: tutoringCompanyType;
}

export const TutoringCompanyCard: FC<TutoringCompanyCardProps> = ({
  tutoringCompany,
}) => {
  const currentCompany = tutoringCompaniesInfo[tutoringCompany];

  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      backgroundColor="white"
      borderRadius="10px"
      padding="16px"
      alignItems="center"
      justifyContent="space-between"
      boxShadow="0px 2px 10px rgba(0, 0, 0, 0.12)"
      mt={{ base: "28px", "3xl": "48px" }}
      maxWidth="1000px"
      mx="auto"
    >
      <Flex
        flexDirection={{ base: "column", sm: "row" }}
        alignItems="center"
        mb={{ base: "20px", md: 0 }}
      >
        <Image
          width={currentCompany.logoWidth}
          height="auto"
          src={currentCompany.logo}
        />
        <Text
          mt={{ base: "10px", sm: 0 }}
          mx={{ base: "12px", md: "24px" }}
          textAlign={{ base: "center", sm: "left" }}
          fontFamily="Inter"
          fontWeight="500"
          fontSize={{ base: "18px", lg: "21px" }}
          lineHeight="28px"
          color="black.main"
          //maxWidth="392px"
        >
          has partnered with MathGaps to bring you an awesome discount.
        </Text>
      </Flex>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        initial="initial"
        animate="final"
      >
        {isMobile ? null : (
          <ExternalLink>
            <Button variant="primary" size="lg">
              <Text mr="12px">Get started for FREE!</Text>
              <ArrowRight />
            </Button>
          </ExternalLink>
        )}
      </Box>
    </Flex>
  );
};
