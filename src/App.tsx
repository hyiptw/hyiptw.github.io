import React from "react";
import "./App.less";
import GitHubButton from "react-github-btn";
import { Routes } from "./routes";

function App() {
  return (
    <div className="App">
      <div className="Banner">
        <div className="Banner-description">
          SRMSwap暂未完成代码审计，请自行承担风险(需翻墙使用)。
        </div>
      </div>
      <Routes />
      <div className="social-buttons">
        <a
          href="https://weibo.com/u/5072467661"
        >
          微博:@srmswap
        </a>      
          | 微信：srmswap | 
        <a
          href="https://twitter.com/srmswap"
        >
          Twitter:@srmswap
        </a>
          | 
        <a
          href="https://explorer.solana.com/"
        >
          Solana 区块链浏览器
        </a>          
      </div>
    </div>
  );
}

export default App;
