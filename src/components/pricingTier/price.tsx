import { Box, Flex, Text } from "@chakra-ui/layout";
import { FC, useState } from "react";
import { Image } from "@chakra-ui/react";
import { tutoringCompanyInfo } from "../../shared/tutoringCompanies";
import DiscountPrice from "../../images/discountPrice.png";
import SpecialDiscountTag from "../../images/specialDiscountNotTilted.png";
import "./price.css";

export interface PricingTagProps {
  price: number;
  description: string;
}

export const PricingTag: FC<PricingTagProps> = ({ price, description }) => {
  //const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showDiscount, _setShowDiscount] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentCompany, _setCurrentCompany] = useState<tutoringCompanyInfo>();

  //useEffect(() => {
  //  if (location.pathname !== "/") {
  //    setShowDiscount(true);
  //    setCurrentCompany(
  //      tutoringCompaniesInfo[
  //        location.pathname.replace("/", "") as tutoringCompanyType
  //      ],
  //    );
  //  } else {
  //    setShowDiscount(false);
  //  }
  //}, [location.pathname]);

  return (
    <>
      {showDiscount ? (
        <>
          <Box display={{ base: "block", lg: "none" }} mb="5px">
            <Flex mt="10px" position="relative">
              <Text
                alignSelf="flex-start"
                fontSize="21px"
                fontWeight="700"
                color="black.main"
                opacity="0.4"
              >
                $
              </Text>
              <Flex alignItems="flex-start" position="relative">
                <Text
                  alignSelf="center"
                  fontSize="70px"
                  lineHeight="70px"
                  fontWeight="800"
                  color="black.main"
                >
                  16
                </Text>
                <Box position="absolute" bottom="0" right="-65%">
                  <Text
                    fontFamily="Inter"
                    display="inline"
                    alignSelf="flex-end"
                    fontSize="18px"
                    fontWeight="500"
                    color="black.main"
                    opacity="0.6"
                  >
                    /{description}
                  </Text>
                </Box>
              </Flex>
            </Flex>

            <Flex
              justifyContent="center"
              width="100%"
              filter="drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.25))"
              style={{
                //transform: "rotate(15.09deg)",
                WebkitTransformOrigin: "50%  51%;",
                backfaceVisibility: "hidden",
              }}
              zIndex="1000"
            >
              <Image src={SpecialDiscountTag} width="226px" height="auto" />
              <Text
                display="inline"
                position="absolute"
                top={
                  currentCompany?.name === "Bayside Academics" ? "12px" : "20px"
                } //27 to align with bottom 16 to be right
                left="50px"
                fontFamily="Poppins"
                fontSize="14px"
                lineHeight="16px"
                fontWeight="400"
                maxWidth="200px"
              >
                Special discount for <br /> {currentCompany?.name} students
              </Text>
            </Flex>
          </Box>
          <Flex
            display={{ base: "none", lg: "flex" }}
            mb="24px"
            mt="40px"
            position="relative"
          >
            <Text
              alignSelf="flex-start"
              fontSize="21px"
              fontWeight="700"
              color="black.main"
              opacity="0.4"
            >
              $
            </Text>
            <Flex alignItems="flex-start" position="relative">
              <Text
                alignSelf="center"
                fontSize="70px"
                lineHeight="70px"
                fontWeight="800"
                color="black.main"
                opacity="0.7"
              >
                {price}
              </Text>
              <Box
                position="absolute"
                top="0"
                left="-18px"
                right="-18px"
                bottom="0"
              >
                <Image src={DiscountPrice} width="100%" height="100%" />
              </Box>
              <Box position="absolute" bottom="0" right="-65%">
                <Text
                  fontFamily="Inter"
                  display="inline"
                  alignSelf="flex-end"
                  fontSize="18px"
                  fontWeight="500"
                  color="black.main"
                  opacity="0.6"
                >
                  /{description}
                </Text>
              </Box>
            </Flex>
            <Flex position="absolute" left="110px" bottom="0px">
              <Text
                display="inline"
                alignSelf="flex-start"
                fontSize="21px"
                fontWeight="700"
                color="black.main"
                opacity="0.4"
                mr="4px"
              >
                $
              </Text>
              <Text
                display="inline"
                alignSelf="center"
                fontSize="70px"
                lineHeight="70px"
                fontWeight="800"
                color="black.main"
                mb="20px"
              >
                16
              </Text>
            </Flex>
            <Box
              position="absolute"
              right="-160px"
              bottom="20px"
              className="priceContainer"
            >
              <Image
                className="image-shadow"
                src={SpecialDiscountTag}
                width="226px"
                height="auto"
              />
              <Text
                display="inline"
                position="absolute"
                top={
                  currentCompany?.name === "Bayside Academics" ? "12px" : "20px"
                } //27 to align with bottom 16 to be right
                left="35px"
                fontFamily="Poppins"
                fontSize="14px"
                lineHeight="16px"
                fontWeight="400"
              >
                Special discount for <br /> {currentCompany?.name} students
              </Text>
            </Box>
          </Flex>
        </>
      ) : (
        <Flex mb="24px" mt="10px">
          <Text
            display="inline"
            alignSelf="flex-start"
            fontSize="21px"
            fontWeight="700"
            color="black.main"
            opacity="0.4"
          >
            $
          </Text>
          <Text
            display="inline"
            alignSelf="center"
            fontSize="70px"
            lineHeight="70px"
            fontWeight="800"
            color="black.main"
          >
            {price}
          </Text>

          <Text
            fontFamily="Inter"
            display="inline"
            alignSelf="flex-end"
            fontSize="18px"
            fontWeight="500"
            color="black.main"
            opacity="0.6"
          >
            /{description}
          </Text>
        </Flex>
      )}
    </>
  );
};
