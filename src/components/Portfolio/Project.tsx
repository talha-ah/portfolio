import React from "react"

import { Box, Theme, Typography } from "@mui/material"

import { Link } from "@ui/Link"
import { ProjectType } from "./types"

const styles = {
  root: {
    height: "100%",
    display: "flex",
    overflow: "hidden",
    padding: "2rem 1.75rem",
    flexDirection: "column",
    border: "1px solid transparent",
    backgroundColor: "background.default",
    boxShadow: "0 10px 30px -15px rgba(2, 12, 27, 0.7)",
    borderRadius: (theme: Theme) => theme.shape.borderRadius,
    transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",

    "&:hover": {
      transform: "translateY(-2px)",
      border: (theme: Theme) => `1px solid ${theme.palette.primary.main}`,

      "& h3": {
        color: "primary.main",
      },
    },
  },
  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "20px",
    fontWeight: "500",
    lineHeight: "1.1em",
    margin: "0px 0px 10px",
  },
  role: {
    fontSize: "14px",
    marginBottom: "24px",
    lineHeight: "1.785em",
    color: "text.secondary",
  },
  skills: {
    width: "100%",
    marginTop: "auto",
  },
  skill: {
    fontSize: "12px",
    fontWeight: "400",
    marginRight: "15px",
    lineHeight: "1.75em",
    color: "text.secondary",
    display: "inline-block",
  },
}

export const Project = ({ project }: { project: ProjectType }) => {
  return (
    <Link to={`/projects/${project.slug}`}>
      <Box sx={styles.root}>
        <Typography variant="h3" sx={styles.title}>
          {project.title}
        </Typography>

        <Typography variant="body1" sx={styles.role}>
          {project.role}
        </Typography>

        <Box sx={styles.skills}>
          {project.skills.split(",").map((item) => (
            <Typography key={item} variant="caption" sx={styles.skill}>
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
    </Link>
  )
}
