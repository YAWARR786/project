import React from 'react';
import { Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails, Link } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box textAlign="center" mb={4}>
           {/* Back to Home */}
    <div className="absolute top-6 right-6 z-10">
      <a
        href="/"
        className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition"
      >
        ← Back to Home
      </a>
    </div>
        <Typography variant="h3" component="h1" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Last updated: April 20, 2025
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="body1" paragraph>
          This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
        </Typography>
        <Typography variant="body1" paragraph>
          We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
        </Typography>
      </Box>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Interpretation and Definitions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1" gutterBottom>Interpretation</Typography>
          <Typography variant="body1" paragraph>
            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </Typography>
          
          <Typography variant="subtitle1" gutterBottom mt={2}>Definitions</Typography>
          <Typography variant="body1" paragraph>
            For the purposes of this Privacy Policy:
          </Typography>
          <ul>
            <li><Typography variant="body1"><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</Typography></li>
            <li><Typography variant="body1"><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party.</Typography></li>
            <li><Typography variant="body1"><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Rank N Convert.</Typography></li>
            <li><Typography variant="body1"><strong>Cookies</strong> are small files placed on Your device to track browsing history.</Typography></li>
            <li><Typography variant="body1"><strong>Country</strong> refers to: Uttar Pradesh, India</Typography></li>
            <li><Typography variant="body1"><strong>Device</strong> means any device that can access the Service.</Typography></li>
            <li><Typography variant="body1"><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</Typography></li>
            <li><Typography variant="body1"><strong>Service</strong> refers to the Website.</Typography></li>
            <li><Typography variant="body1"><strong>Website</strong> refers to Rank N Convert, accessible from https://ranknconvert.com/</Typography></li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Collecting and Using Your Personal Data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1" gutterBottom>Types of Data Collected</Typography>
          
          <Typography variant="subtitle2" gutterBottom>Personal Data</Typography>
          <Typography variant="body1" paragraph>
            While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
          </Typography>
          <ul>
            <li><Typography variant="body1">Email address</Typography></li>
            <li><Typography variant="body1">First name and last name</Typography></li>
            <li><Typography variant="body1">Phone number</Typography></li>
            <li><Typography variant="body1">Usage Data</Typography></li>
          </ul>
          
          <Typography variant="subtitle2" gutterBottom mt={2}>Usage Data</Typography>
          <Typography variant="body1" paragraph>
            Usage Data is collected automatically when using the Service and may include information such as Your Device's IP address, browser type, pages visited, time and date of visit, time spent on pages, and other diagnostic data.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Tracking Technologies and Cookies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            We use Cookies and similar tracking technologies to track activity on Our Service and store certain information. The technologies We use may include:
          </Typography>
          <ul>
            <li><Typography variant="body1"><strong>Cookies or Browser Cookies.</strong> A small file placed on Your Device. You can instruct Your browser to refuse all Cookies, but some parts of our Service may not function properly without them.</Typography></li>
            <li><Typography variant="body1"><strong>Web Beacons.</strong> Small electronic files that permit us to count users and gather website statistics.</Typography></li>
          </ul>
          <Typography variant="body1" paragraph mt={2}>
            We use both Session and Persistent Cookies for authentication, remembering preferences, and improving user experience.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Use of Your Personal Data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            The Company may use Personal Data for the following purposes:
          </Typography>
          <ul>
            <li><Typography variant="body1">To provide and maintain our Service</Typography></li>
            <li><Typography variant="body1">To manage Your Account</Typography></li>
            <li><Typography variant="body1">For contract performance</Typography></li>
            <li><Typography variant="body1">To contact You</Typography></li>
            <li><Typography variant="body1">To provide news and offers</Typography></li>
            <li><Typography variant="body1">For business transfers</Typography></li>
            <li><Typography variant="body1">For other business purposes</Typography></li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Retention and Security of Your Data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We implement security measures to protect Your data, but no method of transmission over the Internet is 100% secure.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Children's Privacy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Changes to this Privacy Policy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>Contact Us</Typography>
        <Typography variant="body1">
          If you have any questions about this Privacy Policy, You can contact us:
        </Typography>
        <Typography variant="body1">
          By email: <Link href="mailto:yawarkhanmbd789@gmail.com">yawarkhanmbd789@gmail.com</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;