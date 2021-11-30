import Head from "next/head";

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export default function creditCard({ BannerInfo, FooterInfo }) {
   return (
      <div>
        <Head>
          <title>Debt consolidation </title>
         </Head>
  
         <p> debtcc credit card </p>
      </div>
    );
}

export const getStaticProps = async () => {

   return {
      props: {
         BannerInfo: { pageTopicTitle: 'Credit card consolidation' },
         FooterInfo: { excludeJs: ['jquery', 'bootstrap', 'global'] }
      }
   }
}
