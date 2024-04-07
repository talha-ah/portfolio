import React from "react"

import { Theme } from "@mui/material/styles"
import { Box, Container, Typography } from "@mui/material"
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material"

import { Width } from "@utils/types"
import { Link, LinkArrow } from "@ui/Link"
import {
  Name,
  Phone,
  Email,
  GitHub,
  LinkedIn,
  Experiences,
} from "@components/Portfolio/data"

const styles = {
  root: {
    width: "100%",
    marginTop: "auto",
    borderTop: (theme: Theme) => `1px solid ${theme.palette.divider}`,

    "@media print": {
      display: "none",
    },
  },
  content: {
    gap: 8,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    padding: {
      xs: "80px 0",
      md: "120px 0",
    },
  },
  name: {
    fontWeight: 700,
    fontSize: "34px",
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
    flexDirection: {
      xs: "column",
      lg: "row",
    },
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
  copyright: (theme: Theme) => ({
    gap: 2,
    display: "flex",
    fontWeight: 400,
    fontSize: "16px",
    padding: "32px 0",
    textAlign: "center",
    lineHeight: "1.667em",
    justifyContent: "center",
    flexDirection: { xs: "column", md: "row" },
    borderTop: `1px solid ${theme.palette.divider}`,
  }),
}

export const Footer = ({ maxWidth }: { maxWidth: Width }) => {
  return (
    <Box sx={styles.root} component="footer">
      <Container maxWidth={maxWidth}>
        <Box sx={styles.content}>
          <Box>
            <h6>
              <Link
                sx={styles.name}
                to={`https://www.linkedin.com/in/${LinkedIn}`}
              >
                {Name}
              </Link>
            </h6>
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
            {/* <LinkArrow
              to="/contact"
              arrowColor="primary"
              sx={styles.getInTouch}
            >
              Get in touch
            </LinkArrow> */}

            <Typography
              variant="body2"
              fontWeight="bold"
              sx={styles.getInTouch}
            >
              Get in touch
            </Typography>

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
        <Box sx={styles.copyright}>
          Crafted by yours truly using Next.js and Material UI, then launched
          with Vercel. © {new Date().getFullYear()}
        </Box>
      </Container>
    </Box>
  )
}
