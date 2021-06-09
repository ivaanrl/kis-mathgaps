import { Box } from "@chakra-ui/layout";
import { FC } from "react";

export interface SpacerProps {
  vertical?: boolean;
  color?: string;
}

export const Spacer: FC<SpacerProps> = ({
  vertical = false,
  color = "rgba(50,50,50,0.2)",
}) => {
  if (vertical)
    return (
      <Box
        width="1px"
        height="100%"
        backgroundImage={`linear-gradient(${color} 33%, rgba(255,255,255,0) 0%)`}
        backgroundPosition="right"
        backgroundSize="1px 20px"
        backgroundRepeat="repeat-y"
      />
    );

  return (
    <Box
      height="1px"
      width="100%"
      backgroundImage={`linear-gradient(to right, ${color} 33%, rgba(255,255,255,0) 0%)`}
      backgroundPosition="bottom"
      backgroundSize="20px 1px"
      backgroundRepeat="repeat-x"
    />
  );
};
