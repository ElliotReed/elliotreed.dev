import React from "react";
import { HeadFC, Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";

import MaxWidthContainer from "../components/MaxWidthContainer";
import Heading from "../components/Heading/Heading";
import Paragraph from "../components/UI/Paragraph/Paragraph";
import ProfileHeader from "../components/ProfileHeader";
import { Seo } from "../components/SEO";

import * as styles from "./developer.module.scss";

export default function DeveloperPage() {
  return (
    <>
      <ProfileHeader type="developer" />
      <MaxWidthContainer>
        <main className={styles.developerContent}>
          <LinkCard
            to="/clients/"
            image={
              <StaticImage
                className={styles.image}
                src="./dev-client-card.jpg"
                alt="pic"
                layout="fullWidth"
                aspectRatio={16 / 9}
                placeholder="blurred"
                formats={["auto", "webp", "avif"]}
              />}
          >
            <CardTitle>
              Hire me to build a website.
            </CardTitle>

            <Paragraph>Click for information about websites I have built.</Paragraph>
          </LinkCard>

          <LinkCard
            to="/organization/"
            image={
              <StaticImage
                className={styles.image}
                src="./dev-team-card.jpg"
                alt="pic"
                layout="fullWidth"
                aspectRatio={16 / 9}
                placeholder="blurred"
                formats={["auto", "webp", "avif"]}
              />}
          >
            <CardTitle>Hire me for your team.</CardTitle>
            <Paragraph>Click for information about apps I have built.</Paragraph>
          </LinkCard>
        </main>
      </MaxWidthContainer>
    </>
  );
}

interface CardProps {
  children: React.ReactNode
  to: string
  image: React.ReactNode
}

function LinkCard({ children, to, image }: Readonly<CardProps>) {
  return (
    <Link to={to} className={styles.linkCard}>
      {image}
      <div className={styles.linkCard__content}>
        {children}
      </div>
    </Link>
  );
}

function CardTitle({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Heading level={2} size={4}>
      {children}
    </Heading>
  );
}

export const Head: HeadFC<string> = () => (
  <Seo title="Elliot Reed | Developer" />
)