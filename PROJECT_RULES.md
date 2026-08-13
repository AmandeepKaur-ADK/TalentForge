# TalentForge AI - Project Rules

## 1. Project Purpose

TalentForge AI is an AI-powered career intelligence platform designed for students and job seekers. It aims to streamline career readiness and job matching through tools like resume analysis, text- and voice-based mock interviews, semantic job matching, and a personalized career roadmap assistant.

## 2. Architecture

- **Pattern**: Modular Monolith.
- **Components**:
  - One Next.js frontend application (`frontend/`).
  - One FastAPI backend application (`backend/`).
- **No Microservices**: The application must remain unified; do not split into microservices or distributed architectures.
- **Backend Modular Design**: The backend will eventually organize business logic into specific modules including:
  - `auth` (Authentication and token verification)
  - `users/profile` (User profile management)
  - `resumes` (Resume upload, parsing, analysis, and optimization)
  - `interviews` (Mock interviews and evaluation)
  - `jobs` (Job search, filtering, and matching)
  - `career` (Personalized roadmap generation)
  - `rag` (Knowledge retrieval and career assistant utilities)
  - `ai` (Centralized OpenAI integration)
  - `storage` (S3/storage abstraction)
  - `workers` (Background task processing using Redis-backed workers)
  - `common` (Shared models, dependencies, schemas, and utility functions)
  - The entire system must remain simple, flat, and highly understandable.

## 3. Technology Stack

- **Frontend**: Next.js, TypeScript.
- **Backend**: FastAPI, Python.
- **Database**: PostgreSQL with `pgvector` for vector similarity searches.
- **Infrastructure**: Redis (for queuing/caching), background workers, AWS S3.
- **AI/ML**: OpenAI GPT (for text generation and resume/interview evaluations), OpenAI Whisper (for audio transcription), Embeddings, and Retrieval-Augmented Generation (RAG).
- **Authentication**: JSON Web Tokens (JWT) and Google OAuth 2.0.
- **Containerization**: Docker (for development and deployment consistency).

## 4. MVP Scope

The Minimum Viable Product (MVP) is limited to the following core capabilities:

1. **Authentication**: JWT-based email/password login and Google OAuth integration.
2. **User Profile**: Basic account settings and profile information.
3. **Resume Upload**: Storing uploaded documents securely.
4. **ATS Resume Analysis**: Evaluation of resumes against standard criteria.
5. **Resume Optimization**: Actionable suggestions to improve resumes.
6. **Text-based Mock Interviews**: Interactive chat-based practice interviews.
7. **Voice-based Mock Interviews**: Speech-to-text-based interactive practice.
8. **Basic Speech Analysis**: Elementary calculations of metrics from voice input.
9. **Job Search and Filtering**: Standard keyword and parameter search.
10. **Semantic Job Matching**: AI-based matching using vector search.
11. **Personalized Career Roadmap**: Interactive step-by-step career path planner.
12. **RAG-powered Career Assistant**: Direct chat interface using local knowledge documents.
13. **Career Dashboard**: Consolidated tracking view for the user's progress.

## 5. Explicit Out-of-Scope Features

Do **NOT** implement the following under any circumstances for the MVP:

- Microservices or distributed service orchestration.
- Resume version history (keep to single/current active resume per user profile).
- Live job aggregation / scraping (use a seeded, static import database).
- Administrative/Admin panels.
- Advanced emotion or sentiment detection from audio.
- Advanced speech machine learning models.
- Complex notification systems.
- Complex event-driven architectures.
- Unnecessary third-party integrations or analytics platforms.

## 6. Key Product & Technical Decisions

