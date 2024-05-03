import React from "react"

import { Theme } from "@mui/material/styles"
import { Box, Container, Typography } from "@mui/material"

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
  root: (snap?: boolean) => ({
    marginTop: "auto",
    ...(snap && { scrollSnapAlign: "start" }),

    "@media print": {
      display: "none",
    },
  }),
  borderTop: {
    borderTop: (theme: Theme) => `1px solid ${theme.palette.divider}`,
  },
  content: {
    gap: 6,
    display: "flex",
    flexDirection: "column",
    padding: {
      xs: "40px 0 20px 0",
      md: "80px 0 40px 0",
    },
  },
  name: {
    fontWeight: 700,
    fontSize: "34px",
    lineHeight: "1em",
  },
  role: {
    fontWeight: 500,
    fontSize: "24px",
    color: "divider",
    lineHeight: "1.083em",
  },
  getInTouch: {
    marginBottom: {
      xs: "32px",
      md: "20px",
    },
    fontSize: {
      xs: "32px",
      md: "52px",
    },
  },
  contacts: {
    gap: 4,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
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
  copyright: {
    width: "100%",
    fontWeight: 400,
    fontSize: "16px",
    padding: "16px 0",
    textAlign: "center",
    lineHeight: "1.667em",
  },
}

export const Footer = ({
  maxWidth,
  snap = false,
}: {
  snap?: boolean
  maxWidth: Width
}) => {
  return (
    <Box sx={() => styles.root(snap)} component="footer">
      <Box sx={styles.borderTop}>
        <Container maxWidth={maxWidth}>
          <Box sx={styles.content}>
            <Box>
              <Typography variant="h6" gutterBottom>
                <Link
                  sx={styles.name}
                  to={`https://www.linkedin.com/in/${LinkedIn}`}
                >
                  {Name}
                </Link>
              </Typography>
              <Typography variant="body2" sx={styles.role}>
                {Experiences[0].role} at {Experiences[0].company}
              </Typography>
            </Box>

            <Box>
              <Typography variant="h3" sx={styles.getInTouch}>
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

                <Box>
                  <Typography variant="body2" sx={styles.contactTitle}>
                    LinkedIn:
                  </Typography>

                  <LinkArrow
                    target="_blank"
                    rel="noreferrer"
                    to={`https://www.linkedin.com/in/${LinkedIn}`}
                  >
                    linkedin.com/in/{LinkedIn}
                  </LinkArrow>
                </Box>

                <Box>
                  <Typography variant="body2" sx={styles.contactTitle}>
                    GitHub:
                  </Typography>

                  <LinkArrow
                    to={`https://github.com/${GitHub}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/{GitHub}
                  </LinkArrow>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={styles.copyright}>
        <Container maxWidth={maxWidth}>
          Crafted by yours truly using Next.js and Material UI, then launched
          with Vercel. © {new Date().getFullYear()}
        </Container>
      </Box>
    </Box>
  )
}
