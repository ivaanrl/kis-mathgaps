import { Box } from "@chakra-ui/layout";
import { Accordion, Flex, Text } from "@chakra-ui/react";
import { AccordionItem } from "../accordionItem";
import { ReactComponent as TakingNotes } from "../svgs/taking_notes.svg";

export const FAQ = () => {
  return (
    <Box pt={{ base: "40px", md: "60px" }} pb="50px">
      <Box maxWidth="900px" margin="auto">
        <Flex
          justifyContent="center"
          maxHeight="300px"
          height="300px"
          mb="30px"
        >
          <TakingNotes />
        </Flex>
        <Text
          mx="20px"
          color="blue.dark"
          fontSize="36px"
          fontWeight="600"
          paddingBottom="10px"
          borderBottom="1px solid"
          borderColor="#e2e8f0"
        >
          Frequently Asked Questions
        </Text>
        <Accordion
          allowToggle={false}
          allowMultiple
          defaultIndex={[0, 1, 2, 3, 4, 5]}
        >
          <AccordionItem
            title="Who can complete a MathGaps assessment?"
            description="MathGaps is currently suitable for students from years 8-10. It will soon be available to students from years 3-11."
          />
          <AccordionItem
            title="How long does an assessment take to complete?"
            description="The average length is 15 minutes; however, this can vary across students and topics."
          />
          <AccordionItem
            title="How will my child fill their gaps?"
            description="After completing the test, your child is generated a personalised learning program that provides the optimal order to fill any gaps. Your child may use online resources or receive support from a tutor to learn this material."
          />
          <AccordionItem
            title="How do I pay for premium access? "
            description="Once you have logged into the application you will be able to purchase premium access. Payment is securely completed using Stripe."
          />
          <AccordionItem
            title="Do I need to sign up different accounts for each of my children?"
            description="For the time being, each student will require their own MathGaps account. However, we are developing the technology to allow multiple children to be linked under a parent account. We will email you when this feature becomes available."
          />
          <AccordionItem
            title="How are the gaps identified?"
            description="MathGaps uses a unique testing algorithm to identify the gaps in a student’s knowledge. This algorithm collects and processes large volumes of data to identify every gap without needing to test every skill independently."
          />
        </Accordion>
      </Box>
    </Box>
  );
};
