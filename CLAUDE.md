# CLAUDE.md - AI Assistant Guide for CT_KG Repository

**Repository**: CT_KG (Cell Therapy Knowledge Graph)
**Owner**: Ray Chen, Associate Director, Digital & Data Science
**Type**: Knowledge Repository / Documentation
**Last Updated**: 2025-12-27

---

## Repository Overview

This is a **knowledge repository** for cell therapy research, gene editing technologies, and pharmaceutical data science initiatives. It contains documentation, research notes, and strategic planning documents across three main domains.

### Purpose

CT_KG serves as a centralized knowledge base for:
- Cell therapy manufacturing research
- Gene editing delivery method analysis
- Image analysis research for biotech applications
- Digital transformation initiatives in pharmaceutical development
- Technical documentation for AI/ML projects in cell therapy

---

## Repository Structure

```
CT_KG/
├── AAV_Delivery_RSH/          # AAV delivery systems research
│   ├── AAV-Mediated HDR Mechanism: Deep Dive.md
│   ├── AAV_non-AAV_Discussion.md
│   └── comparing AAV and CRISPR.md
├── Bead_Image_RD/             # Bead detection image analysis
│   └── intro.md
├── SYNERGY/                   # AstraZeneca data integration initiative
│   ├── AI-project-idea.md
│   ├── analytical_science_data_science_projects.md
│   ├── cell_therapy_synergy_projects.md
│   ├── current_FDA_position_AI_CT.md
│   ├── synergy_idea.md
│   ├── synergy_idea_deep_dive.md
│   └── talkpoint.md
└── CLAUDE.md                  # This file
```

---

## Domain Areas Explained

### 1. AAV_Delivery_RSH

**Focus**: Gene editing delivery mechanisms for CAR-T cell therapy

**Key Topics**:
- AAV6 (Adeno-Associated Virus) as donor template delivery system
- HDR (Homology-Directed Repair) mechanisms
- Comparison of AAV vs non-AAV delivery methods (plasmid DNA, ssDNA oligos)
- CRISPR-Cas9 integration with AAV delivery
- Process parameters: MOI, timing, homology arm length
- Competitive DNA repair pathways (NHEJ vs HDR vs MMEJ)

**Technical Context**:
- Target locus: TRAC (T Cell Receptor Alpha Constant)
- Typical HDR efficiency: 15-60% depending on method
- Cell viability considerations: AAV (80-95%) vs dsDNA electroporation (40-60%)
- Insert size effects on efficiency
- ssDNA with CTS (Cas-target-sequences) as emerging alternative

**When to work on these files**:
- Comparing gene editing delivery methods
- Documenting cell therapy manufacturing processes
- Analyzing HDR efficiency data
- Planning GMP manufacturing strategies

### 2. Bead_Image_RD

**Focus**: Computer vision for microscopy bead detection

**Key Topics**:
- Hemocytometer image analysis
- Low-contrast bead detection (5-10 intensity units above background)
- Chromatic aberration artifacts on grid lines
- ML approaches: BeadNet, YOLOv8, U-Net architectures
- Classical methods: Watershed, Otsu thresholding, LoG detection
- Feature-based classification (Random Forest with multi-scale filters)

**Technical Context**:
- Challenge: Extremely faint beads vs noisy background
- Recommended approaches: Multi-scale feature extraction, upsampling preprocessing
- Minimal training data requirements (<0.20% pixels for Random Forest)
- YOLO labeling workflows for object detection

**When to work on these files**:
- Image analysis project planning
- Research literature review on particle detection
- Implementing computer vision pipelines

### 3. SYNERGY

**Focus**: Enterprise data integration platform for pharmaceutical analytical operations at AstraZeneca

**Key Technologies**:
- Benchling (Scientific data management platform)
- Snowflake (Cloud data warehouse)
- Cortex Analyst (Natural language queries)
- AI/ML for predictive analytics

