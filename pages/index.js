import Layout from "@/components/layout";
import { API_URL } from "@/config/index";

export default function HomePage({ events }) {
  return (
    <Layout>
      <h1>UpComing Events</h1>
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/events?_sort=date`);
//   const events = await res.json();

//   return {
//     props: { events },
//   };
// }
