# TalentForge AI

TalentForge AI is an AI-powered career intelligence platform designed for students and job seekers. The platform leverages AI to analyze resumes, optimize them for Applicant Tracking Systems (ATS), conduct text- and voice-based mock interviews, and provide personalized career roadmaps and semantic job matching.

## Architecture & Technology Stack

The platform is designed as a **Modular Monolith** consisting of:
- **Frontend**: Next.js & TypeScript
- **Backend**: FastAPI & Python
- **Database**: PostgreSQL & `pgvector`
- **Infrastructure**: Redis, Background workers, & AWS S3
- **AI Integration**: OpenAI GPT, OpenAI Whisper, Embeddings, & RAG

For detailed development constraints, coding practices, and scope boundaries, refer to the [PROJECT_RULES.md](file:///c:/Users/acer/OneDrive/Documents/Development/TalentForge/PROJECT_RULES.md) file.

## Repository Structure

```text
talentforge/
├── frontend/             # Next.js & TypeScript frontend application code (initialized in future phases)
├── backend/              # FastAPI & Python backend application code (initialized in future phases)
├── documentation/        # Project documentation
│   ├── architecture/     # Architectural details and design docs
│   ├── database/         # Database models, schemas, and migrations
│   ├── api/              # API specs and endpoints documentation
│   ├── flows/            # User flows and application workflows
│   ├── diagrams/         # Visual representations and diagrams
│   └── decisions/        # Architecture Decision Records (ADRs)
├── PROJECT_RULES.md      # Core guidelines and development rules
├── README.md             # Project overview and repository map
└── .gitignore            # Git ignore configurations
```
