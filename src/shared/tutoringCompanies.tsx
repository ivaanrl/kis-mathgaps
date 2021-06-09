import KISLogo from "../images/tutoringCompanies/KISAcademics.png";
import StudyMonkeyLogo from "../images/tutoringCompanies/StudyMonkey.png";
import TutorSpaceLogo from "../images/tutoringCompanies/TutorSpace.png";
import BaysideAcademicsLogo from "../images/tutoringCompanies/BaysideAcademics.png";
import C2ATutoringLogo from "../images/tutoringCompanies/c2a.png";
import FirstEducationLogo from "../images/tutoringCompanies/firstEducation.png";

export type tutoringCompanyType =
  | "kisacademics"
  | "studymonkey"
  | "baysideacademics"
  | "tutorspace"
  | "c2a";

export const tutoringCompanies = [
  "kisacademics",
  "studymonkey",
  "baysideacademics",
  "tutorspace",
  "c2a",
];

export interface tutoringCompaniesInfoProps {
  [name: string]: tutoringCompanyInfo;
}
export interface tutoringCompanyInfo {
  name: string;
  logo: string;
  logoWidth: string;
  affiliateLink: string;
}

export const tutoringCompaniesInfo: tutoringCompaniesInfoProps = {
  kisacademics: {
    name: "KIS Academics",
    logo: KISLogo,
    logoWidth: "150px",
    affiliateLink: "https://kisacademics.mathgaps.com",
  },
  studymonkey: {
    name: "Study Monkey",
    logo: StudyMonkeyLogo,
    logoWidth: "168px",
    affiliateLink: "https://studymonkey.mathgaps.com",
  },
  baysideacademics: {
    name: "Bayside Academics",
    logo: BaysideAcademicsLogo,
    logoWidth: "149px",
    affiliateLink: "https://baysideacademics.mathgaps.com",
  },
  tutorspace: {
    name: "TutorSpace",
    logo: TutorSpaceLogo,
    logoWidth: "97px",
    affiliateLink: "https://tutorspace.mathgaps.com",
  },
  c2atutoring: {
    name: "C2A Tutoring",
    logo: C2ATutoringLogo,
    logoWidth: "70px",
    affiliateLink: "https://c2a.mathgaps.com",
  },
  firsteducation: {
    name: "First Education",
    logo: FirstEducationLogo,
    logoWidth: "70px",
    affiliateLink: "https://firsteducation.mathgaps.com",
  },
};
