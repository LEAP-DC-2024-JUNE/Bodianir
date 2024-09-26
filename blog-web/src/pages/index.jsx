import {
  Trendingcard,
  Blogcard,
  Carouselcard,
  Footer,
  Header,
} from "../components";
export default function Home() {
  return (
    <div>
      <Header />
      <Blogcard />
      <Trendingcard />
      <Footer />
      <Carouselcard />
    </div>
  );
}
