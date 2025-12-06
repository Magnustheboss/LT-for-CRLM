// CRLM LT Clinical Resource - Interactive Tools JavaScript

// Oslo Score Calculator
function calculateOsloScore() {
    const tumorSize = document.getElementById('oslo-tumor-size').checked ? 1 : 0;
    const progressiveDisease = document.getElementById('oslo-progressive').checked ? 1 : 0;
    const ceaLevel = document.getElementById('oslo-cea').checked ? 1 : 0;
    const timeInterval = document.getElementById('oslo-time').checked ? 1 : 0;

    const totalScore = tumorSize + progressiveDisease + ceaLevel + timeInterval;

    // Determine risk category and outcomes
    let riskCategory = '';
    let outcomes = '';
    let color = '';

    if (totalScore <= 1) {
        riskCategory = 'Favorable';
        outcomes = '5-Year OS: 63.4% - 92.0% | 10-Year OS: 45.7% - 88.9%';
        color = 'favorable';
    } else if (totalScore === 2) {
        riskCategory = 'Intermediate';
        outcomes = '5-Year OS: ~60% | 10-Year OS: ~45%';
        color = 'intermediate';
    } else {
        riskCategory = 'Unfavorable';
        outcomes = '5-Year OS: 8.3% | 10-Year OS: 0%';
        color = 'unfavorable';
    }

    // Display results
    document.getElementById('oslo-score-number').textContent = totalScore;
    document.getElementById('oslo-interpretation').innerHTML = `
        <div class="risk-category ${color}">
            <strong>Risk Category:</strong> ${riskCategory}
        </div>
    `;
    document.getElementById('oslo-outcomes').innerHTML = `
        <div class="outcomes">
            <strong>Expected Outcomes:</strong> ${outcomes}
        </div>
        <div class="recommendation">
            ${getRiskRecommendation(totalScore, 'oslo')}
        </div>
    `;

    document.getElementById('oslo-result').style.display = 'block';
    window.osloScore = totalScore;
}

// FCRS Calculator
function calculateFCRS() {
    const nodePositive = document.getElementById('fcrs-node').checked ? 1 : 0;
    const dfi = document.getElementById('fcrs-dfi').checked ? 1 : 0;
    const multipleTumors = document.getElementById('fcrs-multiple').checked ? 1 : 0;
    const ceaHigh = document.getElementById('fcrs-cea').checked ? 1 : 0;
    const tumorSizeLarge = document.getElementById('fcrs-size').checked ? 1 : 0;

    const totalScore = nodePositive + dfi + multipleTumors + ceaHigh + tumorSizeLarge;

    // Determine risk category and outcomes
    let riskCategory = '';
    let outcomes = '';
    let color = '';

    if (totalScore <= 2) {
        riskCategory = 'Favorable';
        outcomes = '5-Year OS: 75% - 80%';
        color = 'favorable';
    } else {
        riskCategory = 'Unfavorable';
        outcomes = '5-Year OS: 40%';
        color = 'unfavorable';
    }

    // Display results
    document.getElementById('fcrs-score-number').textContent = totalScore;
    document.getElementById('fcrs-interpretation').innerHTML = `
        <div class="risk-category ${color}">
            <strong>Risk Category:</strong> ${riskCategory}
        </div>
    `;
    document.getElementById('fcrs-outcomes').innerHTML = `
        <div class="outcomes">
            <strong>Expected Outcomes:</strong> ${outcomes}
        </div>
        <div class="recommendation">
            ${getRiskRecommendation(totalScore, 'fcrs')}
        </div>
    `;

    document.getElementById('fcrs-result').style.display = 'block';
    window.fcrsScore = totalScore;
}

// Get Risk Recommendation
function getRiskRecommendation(score, system) {
    if (system === 'oslo') {
        if (score <= 2) {
            return '<p class="rec-good">✓ <strong>Good Candidate:</strong> Consider for liver transplantation with appropriate multidisciplinary evaluation.</p>';
        } else {
            return '<p class="rec-poor">✗ <strong>Poor Candidate:</strong> Outcomes are poor. Consider alternative treatment strategies.</p>';
        }
    } else if (system === 'fcrs') {
        if (score <= 2) {
            return '<p class="rec-good">✓ <strong>Good Candidate:</strong> Favorable risk profile for transplantation.</p>';
        } else {
            return '<p class="rec-poor">✗ <strong>Poor Candidate:</strong> Unfavorable risk profile. Consider alternative approaches.</p>';
        }
    }
}