**Strategic Pillars**:
1. Cross-Functional Data Integration (PD, Manufacturing, Supply Chain)
2. Advanced AI/ML & Predictive Analytics
3. Enterprise System Connectivity (LIMS, QMS, ELN)
4. Knowledge Management & Digitalization
5. External Ecosystem Integration (CMO, Multi-site)

**Phase 2 Timeline**: Q1 2026 - Q4 2027

**Key Metrics**:
- 80% analytical data digitalization
- 50% reduction in data retrieval time
- 30% reduction in OOS investigations
- 90% user adoption target
- 3x ROI through efficiency gains

**When to work on these files**:
- Planning pharmaceutical data integration projects
- AI/ML project proposals for pharma
- Digital transformation strategy documents
- Regulatory compliance documentation (FDA AI/ML guidance)

---

## File Naming Conventions

### Current Patterns
- **Descriptive names with spaces**: `AAV-Mediated HDR Mechanism: Deep Dive.md`
- **Underscores for project areas**: `cell_therapy_synergy_projects.md`
- **ALL_CAPS for abbreviations**: `AAV_non-AAV_Discussion.md`
- **intro.md**: Overview/analysis files for project areas

### Recommendations for New Files
- Use descriptive names that clearly indicate content
- For technical documents: `Technology_Application_Description.md`
- For project planning: `project_name_phase.md`
- For analysis: `intro.md` or `analysis.md` within subdirectories
- For comparisons: `OptionA_vs_OptionB_Discussion.md`

---

## Content Style Guide

### Documentation Standards

**Observed Patterns**:
1. **Executive summaries** at the beginning
2. **Visual diagrams** using ASCII art for mechanisms/workflows
3. **Tables for comparisons** (technologies, parameters, metrics)
4. **Quantitative data** with sources/citations (DOIs, PubMed links)
5. **Decision frameworks** with clear recommendation criteria
6. **Timeline planning** in quarterly format (Q1-Q4)

### Markdown Formatting Conventions

**Headers**:
- `# Title` - Document title (only one per file)
- `## Section` - Main sections
- `### Subsection` - Detailed topics
- `#### Detail` - Specific items within subsections

**Visual Elements**:
```
- ASCII diagrams for mechanisms (see AAV HDR files)
- Tables using | pipes | for structured comparisons
- Code blocks with ``` for workflows and technical details
- Horizontal rules (---) to separate major sections
- Emoji usage: Minimal, only for visual markers (🔷, ⚡, ✓)
```

**Lists**:
- Bullet points for features/characteristics
- Numbered lists for sequential processes or prioritization
- Nested lists for hierarchical information

**Emphasis**:
- **Bold** for key terms, metrics, and important concepts
- *Italics* minimally used (prefer bold)
- `Code formatting` for technical parameters, file names, commands

### Technical Writing Style

**Voice**: Professional but accessible
- **Target audience**: Scientists, engineers, data scientists, executives
- **Tone**: Analytical, evidence-based, quantitative
- **Format**: Technical documentation with business value propositions

**Best Practices**:
1. Lead with "why" before "how"
2. Include quantitative metrics whenever possible
3. Provide decision frameworks, not just information
4. Link research with practical implementation
5. Address trade-offs explicitly
6. Include cost-benefit analyses
7. Reference scientific literature with DOIs

**Avoid**:
- Unsubstantiated claims
- Marketing language
- Overly academic jargon without context
- Recommendations without supporting data

---

## Git Workflow

### Branch Strategy

**Current Branch**: `claude/add-claude-documentation-9OdMg`

**Branch Naming Convention**:
- Feature branches: `claude/description-{sessionId}`
- All Claude Code work uses `claude/` prefix
- Session IDs appended to branch names for tracking

### Commit Message Standards

**Observed Patterns**:
```
✓ GOOD:
- "Document AAV-Mediated HDR Mechanism and Parameters"
- "Create AAV vs non-AAV discussion document"
- "Enhance intro.md with analysis and project recommendations"
- "Add FDA position on AI/ML and real-time release testing"

