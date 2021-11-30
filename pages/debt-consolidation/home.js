import Head from "next/head";
import React, { useEffect } from 'react'
import Link from 'next/link'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export default function index({ BannerInfo, FooterInfo }) {
 
  return (
    <div>
      <Head>
        <title>Debt consolidation </title>
      </Head>

      <p> debtcc home </p>
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      BannerInfo: { pageTopicTitle: 'Debt consolidation' },
      FooterInfo: { excludeJs: ['jquery', 'bootstrap', 'global'] }
    }
  }
}
