import AboutContent from "@/components/AboutContent";
import { Headland_One } from "next/font/google";
const headland = Headland_One({weight:['400'], subsets: ['latin']})

export const metadata = {
    title: "About",
    description: "about history and mission",
  };

  const getTime = async () =>{
    // it is for dynamic = 'force-dynamic' in rime/route.js
    // const res = await fetch('http://localhost:3000/time', {cache: 'no-store'})
    // it is for new data refetch after every 10s
    // const res = await fetch('http://localhost:3000/time', {next: {revalidate: 10}})
    const res = await fetch('http://localhost:3000/time')
    const data = await res.json()
    return data.currentTime
  }

const AboutPage = async () => {
  const currentTime = await getTime()
    return (
        <div className={`${headland.className}`}>
          <h1 className=" text-center my-3"> It is all about page </h1>
          <p className=" mb-2">Current Time: {currentTime}</p>
         <AboutContent></AboutContent>
        </div>
    );
};

export default AboutPage;