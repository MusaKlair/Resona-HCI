# Resona: UI/UX Vibe & Development Context Guide

## 1. Project Goal & Domain
**Project Name:** Resona
**Domain:** Academic Research Networking & Collaboration Platform. 
**Core Features:** Resona facilitates academic matchmaking, mentorship, open research problem boards, funding/grant directories, and integrated collaborative workspaces.
**Vibe Description:** We are building the frontend based EXACTLY on the provided visual reference (`eduplay.buzzbee.site_.jpg` and related vibe attachments). The aesthetic must feel clean, educational, accessible, and modern—striking a balance between professional academic rigor and highly engaging, modern web design.
**Agent Mandate:** When generating UI, always cross-reference the layout, spacing, and emotional tone of the provided image. Do not invent competing design systems. The platform must feel cohesive across all 12 planned screens (from Auth to the Collaboration Workspace).

## 2. Tech Stack & Architecture
- **Framework:** Next.js (App Router) / React
- **Styling:** Tailwind CSS 
- **Icons:** Lucide React
- **State Management:** React Hooks (`useState`, `useReducer` for multi-step flows like the Onboarding Wizard).
- **Components:** Modular, single-responsibility functional components.

## 3. Design System (Strict Adherence)
*Agent Instructions: Analyze the reference image to extract and enforce the following across the entire Resona application:*
- **Color Palette:** Extract the exact hex codes for Primary, Secondary, Background, and Accent colors from the image. Configure these in `tailwind.config.ts`. (e.g., Use primary colors for primary actions like "Send OTP" or "Post a Problem", and subtle background colors for the "Unified Funding Board" or "Personalized Home Feed").
- **Typography:** Use highly legible, modern sans-serif fonts (e.g., Inter, Roboto, or Poppins). Respect visual hierarchy: strong H1s for page titles (e.g., "Intelligent Matching Hub"), clear H2s for card titles (e.g., Publication names), and highly readable body text for abstracts.
- **Borders & Shadows:** Notice the specific border-radius in the reference (e.g., card rounding for the "Problem Post Cards" or "Researcher Match Cards") and shadow depths. Apply them uniformly to create a soft, elevated feel.
- **Spacing:** Maintain generous, consistent padding and margins (use Tailwind's `p-4`, `p-6`, `gap-4`, `gap-6`). Academic content can be dense; utilize whitespace effectively in the "Content Detail View" and "Profile Dashboard" to prevent cognitive overload.

## 4. Agent Coding Rules (CRITICAL)
1. **No Dummy Code:** Output complete, functional code. Do not use `// ... rest of code` or `// implement logic here`. 
2. **Modular File Structure:** Break down complex pages into smaller, reusable components (e.g., `MentorshipRequestModal.tsx`, `PublicationCard.tsx`, `MatchingBadge.tsx`).
3. **Data Mocking:** Since there is no backend connected yet, use robust, realistic academic mock data (e.g., real-sounding research paper titles, ORCID integrations, realistic tags like "Quantum Computing" or "NLP") to properly test component sizing and text wrapping.
4. **Responsive First:** All components must be built mobile-first and look perfect on `sm:`, `md:`, and `lg:` breakpoints. The "Integrated Collaborative Workspace" and "Credibility Dashboard" must degrade gracefully on smaller screens.
5. **Visual Verification:** Use your browser-in-the-loop capability to render the component, take a screenshot artifact, and self-correct your Tailwind classes if they do not match the reference image before presenting the final code.

## 5. System Map (For Context)
*Agents should be aware of the following UI flows to maintain consistent state and navigation patterns:*
1. Auth & Registration -> 2. Onboarding Wizard -> 3. Personalized Home Feed -> 4. User Profile & Credibility Dashboard -> 5. Intelligent Matching Hub -> 6. Mentorship Inbox -> 7. Open Problem Board -> 8. Funding/Grant Board -> 9. Upload Wizard -> 10. Content Detail View -> 11. Collaborative Workspace -> 12. Project Conclusion Rating.