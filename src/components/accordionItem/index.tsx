import { FC } from "react";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem as ChakraAccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

export interface AccordionItemProps {
  title: string;
  description: string;
}

export const AccordionItem: FC<AccordionItemProps> = ({
  title,
  description,
}) => {
  //const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <ChakraAccordionItem
      border="none"
      initial="notHovered"
      animate="hovered"
      borderRadius="10px"
      onClick={(e) => e.preventDefault()}
    >
      <AccordionButton
        onClick={(e) => e.preventDefault()}
        fontSize="20px"
        backgroundColor="transparent"
        _focus={{}}
        padding="24px"
        _hover={{
          //color: "blue.main",
          cursor: "default",
        }}
        fontWeight="600"
        color="blue.dark"
      >
        <Box flex="1" textAlign="left">
          {title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel color="blue.dark" fontSize="16px" px="24px">
        {description}
      </AccordionPanel>
    </ChakraAccordionItem>
  );
};
