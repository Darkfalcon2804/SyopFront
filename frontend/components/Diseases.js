
const diseasesData = [
    {
      "id": 1,
      "primaryCondition": "Common Cold",
      "confidence": "92%",
      "riskAssessment": "Low Risk",
      "riskDetails": "Non-urgent - Monitor at home",
      "symptoms": ["runny nose", "sore throat", "cough", "sneezing", "mild body aches"],
      "recommendations": [
        "Rest and stay hydrated",
        "Monitor symptoms for 48-72 hours",
        "Consider over-the-counter cold medication",
        "Consult doctor if symptoms worsen"
      ]
    },
    {
      "id": 2,
      "primaryCondition": "Influenza (Flu)",
      "confidence": "88%",
      "riskAssessment": "Moderate Risk",
      "riskDetails": "Can lead to complications, especially for vulnerable groups.",
      "symptoms": ["fever", "body aches", "fatigue", "cough", "sore throat", "headache"],
      "recommendations": [
        "Get plenty of rest",
        "Stay hydrated with water and clear fluids",
        "Consider antiviral medications if prescribed by a doctor",
        "Avoid contact with others to prevent spreading",
        "Seek medical attention if symptoms are severe or worsen"
      ]
    },
    {
      "id": 3,
      "primaryCondition": "Seasonal Allergies",
      "confidence": "95%",
      "riskAssessment": "Low Risk",
      "riskDetails": "Generally manageable with over-the-counter remedies.",
      "symptoms": ["sneezing", "runny nose", "itchy eyes", "nasal congestion"],
      "recommendations": [
        "Identify and avoid allergens",
        "Use antihistamines or nasal sprays as directed",
        "Keep windows closed during high pollen counts",
        "Consult an allergist for persistent symptoms"
      ]
    },
    {
      "id": 4,
      "primaryCondition": "Gastroenteritis (Stomach Flu)",
      "confidence": "85%",
      "riskAssessment": "Low Risk",
      "riskDetails": "Self-limiting, but dehydration is a concern.",
      "symptoms": ["nausea", "vomiting", "diarrhea", "abdominal cramps", "fever"],
      "recommendations": [
        "Stay well-hydrated with water and electrolyte solutions",
        "Eat bland foods gradually",
        "Rest adequately",
        "Avoid dairy, caffeine, and alcohol",
        "Seek medical advice if symptoms persist or severe dehydration occurs"
      ]
    },
    {
      "id": 5,
      "primaryCondition": "Hypertension (High Blood Pressure)",
      "confidence": "90%",
      "riskAssessment": "High Risk",
      "riskDetails": "Requires ongoing management to prevent serious complications.",
      "symptoms": ["often asymptomatic", "headaches (severe)", "shortness of breath", "nosebleeds"],
      "recommendations": [
        "Regularly monitor blood pressure",
        "Adopt a healthy diet (low sodium, high fruits/vegetables)",
        "Engage in regular physical activity",
        "Take prescribed medications as directed",
        "Regular follow-ups with a healthcare provider"
      ]
    },
    {
      "id": 6,
      "primaryCondition": "Type 2 Diabetes",
      "confidence": "89%",
      "riskAssessment": "High Risk",
      "riskDetails": "Chronic condition requiring strict management to prevent complications.",
      "symptoms": ["increased thirst", "frequent urination", "unexplained weight loss", "fatigue", "blurred vision"],
      "recommendations": [
        "Monitor blood sugar levels frequently",
        "Follow a balanced diet plan",
        "Engage in regular exercise",
        "Take medications as prescribed by your doctor",
        "Regular check-ups with an endocrinologist"
      ]
    },
    {
      "id": 7,
      "primaryCondition": "Asthma",
      "confidence": "91%",
      "riskAssessment": "Moderate Risk",
      "riskDetails": "Requires careful management to prevent exacerbations.",
      "symptoms": ["wheezing", "shortness of breath", "chest tightness", "coughing (especially at night)"],
      "recommendations": [
        "Identify and avoid asthma triggers",
        "Use inhalers (rescue and controller) as prescribed",
        "Have an asthma action plan",
        "Seek immediate medical attention for severe attacks",
        "Regular follow-up with a pulmonologist"
      ]
    },
    {
      "id": 8,
      "primaryCondition": "Migraine",
      "confidence": "87%",
      "riskAssessment": "Low Risk",
      "riskDetails": "Can significantly impact quality of life, but not life-threatening.",
      "symptoms": ["severe throbbing headache", "nausea", "vomiting", "sensitivity to light and sound", "aura"],
      "recommendations": [
        "Identify and avoid triggers",
        "Manage stress levels",
        "Use acute treatment medications as prescribed",
        "Consider preventive medications for frequent attacks",
        "Consult a neurologist for persistent or severe migraines"
      ]
    },
    {
      "id": 9,
      "primaryCondition": "Osteoarthritis",
      "confidence": "86%",
      "riskAssessment": "Low Risk",
      "riskDetails": "Chronic condition causing joint pain and stiffness.",
      "symptoms": ["joint pain", "stiffness", "reduced flexibility", "grating sensation", "swelling"],
      "recommendations": [
        "Engage in low-impact exercise (e.g., swimming, cycling)",
        "Maintain a healthy weight",
        "Use pain relief medications as advised",
        "Consider physical therapy",
        "Consult an orthopedist for advanced stages"
      ]
    },
    {
      "id": 10,
      "primaryCondition": "Depression",
      "confidence": "82%",
      "riskAssessment": "Moderate Risk",
      "riskDetails": "Requires professional intervention for effective management.",
      "symptoms": ["persistent sadness", "loss of interest", "fatigue", "changes in appetite/sleep", "feelings of worthlessness"],
      "recommendations": [
        "Seek support from a mental health professional (therapist/counselor)",
        "Consider medication if recommended by a psychiatrist",
        "Engage in regular physical activity",
        "Maintain a healthy sleep schedule",
        "Connect with supportive friends and family"
      ]
    },
    {
      "id": 11,
      "primaryCondition": "Anxiety Disorder",
      "confidence": "84%",
      "riskAssessment": "Moderate Risk",
      "riskDetails": "Can severely impact daily functioning if left untreated.",
      "symptoms": ["excessive worry", "restlessness", "fatigue", "difficulty concentrating", "irritability", "muscle tension", "sleep disturbances"],
      "recommendations": [
        "Practice relaxation techniques (e.g., deep breathing, mindfulness)",
        "Limit caffeine and alcohol intake",
        "Seek cognitive-behavioral therapy (CBT)",
        "Consider medication under professional guidance",
        "Establish a regular sleep routine"
      ]
    },
    {
      "id": 12,
      "primaryCondition": "Urinary Tract Infection (UTI)",
      "confidence": "93%",
      "riskAssessment": "Low Risk",
      "riskDetails": "Common and usually treatable with antibiotics.",
      "symptoms": ["frequent urination", "painful urination", "burning sensation", "cloudy urine", "pelvic pain"],
      "recommendations": [
        "Consult a doctor for diagnosis and antibiotics",
        "Drink plenty of water",
        "Avoid irritating feminine products",
        "Urinate frequently and after sexual intercourse",
        "Do not delay treatment to prevent kidney infection"
      ]
    },
    {
      "id": 13,
      "primaryCondition": "Bronchitis",
      "confidence": "89%",
      "riskAssessment": "Low Risk",
      "riskDetails": "Often self-resolving, but can sometimes lead to pneumonia.",
      "symptoms": ["cough (with mucus)", "fatigue", "shortness of breath", "chest discomfort", "mild fever"],
      "recommendations": [
        "Get plenty of rest",
        "Stay hydrated",
        "Use a humidifier to ease coughing",
        "Avoid smoking and exposure to irritants",
        "Consult doctor if symptoms worsen or persist"
      ]
    },
    {
      "id": 14,
      "primaryCondition": "Sinusitis",
      "confidence": "90%",
      "riskAssessment": "Low Risk",
      "riskDetails": "Can cause discomfort but usually resolves with treatment.",
      "symptoms": ["facial pain/pressure", "nasal congestion", "runny nose", "loss of smell", "headache"],
      "recommendations": [
        "Use saline nasal sprays or rinses",
        "Apply warm compresses to the face",
        "Use decongestants or pain relievers as directed",
        "Consult a doctor if symptoms are severe or persistent",
        "Avoid irritants like smoke and allergens"
      ]
    },
    {
      "id": 15,
      "primaryCondition": "Conjunctivitis (Pink Eye)",
      "confidence": "94%",
      "riskAssessment": "Low Risk",
      "riskDetails": "Highly contagious but usually mild.",
      "symptoms": ["redness in eye", "itchiness", "gritty feeling", "discharge", "crusting around eye"],
      "recommendations": [
        "Avoid touching eyes",
        "Wash hands frequently",
        "Do not share personal items (towels, eye drops)",
        "Use prescribed eye drops (antibiotic for bacterial, antiviral for viral)",
        "Consult an eye doctor if vision is affected or pain is severe"
      ]
    },
    {
      "id": 16,
      "primaryCondition": "Dermatitis (Eczema)",
      "confidence": "88%",
      "riskAssessment": "Low Risk",
      "riskDetails": "Chronic skin condition with flare-ups.",
      "symptoms": ["itchy skin", "red patches", "dry skin", "rashes", "flaking or scaling"],
      "recommendations": [
        "Identify and avoid triggers",
        "Moisturize skin regularly",
        "Use prescribed topical corticosteroids or other medications",
        "Avoid hot showers and harsh soaps",
        "Consult a dermatologist for persistent symptoms"
      ]
    },
    {
      "id": 17,
      "primaryCondition": "Gout",
      "confidence": "80%",
      "riskAssessment": "Low Risk",
      "riskDetails": "Recurrent attacks of acute inflammatory arthritis.",
      "symptoms": ["severe joint pain (often big toe)", "swelling", "redness", "tenderness"],
      "recommendations": [
        "Avoid foods high in purines (red meat, shellfish, alcohol)",
        "Stay well-hydrated",
        "Take prescribed medications during acute attacks or for prevention",
        "Maintain a healthy weight",
        "Consult a rheumatologist for management"
      ]
    },
    {
      "id": 18,
      "primaryCondition": "Kidney Stones",
      "confidence": "78%",
      "riskAssessment": "Moderate Risk",
      "riskDetails": "Can cause severe pain and require medical intervention.",
      "symptoms": ["severe back/side pain", "painful urination", "blood in urine", "nausea", "vomiting"],
      "recommendations": [
        "Drink plenty of water",
        "Limit sodium and animal protein intake",
        "Avoid foods high in oxalates if prone to oxalate stones",
        "Take pain medication as prescribed",
        "Seek urgent medical care for severe pain, fever, or vomiting"
      ]
    },
    {
      "id": 19,
      "primaryCondition": "Pneumonia",
      "confidence": "75%",
      "riskAssessment": "High Risk",
      "riskDetails": "Serious lung infection requiring prompt medical treatment.",
      "symptoms": ["cough (with phlegm)", "fever", "chills", "shortness of breath", "chest pain"],
      "recommendations": [
        "Seek immediate medical attention",
        "Take antibiotics as prescribed (if bacterial)",
        "Get plenty of rest",
        "Stay hydrated",
        "Avoid smoking and secondhand smoke"
      ]
    },
    {
      "id": 20,
      "primaryCondition": "Appendicitis",
      "confidence": "70%",
      "riskAssessment": "High Risk",
      "riskDetails": "Medical emergency requiring immediate surgery.",
      "symptoms": ["sudden right lower abdominal pain", "nausea", "vomiting", "loss of appetite", "fever"],
      "recommendations": [
        "Seek emergency medical attention immediately",
        "Do not eat or drink anything",
        "Do not take pain relievers or antacids",
        "Do not apply heat to the abdomen"
      ]
    },
    {
      "id": 21,
      "primaryCondition": "Streptococcal Pharyngitis (Strep Throat)",
      "confidence": "92%",
      "riskAssessment": "Low Risk",
      "riskDetails": "Bacterial infection treatable with antibiotics.",
      "symptoms": ["sore throat", "painful swallowing", "fever", "red spots on roof of mouth", "swollen tonsils"],
      "recommendations": [
        "Consult a doctor for diagnosis and antibiotics",
        "Finish the full course of antibiotics",
        "Rest and stay hydrated",
        "Gargle with warm salt water",
        "Avoid sharing food or drinks"
      ]
    },
    {
      "id": 22,
      "primaryCondition": "Herniated Disc",
      "confidence": "80%",
      "riskAssessment": "Moderate Risk",
      "riskDetails": "Can cause severe pain and nerve issues.",
      "symptoms": ["back pain", "leg pain (sciatica)", "numbness", "tingling", "muscle weakness"],
      "recommendations": [
        "Rest from strenuous activities",
        "Apply ice or heat to the affected area",
        "Take pain relievers as directed",
        "Consider physical therapy",
        "Consult a doctor if pain is severe or symptoms worsen"
      ]
    },
    {
      "id": 23,
      "primaryCondition": "Gallstones",
      "confidence": "79%",
      "riskAssessment": "Moderate Risk",
      "riskDetails": "Can cause severe pain and complications if untreated.",
      "symptoms": ["sudden upper right abdominal pain", "back pain", "nausea", "vomiting", "jaundice"],
      "recommendations": [
        "Avoid fatty and greasy foods",
        "Manage pain with medication as advised",
        "Seek medical attention for severe or persistent pain",
        "Surgery (cholecystectomy) may be recommended",
        "Regular follow-ups with a gastroenterologist"
      ]
    },
    {
      "id": 24,
      "primaryCondition": "Cataracts",
      "confidence": "85%",
      "riskAssessment": "Low Risk",
      "riskDetails": "Common age-related eye condition affecting vision.",
      "symptoms": ["cloudy or blurry vision", "difficulty with night vision", "halos around lights", "fading colors"],
      "recommendations": [
        "Regular eye exams",
        "Protect eyes from UV light (sunglasses)",
        "Consider cataract surgery when vision significantly impaired",
        "Discuss options with an ophthalmologist"
      ]
    },
    {
      "id": 25,
      "primaryCondition": "Glaucoma",
      "confidence": "75%",
      "riskAssessment": "High Risk",
      "riskDetails": "Can lead to irreversible vision loss if untreated.",
      "symptoms": ["gradual vision loss (peripheral)", "eye pain", "redness", "halos around lights"],
      "recommendations": [
        "Regular comprehensive eye exams (especially for risk groups)",
        "Use prescribed eye drops diligently",
        "Adhere to treatment plan from an ophthalmologist",
        "Avoid activities that increase eye pressure (e.g., certain yoga poses)"
      ]
    },
    {
      "id": 26,
      "primaryCondition": "Thyroid Disorders (Hypothyroidism/Hyperthyroidism)",
      "confidence": "88%",
      "riskAssessment": "Moderate Risk",
      "riskDetails": "Requires lifelong management with medication.",
      "symptoms": ["fatigue", "weight changes", "mood changes", "hair loss", "sensitivity to cold/heat"],
      "recommendations": [
        "Regular blood tests to monitor thyroid hormone levels",
        "Take prescribed medication as directed",
        "Maintain a balanced diet",
        "Consult an endocrinologist for ongoing care",
        "Monitor for symptoms and report changes to doctor"
      ]
    },
    {
      "id": 27,
      "primaryCondition": "Irritable Bowel Syndrome (IBS)",
      "confidence": "83%",
      "riskAssessment": "Low Risk",
      "riskDetails": "Chronic condition affecting digestive system.",
      "symptoms": ["abdominal pain", "cramping", "bloating", "gas", "diarrhea or constipation"],
      "recommendations": [
        "Identify and avoid trigger foods (e.g., high FODMAPs)",
        "Manage stress levels",
        "Ensure adequate fiber intake",
        "Consider probiotics",
        "Consult a gastroenterologist for management strategies"
      ]
    },
    {
      "id": 28,
      "primaryCondition": "Chronic Obstructive Pulmonary Disease (COPD)",
      "confidence": "70%",
      "riskAssessment": "High Risk",
      "riskDetails": "Progressive lung disease, often due to smoking.",
      "symptoms": ["shortness of breath", "chronic cough", "wheezing", "chest tightness", "mucus production"],
      "recommendations": [
        "Quit smoking immediately",
        "Use prescribed bronchodilators and corticosteroids",
        "Engage in pulmonary rehabilitation",
        "Get vaccinated against flu and pneumonia",
        "Regular follow-ups with a pulmonologist"
      ]
    },
    {
      "id": 29,
      "primaryCondition": "Rheumatoid Arthritis",
      "confidence": "78%",
      "riskAssessment": "High Risk",
      "riskDetails": "Autoimmune disease causing joint inflammation and damage.",
      "symptoms": ["joint pain and swelling (symmetrical)", "stiffness (especially morning)", "fatigue", "fever"],
      "recommendations": [
        "Consult a rheumatologist for early diagnosis and treatment",
        "Take disease-modifying antirheumatic drugs (DMARDs) as prescribed",
        "Engage in physical therapy and occupational therapy",
        "Maintain a balanced diet and healthy weight",
        "Regular monitoring for disease activity"
      ]
    },
    {
      "id": 30,
      "primaryCondition": "Osteoporosis",
      "confidence": "81%",
      "riskAssessment": "Moderate Risk",
      "riskDetails": "Weakened bones leading to increased fracture risk.",
      "symptoms": ["often no symptoms until fracture", "back pain", "loss of height", "stooped posture"],
      "recommendations": [
        "Ensure adequate calcium and Vitamin D intake",
        "Engage in weight-bearing exercises",
        "Avoid smoking and excessive alcohol",
        "Consider bone-strengthening medications if prescribed",
        "Regular bone density scans"
      ]
    },
    {
      "id": 31,
      "primaryCondition": "Insomnia",
      "confidence": "87%",
      "riskAssessment": "Low Risk",
      "riskDetails": "Can affect quality of life and overall health.",
      "symptoms": ["difficulty falling asleep", "difficulty staying asleep", "waking too early", "daytime fatigue", "irritability"],
      "recommendations": [
        "Establish a consistent sleep schedule",
        "Create a relaxing bedtime routine",
        "Avoid caffeine and heavy meals before bed",
        "Ensure a dark, quiet, and cool sleep environment",
        "Consult a doctor if persistent; consider CBT-I"
      ]
    },
    {
      "id": 32,
      "primaryCondition": "Anemia (Iron Deficiency)",
      "confidence": "91%",
      "riskAssessment": "Low Risk",
      "riskDetails": "Common and treatable with iron supplementation.",
      "symptoms": ["fatigue", "weakness", "pale skin", "shortness of breath", "dizziness", "cold hands/feet"],
      "recommendations": [
        "Consult a doctor for diagnosis",
        "Take iron supplements as prescribed",
        "Include iron-rich foods in your diet (e.g., red meat, spinach)",
        "Consume Vitamin C to enhance iron absorption",
        "Identify and address underlying cause of deficiency"
      ]
    },
    {
      "id": 33,
      "primaryCondition": "Hemorrhoids",
      "confidence": "90%",
      "riskAssessment": "Low Risk",
      "riskDetails": "Common and often resolve with home remedies.",
      "symptoms": ["rectal bleeding", "itching", "pain or discomfort", "swelling around anus"],
      "recommendations": [
        "Increase fiber intake and fluid consumption",
        "Avoid straining during bowel movements",
        "Use over-the-counter creams or suppositories",
        "Take warm baths (sitz baths)",
        "Consult doctor if severe or bleeding persists"
      ]
    },
    {
      "id": 34,
      "primaryCondition": "Diverticulitis",
      "confidence": "77%",
      "riskAssessment": "Moderate Risk",
      "riskDetails": "Can lead to severe complications if untreated.",
      "symptoms": ["left lower abdominal pain", "fever", "nausea", "vomiting", "constipation or diarrhea"],
      "recommendations": [
        "Follow a clear liquid diet during flare-ups",
        "Take antibiotics as prescribed",
        "Gradually reintroduce low-fiber foods, then high-fiber",
        "Stay hydrated",
        "Seek medical attention for severe pain, fever, or bleeding"
      ]
    },
    {
      "id": 35,
      "primaryCondition": "Shingles",
      "confidence": "85%",
      "riskAssessment": "Low Risk",
      "riskDetails": "Painful rash caused by varicella-zoster virus.",
      "symptoms": ["pain", "burning", "numbness or tingling", "red rash", "fluid-filled blisters"],
      "recommendations": [
        "Consult a doctor for antiviral medication",
        "Keep the rash clean and dry",
        "Use pain relievers as needed",
        "Avoid contact with individuals who haven't had chickenpox or vaccine",
        "Consider shingles vaccine for prevention"
      ]
    },
    {
      "id": 36,
      "primaryCondition": "Plantar Fasciitis",
      "confidence": "89%",
      "riskAssessment": "Low Risk",
      "riskDetails": "Common cause of heel pain.",
      "symptoms": ["heel pain (especially in morning)", "pain after activity", "tenderness in arch of foot"],
      "recommendations": [
        "Rest the foot and avoid activities that worsen pain",
        "Apply ice to the affected area",
        "Perform stretching exercises for the foot and calf",
        "Wear supportive shoes with good arch support",
        "Consider physical therapy or custom orthotics"
      ]
    },
    {
      "id": 37,
      "primaryCondition": "Sciatica",
      "confidence": "82%",
      "riskAssessment": "Low Risk",
      "riskDetails": "Pain radiating along the sciatic nerve.",
      "symptoms": ["pain radiating from lower back to leg", "numbness", "tingling", "muscle weakness in leg/foot"],
      "recommendations": [
        "Apply ice or heat to the lower back",
        "Take over-the-counter pain relievers",
        "Engage in gentle stretching and low-impact exercise",
        "Consider physical therapy",
        "Consult a doctor if pain is severe or accompanied by weakness/numbness"
      ]
    },
    {
      "id": 38,
      "primaryCondition": "Carpal Tunnel Syndrome",
      "confidence": "84%",
      "riskAssessment": "Low Risk",
      "riskDetails": "Nerve compression in the wrist.",
      "symptoms": ["numbness or tingling in hand/fingers (thumb, index, middle)", "pain in wrist/hand", "weakness in hand"],
      "recommendations": [
        "Rest the hand and wrist",
        "Use a wrist splint, especially at night",
        "Avoid repetitive hand movements",
        "Perform hand and wrist stretches",
        "Consider physical therapy or corticosteroid injections"
      ]
    },
    {
      "id": 39,
      "primaryCondition": "Psoriasis",
      "confidence": "86%",
      "riskAssessment": "Low Risk",
      "riskDetails": "Chronic autoimmune skin condition.",
      "symptoms": ["red, scaly patches on skin", "itching", "dry, cracked skin", "thickened, pitted nails", "swollen joints"],
      "recommendations": [
        "Moisturize skin regularly",
        "Use topical corticosteroids or vitamin D analogs as prescribed",
        "Consider light therapy (phototherapy)",
        "Avoid triggers like stress and certain medications",
        "Consult a dermatologist for management"
      ]
    },
    {
      "id": 40,
      "primaryCondition": "Gingivitis",
      "confidence": "95%",
      "riskAssessment": "Low Risk",
      "riskDetails": "Reversible gum inflammation.",
      "symptoms": ["swollen, red, tender gums", "bleeding gums (especially when brushing)", "bad breath"],
      "recommendations": [
        "Brush teeth twice daily",
        "Floss daily",
        "Use an antiseptic mouthwash",
        "Schedule regular dental check-ups and cleanings",
        "Avoid smoking"
      ]
    },
    {
      "id": 41,
      "primaryCondition": "Periodontitis",
      "confidence": "70%",
      "riskAssessment": "Moderate Risk",
      "riskDetails": "Advanced gum disease leading to tooth loss.",
      "symptoms": ["swollen, red, bleeding gums", "receding gums", "loose teeth", "persistent bad breath", "pus between teeth and gums"],
      "recommendations": [
        "Seek immediate dental professional evaluation",
        "Undergo deep cleaning (scaling and root planing)",
        "Maintain meticulous oral hygiene",
        "Consider surgical interventions if necessary",
        "Regular follow-ups with a periodontist"
      ]
    },
    {
      "id": 42,
      "primaryCondition": "Chronic Kidney Disease (CKD)",
      "confidence": "75%",
      "riskAssessment": "High Risk",
      "riskDetails": "Progressive loss of kidney function.",
      "symptoms": ["fatigue", "swelling in legs/feet", "nausea", "loss of appetite", "changes in urination"],
      "recommendations": [
        "Manage blood pressure and diabetes diligently",
        "Follow a kidney-friendly diet (low sodium, phosphorus, potassium)",
        "Avoid NSAIDs and other kidney-damaging medications",
        "Regular follow-ups with a nephrologist",
        "Monitor kidney function tests"
      ]
    },
    {
      "id": 43,
      "primaryCondition": "Liver Cirrhosis",
      "confidence": "65%",
      "riskAssessment": "High Risk",
      "riskDetails": "Irreversible scarring of the liver.",
      "symptoms": ["fatigue", "nausea", "loss of appetite", "jaundice", "swelling in legs/ankles", "dark urine"],
      "recommendations": [
        "Abstain completely from alcohol",
        "Manage underlying causes (e.g., viral hepatitis, fatty liver)",
        "Follow dietary restrictions as advised by doctor",
        "Regular monitoring for complications",
        "Consult a hepatologist for ongoing care"
      ]
    },
    {
      "id": 44,
      "primaryCondition": "Stroke (Ischemic/Hemorrhagic)",
      "confidence": "60%",
      "riskAssessment": "Critical Risk",
      "riskDetails": "Medical emergency, can cause permanent disability or death.",
      "symptoms": ["sudden numbness/weakness (one side)", "confusion", "difficulty speaking/understanding", "trouble seeing", "sudden severe headache"],
      "recommendations": [
        "Seek emergency medical attention immediately (call local emergency services)",
        "Recognize FAST symptoms (Face drooping, Arm weakness, Speech difficulty, Time to call)",
        "Follow rehabilitation plan post-stroke",
        "Manage risk factors (blood pressure, diabetes, cholesterol, smoking)",
        "Adhere to prescribed medications (e.g., anticoagulants)"
      ]
    },
    {
      "id": 45,
      "primaryCondition": "Heart Attack (Myocardial Infarction)",
      "confidence": "62%",
      "riskAssessment": "Critical Risk",
      "riskDetails": "Life-threatening emergency due to blocked blood flow to the heart.",
      "symptoms": ["chest pain (pressure, tightness, squeeze)", "pain in arm, back, neck, jaw, stomach", "shortness of breath", "cold sweat", "nausea", "lightheadedness"],
      "recommendations": [
        "Seek emergency medical attention immediately (call local emergency services)",
        "Chew aspirin if instructed by emergency services",
        "Do not delay seeking help",
        "Adhere to post-attack medications and lifestyle changes",
        "Engage in cardiac rehabilitation"
      ]
    },
    {
      "id": 46,
      "primaryCondition": "Congestive Heart Failure (CHF)",
      "confidence": "70%",
      "riskAssessment": "High Risk",
      "riskDetails": "Chronic condition where heart can't pump enough blood.",
      "symptoms": ["shortness of breath", "fatigue", "swelling in legs/ankles/feet", "rapid weight gain", "coughing/wheezing"],
      "recommendations": [
        "Monitor fluid intake and sodium restriction",
        "Take prescribed medications (diuretics, ACE inhibitors, beta-blockers)",
        "Weigh yourself daily to detect fluid retention",
        "Regular follow-ups with a cardiologist",
        "Engage in light physical activity as tolerated"
      ]
    },
    {
      "id": 47,
      "primaryCondition": "HIV/AIDS",
      "confidence": "80%",
      "riskAssessment": "High Risk",
      "riskDetails": "Chronic, progressive viral infection requiring lifelong treatment.",
      "symptoms": ["fever", "fatigue", "swollen lymph nodes", "sore throat", "rash", "weight loss", "night sweats"],
      "recommendations": [
        "Adhere strictly to antiretroviral therapy (ART)",
        "Regular medical check-ups and viral load monitoring",
        "Practice safe sex to prevent transmission",
        "Maintain a healthy lifestyle (nutrition, exercise)",
        "Seek support from healthcare providers and support groups"
      ]
    },
    {
      "id": 48,
      "primaryCondition": "Tuberculosis (TB)",
      "confidence": "78%",
      "riskAssessment": "Moderate Risk",
      "riskDetails": "Bacterial infection, highly contagious if active.",
      "symptoms": ["chronic cough (often with blood)", "chest pain", "fever", "night sweats", "weight loss", "fatigue"],
      "recommendations": [
        "Complete the full course of antibiotics, even if feeling better",
        "Isolate yourself during the infectious period",
        "Cover mouth and nose when coughing or sneezing",
        "Ensure proper ventilation in living spaces",
        "Regular follow-ups with a healthcare provider"
      ]
    },
    {
      "id": 49,
      "primaryCondition": "Measles",
      "confidence": "90%",
      "riskAssessment": "Moderate Risk",
      "riskDetails": "Highly contagious viral disease, preventable by vaccine.",
      "symptoms": ["fever", "cough", "runny nose", "red, watery eyes", "rash (red, blotchy)"],
      "recommendations": [
        "Isolate affected individual to prevent spread",
        "Rest and stay hydrated",
        "Use fever reducers as needed",
        "Protect eyes from bright light",
        "Ensure vaccination for prevention"
      ]
    },
    {
      "id": 50,
      "primaryCondition": "Chickenpox (Varicella)",
      "confidence": "92%",
      "riskAssessment": "Low Risk",
      "riskDetails": "Highly contagious viral infection, typically mild.",
      "symptoms": ["itchy rash (blisters)", "fever", "fatigue", "loss of appetite", "headache"],
      "recommendations": [
        "Avoid scratching blisters to prevent infection and scarring",
        "Use calamine lotion or oatmeal baths to relieve itching",
        "Stay hydrated",
        "Avoid contact with others until all blisters have crusted over",
        "Consider vaccination for prevention"
      ]
    }
    
];

export default diseasesData