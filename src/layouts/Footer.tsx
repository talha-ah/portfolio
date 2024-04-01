import React from "react"

import { Theme } from "@mui/material/styles"
import { Box, Container, Typography } from "@mui/material"
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material"

import { Link, LinkArrow } from "@ui/Link"
import { Width, Link as LinkType } from "@utils/types"
import {
  Name,
  Phone,
  Email,
  GitHub,
  LinkedIn,
  Experiences,
} from "@components/Resume/data"

const styles = {
  root: {
    width: "100%",
    borderTop: (theme: Theme) => `1px solid ${theme.palette.divider}`,

    "@media print": {
      display: "none",
    },
  },
  top: {
    gap: 8,
    display: "flex",
    padding: {
      xs: "80px 0",
      md: "120px 0",
    },
    justifyContent: "space-between",
    flexDirection: { xs: "column", md: "row" },
  },
  name: {
    fontWeight: 700,
    fontSize: "34px",
    marginBottom: "8px",
    lineHeight: "1.441em",
  },
  role: {
    fontWeight: 500,
    fontSize: "24px",
    color: "divider",
    lineHeight: "1.083em",
  },
  socials: {
    gap: 2,
    marginTop: 4,
    display: "flex",
  },
  getInTouch: {
    marginBottom: "40px",
    lineHeight: "1.231em",
    fontSize: {
      xs: "32px",
      md: "52px",
    },
  },
  contacts: {
    gap: 6,
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
  },
  contactTitle: {
    fontWeight: 700,
    fontSize: "16px",
    color: "divider",
    marginBottom: "8px",
    lineHeight: "1.125em",
    letterSpacing: ".06em",
    textTransform: "uppercase",
  },
  bottom: (theme: Theme) => ({
    gap: 2,
    display: "flex",
    padding: "32px 0",
    justifyContent: "space-between",
    flexDirection: { xs: "column", md: "row" },
    borderTop: `1px solid ${theme.palette.divider}`,
  }),
  links: {
    gap: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    fontSize: "20px",
    "&:hover": {
      color: "primary.main",
    },
  },
  copyright: {
    display: "flex",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "1.667em",
    justifyContent: "center",
  },
}

export const Footer = ({
  links,
  maxWidth,
}: {
  maxWidth: Width
  links: LinkType[]
}) => {
  return (
    <Box sx={styles.root} component="footer">
      <Container maxWidth={maxWidth}>
        <Box sx={styles.top}>
          <Box>
            <Typography variant="h6" sx={styles.name}>
              {Name}
            </Typography>
            <Typography variant="body2" sx={styles.role}>
              {Experiences[0].role} at {Experiences[0].company}
            </Typography>
            <Box sx={styles.socials}>
              <Link to={`tel:${Phone}`}>
                <PhoneIcon sx={{ fontSize: 24 }} />
              </Link>
              <Link to={`mailto:${Email}`}>
                <EmailIcon sx={{ fontSize: 24 }} />
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                to={`https://github.com/${GitHub}`}
              >
                <GitHubIcon sx={{ fontSize: 24 }} />
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                to={`https://www.linkedin.com/in/${LinkedIn}`}
              >
                <LinkedInIcon sx={{ fontSize: 24 }} />
              </Link>
            </Box>
          </Box>
          <Box>
            <LinkArrow
              to="/contact"
              arrowColor="primary"
              sx={styles.getInTouch}
            >
              Get in touch{" "}
            </LinkArrow>

            <Box sx={styles.contacts}>
              <Box>
                <Typography variant="body2" sx={styles.contactTitle}>
                  Email me:
                </Typography>

                <LinkArrow to={`mailto:${Email}`}>{Email}</LinkArrow>
              </Box>
              <Box>
                <Typography variant="body2" sx={styles.contactTitle}>
                  Call me:
                </Typography>

                <LinkArrow to={`tel:${Phone}`}>{Phone}</LinkArrow>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.bottom}>
          <Box sx={styles.links}>
            {links.map(({ label, to }: LinkType) => (
              <Link key={to} sx={styles.link} to={to as string}>
                {label}
              </Link>
            ))}
          </Box>
          <Box sx={styles.copyright}>Copyright © {Name}</Box>
        </Box>
      </Container>
    </Box>
  )
}
