import React, { useState } from 'react';
import { Check, X, AlertTriangle, Zap, Shield, DollarSign, Clock, FlaskConical, Scale, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

export default function AAVvsNonViralHDR() {
  const [expandedSection, setExpandedSection] = useState('overview');
  const [selectedInsert, setSelectedInsert] = useState('large');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            AAV vs Non-Viral HDR Template Delivery
          </h1>
          <p className="text-gray-600">
            When does AAV add value over direct DNA delivery?
          </p>
        </div>

        {/* Key Message Box */}
        <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <Scale className="w-8 h-8 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-blue-800 mb-2">
                🎯 The Honest Answer: It Depends on Your Use Case
              </h3>
              <p className="text-blue-900 mb-2">
                If your non-viral HDR is working well, AAV may not be necessary. The choice depends on:
              </p>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• <strong>Insert size</strong> — Small (&lt;1 kb) vs Large (&gt;1.5 kb)</li>
                <li>• <strong>Viability requirements</strong> — Can you tolerate DNA toxicity?</li>
                <li>• <strong>Scale</strong> — Research vs GMP manufacturing</li>
                <li>• <strong>Efficiency needs</strong> — Is 20% enough or do you need 50%+?</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Decision Matrix */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Decision Guide</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Non-Viral Favored */}
            <div className="border-2 border-green-200 rounded-xl p-4 bg-green-50">
              <h4 className="text-lg font-bold text-green-800 mb-3 flex items-center gap-2">
                <Check className="w-6 h-6" />
                Consider Non-Viral (dsDNA/ssDNA) When:
              </h4>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Insert size &lt;1.5 kb (e.g., small CARs, reporters)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Research/screening applications (cost matters)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>You have abundant starting cells (can tolerate 30-50% loss)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>20-40% HDR efficiency is sufficient</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Using ssDNA with CTS (Cas-Target-Sequences) for reduced toxicity</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Need faster turnaround (no viral production)</span>
                </li>
              </ul>
            </div>

            {/* AAV Favored */}
            <div className="border-2 border-purple-200 rounded-xl p-4 bg-purple-50">
              <h4 className="text-lg font-bold text-purple-800 mb-3 flex items-center gap-2">
                <Zap className="w-6 h-6" />
                Consider AAV6 When:
              </h4>
              <ul className="space-y-2 text-purple-800">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Insert size 1.5-4.5 kb (full CAR + costim + safety)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>GMP manufacturing (need maximum viability)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Limited starting material (patient samples)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Need highest efficiency (40-60%+)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Clinical product development</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Established AAV production capability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Detailed Head-to-Head Comparison</h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left font-bold text-gray-700 border-b-2">Parameter</th>
                  <th className="p-3 text-center font-bold text-green-700 border-b-2 bg-green-50">
                    dsDNA<br/>(electroporation)
                  </th>
                  <th className="p-3 text-center font-bold text-blue-700 border-b-2 bg-blue-50">
                    ssDNA + CTS<br/>(latest approach)
                  </th>
                  <th className="p-3 text-center font-bold text-purple-700 border-b-2 bg-purple-50">
                    AAV6<br/>(post-electroporation)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">HDR Efficiency (Small Insert &lt;1kb)</td>
                  <td className="p-3 text-center bg-green-50">
                    <span className="font-semibold text-green-700">30-50%</span>
                  </td>
                  <td className="p-3 text-center bg-blue-50">
                    <span className="font-semibold text-blue-700">60-90%</span>
                    <span className="text-xs block text-blue-600">(with optimized CTS)</span>
                  </td>
                  <td className="p-3 text-center bg-purple-50">
                    <span className="font-semibold text-purple-700">40-60%</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">HDR Efficiency (Large Insert 1.5-3kb)</td>
                  <td className="p-3 text-center bg-green-50">
                    <span className="font-semibold text-amber-600">10-25%</span>
                    <span className="text-xs block text-gray-500">(decreases with size)</span>
                  </td>
                  <td className="p-3 text-center bg-blue-50">
                    <span className="font-semibold text-blue-700">20-40%</span>
                    <span className="text-xs block text-blue-600">(better than dsDNA)</span>
                  </td>
                  <td className="p-3 text-center bg-purple-50">
                    <span className="font-semibold text-green-600">35-60%</span>
                    <span className="text-xs block text-purple-600">(maintains efficiency)</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">Cell Viability Post-Editing</td>
                  <td className="p-3 text-center bg-green-50">
                    <span className="font-semibold text-red-600">40-60%</span>
                    <span className="text-xs block text-red-500">⚠️ Dose-dependent toxicity</span>
                  </td>
                  <td className="p-3 text-center bg-blue-50">
                    <span className="font-semibold text-green-600">70-85%</span>
                    <span className="text-xs block text-blue-600">Reduced cytosolic DNA sensing</span>
                  </td>
                  <td className="p-3 text-center bg-purple-50">
                    <span className="font-semibold text-green-600">80-95%</span>
                    <span className="text-xs block text-purple-600">Minimal toxicity</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">Maximum Insert Size</td>
                  <td className="p-3 text-center bg-green-50">
                    <span className="font-semibold">~3-4 kb</span>
                    <span className="text-xs block text-gray-500">(limited by toxicity)</span>
                  </td>
                  <td className="p-3 text-center bg-blue-50">
                    <span className="font-semibold">~2-3 kb</span>
                    <span className="text-xs block text-gray-500">(synthesis limits)</span>
                  </td>
                  <td className="p-3 text-center bg-purple-50">
                    <span className="font-semibold">~4.5 kb</span>
                    <span className="text-xs block text-purple-600">(AAV packaging limit)</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">Cost per Sample (Research Scale)</td>
                  <td className="p-3 text-center bg-green-50">
                    <span className="font-semibold text-green-700">$50-100</span>
                    <span className="text-xs block text-green-600">Cheapest</span>
                  </td>
                  <td className="p-3 text-center bg-blue-50">
                    <span className="font-semibold text-blue-700">$100-300</span>
                    <span className="text-xs block text-gray-500">(ssDNA synthesis)</span>
                  </td>
                  <td className="p-3 text-center bg-purple-50">
                    <span className="font-semibold text-amber-600">$500-2000</span>
                    <span className="text-xs block text-gray-500">(viral production)</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">Turnaround Time</td>
                  <td className="p-3 text-center bg-green-50">
                    <span className="font-semibold text-green-700">1-3 days</span>
                    <span className="text-xs block text-green-600">PCR/order + electroporate</span>
                  </td>
                  <td className="p-3 text-center bg-blue-50">
                    <span className="font-semibold text-blue-700">3-7 days</span>
                    <span className="text-xs block text-gray-500">(ssDNA synthesis time)</span>
                  </td>
                  <td className="p-3 text-center bg-purple-50">
                    <span className="font-semibold text-amber-600">2-4 weeks</span>
                    <span className="text-xs block text-gray-500">(AAV production)</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">GMP Compatibility</td>
                  <td className="p-3 text-center bg-green-50">
                    <span className="font-semibold text-amber-600">Moderate</span>
                    <span className="text-xs block text-gray-500">Toxicity concerns</span>
                  </td>
                  <td className="p-3 text-center bg-blue-50">
                    <span className="font-semibold text-blue-700">Good</span>
                    <span className="text-xs block text-blue-600">Emerging option</span>
                  </td>
                  <td className="p-3 text-center bg-purple-50">
                    <span className="font-semibold text-green-600">Excellent</span>
                    <span className="text-xs block text-purple-600">Established path</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-medium">Regulatory Precedent</td>
                  <td className="p-3 text-center bg-green-50">
                    <span className="font-semibold text-amber-600">Limited</span>
                  </td>
                  <td className="p-3 text-center bg-blue-50">
                    <span className="font-semibold text-amber-600">Emerging</span>
                  </td>
                  <td className="p-3 text-center bg-purple-50">
                    <span className="font-semibold text-green-600">Strong</span>
                    <span className="text-xs block text-purple-600">Multiple IND filings</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* The Key Differentiator: Toxicity */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">The Main Issue: DNA Toxicity</h3>

          <div className="mb-6">
            <svg viewBox="0 0 800 280" className="w-full h-56">
              {/* Title */}
              <text x="400" y="25" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1F2937">
                Why dsDNA Causes Cell Death
              </text>

              {/* dsDNA in cytoplasm */}
              <g transform="translate(50, 50)">
                <rect x="0" y="0" width="200" height="120" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2"/>
                <text x="100" y="25" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400E">
                  Cytoplasmic dsDNA
                </text>

                {/* DNA helix representation */}
                <path d="M 60 50 Q 80 40 100 50 Q 120 60 140 50" stroke="#EF4444" strokeWidth="3" fill="none"/>
                <path d="M 60 60 Q 80 70 100 60 Q 120 50 140 60" stroke="#3B82F6" strokeWidth="3" fill="none"/>

                <text x="100" y="95" textAnchor="middle" fontSize="9" fill="#78350F">
                  Detected as "viral infection"
                </text>
                <text x="100" y="108" textAnchor="middle" fontSize="9" fill="#78350F">
                  or "danger signal"
                </text>
              </g>

              {/* Arrow */}
              <path d="M 260 110 L 310 110" stroke="#9CA3AF" strokeWidth="3" markerEnd="url(#arrowGray)"/>
              <defs>
                <marker id="arrowGray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L9,3 z" fill="#9CA3AF"/>
                </marker>
              </defs>

              {/* cGAS-STING pathway */}
              <g transform="translate(320, 50)">
                <rect x="0" y="0" width="180" height="120" rx="10" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2"/>
                <text x="90" y="25" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#991B1B">
                  cGAS-STING Activation
                </text>

                <text x="90" y="50" textAnchor="middle" fontSize="9" fill="#7F1D1D">cGAS binds cytosolic DNA</text>
                <text x="90" y="65" textAnchor="middle" fontSize="9" fill="#7F1D1D">↓</text>
                <text x="90" y="80" textAnchor="middle" fontSize="9" fill="#7F1D1D">Produces cGAMP</text>
                <text x="90" y="95" textAnchor="middle" fontSize="9" fill="#7F1D1D">↓</text>
                <text x="90" y="110" textAnchor="middle" fontSize="9" fill="#7F1D1D">Activates STING → IFN-β</text>
              </g>

              {/* Arrow */}
              <path d="M 510 110 L 560 110" stroke="#9CA3AF" strokeWidth="3" markerEnd="url(#arrowGray)"/>

              {/* Cell death */}
              <g transform="translate(570, 50)">
                <rect x="0" y="0" width="180" height="120" rx="10" fill="#FECACA" stroke="#DC2626" strokeWidth="2"/>
                <text x="90" y="25" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7F1D1D">
                  Consequences
                </text>

                <text x="90" y="50" textAnchor="middle" fontSize="9" fill="#7F1D1D">• Type I IFN production</text>
                <text x="90" y="65" textAnchor="middle" fontSize="9" fill="#7F1D1D">• Inflammatory cytokines</text>
                <text x="90" y="80" textAnchor="middle" fontSize="9" fill="#7F1D1D">• Cell cycle arrest</text>
                <text x="90" y="95" textAnchor="middle" fontSize="9" fill="#7F1D1D">• APOPTOSIS</text>
                <text x="90" y="110" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#DC2626">→ 40-60% cell death</text>
              </g>

              {/* Why AAV is different */}
              <rect x="50" y="190" width="700" height="70" rx="8" fill="#DCFCE7" stroke="#22C55E" strokeWidth="2"/>
              <text x="400" y="215" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#166534">
                Why AAV Avoids This:
              </text>
              <text x="400" y="235" textAnchor="middle" fontSize="10" fill="#15803D">
                AAV delivers ssDNA packaged in a protein capsid → enters via endocytosis →
              </text>
              <text x="400" y="250" textAnchor="middle" fontSize="10" fill="#15803D">
                releases DNA in nucleus, not cytoplasm → minimal cGAS-STING activation
              </text>
            </svg>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <div className="font-semibold text-red-700 mb-2">dsDNA (Electroporation)</div>
              <ul className="text-sm text-red-800 space-y-1">
                <li>• Direct cytoplasmic delivery</li>
                <li>• Strong cGAS-STING activation</li>
                <li>• Dose-dependent toxicity</li>
                <li>• 40-60% viability typical</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="font-semibold text-blue-700 mb-2">ssDNA with CTS</div>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Reduced cGAS binding</li>
                <li>• CTS protects from degradation</li>
                <li>• Better viability (70-85%)</li>
                <li>• Good compromise option</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="font-semibold text-green-700 mb-2">AAV6</div>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Protected delivery</li>
                <li>• Nuclear release of DNA</li>
                <li>• Minimal innate sensing</li>
                <li>• 80-95% viability</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Real-World Decision Scenarios */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Real-World Decision Scenarios</h3>

          <div className="space-y-4">
            {/* Scenario 1 */}
            <div
              className="border rounded-xl p-4 cursor-pointer hover:bg-gray-50"
              onClick={() => toggleSection('scenario1')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FlaskConical className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-semibold">Scenario 1: Research Screening</div>
                    <div className="text-sm text-gray-600">Testing 20 different CAR constructs</div>
                  </div>
                </div>
                {expandedSection === 'scenario1' ? <ChevronUp /> : <ChevronDown />}
              </div>
              {expandedSection === 'scenario1' && (
                <div className="mt-4 pt-4 border-t">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="font-semibold text-green-700 mb-2">✓ Recommendation: Non-Viral (dsDNA or ssDNA)</div>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Cost is critical when testing many constructs ($50 vs $1000 per construct)</li>
                      <li>• Speed matters — can't wait weeks for AAV production</li>
                      <li>• Viability loss acceptable at research scale</li>
                      <li>• As shown in Roth et al. Cell 2020 — pooled knock-in screens work well with dsDNA</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Scenario 2 */}
            <div
              className="border rounded-xl p-4 cursor-pointer hover:bg-gray-50"
              onClick={() => toggleSection('scenario2')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-purple-600" />
                  <div>
                    <div className="font-semibold">Scenario 2: GMP Manufacturing for Clinical Trial</div>
                    <div className="text-sm text-gray-600">Autologous CAR-T from patient cells</div>
                  </div>
                </div>
                {expandedSection === 'scenario2' ? <ChevronUp /> : <ChevronDown />}
              </div>
              {expandedSection === 'scenario2' && (
                <div className="mt-4 pt-4 border-t">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="font-semibold text-purple-700 mb-2">✓ Recommendation: AAV6</div>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• Patient cells are precious — can't afford 50% viability loss</li>
                      <li>• Final dose depends on cell yield — viability is critical</li>
                      <li>• Regulatory precedent with AAV (multiple INDs filed)</li>
                      <li>• Higher upfront cost justified by clinical outcomes</li>
                      <li>• Established AAV GMP supply chain</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Scenario 3 */}
            <div
              className="border rounded-xl p-4 cursor-pointer hover:bg-gray-50"
              onClick={() => toggleSection('scenario3')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-amber-600" />
                  <div>
                    <div className="font-semibold">Scenario 3: Process Development / Optimization</div>
                    <div className="text-sm text-gray-600">Optimizing knock-in at TRAC for lead construct</div>
                  </div>
                </div>
                {expandedSection === 'scenario3' ? <ChevronUp /> : <ChevronDown />}
              </div>
              {expandedSection === 'scenario3' && (
                <div className="mt-4 pt-4 border-t">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-semibold text-blue-700 mb-2">✓ Recommendation: ssDNA with CTS or AAV6</div>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• ssDNA+CTS offers good balance of cost, efficiency, and viability</li>
                      <li>• Per recent research (Charite group), achieves up to 90% knock-in at TRAC</li>
                      <li>• Can switch to AAV later for clinical translation</li>
                      <li>• AAV if insert is &gt;2 kb or you need to establish final process</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Scenario 4 */}
            <div
              className="border rounded-xl p-4 cursor-pointer hover:bg-gray-50"
              onClick={() => toggleSection('scenario4')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-green-600" />
                  <div>
                    <div className="font-semibold">Scenario 4: Your Current Situation</div>
                    <div className="text-sm text-gray-600">"Our non-viral HDR works, why switch?"</div>
                  </div>
                </div>
                {expandedSection === 'scenario4' ? <ChevronUp /> : <ChevronDown />}
              </div>
              {expandedSection === 'scenario4' && (
                <div className="mt-4 pt-4 border-t">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="font-semibold text-gray-700 mb-2">🤔 Questions to Ask:</div>
                    <ol className="text-sm text-gray-800 space-y-2 list-decimal list-inside">
                      <li><strong>What's your current HDR efficiency?</strong>
                        <div className="ml-5 text-gray-600">If &gt;30%, you're doing well — AAV may offer marginal improvement</div>
                      </li>
                      <li><strong>What's your post-editing viability?</strong>
                        <div className="ml-5 text-gray-600">If &gt;70%, DNA toxicity isn't limiting you</div>
                      </li>
                      <li><strong>What's your insert size?</strong>
                        <div className="ml-5 text-gray-600">AAV advantage grows with insert size &gt;1.5 kb</div>
                      </li>
                      <li><strong>Are you heading toward clinical?</strong>
                        <div className="ml-5 text-gray-600">May want to establish AAV process early if so</div>
                      </li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Summary Box */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-4">Summary: When AAV Adds Real Value</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">AAV Advantages (When They Matter):</h4>
              <ul className="text-sm space-y-1 opacity-90">
                <li>✓ Higher viability (80-95% vs 40-60%)</li>
                <li>✓ Maintains efficiency with large inserts</li>
                <li>✓ Cleaner integration profiles (less partial integrations)</li>
                <li>✓ Established GMP/regulatory pathway</li>
                <li>✓ Better for precious patient samples</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Non-Viral Advantages (When They Matter):</h4>
              <ul className="text-sm space-y-1 opacity-90">
                <li>✓ 10-20x cheaper per reaction</li>
                <li>✓ Days vs weeks turnaround</li>
                <li>✓ No viral production expertise needed</li>
                <li>✓ Excellent for small inserts (&lt;1.5 kb)</li>
                <li>✓ ssDNA+CTS approach closing the gap</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/30">
            <p className="text-sm opacity-90">
              <strong>Bottom line:</strong> If your non-viral approach gives &gt;30% HDR, &gt;70% viability, and sufficient yield
              for your application, there's no urgent need to switch. AAV becomes compelling for clinical
              manufacturing where every cell counts, or when insert sizes exceed ~1.5 kb.
            </p>
          </div>
        </div>

        {/* Research Citations */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h4 className="font-semibold text-blue-800 mb-2">Key Research References (PubMed):</h4>
          <ul className="text-sm text-blue-700 space-y-2">
            <li>
              • <strong>Non-viral knock-in screens:</strong> Roth et al., Cell 2020 — Pooled knock-in targeting using dsDNA templates
              (<a href="https://doi.org/10.1016/j.cell.2020.03.039" className="underline">DOI</a>)
            </li>
            <li>
              • <strong>ssDNA with CTS:</strong> Nitulescu et al., Mol Ther 2025 — ssDNA templates with Cas-target-sequences achieve up to 90% knock-in
              (<a href="https://doi.org/10.1016/j.omtn.2025.102568" className="underline">DOI</a>)
            </li>
            <li>
              • <strong>AAV6 protocols:</strong> Li et al., Bio-protocol 2024 — High-efficiency gene targeting using CRISPR-Cas9 and rAAV6
              (<a href="https://doi.org/10.21769/BioProtoc.5085" className="underline">DOI</a>)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
