import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import TitleWBulletPoints from "./titleWithBPs";
import ExampleVideo from "./exampleVideo";
import animationData3 from "../../lottie/third.json";
import animationData2 from "../../lottie/second.json";
import animationData1 from "../../lottie/first.json";

export interface ExampleAndBpProps {
  bp: ReactNode;
  example: ReactNode;
}

export const ExampleAndBp: FC<ExampleAndBpProps> = ({ bp, example }) => {
  return (
    <Box
      maxHeight={{ lg: "309px" }}
      ml={{ base: 0, lg: "20px" }}
      maxWidth="1000px"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems={{ base: "center", xl: "flex-end" }}
      justifyContent="space-between"
      width="100%"
      mx="auto"
      minHeight={{ base: "none", md: "300px" }}
    >
      <Box
        width={{ base: "100%", lg: "50%" }}
        mb={{ base: "40px", lg: "20px" }}
      >
        {bp}
      </Box>
      <Box
        width={{ base: "100%", lg: "50%" }}
        maxWidth="700px"
        height="fit-content"
      >
        {example}
      </Box>
    </Box>
  );
};

export default ExampleAndBp;

export interface PageContentSwitcherProps {
  selected: number;
}

export const PageContentSwitcher: FC<PageContentSwitcherProps> = ({
  selected,
}) => {
  return (
    <Box mt={{ md: "20px", lg: "60px" }}>
      {selected === 0 && (
        <ExampleAndBp
          key={selected + 0}
          bp={
            <TitleWBulletPoints
              titleAccentColor="rgba(136,92,252,0.2)"
              title="Rapidly find the gaps impacting your learning"
              bulletPoints={[
                "Choose any topic to test",
                "Find every key gap in that topic",
                "Powered by a diagnostic testing algorithm",
                "Take your first assessment for free",
              ]}
            />
          }
          example={<ExampleVideo animationData={animationData1} />}
        />
      )}
      {selected === 1 && (
        <ExampleAndBp
          key={selected + 1}
          bp={
            <TitleWBulletPoints
              titleAccentColor="rgba(155,193,48,0.2)"
              title="Fill those gaps using our smart learning programs"
              bulletPoints={[
                "Personalised to your exact needs",
                "Learn in the most optimal order",
                "Prioritise topics being learnt in class",
                "Access hundreds of practice questions",
              ]}
            />
          }
          example={<ExampleVideo animationData={animationData2} />}
        />
      )}
      {selected === 2 && (
        <ExampleAndBp
          key={selected + 2}
          bp={
            <TitleWBulletPoints
              titleAccentColor="rgba(255,191,0,0.2)"
              title="Watch as your knowledge rockets"
              bulletPoints={[
                "Complete data at your fingertips",
                "Reports update with each gap filled",
                "Graphs visualise strengths and weaknesses",
                "Show to parents, teachers and tutors",
              ]}
            />
          }
          example={<ExampleVideo animationData={animationData3} />}
        />
      )}
    </Box>
  );
};

export const MobilePageContent: FC<PageContentSwitcherProps> = ({
  selected,
}) => {
  return (
    <Box>
      <ExampleAndBp
        key={selected + 3}
        bp={
          <TitleWBulletPoints
            titleAccentColor="rgba(136,92,252,0.2)"
            title="Rapidly find the gaps impacting your learning"
            bulletPoints={[
              "Choose any topic to test",
              "Find every key gap in that topic",
              "Powered by a diagnostic testing algorithm",
              "Take your first assessment for free",
            ]}
          />
        }
        example={<ExampleVideo animationData={animationData1} />}
      />
      <Box my="60px">
        <ExampleAndBp
          key={selected + 4}
          bp={
            <TitleWBulletPoints
              titleAccentColor="rgba(155,193,48,0.2)"
              title="Fill those gaps using our smart learning programs"
              bulletPoints={[
                "Personalised to your exact needs",
                "Learn in the most optimal order",
                "Prioritise topics being learnt in class",
                "Access hundreds of practice questions",
              ]}
            />
          }
          example={<ExampleVideo animationData={animationData2} />}
        />
      </Box>
      <ExampleAndBp
        key={selected + 5}
        bp={
          <TitleWBulletPoints
            titleAccentColor="rgba(255,191,0,0.2)"
            title="Watch as your knowledge rockets"
            bulletPoints={[
              "Complete data at your fingertips",
              "Reports update with each gap filled",
              "Graphs visualise strengths and weaknesses",
              "Show to parents, teachers and tutors",
            ]}
          />
        }
        example={<ExampleVideo animationData={animationData3} />}
      />
    </Box>
  );
};
