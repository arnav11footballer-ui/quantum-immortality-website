"use client";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
export default function EquationsPage() {
  return (
    <main className="page-container">
      <h1>Quantum Physics Equation Library</h1>

      <div className="card">
        <h2>Schrödinger Equation</h2>

        <BlockMath math={"i\\hbar\\frac{\\partial\\psi}{\\partial t}=\\hat{H}\\psi"} />
      </div>

      <div className="card">
        <h2>Born Rule</h2>

        <BlockMath math={"P(x)=|\\psi(x)|^2"} />
      </div>

      <div className="card">
        <h2>Bell Inequality</h2>

        <BlockMath math={"|E(a,b)-E(a,b')|+|E(a',b)+E(a',b')|\\le2"} />
      </div>

      <div className="card">
        <h2>Einstein Field Equations</h2>

        <BlockMath math={"G_{\\mu\\nu}+\\Lambda g_{\\mu\\nu}=\\frac{8\\pi G}{c^4}T_{\\mu\\nu}"} />
      </div>
    </main>
  );
}