import {Box, Typography} from "@mui/material";
import React from "react";
import {PreviewCard} from "./PreviewCard";

const MobilePreview: React.FunctionComponent = () => (
    <div
        style={{
            display: "flex",
            border: "12px solid rgba(0,0,0,0.1)",
            borderRadius: 40,
            maxWidth: (390/1.25),
            maxHeight: (844/1.25),
            backgroundColor: "#DDD",
            overflow: "hidden"
        }}
    >
        <Box sx={{ backgroundColor: "#F0F0F0", padding: 2, gap: 2, paddingTop:3}}>
            <Typography variant="h5">Colored Title</Typography>
            <Typography variant="h5">Uncolored Title</Typography>
            <Typography variant="subtitle1">subtitle</Typography>
            <PreviewCard/>
            <PreviewCard/>
            <PreviewCard/>
        </Box>
    </div>
);

export default MobilePreview;
