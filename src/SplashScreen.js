import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./splash.css";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 4500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="splash-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      {/* Vertical Lines */}
      <div className="vertical-lines">
        <span></span><span></span><span></span><span></span><span></span>
      </div>

      {/* Horizontal Lines */}
      <div className="horizontal-lines">
        <span></span><span></span><span></span><span></span><span></span>
      </div>

      {/* Floating Icons */}
      <div className="floating-icons">
        <span>⚛️</span>
        <span>🐍</span>
        <span>♨️</span>
        <span>🗄️</span>
        <span>🤖</span>
        <span>🌳</span>
        <span>📊</span>
      </div>

      {/* FULL SCREEN BOUNCING CODE (Moved outside the box!) */}
      <div className="floating-code">
        <div className="code-float">import seaborn as sns</div>
        <div className="code-float">sns.load_dataset("JESWANTH")</div>
        <div className="code-float">class TreeNode: pass</div>
        <div className="code-float">public class Main {}</div>
        <div className="code-float">int arr[] = {1,2,3};</div>
        <div className="code-float">def logistic_regression(X): pass</div>
      </div>

      {/* The BOX still appears (you wanted to keep it) */}
      <motion.div
        className="code-box-clean"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* You can keep this empty or add glow effect */}
      </motion.div>

      {/* TREE ANIMATION */}
      <div className="tree-container">
        <span className="tree-node" style={{ top: "0%", left: "50%" }}></span>
        <span className="tree-node" style={{ top: "30%", left: "30%" }}></span>
        <span className="tree-node" style={{ top: "30%", left: "70%" }}></span>
        <span className="tree-node" style={{ top: "60%", left: "20%" }}></span>
        <span className="tree-node" style={{ top: "60%", left: "40%" }}></span>
        <span className="tree-node" style={{ top: "60%", left: "60%" }}></span>
        <span className="tree-node" style={{ top: "60%", left: "80%" }}></span>

        <div className="tree-edge root-left"></div>
        <div className="tree-edge root-right"></div>
        <div className="tree-edge left-branch"></div>
        <div className="tree-edge right-branch"></div>
        <div className="tree-edge mid-left"></div>
        <div className="tree-edge mid-right"></div>
      </div>

      {/* TITLE */}
      <motion.h1
        className="splash-title"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        Jeswanth A
      </motion.h1>

      {/* SUBTEXT */}
      <motion.p
        className="splash-sub"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.9 }}
      >
        Initializing Portfolio...
      </motion.p>
    </motion.div>
  );
}
