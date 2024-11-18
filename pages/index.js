import Head from "next/head";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";
import NewsletterRegistration from '../components/input/newsletter-registration';

export default function HomePage(props) {
  return (
    <div>
      <Head>
        <title>EventScout</title>
        <meta name='description' content='Scouting events nearby you.'/>
      </Head>
      <NewsletterRegistration />
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}