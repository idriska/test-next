import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = ({ posts }: any) => {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Currency Pay</th>
            <th>Currency Get</th>
            <th>Amount Pay</th>
            <th>Amount Get</th>
            <th>Exchange Rate</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {posts?.map((post: any) => (
            <tr>
              <td>{post.currency_pay}</td>
              <td>{post.currency_get}</td>
              <td>{post.amount_pay}</td>
              <td>{post.amount_get}</td>
              <td>{post.exchange_rate}</td>
              <td>{new Date(post.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export async function getStaticProps() {
  const url =
    "https://crypto-24844.hq.spicaengine.com/api/bucket/63441ba95c32cc002b18bce2/data";
  const res = await fetch(url, {
    headers: {
      Authorization: "APIKEY 1hsc17l8yb2ezi",
    },
  });
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

export default Home;
