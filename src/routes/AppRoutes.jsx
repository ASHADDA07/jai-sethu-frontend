import { Routes, Route, Navigate } from "react-router-dom";

import Intro from "../pages/Intro.jsx";
import TalkToFounder from "../pages/common/TalkToFounder.jsx";
import ChatHome from "../pages/chat/ChatHome";
import CaseChat from "../pages/chat/CaseChat";


// Role dashboards
import Public from "../pages/Public.jsx";
import Student from "../pages/Student.jsx";
import Lawyer from "../pages/Lawyer.jsx";

// Public subscreens
import PublicAI from "../pages/public/PublicAI.jsx";
import PublicLawyers from "../pages/public/PublicLawyers.jsx";
import PublicCases from "../pages/public/PublicCases.jsx";
import PublicEvidence from "../pages/public/PublicEvidence.jsx";
// Student subscreens
import StudentConstitution from "../pages/student/StudentConstitution.jsx";
import StudentJudgments from "../pages/student/StudentJudgments.jsx";
import StudentSections from "../pages/student/StudentSections.jsx";
// Lawyer subscreens
import LawyerIntake from "../pages/lawyer/LawyerIntake.jsx";
import LawyerAssistant from "../pages/lawyer/LawyerAssistant.jsx";
import LawyerDrafts from "../pages/lawyer/LawyerDrafts.jsx";
import LawyerOverview from "../pages/lawyer/LawyerOverview.jsx";


export default function AppRoutes() {
  return (
    <Routes>
      {/* Landing */}
      <Route path="/" element={<Intro />} />

      {/* Role Dashboards */}
      <Route path="/public" element={<Public />} />
      <Route path="/student" element={<Student />} />
      <Route path="/lawyer" element={<Lawyer />} />

      {/* PUBLIC subscreens */}
      <Route path="/public/ai" element={<PublicAI />} />
      <Route path="/public/lawyers" element={<PublicLawyers />} />
      <Route path="/public/cases" element={<PublicCases />} />
      <Route path="/public/evidence" element={<PublicEvidence />} />
            {/* STUDENT subscreens */}
      <Route path="/student/constitution" element={<StudentConstitution />} />
      <Route path="/student/judgments" element={<StudentJudgments />} />
      <Route path="/student/sections" element={<StudentSections />} />
      <Route path="/student/notes" element={<StudentNotes />} />
            {/* LAWYER subscreens */}
      <Route path="/lawyer/intake" element={<LawyerIntake />} />
      <Route path="/lawyer/assistant" element={<LawyerAssistant />} />
      <Route path="/lawyer/drafts" element={<LawyerDrafts />} />
      <Route path="/lawyer/overview" element={<LawyerOverview />} />

      <Route path="/founder" element={<TalkToFounder />} />

<Route path="/chat" element={<ChatHome />} />
<Route path="/chat/:caseId" element={<CaseChat />} />




      {/* fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
