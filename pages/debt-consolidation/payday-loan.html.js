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

         <p> debtcc payday loan </p>
    </div>
  );
}

export const getStaticProps = async () => {

  return {
    props: {
      BannerInfo: { pageTopicTitle: 'Payday loan' },
      FooterInfo: { excludeJs: ['jquery', 'bootstrap', 'global'] }
    }
  }
}