- **Jobs Dataset**: Work with a manageable, imported/seeded dataset. Enable basic filters (title, location, type) and semantic matching using database vector search (`pgvector`).
- **Voice Interview Flow**:
  1. The user records audio in the frontend.
  2. The recorded audio file is sent to the backend and stored in AWS S3.
  3. The backend calls OpenAI Whisper to transcribe the audio into text.
  4. Basic speech metrics (e.g., duration, word count) are computed.
  5. OpenAI GPT evaluates the transcript text and provides structured feedback.
  6. Feedback and evaluation metrics are saved to the database and returned to the user.
- No complex or custom speech-analysis ML pipelines should be designed.
- **Background Workers**: Use Redis-backed background processing for operations that should not block API requests. The specific worker library will be selected before implementation and must remain simple and compatible with the existing architecture.

## 7. AI Development Rules

1. **Work Phase by Phase**: Execute only the scope of the current phase. Do not begin implementation of future phases without explicit user instruction.

2. **Never Autonomously Expand Scope**: Do not interpret "build TalentForge" as permission to implement the entire project.

3. **Inspect Before Modifying**: Always read and verify relevant existing files before suggesting or applying changes.

4. **Targeted Edits**: Only modify files directly related to the task. Do not make cosmetic changes to unrelated files.

5. **Architectural Approval**: Do not change the module layout, database choice, service layout, API contracts, or major architectural decisions without explicit approval.

6. **No Rogue Dependencies**: Do not introduce libraries, packages, infrastructure, external services, or technologies outside the approved stack without explicit approval.

7. **Prefer Simplicity**: Favor simple, standard, clean code over clever patterns, deep abstractions, or excessive boilerplate.

8. **Avoid Unnecessary Abstractions**: Do not wrap standard library or framework functionality in complex custom abstractions unless they provide a clear reusable purpose.

9. **Thin Controllers/Routes**: Keep API endpoints thin. Delegate business logic to services or appropriate modules.

10. **Service-Layer Dominance**: Business rules should live in dedicated service layers or domain modules rather than route handlers.

11. **Isolated AI Integrations**: Keep calls to OpenAI, Whisper, embeddings, and related AI providers inside the centralized AI integration layer.

12. **Isolated Storage**: Keep AWS S3 and file operations encapsulated within the storage module.

13. **Single Source of Truth for Logic**: Do not duplicate business logic, validation rules, or calculations between frontend and backend.

14. **Stable API Contracts**: Do not modify API routes, parameters, or response structures without updating the relevant documentation and verifying compatibility.

15. **Preserve Functionality**: Do not delete or replace existing functionality unrelated to the current task. If existing code must be removed or replaced as part of the current task, explain why and keep the change scoped.

16. **Ask on Ambiguity**: If an instruction or requirement is unclear, do not guess. Ask for clarification or explicitly identify the ambiguity before making an architectural decision.

17. **Continuous Verification**: Run relevant unit tests, integration tests, type checks, linting, and other appropriate validation after code changes. Run the full relevant test suite at the completion of a major phase.

18. **Changelog Transparency**: At the end of every task, report exactly what files were created, modified, or deleted, what was implemented, and what validation was performed.

## 8. Documentation Rules

- **Approved Design vs Implementation**: Documentation may contain approved architectural specifications and designs for features that have not yet been implemented.

- **Implementation Accuracy**: Documentation must never claim that an unimplemented feature is already working.

- **Keep Documentation Updated**: When implementation is completed, documentation should be updated to accurately reflect the implemented behavior.

- **Architecture Changes**: If implementation differs from an approved design, do not silently change the architecture. Record or update the relevant architectural decision after approval.

- **No Redundancy**: Avoid duplicating the same information across README.md, PROJECT_RULES.md, and detailed documentation.

- **Focused Documents**: Each documentation file should have one clear purpose.

- **Utility Diagrams**: Create diagrams only when they communicate useful architecture, relationships, data flow, or important sequences.

Important diagrams may include:

- System Architecture
- Entity Relationship Diagram (ERD)
- Data Flow Diagram (DFD)
- Crucial Sequence Diagrams
- AI/RAG Retrieval Architecture