// Compare Scores
function compareScores() {
    if (window.osloScore === undefined || window.fcrsScore === undefined) {
        alert('Please calculate both Oslo Score and FCRS first.');
        return;
    }

    // Oslo Score comparison
    let osloRisk = '';
    let osloOS = '';
    if (window.osloScore <= 1) {
        osloRisk = 'Favorable';
        osloOS = '63.4% - 92.0%';
    } else if (window.osloScore === 2) {
        osloRisk = 'Intermediate';
        osloOS = '~60%';
    } else {
        osloRisk = 'Unfavorable';
        osloOS = '8.3%';
    }

    // FCRS comparison
    let fcrsRisk = '';
    let fcrsOS = '';
    if (window.fcrsScore <= 2) {
        fcrsRisk = 'Favorable';
        fcrsOS = '75% - 80%';
    } else {
        fcrsRisk = 'Unfavorable';
        fcrsOS = '40%';
    }

    document.getElementById('oslo-comp-score').textContent = window.osloScore + '/4';
    document.getElementById('oslo-comp-risk').textContent = osloRisk;
    document.getElementById('oslo-comp-os').textContent = osloOS;

    document.getElementById('fcrs-comp-score').textContent = window.fcrsScore + '/5';
    document.getElementById('fcrs-comp-risk').textContent = fcrsRisk;
    document.getElementById('fcrs-comp-os').textContent = fcrsOS;

    // Interpretation
    let interpretation = '';
    if (osloRisk === fcrsRisk) {
        interpretation = `Both scores agree: <strong>${osloRisk}</strong> risk category. This strengthens confidence in the assessment.`;
    } else {
        interpretation = `Scores differ: Oslo Score suggests <strong>${osloRisk}</strong> while FCRS suggests <strong>${fcrsRisk}</strong>. Careful multidisciplinary review is recommended.`;
    }

    document.getElementById('comparison-interpretation').textContent = interpretation;
    document.getElementById('comparison-result').style.display = 'block';
}

