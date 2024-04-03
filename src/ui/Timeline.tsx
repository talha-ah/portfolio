import * as React from "react"

import { Typography, Box } from "@mui/material"
import {
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
  Timeline as MTimeline,
} from "@mui/lab"

export const Timeline = ({ options }: { options: any[] }) => {
  return (
    <MTimeline position="alternate" dir="row">
      {options.map((option, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot />
            {options.length !== index + 1 && <TimelineConnector />}
          </TimelineSeparator>

          <TimelineContent>
            <Box
              gap={1}
              display="flex"
              alignItems="center"
              justifyContent={index % 2 === 0 ? "start" : "end"}
            >
              {option?.render || (
                <Typography variant="subtitle1" component="span">
                  {option.value}
                </Typography>
              )}
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
    </MTimeline>
  )
}
