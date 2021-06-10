import { FC } from "react";

export interface externalLinkProps {
  linkSuffix?: string;
}

const normalLink = "https://app.mathgaps.com/#/";

export const ExternalLink: FC<externalLinkProps> = ({
  linkSuffix,
  children,
}) => {
  //const location = useLocation();
  //const [link, setLink] = useState<string>();
  //
  //useEffect(() => {
  //  const currentPathname = location.pathname;
  //
  //  if (homeRoutes.includes(currentPathname)) {
  //    if (currentPathname === "/") {
  //      setLink(normalLink + linkSuffix);
  //    } else {
  //      const currentCompanyName = currentPathname.replace(
  //        "/",
  //        "",
  //      ) as tutoringCompanyType;
  //
  //      const currentCompany = tutoringCompaniesInfo[currentCompanyName];
  //
  //      setLink(currentCompany.affiliateLink);
  //    }
  //  } else {
  //    setLink("https://app.mathgaps.com/#/" + linkSuffix);
  //  }
  //}, [linkSuffix, location.pathname]);

  return <a href={"https://kisacademics.mathgaps.com"}>{children}</a>;
};
