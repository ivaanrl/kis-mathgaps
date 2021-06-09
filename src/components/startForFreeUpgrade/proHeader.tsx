import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";
import Pro from "../../images/pro.png";
import { FC } from "react";

export interface ProHeaderProps {}

export const ProHeader: FC<ProHeaderProps> = () => {
  return (
    <Flex alignItems="center">
      <Image src={Pro} />
      <Text
        fontSize="24px"
        fontWeight={800}
        color="blue.main"
        ml="9px"
        lineHeight="32px"
      >
        Premium Access
      </Text>
    </Flex>
  );
};
