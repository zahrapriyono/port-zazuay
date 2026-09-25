# **PROJECTS**

## **1\. GlucoSense**

_\[Self-reported — personal project, no formal documentation exists\]_

### **Elevator Pitch**

A locally-deployed web platform built to help people genuinely understand diabetes — not just through static awareness content, but through an AI chatbot that directly answers the questions people most commonly worry about regarding the condition, with support for the mixed English-Indonesian phrasing common in the developer's environment.

### **1\. Core Features & Functionality**

- Web-based educational platform on diabetes.
- RAG-based AI chatbot (via Groq API) answering user questions about diabetes, built to handle natural code-mixed English/Indonesian input.
- Chat history and user assessment history storage.

### **2\. Technical Architecture**

- **Backend:** Django \+ REST API — chosen for existing team familiarity.
- **AI/Chatbot:** RAG-based chatbot using the Groq API, selected specifically to reliably handle mixed-language (English/Indonesian) user input.
- **Database:** Supabase, chosen by the co-developer to store chat history and user assessment history.

### **3\. Team & Role**

- Team of 2\. Self-initiated (not a class assignment).
- Role: Team Lead — owned the AI/chatbot build end-to-end (model integration, API work, data collection) plus the frontend.

### **4\. Technical Stack**

- Django, REST API, Groq API, Supabase.

### **5\. Project Status**

- Built June (2nd week) – August (last week) 2026\. Deployed **locally only** — not live, not promoted publicly. No performance metrics or user testing were conducted; this was a personal build, not a measured study.

---

## **2\. Bug-Severity-Classification (Buginator)**

_\[Verified against GitHub repository, September 2026\]_

### **Elevator Pitch**

Buginator is an NLP system that automatically classifies GitHub issue reports into Critical / Non-Critical severity to reduce manual triage overhead in large open-source repositories — validated against classical ML baselines and deployed as a working Streamlit application.

### **1\. Core Features & Functionality**

- Binary severity classification of raw GitHub issue text (Critical / Non-Critical), using a rule-based mapping where original Major/Minor labels were merged into Non-Critical.
- Real-time classification via a Streamlit web app ("Buginator").
- Full comparative dashboard across three ML algorithms.

### **2\. Machine Learning Architecture**

- **Preprocessing:** 13-stage pipeline — lowercasing, URL/email/code-snippet/stack-trace/HTML removal, tokenization, stopword removal, lemmatization.
- **Feature engineering:** TF-IDF (unigrams–trigrams, max\_features=10000, min\_df=5, max\_df=0.8).
- **Models benchmarked:**

| Model                   | Accuracy   | Critical F1 |
| ----------------------- | ---------- | ----------- |
| Logistic Regression     | 85.66%     | 0.87        |
| Multinomial Naive Bayes | 78.16%     | 0.79        |
| **SVM (best)**          | **93.48%** | **0.94**    |

- **Best model (SVM) per-class breakdown:** Critical — Precision 0.99, Recall 0.90, F1 0.94; Non-Critical — Precision 0.87, Recall 0.99, F1 0.93.

### **3\. Dataset**

- Hugging Face `sharjeelyunus/github-issues-dataset`, \~114,000 raw issue reports; final cleaned corpus of 112,264 entries after duplicate removal.

### **4\. Team & Role**

- Team of 5 (Angelina Jolie Candaya, Joshua Kevin Liem, Maureen Calista Surjo, Nicholas Hubert Soegihono, Zahra Zakiyyah Priyono).
- Coursework, Semester 4 (Feb–Jun 2026).
- Role: Project Leader and Report Writer; built the initial ML pipeline (Logistic Regression, Naive Bayes).

### **5\. Technical Stack**

- Python, Scikit-Learn, NLTK, Pandas, NumPy, Matplotlib, Seaborn, Streamlit.

### **6\. Project Status**

- Completed. Deployed as a working Streamlit app intended for real-world use by dev teams triaging incoming issues.

---

## **3\. Emotion-Classification-in-E-Commerce**

_\[Verified against GitHub repository, September 2026 — see prior corrected draft\]_

### **Elevator Pitch**

A comparative NLP study benchmarking three architectures — XLM-RoBERTa, IndoBERT, and BiLSTM+FastText — for classifying emotion in Indonesian-language e-commerce reviews, aimed at real-world applications like automated customer sentiment monitoring.

### **1\. Core Features & Functionality**

- Multi-class emotion classification (Anger, Fear, Happy, Love, Sadness) on Indonesian product reviews.
- Full comparative benchmark of three distinct NLP architectures.

### **2\. Machine Learning Architecture**

- **XLM-RoBERTa** — multilingual transformer baseline, 5 epochs, weighted loss.
- **IndoBERT** — Indonesian-pretrained transformer, best performer.
- **BiLSTM \+ FastText** — sequential baseline with Indonesian FastText embeddings.

| Model               | Accuracy   | Weighted F1 | Macro F1   |
| ------------------- | ---------- | ----------- | ---------- |
| XLM-R               | 70.72%     | 70.82%      | 68.45%     |
| **IndoBERT (best)** | **72.05%** | **71.60%**  | **68.78%** |
| BiLSTM+FastText     | 57.60%     | 57.74%      | 53.80%     |

- Weakest class across all models: _Fear_ (BiLSTM+FastText F1 \= 0.28). Strongest: _Happy_.

### **3\. Dataset**

- PRDECT-ID (Tokopedia reviews, expert-annotated), 29 product categories, CC BY 4.0. Test set n=526.

### **4\. Team & Role**

