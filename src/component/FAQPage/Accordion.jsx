import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const ACcordion = () => {
    const [expanded, setExpanded] = useState("panel1");
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className='flex flex-col gap-3'>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0,fontWeight:500 }}>
                        General settings
                    </Typography>
                    <Typography sx={{ color: 'text.secondary',fontWeight:500 }}>I am an accordion</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontWeight:500}}>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. 
                        Aliquam eget maximus est, id dignissim quam.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0,fontWeight:500 }}>
                        Users
                    </Typography>
                    <Typography sx={{ color: 'text.secondary',fontWeight:500 }}>You are currently not an owner</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontWeight:500}}>
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, 
                        varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0,fontWeight:500 }}>
                        Advanced settings
                    </Typography>
                    <Typography sx={{ color: 'text.secondary',fontWeight:500 }}>
                        Filtering has been entirely disabled for whole web server
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontWeight:500}}>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. 
                        Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0,fontWeight:500 }}>
                        Personal data
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontWeight:500}}>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. 
                        Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5bh-content"
                id="panel5bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0,fontWeight:500 }}>
                        General settings
                    </Typography>
                    <Typography sx={{ color: 'text.secondary',fontWeight:500 }}>I am an accordion</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontWeight:500}}>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. 
                        Aliquam eget maximus est, id dignissim quam.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel6bh-content"
                id="panel6bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0,fontWeight:500 }}>
                        Users
                    </Typography>
                    <Typography sx={{ color: 'text.secondary',fontWeight:500 }}>You are currently not an owner</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontWeight:500}}>
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, 
                        varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel7bh-content"
                id="panel7bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0,fontWeight:500 }}>
                        Advanced settings
                    </Typography>
                    <Typography sx={{ color: 'text.secondary',fontWeight:500 }}>
                        Filtering has been entirely disabled for whole web server
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontWeight:500}}>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. 
                        Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default ACcordion;