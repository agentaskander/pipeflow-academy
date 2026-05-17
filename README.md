# PipeFlow Academy

Domain: `pipeflowacademy.com`

Positioning: **Training the Next Generation of Infrastructure Professionals.**

PipeFlow Academy is the training brand for practical skilled-trade and infrastructure careers across plumbing, electrical, HVAC/cooling, datacenter infrastructure, facilities maintenance, apprenticeships, field labs, and AI-assisted learning.

## Architecture

- React + TypeScript + Vite
- Tailwind CSS
- Local curriculum seed data
- Static frontend MVP
- No backend, learner database, payment system, NAS connection, paid API, or public exposure

## Routes

- `/`
- `/learn`
- `/certifications`
- `/skills`
- `/apprenticeships`
- `/electrical`
- `/plumbing`
- `/hvac`
- `/datacenter`
- `/field-labs`
- `/ai-tools`
- `/instructors`
- `/business`
- `/admin`

## Curriculum Structure

Seed curriculum lives in `src/data/curriculum.ts`.

Each course includes:

- modules
- lessons
- practical checklists
- quizzes
- skill mapping
- certification mapping
- safety warnings
- required tools

Full sample programs:

- Plumbing Foundations
- Residential Plumbing
- Drain Cleaning
- Electrical Foundations
- Commercial Electrical
- HVAC Cooling Systems
- Datacenter Cooling Basics
- Facilities Maintenance Fundamentals

## Datacenter Specialization

The `AI Infrastructure Systems` learning track covers:

- cooling systems
- thermal management
- chilled water systems
- pumps
- redundancy
- uptime
- emergency response
- facilities operations
- electrical distribution
- maintenance workflows

## Edge AI Roadmap

Future Academy AI tools may include manual summarization, quiz generation, equipment-photo identification, procedure retrieval, skill-gap recommendations, safety prompts, and diagnostic practice flows. Keep AI local-first where possible and avoid uploading sensitive customer, facility, or infrastructure data into unapproved systems.

## Robotics Roadmap

Academy curriculum can later support robotics-assisted field work training:

- AI copilots
- computer vision inspection
- AR-assisted workflows
- inspection robots
- semi-autonomous infrastructure assistants

## Deployment

Local first:

```bash
npm install
npm run dev
npm run build
```

Security warnings:

- Never expose Synology admin UI publicly.
- Do not expose the NAS directly.
- Use HTTPS.
- Use MFA.
- Use a reverse proxy.
- Use firewall rules.
- Keep DSM and dependencies updated.
- Use backups and test restore.
- Put secrets in `.env`, never in git.
- Consider Cloudflare Tunnel, Tailscale, or VPN before direct public hosting.

## Credential Disclaimer

Certificates are training credentials unless/until aligned with local licensing, apprenticeship, state, county, or municipal trade requirements.

## Future Enterprise Direction

PipeFlow Academy can feed PipeFlow Systems by producing verified workforce skill data, practical checkoffs, employer onboarding records, course completion history, certification readiness, and career pathway analytics.