- Coursework, Semester 4\.
- Role: Project Leader, Code Builder, Report Writer — led data/preprocessing, model engineering (with Angelina Jolie Candaya), and evaluation; documentation with Angelina and Maureen Calista Surjo.

### **5\. Technical Stack**

- HuggingFace Transformers, PyTorch, Scikit-learn, Pandas, NumPy, Matplotlib, FastText.

### **6\. Project Status**

- Completed. Full notebook pipeline (EDA → preprocessing → 3 models → comparison).

---

## **4\. Schola-System**

_\[Caution: core description confirmed by repo; scale/tech details below are from proposal/design documentation, NOT verified against the live codebase\]_

### **Elevator Pitch**

A centralized web platform addressing fragmented scholarship information and inefficient manual application processes, giving students smart search/filtering and application tracking in one place.

### **1\. Core Features & Functionality**

- Smart keyword search and filtering (deadline, academic level, country).
- Personalized scholarship recommendations.
- Online application submission with auto-saved documents/motivation letters.
- Real-time applicant-facing dashboard for tracking selection stages.
- Admin-side scholarship CRUD and hierarchical admin/super-admin roles.

### **2\. Technical Architecture _(per proposal documentation — not independently verified)_**

- Three-tier architecture: Presentation / Application / Database layers.
- **Backend:** Django.
- **Frontend:** HTML, CSS, JavaScript, Figma-designed UI.
- Relational database, cloud storage, custom email notifications, 2FA — as specified in proposal; the public repository README does not itself confirm these implementation details.

### **3\. Scale _(explicitly design/proposal projections, not live usage data)_**

- \~124 listed active scholarship programs, 8,432 total applicants (2,840 in one active cycle), 47 pending document reviews at a given time.

### **4\. Team & Role**

- Coursework, Semester 4, under the PKM-KC (Program Kreativitas Mahasiswa – Karsa Cipta) 2026 initiative.
- Role: Project Leader, Report Writer, Backend Developer.

### **5\. Project Status**

- Per proposal: completed functional prototype, with codebase, UML models, UI designs, test cases, and demo videos finalized. _This status claim is from your own documentation, not something I could verify independently from the public repo, which currently shows minimal README content._

---

## **5\. StressPredict (Predictive Student Stress ML)**

_\[Caution: content below is from a project README you provided directly — I could NOT independently locate or confirm this repository via GitHub search, and the deployed app link blocks automated verification. Treat all figures as self-reported, not repo-verified, unlike Bug-Severity-Classification and Emotion-Classification above. One inconsistency found: a similarly-named "Student Mental Health and Burnout" Kaggle dataset I located elsewhere lists 150,000 records, not the 1,000,000 claimed here — this may be a different/updated dataset version, or may indicate the figure is inflated. Unresolved.\]_

### **Elevator Pitch**

An AI-powered web platform that classifies university students' stress level (Low / Moderate / High) from academic, lifestyle, and mental-health survey data, using a LightGBM model, and pairs the prediction with AI-generated (Groq) trigger identification and counselor-style recommendations.

### **1\. Core Features & Functionality**

- Stress-level classification (Low/Moderate/High) with a model confidence score.
- Automatic identification of the top contributing stress factors per user.
- AI-generated (Groq-powered) personalized preventive recommendations.
- Quick-reset re-assessment flow.

### **2\. Machine Learning Architecture**

- **Task:** 3-class classification.
- **Final model:** LightGBM (`max_depth=10`, `learning_rate=0.05`, `n_estimators=500`, `class_weight=balanced`), selected over Logistic Regression, Random Forest, SVM, and XGBoost after benchmarking (LightGBM and XGBoost performed comparably; LightGBM chosen for more stable decision boundaries on the ambiguous "Moderate" class).
- **Reported test performance:** 75.51% accuracy, 75.69% Macro F1, 90.73% ROC-AUC. Per-class F1: Low 0.81, Moderate 0.65, High 0.81 — the model struggles most distinguishing "Moderate" from its neighboring classes.
- **Features:** 16 of 20 available features used, spanning academic, mental health, lifestyle, and socioeconomic dimensions.
- **Acknowledged limitations (per the README itself):** the underlying dataset is likely synthetic (smooth, near-perfectly balanced distributions); stress categories are defined by tertile splits of a continuous score rather than clinically validated thresholds — i.e., "High stress" here means "top third of this dataset," not a clinical diagnosis.

### **3\. Dataset**

- Kaggle: "Student Mental Health and Burnout" — stated as 1,000,000 records / 20 features _(see verification caveat above)_.

### **4\. Team & Role**

- Coursework, Semester 4\. Team of 3: Grace Heidy Christania, Zahra' Zakiyyah Priyono, Raynaldo Winson Amadeus Kusuma.
- Your role: EDA, preprocessing, ML modeling, final report slides, user testing.

### **5\. Technical Stack**

- Python 3.12+, Pandas, Scikit-Learn, LightGBM, FastAPI, Streamlit, Docker, Groq AI Infrastructure.

### **6\. Project Status**

- Stated as live and deployed at a Streamlit URL provided by you. I was unable to load this URL myself (site blocks automated access) to confirm it's live and matches this description.

---

### **Summary of what's ready**

- **Ready to use as-is, fully verified:** Bug-Severity-Classification, Emotion-Classification-in-E-Commerce.
- **Usable with honest framing:** GlucoSense (no metrics, by design), Schola-System (clearly labeled proposal-stage numbers).
- **Usable with a caveat:** StressPredict — internally consistent and plausible, but not independently confirmed the way the top two projects were. If asked detailed questions about it (e.g., by an interviewer), be prepared to speak to these numbers from direct memory, not just the written summary, since I couldn't verify them on your behalf.
