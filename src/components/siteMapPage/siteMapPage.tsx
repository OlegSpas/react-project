import * as React from 'react';
import SiteMapHero from '../siteMapHero/siteMapHero.tsx';
import SiteMapImg from '../siteMapImg/siteMapImg.tsx';
import SiteMapList from '../siteMapList/siteMapList.tsx';

export default function SiteMapPage() {
  return (
    <>
      <SiteMapHero/>
      <SiteMapList/>
      <SiteMapImg/>
    </>
  );
}