✗ AVOID:
- "Update file"
- "Changes"
- "WIP"
```

**Best Practices**:
- Start with action verb (Document, Create, Add, Update, Revise)
- Be specific about what was added/changed
- Use present tense
- Keep under 72 characters for first line
- No need for issue references (this is a personal knowledge repo)

### Push Requirements

**Critical**:
- Always push to branches starting with `claude/` and ending with session ID
- Use: `git push -u origin claude/description-{sessionId}`
- Retry on network failure: 4 attempts with exponential backoff (2s, 4s, 8s, 16s)

---

## Working with AI Assistants

### Common Tasks

#### 1. Creating New Documentation

**When adding research notes**:
- Read existing files in the relevant directory first
- Match the formatting style (ASCII diagrams, tables, headers)
- Include quantitative data and references
- Add decision frameworks or recommendations
- Update this CLAUDE.md if adding new project areas

**Example workflow**:
```bash
# 1. Read existing files to understand style
Read AAV_Delivery_RSH/*.md

# 2. Create new file following conventions
Write AAV_Delivery_RSH/New_Topic.md

# 3. Commit with descriptive message
git add AAV_Delivery_RSH/New_Topic.md
git commit -m "Document New Topic mechanism and parameters"
```

#### 2. Analyzing Technical Topics

**Research questions often involve**:
- Literature review synthesis
- Technology comparisons
- Cost-benefit analyses
- Implementation planning
- Risk assessment

**Deliverables should include**:
- Summary tables comparing options
- Quantitative metrics with sources
- Decision criteria
- Recommended approach with justification

#### 3. Project Planning

**For SYNERGY-type projects**:
- Define clear objectives and scope
- Identify technologies and integrations
- List value propositions with quantitative goals
- Provide timeline in quarterly format
- Include resource requirements
- Address risks and mitigation strategies
- Define success metrics (quantitative + qualitative)

---

## Key Abbreviations & Terminology

### Gene Editing
- **AAV**: Adeno-Associated Virus (viral vector for gene delivery)
- **HDR**: Homology-Directed Repair (precise gene editing mechanism)
- **NHEJ**: Non-Homologous End Joining (error-prone repair pathway)
- **MMEJ**: Microhomology-Mediated End Joining
- **DSB**: Double-Strand Break
- **RNP**: Ribonucleoprotein (Cas9 + guide RNA complex)
- **MOI**: Multiplicity of Infection (viral particles per cell)
- **TRAC**: T Cell Receptor Alpha Constant (common integration site)
- **CAR-T**: Chimeric Antigen Receptor T cell therapy
- **ssDNA**: single-stranded DNA
- **dsDNA**: double-stranded DNA
- **CTS**: Cas-target-sequences

### Pharmaceutical/Biotech
- **LIMS**: Laboratory Information Management System
- **QMS**: Quality Management System
- **ELN**: Electronic Lab Notebook
- **CMO**: Contract Manufacturing Organization
- **GMP**: Good Manufacturing Practice
- **OOS**: Out of Specification
- **QC**: Quality Control
- **QA**: Quality Assurance
- **CMC**: Chemistry, Manufacturing, and Controls
- **IND**: Investigational New Drug
- **eCTD**: electronic Common Technical Document
- **GVHD**: Graft-versus-Host Disease

### Data Science/ML
- **U-Net**: Convolutional network architecture for image segmentation
- **YOLO**: You Only Look Once (object detection algorithm)
- **LoG**: Laplacian of Gaussian (edge detection filter)
- **ROI**: Region of Interest
- **ML**: Machine Learning
- **AI**: Artificial Intelligence
- **NLP**: Natural Language Processing
- **RAG**: Retrieval Augmented Generation

### SYNERGY Platform
- **ADA**: Application Driven Analysis
- **PD**: Process Development
- **AO**: Analytical Operations
- **MES**: Manufacturing Execution System
- **EBR**: Electronic Batch Record

---

## Research & Citation Standards

### Preferred Sources
1. **PubMed** for scientific literature
2. **DOI links** for permanent references
3. **FDA/EMA guidance** for regulatory context
4. **Vendor documentation** for technology specifications
5. **Industry white papers** for best practices

### Citation Format
```markdown
According to recent research ([DOI](https://doi.org/10.1016/j.omtn.2025.102568)),
ssDNA with CTS achieves up to 90% knock-in efficiency.
```

### Data Presentation
- Include specific numbers, not ranges when possible
- Cite sources for all quantitative claims
- Compare multiple sources when available
- Note study limitations or context

---

## Quality Standards for Contributions

### Before Committing New Documentation

**Checklist**:
- [ ] Read related existing files for context and style
- [ ] Include quantitative data with sources
- [ ] Add tables for comparisons
- [ ] Provide decision frameworks or recommendations
- [ ] Use proper markdown formatting (headers, lists, code blocks)
- [ ] Include references/citations for claims
- [ ] Spell-check technical terms
- [ ] Verify abbreviations are defined
- [ ] Test markdown rendering if using complex formatting
- [ ] Write descriptive commit message

### File Quality Indicators

**High Quality**:
- Clear executive summary
- Quantitative metrics throughout
- Visual diagrams or tables
- Referenced sources
- Actionable recommendations
- Structured with consistent headers

**Needs Improvement**:
- Wall of text without structure
- Vague statements without data
- Missing context or background
- No clear recommendations
- Broken markdown formatting
- Undefined abbreviations

---

## Integration with Other Systems

### Current Integrations
- **Git/GitHub**: Version control and collaboration
- **None identified**: This is primarily a local documentation repository

### Potential Future Integrations
Based on SYNERGY content, possible connections:
- Benchling for experimental data linkage
- Snowflake for analytics documentation
- Regulatory submission systems
- Laboratory information systems

---

## FAQ for AI Assistants

### Q: What type of content belongs in this repository?

**A**: Research notes, technical documentation, project planning, and analysis documents related to:
- Cell therapy manufacturing
- Gene editing technologies
- Pharmaceutical data science
- Biotech image analysis
- Digital transformation in pharma

### Q: Should I create code files here?

**A**: No. This is a pure documentation repository. Code examples may be included in markdown files as illustrations, but no standalone code files (.py, .js, etc.) should be created.

### Q: How detailed should technical documentation be?

**A**: Very detailed. This is a professional knowledge base for technical decision-making. Include:
- Quantitative data
- Process parameters
- Comparative analyses
- References to scientific literature
- Decision frameworks

See AAV_Delivery_RSH files for examples of appropriate technical depth.

### Q: What if I need to document something that doesn't fit the three main folders?

**A**: Create a new top-level directory with an appropriate name, add an intro.md file explaining the project area, and update this CLAUDE.md file to document the new section.

### Q: How should I handle updates to existing files?

**A**:
1. Read the entire file first
2. Understand the current structure and style
3. Make edits that enhance rather than disrupt
4. Maintain consistency with existing formatting
5. Commit with a message explaining what was updated and why

### Q: Should I delete outdated information?

**A**: Generally no - this is a knowledge repository where historical context may be valuable. Instead:
- Add updated information with dates
- Note when recommendations have changed
- Preserve original analysis for comparison
- Use version control (git history) for major rewrites

### Q: What if research findings contradict existing documentation?

**A**: Create a new section or file documenting the new findings, reference the original document, and explain the differences. Example: "Updated 2025-12: Earlier analysis suggested X, but recent research shows Y..."

---

## Contact & Ownership

**Repository Owner**: Ray Chen
**Title**: Associate Director, Digital & Data Science
**Context**: AstraZeneca pharmaceutical development

**Document Maintenance**:
- This CLAUDE.md should be updated when repository structure changes
- Last updated date should be modified at the top of this file
- Major changes to conventions should be documented here

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-12-27 | Initial CLAUDE.md creation - comprehensive documentation of repository structure, conventions, and AI assistant guidelines |

---

**End of CLAUDE.md** - For questions or clarifications about this repository's conventions, refer to existing files in each directory as canonical examples.
