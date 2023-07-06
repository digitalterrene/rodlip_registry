"use client";
import React from "react";
import tnc from "../../assets/pages/registries/banner.jpg";
import Image from "next/image";
import { List, ListItem, Typography } from "@material-tailwind/react";
export default function TermsAndConditions() {
  return (
    <div className="p-16">
      <div className="  lg:py-12">
        <div className="mb-12 overflow-hidden">
          <Image
            alt="terms and conditions"
            className="h-[32rem]  rounded-2xl  w-full object-cover object-center"
            src={tnc}
          />
        </div>
        <div className="px-2 lg:px-32">
          <Typography variant="h2" color="blue-gray" className="mb-2">
            Website Terms and Conditions
          </Typography>
          <Typography color="gray" className="font-normal">
            These terms and conditions ("Terms") govern your use of Rodlip.org
            and any related services provided by Rodlip Organization. By
            accessing or using the Website, you agree to be bound by these
            Terms. If you do not agree with these Terms, please refrain from
            using the Website.
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-2 mt-8">
            Use of the Website
          </Typography>
          <List>
            <ListItem>
              You must be at least 18 years old to use the Website.
            </ListItem>
            <ListItem>
              You agree to use the Website only for lawful purposes and in
              compliance with all applicable laws and regulations.
            </ListItem>
            <ListItem>
              The Company reserves the right to modify, suspend, or discontinue
              the Website, or any part of it, at any time without prior notice.
            </ListItem>
          </List>
          <Typography variant="h2" color="blue-gray" className="mb-2 mt-8">
            Intellectual Property
          </Typography>
          <List>
            <ListItem>
              The Website and its original content, features, and functionality
              are owned by the Company and are protected by intellectual
              property laws.
            </ListItem>
            <ListItem>
              You may not modify, reproduce, distribute, or create derivative
              works based on any content or materials found on the Website
              without the Company's prior written consent.
            </ListItem>
          </List>
          <Typography variant="h2" color="blue-gray" className="mb-2 mt-8">
            User Accounts
          </Typography>
          <List>
            <ListItem>
              To access certain features of the Website, you may need to create
              a user account. You agree to provide accurate and complete
              information when creating an account.
            </ListItem>
            <ListItem>
              You are responsible for maintaining the confidentiality of your
              account credentials and are liable for any activities that occur
              under your account.
            </ListItem>
            <ListItem>
              The Company reserves the right to suspend or terminate your
              account if you violate these Terms or engage in any unauthorized
              use of the Website.
            </ListItem>
          </List>
          <Typography variant="h2" color="blue-gray" className="mb-2 mt-8">
            Third-Party Links
          </Typography>
          <List>
            <ListItem>
              The Website may contain links to third-party websites or services
              that are not owned or controlled by the Company.
            </ListItem>
            <ListItem>
              The Company has no control over, and assumes no responsibility
              for, the content, privacy policies, or practices of any
              third-party websites or services.
            </ListItem>
          </List>
          <Typography variant="h2" color="blue-gray" className="mb-2 mt-8">
            Third-Party Links
          </Typography>
          <List>
            <ListItem>
              The Website may contain links to third-party websites or services
              that are not owned or controlled by the Company.
            </ListItem>
            <ListItem>
              The Company has no control over, and assumes no responsibility
              for, the content, privacy policies, or practices of any
              third-party websites or services.
            </ListItem>
            <ListItem>
              You acknowledge and agree that the Company shall not be
              responsible or liable, directly or indirectly, for any damage or
              loss caused or alleged to be caused by or in connection with the
              use of or reliance on any such content, goods, or services
              available on or through any such websites or services.
            </ListItem>
          </List>
          <Typography variant="h2" color="blue-gray" className="mb-2 mt-8">
            Limitation of Liability
          </Typography>
          <List>
            <ListItem>
              To the fullest extent permitted by law, the Company shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, including but not limited to damages for loss of
              profits, use, data, or other intangible losses, arising out of or
              in connection with your use of the Website.
            </ListItem>
          </List>
          <Typography variant="h2" color="blue-gray" className="mb-2 mt-8">
            Indemnification
          </Typography>
          <List>
            <ListItem>
              You agree to indemnify and hold the Company and its affiliates,
              officers, directors, employees, and agents harmless from any claim
              or demand, including reasonable attorneys' fees, arising out of
              your use of the Website or violation of these Terms.
            </ListItem>
          </List>
          <Typography variant="h2" color="blue-gray" className="mb-2 mt-8">
            Governing Law
          </Typography>
          <List>
            <ListItem>
              These Terms shall be governed by and construed in accordance with
              the laws of United States, without regard to its conflict of law
              provisions.
            </ListItem>
          </List>
          <Typography variant="h2" color="blue-gray" className="mb-2 mt-8">
            Changes to the Terms
          </Typography>
          <List>
            <ListItem>
              The Company reserves the right to update or modify these Terms at
              any time without prior notice. It is your responsibility to review
              these Terms periodically for any changes.
            </ListItem>
            <ListItem>
              By continuing to use the Website after any modifications to the
              Terms, you agree to be bound by the revised Terms.
            </ListItem>
          </List>
          <Typography variant="h2" color="blue-gray" className="mb-2 mt-8">
            Severability
          </Typography>
          <List>
            <ListItem>
              If any provision of these Terms is found to be invalid or
              unenforceable, the remaining provisions shall remain in full force
              and effect.
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
}
