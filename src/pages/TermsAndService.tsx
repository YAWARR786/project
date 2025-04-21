import React from 'react';
import { Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails, Link } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TermsOfService = () => {
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
          Terms of Service
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Last updated: April 20, 2025
        </Typography>
      </Box>

      <Typography variant="body1" paragraph>
        Welcome to Rank N Convert! These Terms of Service ("Terms") govern your use of our website located at https://ranknconvert.com/ (the "Service") operated by Rank N Convert ("us", "we", or "our").
      </Typography>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">1. Acceptance of Terms</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">2. Accounts</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            When you create an account with us, you must provide accurate and complete information. You are solely responsible for the activity that occurs on your account and for keeping your password secure.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">3. Intellectual Property</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            The Service and its original content, features, and functionality are and will remain the exclusive property of Rank N Convert and its licensors. Our trademarks and trade dress may not be used without our prior written consent.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">4. User Conduct</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            You agree not to:
          </Typography>
          <ul>
            <li><Typography variant="body1">Use the Service for any illegal purpose</Typography></li>
            <li><Typography variant="body1">Attempt to gain unauthorized access to our systems</Typography></li>
            <li><Typography variant="body1">Interfere with or disrupt the Service</Typography></li>
            <li><Typography variant="body1">Upload or transmit viruses or any harmful code</Typography></li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">5. Termination</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">6. Limitation of Liability</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            In no event shall Rank N Convert, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of the Service.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">7. Governing Law</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            These Terms shall be governed and construed in accordance with the laws of Uttar Pradesh, India, without regard to its conflict of law provisions.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">8. Changes to Terms</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>Contact Us</Typography>
        <Typography variant="body1">
          If you have any questions about these Terms, please contact us:
        </Typography>
        <Typography variant="body1">
          By email: <Link href="mailto:yawarkhanmbd789@gmail.com">yawarkhanmbd789@gmail.com</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsOfService;