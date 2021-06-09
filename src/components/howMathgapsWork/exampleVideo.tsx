import { Box } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import Lottie from "react-lottie";
import { useWindowDimensions } from "../../hooks";

export interface ExampleVideoProps {
  animationData: any;
}

export const ExampleVideo: FC<ExampleVideoProps> = ({ animationData }) => {
  const { width } = useWindowDimensions();

  const [currentWidth, setCurrentWidth] = useState<number>(width);
  const [currenScreentWidth, setCurrentScreenWidth] = useState<number>(width);
  const [marginLeft, setMarginLeft] = useState<string>("");

  useEffect(() => {
    setCurrentScreenWidth(width);
    if (width < 1000) {
      setCurrentWidth(450);
      setMarginLeft("-20px");
    } else if (width < 1200) {
      setCurrentWidth(550);
      setMarginLeft("-20px");
    } else if (width < 700) {
      alert("a");
      setCurrentWidth(0);
      setMarginLeft("-20px");
    } else {
      setCurrentWidth(610);
      setMarginLeft("-50px");
    }
  }, [width]);

  return (
    <Box
      bg="transparent"
      borderRadius="20px"
      width="100%"
      height={{ base: "fit-content", lg: "fit-content" }}
      position="relative"
      mr={marginLeft}
    >
      {currenScreentWidth < 768 ? (
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
        />
      ) : (
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          width={currentWidth}
        />
      )}
    </Box>
  );
};

export default ExampleVideo;
