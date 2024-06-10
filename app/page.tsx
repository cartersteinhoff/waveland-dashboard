// pages/index.js
import { fetchAPI } from "../utils/api";
import Header from "./components/Header";

// http://localhost:1337/api/home/?populate=*

async function getStrapiMenu() {
  return await fetchAPI(
    "/menus?filters[slug][$eq]=investments-dashboard-top-menu&populate=items"
  );
}

async function getCompanyInfo() {
  return await fetchAPI("/company");
}

export default async function HomePage() {
  const { data: menu } = await getStrapiMenu();
  const { data: companyInfo } = await getCompanyInfo();

  return (
    <>
      <Header menu={menu} companyInfo={companyInfo} />
    </>
  );
}
