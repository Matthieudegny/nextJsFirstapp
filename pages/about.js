import Head from "next/head";

const About = () => {
  return (
    <>
      {/* Head here is top of the page in the browser with the name of the page and some time the logo */}
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>About</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          voluptatum quam delectus obcaecati vitae, optio vero minus sit illum
          earum at saepe, dolorum ipsum mollitia! Praesentium voluptatem totam
          vel tenetur!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          voluptatum quam delectus obcaecati vitae, optio vero minus sit illum
          earum at saepe, dolorum ipsum mollitia! Praesentium voluptatem totam
          vel tenetur!
        </p>
      </div>
    </>
  );
};
export default About;
