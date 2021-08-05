import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ExploreCard from "../components/ExploreCard";
import LiveAnyWhereCard from "../components/LiveAnyWhereCard";
import HostingCard from "../components/HostingCard";
import GreatestOutCard from "../components/GreatestOutCard";
import DiscoverExcpCard from "../components/DiscoverExcpCard";
import Footer from "../components/Footer";
export default function Home({
  exploreCardData,
  liveAnyWhereCardData,
  discoverExpCard,
}) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-8xl mx-auto px-8 sm:px-16 ">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreCardData?.map((item) => (
              <ExploreCard
                key={item.location}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3  ">
            {liveAnyWhereCardData?.map((item) => (
              <LiveAnyWhereCard
                key={item.title}
                title={item.title}
                img={item.img}
              />
            ))}
          </div>
        </section>
        <GreatestOutCard
          img="https://a0.muscache.com/im/pictures/4602a952-afa0-46a6-b08a-24e67e958309.jpg"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
        <section>
          <div className="py-8">
            <h2 className="text-4xl font-semibold ">Discover Experiences</h2>
            <h2 className="text-3xl ">
              Unique activities with local experts – in person or online.
            </h2>
          </div>

          <div className="flex  space-x-14 px-10 ">
            {discoverExpCard?.map((item) => (
              <DiscoverExcpCard
                key={item.title}
                title={item.title}
                img={item.img}
                desc={item.description}
              />
            ))}
          </div>
        </section>
        <HostingCard
          img="https://a0.muscache.com/im/pictures/5b4dc94a-0b4c-4c27-b50f-9c5a5b93c775.jpg"
          title="Try hosting"
          description="Earn extra income and unlock new opportunities by sharing your space."
          buttonText="Learn more"
        />
      </main>
      <Footer/>
    </div>
  );
}

export async function getStaticProps() {
  const exploreCardData = await fetch("https://jsonkeeper.com/b/UMTE").then(
    (res) => res.json()
  );
  const liveAnyWhereCardData = await fetch(
    "https://jsonkeeper.com/b/WMIB"
  ).then((res) => res.json());
  const discoverExpCard = await fetch("https://jsonkeeper.com/b/UELS").then(
    (res) => res.json()
  );
  return {
    props: {
      exploreCardData,
      liveAnyWhereCardData,
      discoverExpCard,
    },
  };
}