// Assess Patient Eligibility
function assessPatientEligibility() {
    const brafStatus = document.querySelector('input[name="braf-status"]:checked').value;
    const extrahepatic = document.querySelector('input[name="extrahepatic"]:checked').value;
    const msiStatus = document.querySelector('input[name="msi-status"]:checked').value;
    const osloScore = document.getElementById('oslo-input').value;
    const petMtv = parseFloat(document.getElementById('pet-input').value);
    const rasTp53 = document.getElementById('ras-tp53-input').value;

    // Check exclusion criteria
    if (brafStatus === 'yes') {
        displayEligibilityResult('EXCLUDED', 'BRAF V600E Mutation Present', 
            'This patient is not a candidate for liver transplantation. BRAF V600E mutations are an absolute exclusion criterion per IHPBA guidelines.', 'excluded');
        return;
    }

    if (extrahepatic === 'yes') {
        displayEligibilityResult('EXCLUDED', 'Extrahepatic Metastases Present', 
            'This patient is not a candidate for liver transplantation. Extrahepatic metastases are an exclusion criterion (except prior resected pulmonary metastases).', 'excluded');
        return;
    }

    if (msiStatus === 'yes') {
        displayEligibilityResult('EXCLUDED', 'Microsatellite Instability Present', 
            'This patient is not a candidate for liver transplantation. Microsatellite instability or mismatch repair deficiency are exclusion criteria.', 'excluded');
        return;
    }

    // Assess based on risk factors
    let recommendation = '';
    let title = '';
    let details = '';

    if (osloScore === '' || rasTp53 === '') {
        alert('Please complete all fields for eligibility assessment.');
        return;
    }

    const osloNum = parseInt(osloScore);
    const petMtvNum = isNaN(petMtv) ? null : petMtv;

    // Determine eligibility
    if (osloNum >= 3) {
        displayEligibilityResult('POOR CANDIDATE', 'High-Risk Profile', 
            'Oslo Score 3-4 indicates poor prognosis. Consider alternative treatment strategies such as palliative chemotherapy or locoregional therapies.', 'poor');
        return;
    }

    if (rasTp53 === 'yes' && osloNum >= 2) {
        displayEligibilityResult('MARGINAL CANDIDATE', 'RAS/TP53 Co-mutations with Intermediate Risk', 
            'RAS/TP53 co-mutations are associated with poor outcomes (median OS 21 months). This patient requires careful counseling and consideration of alternative therapies.', 'marginal');
        return;
    }

    if (osloNum === 2 && petMtvNum && petMtvNum >= 70) {
        displayEligibilityResult('MARGINAL CANDIDATE', 'Intermediate Risk with High Metabolic Burden', 
            'PET-MTV ≥ 70 cm³ combined with Oslo Score 2 indicates marginal candidacy. Extended bridging therapy should be considered.', 'marginal');
        return;
    }

    if (osloNum <= 1 && petMtvNum && petMtvNum < 70 && rasTp53 === 'no') {
        displayEligibilityResult('EXCELLENT CANDIDATE', 'Favorable Risk Profile', 
            'This patient has excellent prognostic factors: Oslo Score 0-1, PET-MTV < 70 cm³, and no RAS/TP53 co-mutations. Expected 5-year OS: 80-90%. Proceed with liver transplantation evaluation.', 'excellent');
        return;
    }

    if (osloNum <= 1 && rasTp53 === 'no') {
        displayEligibilityResult('GOOD CANDIDATE', 'Favorable Risk Profile', 
            'This patient has favorable prognostic factors with Oslo Score 0-1 and no RAS/TP53 co-mutations. Expected 5-year OS: 63-92%. Suitable for liver transplantation.', 'good');
        return;
    }

    if (osloNum === 2 && petMtvNum && petMtvNum < 70) {
        displayEligibilityResult('ACCEPTABLE CANDIDATE', 'Intermediate Risk with Favorable Metabolic Profile', 
            'This patient has intermediate risk (Oslo Score 2) but favorable metabolic tumor volume. Expected 5-year OS: 60-70%. Suitable for transplantation with appropriate counseling.', 'acceptable');
        return;
    }

    displayEligibilityResult('ACCEPTABLE CANDIDATE', 'Intermediate Risk Profile', 
        'This patient has intermediate risk factors. Multidisciplinary team review is recommended to assess suitability for liver transplantation.', 'acceptable');
}

// Display Eligibility Result
function displayEligibilityResult(title, subtitle, details, category) {
    document.getElementById('eligibility-title').textContent = title;
    document.getElementById('eligibility-recommendation').innerHTML = `
        <div class="eligibility-category ${category}">
            <h4>${subtitle}</h4>
        </div>
    `;
    document.getElementById('eligibility-details').innerHTML = `
        <p>${details}</p>
        <div class="next-steps">
            <p><strong>Next Steps:</strong></p>
            <ul>
                <li>Discuss results with multidisciplinary team</li>
                <li>Review <a href="selection-criteria.html">Selection Criteria</a> page for detailed information</li>
                <li>Consult <a href="resources.html">Resources</a> for guidelines and references</li>
                <li>Consider additional imaging or testing as needed</li>
            </ul>
        </div>
    `;
    document.getElementById('eligibility-result').style.display = 'block';
}

// Print Result
function printResult(system) {
    const content = document.getElementById(system + '-result').innerHTML;
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>CRLM LT Score Result</title>');
    printWindow.document.write('<style>');
    printWindow.document.write('body { font-family: Arial, sans-serif; margin: 20px; }');
    printWindow.document.write('.result-box { border: 1px solid #ccc; padding: 20px; border-radius: 8px; }');
    printWindow.document.write('.score-display { text-align: center; margin: 20px 0; }');
    printWindow.document.write('.score-number { font-size: 48px; font-weight: bold; color: #1e5a96; }');
    printWindow.document.write('.risk-category { padding: 10px; margin: 10px 0; border-radius: 5px; }');
    printWindow.document.write('.favorable { background-color: #d4edda; }');
    printWindow.document.write('.unfavorable { background-color: #f8d7da; }');
    printWindow.document.write('.intermediate { background-color: #fff3cd; }');
    printWindow.document.write('</style></head><body>');
    printWindow.document.write(content);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
