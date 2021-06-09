import { Flex, Text } from "@chakra-ui/react";
import { FC, useState, useEffect } from "react";
import { useWindowDimensions } from "../../hooks";
import { BulletPoint } from "../shared/bulletPoint";

export interface TitleWBulletPointsProps {
  title: string;
  titleAccentColor: string;
  bulletPoints: string[];
}
/*

*/

export const TitleWBulletPoints: FC<TitleWBulletPointsProps> = ({
  title,
  bulletPoints,
  titleAccentColor,
}) => {
  const { width } = useWindowDimensions();

  const [currentWidth, setCurrentWidth] = useState<number>(0);
  useEffect(() => {
    setCurrentWidth(width);
  }, [width]);
  return (
    <Flex flexDirection="column">
      <Text
        fontSize="35px"
        fontWeight={700}
        color="black.main"
        lineHeight="37px"
        mb="25px"
        mr="20px"
      >
        <span
          style={{
            lineHeight: "40px",
            display: "inline",
            backgroundImage: `linear-gradient(to bottom, #F8F8F8 60%, ${titleAccentColor} 50%)`,
            backgroundSize: "100% 37px",
          }}
        >
          {title}
        </span>
      </Text>
      {bulletPoints.map((bulletPoint, index) => (
        <BulletPoint
          fontSize={currentWidth < 1000 ? "18px" : "20px"}
          opacity="1"
          textColor="#000"
          text={bulletPoint}
          key={bulletPoint}
        />
      ))}
    </Flex>
  );
};

export default TitleWBulletPoints;
