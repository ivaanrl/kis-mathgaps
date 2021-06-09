import { Flex, Text, Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { ReactComponent as Tick } from "../../svgs/tick.svg";

export interface BulletPointProps {
  text: string;
  icon?: ReactNode;
  fontSize?: string;
  textColor?: string;
  opacity?: string;
  strikeThrough?: boolean;
  fontWeight?: number;
}

export const BulletPoint: FC<BulletPointProps> = ({
  text,
  icon = <Tick />,
  fontSize = "17px",
  textColor = "blue.dark",
  opacity = "0.6",
  strikeThrough = false,
  fontWeight = 400,
}) => {
  return (
    <Flex
      alignItems={{ base: "flex-start", md: "center" }}
      mb={{ base: "10px", lg: 0 }}
      maxWidth="90vw"
    >
      <Box mt={{ base: "3px", lg: 0 }}>{icon}</Box>
      <Text
        fontWeight={fontWeight}
        fontFamily="Inter"
        textDecoration={strikeThrough ? "line-through" : ""}
        fontSize={fontSize}
        lineHeight={{ base: "30px", lg: "40px" }}
        color={textColor}
        opacity={opacity}
        ml="16px"
      >
        {text}
      </Text>
    </Flex>
  );
};
