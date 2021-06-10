import { Button } from "@chakra-ui/react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { FC, ReactNode } from "react";
import { BulletPoint, BulletPointProps } from "../shared/bulletPoint";
import { ReactComponent as ArrowRight } from "../../svgs/arrowRight.svg";
import { PricingTag } from "./price";
import { ExternalLink } from "../externalLink/externalLink";
import { isMobile } from "react-device-detect";

export interface PricingTierProps {
  price: number;
  header: ReactNode;
  bps: BulletPointProps[];
  description?: string;
}

export const PricingTier: FC<PricingTierProps> = ({
  header,
  price,
  bps,
  description,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      padding="24px"
      backgroundColor="white.main"
      borderRadius="10px"
      _hover={{
        cursor: "pointer",
      }}
      position="relative"
      boxShadow={{
        base: "2px 2px 2px 5px rgba(0, 0, 0, 0.05)",
        md: "none",
      }}
    >
      {price > 0 && (
        <>
          {header}
          <PricingTag price={price} description={description || ""} />
        </>
      )}
      {price === 0 && (
        <Text
          display="inline"
          fontSize="56px"
          fontWeight={800}
          color="black.main
          "
          mb="24px"
        >
          Free
        </Text>
      )}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        initial="initial"
        animate="final"
        mb="24px"
      >
        {isMobile ? null : (
          <ExternalLink linkSuffix="signup">
            <Button width="250px" variant="primary" size="lg">
              <Text mr="12px">Get started</Text>
              <ArrowRight />
            </Button>
          </ExternalLink>
        )}
      </Box>
      <Flex flexDirection="column">
        {bps.map((bp, index) => (
          <BulletPoint
            fontWeight={500}
            strikeThrough={bp.strikeThrough}
            icon={bp.icon}
            text={bp.text}
            opacity={bp.strikeThrough ? "0.6" : "1"}
            fontSize="16px"
            textColor="black.main"
            key={index}
          />
        ))}
      </Flex>
    </Box>
  );
};
