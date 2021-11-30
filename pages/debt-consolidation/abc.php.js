import Head from "next/head";
import React, { useEffect } from 'react'
import Image from 'next/image'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()


export default function index({ BannerInfo, FooterInfo }) {
  
  return (
    <div>
      <Head>
        <title>Debt consolidation </title>
        </Head>

         <p> debtcc abc page </p>
    </div>
  );
}

export const getStaticProps = async () => {

  return {
    props: {
      BannerInfo: { pageTopicTitle: 'abc page' },
      FooterInfo: { excludeJs: ['jquery', 'bootstrap', 'global'] }
    }
  }
}