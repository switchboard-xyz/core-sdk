import React from "react";
import { Grid, IconButton, Typography, styled } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useColorMode } from "@docusaurus/theme-common";
import Link from "@docusaurus/Link";

// import builder from "../../static/img/products-icons/builder.png";
// import explorer from "../../static/img/products-icons/explorer.png";
// import feeds from "../../static/img/products-icons/feeds.png";
// import functions from "../../static/img/products-icons/functions.png";
// import oracles from "../../static/img/products-icons/oracles.png";
// import randomness from "../../static/img/products-icons/randomness.png";
// import scheduler from "../../static/img/products-icons/scheduler.png";
// import secrets from "../../static/img/products-icons/secrets.png";

interface Card {
  title: string;
  description: string;
  icon: string;
  link: string;
}
const cards: Card[] = [
  {
    title: "Data Feeds",
    description:
      "3-step process to build streams that fetch data from both public and private sources.",
    icon: "feeds.png",
    link: "/arch/feeds",
  },
  {
    title: "Functions",
    description:
      "Create serverless, single-purpose functions that respond to events.",
    icon: "functions.png",
    link: "/functions",
  },
  {
    title: "Secrets",
    description: "Access data or execute confidential computations in a TEE.",
    icon: "secrets.png",
    link: "/secrets",
  },
  {
    title: "Randomness",
    description:
      "Request verifiable on-chain randomness generated from Switchboard’s TEE oracles.",
    icon: "randomness.png",
    link: "/arch/randomness",
  },
  {
    title: "Scheduler",
    description:
      "2-step process to automate smart contracts in a trusted execution environment.",
    icon: "scheduler.png",
    link: "",
  },
  {
    title: "Oracle-as-a-service",
    description:
      "Custom node solutions Switchboard manages so you can focus on building.",
    icon: "oracles.png",
    link: "",
  },
];

const appCards: Card[] = [
  {
    title: "Explorer",
    description: "Explore feeds and functions across chains.",
    icon: "explorer.png",
    link: "",
  },
  {
    title: "Builder",
    description:
      "Build in a frictionless and permissionless manner using our Builder.",
    icon: "builder.png",
    link: "",
  },
];

const StyledCard = styled("div")<{ dark: number }>(({ dark }) => ({
  display: "flex",
  width: "100%",
  height: "100%",
  padding: "32px",
  gap: "32px",
  border: "solid 1px #E8E8E8",
  borderRadius: "16px",
  flexDirection: "column",
  boxShadow: "0 11px 15px 0 rgba(164, 164, 164, 0.21)",
}));

const StyledIconContainer = styled("div")<{ dark?: number }>(({ dark }) => ({
  minHeight: 36,
  minWidth: 36,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  backgroundColor: dark ? "#1B1B1D" : "#F9FBFD",
  border: `solid 1px ${dark ? "#FFFFFF26" : "#EAEEF3"}`,
  marginRight: "16px",
}));

const SectionTypography = styled(Typography)({
  fontSize: 36,
  fontWeight: 600,
  fontFamily: "Source Sans Pro",
});

const GridItem = (props: { card: Card }) => {
  const { card } = props;
  const { colorMode } = useColorMode();

  return (
    <Grid item key={card.title} md={4} sm={6}>
      <StyledCard dark={Number(colorMode === "dark")}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <StyledIconContainer dark={Number(colorMode === "dark")}>
            <img
              src={`/img/products-icons/${card.icon}`}
              height={20}
              width={20}
            />
          </StyledIconContainer>
          <SectionTypography sx={{ fontSize: 24 }}>
            {card.title}
          </SectionTypography>
          <Link to={card.link} style={{ marginLeft: "auto" }}>
            <IconButton sx={{ color: "#4C6FFF" }}>
              <ArrowForwardIcon />
            </IconButton>
          </Link>
        </div>
        <Typography sx={{ fontSize: "18px", fontFamily: "Source Sans Pro" }}>
          {card.description}
        </Typography>
      </StyledCard>
    </Grid>
  );
};

const ProductGuidesGrid = () => {
  return (
    <div style={{ padding: "16px 84px" }}>
      <SectionTypography>Product Guides</SectionTypography>
      <Grid container spacing={2} sx={{ margin: "0px 0px 16px" }}>
        {cards.map((card) => (
          <GridItem card={card} />
        ))}
      </Grid>
      <SectionTypography>Switchboard App</SectionTypography>
      <Grid container spacing={2} sx={{ margin: "0px 0px 16px" }}>
        {appCards.map((appCard) => (
          <GridItem card={appCard} />
        ))}
      </Grid>
    </div>
  );
};

export default ProductGuidesGrid;
