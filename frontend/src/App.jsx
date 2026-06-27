import { motion } from "framer-motion";

import SearchBar from "./components/SearchBar";
import CompanyCard from "./components/CompanyCard";
import NewsCard from "./components/NewsCard";
import AnalysisCard from "./components/AnalysisCard";

import { analyzeCompany } from "./services/api";

import { useState } from "react";

function App() {

  const [result,setResult]=useState(null);
  const [loading,setLoading]=useState(false);

  async function handleAnalyze(company){

    try{

      setLoading(true);

      const data=await analyzeCompany(company);

      setResult(data);

    }catch(err){

      console.log(err);

    }finally{

      setLoading(false);

    }

  }

  return (

<div className="min-h-screen gradient">

<div className="max-w-7xl mx-auto px-6 py-10">

<motion.div

initial={{opacity:0,y:-30}}

animate={{opacity:1,y:0}}

transition={{duration:.8}}

className="text-center mb-10"

>

<h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">

AI Investment Research Agent

</h1>

<p className="text-slate-400 mt-4 text-lg">

Research • Analyze • Invest using AI

</p>

</motion.div>

<SearchBar

loading={loading}

onAnalyze={handleAnalyze}

/>

{loading && (

<div className="flex justify-center mt-20">

<div className="w-14 h-14 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"/>

</div>

)}

{result && (

<>

<motion.div

initial={{opacity:0,y:40}}

animate={{opacity:1,y:0}}

transition={{delay:.2}}

>

<CompanyCard

company={result.companyData}

/>

</motion.div>

<motion.div

initial={{opacity:0,y:40}}

animate={{opacity:1,y:0}}

transition={{delay:.35}}

>

<NewsCard

news={result.newsData}

/>

</motion.div>

<motion.div

initial={{opacity:0,y:40}}

animate={{opacity:1,y:0}}

transition={{delay:.5}}

>

<AnalysisCard

analysis={result.analysis}

/>

</motion.div>

</>

)}

</div>

</div>

  );

}

export default App;