import { Box, Flex, Text } from "@chakra-ui/layout";
import { forwardRef } from "react";
import { Image } from "@chakra-ui/react";

export interface NodeProps {
  icon: string;
  title: string;
  description: string;
}

export const Node = forwardRef<HTMLDivElement, NodeProps>(
  ({ icon, title, description }, ref: any) => {
    return (
      <Box ref={ref} display="flex" alignItems="center">
        <Image height={"auto"} width={"54px"} src={icon} />
        <Flex
          maxWidth="440px"
          flexDirection="column"
          alignItems="flex-start"
          ml="25px"
        >
          <Text
            fontSize={{ base: "21px", xl: "24px" }}
            fontWeight={700}
            color="black.main"
            mb="4px"
          >
            {title}
          </Text>
          <Text
            fontSize="18px"
            fontFamily="Inter"
            color="black.main"
            opacity="0.6"
          >
            {description}
          </Text>
        </Flex>
      </Box>
    );
  },
);

export default Node;
