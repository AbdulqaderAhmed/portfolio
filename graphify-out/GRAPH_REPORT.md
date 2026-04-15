# Graph Report - .  (2026-04-15)

## Corpus Check
- 15 files · ~178,491 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 34 nodes · 28 edges · 13 communities detected
- Extraction: 68% EXTRACTED · 32% INFERRED · 0% AMBIGUOUS · INFERRED: 9 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]

## God Nodes (most connected - your core abstractions)
1. `useTheme()` - 10 edges
2. `AppContent()` - 2 edges
3. `About()` - 2 edges
4. `Contact()` - 2 edges
5. `ParticleBackground()` - 2 edges
6. `WaterBackground()` - 2 edges
7. `Project()` - 2 edges
8. `Skill()` - 2 edges
9. `Footer()` - 2 edges
10. `Header()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `AppContent()` --calls--> `useTheme()`  [INFERRED]
  src\App.jsx → src\contexts\ThemeContext.jsx
- `Contact()` --calls--> `useTheme()`  [INFERRED]
  src\components\contact\Contact.jsx → src\contexts\ThemeContext.jsx
- `ParticleBackground()` --calls--> `useTheme()`  [INFERRED]
  src\components\effects\ParticleBackground.jsx → src\contexts\ThemeContext.jsx
- `WaterBackground()` --calls--> `useTheme()`  [INFERRED]
  src\components\effects\WaterBackground.jsx → src\contexts\ThemeContext.jsx
- `Skill()` --calls--> `useTheme()`  [INFERRED]
  src\components\skills\Skill.jsx → src\contexts\ThemeContext.jsx

## Communities

### Community 0 - "Community 0"
Cohesion: 0.29
Nodes (3): About(), Project(), useTheme()

### Community 1 - "Community 1"
Cohesion: 0.4
Nodes (0): 

### Community 2 - "Community 2"
Cohesion: 0.67
Nodes (1): AppContent()

### Community 3 - "Community 3"
Cohesion: 0.67
Nodes (1): ParticleBackground()

### Community 4 - "Community 4"
Cohesion: 1.0
Nodes (1): Contact()

### Community 5 - "Community 5"
Cohesion: 1.0
Nodes (0): 

### Community 6 - "Community 6"
Cohesion: 1.0
Nodes (0): 

### Community 7 - "Community 7"
Cohesion: 1.0
Nodes (1): WaterBackground()

### Community 8 - "Community 8"
Cohesion: 1.0
Nodes (1): Skill()

### Community 9 - "Community 9"
Cohesion: 1.0
Nodes (1): Footer()

### Community 10 - "Community 10"
Cohesion: 1.0
Nodes (1): Header()

### Community 11 - "Community 11"
Cohesion: 1.0
Nodes (0): 

### Community 12 - "Community 12"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **Thin community `Community 4`** (2 nodes): `Contact()`, `Contact.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 5`** (2 nodes): `ClickBurst()`, `ClickBurst.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 6`** (2 nodes): `CustomCursor()`, `CustomCursor.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 7`** (2 nodes): `WaterBackground.jsx`, `WaterBackground()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 8`** (2 nodes): `Skill()`, `Skill.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 9`** (2 nodes): `Footer()`, `Footer.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 10`** (2 nodes): `Header()`, `Header.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 11`** (1 nodes): `vite.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 12`** (1 nodes): `main.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useTheme()` connect `Community 0` to `Community 2`, `Community 3`, `Community 4`, `Community 7`, `Community 8`, `Community 9`, `Community 10`?**
  _High betweenness centrality (0.411) - this node is a cross-community bridge._
- **Why does `AppContent()` connect `Community 2` to `Community 0`?**
  _High betweenness centrality (0.076) - this node is a cross-community bridge._
- **Why does `ParticleBackground()` connect `Community 3` to `Community 0`?**
  _High betweenness centrality (0.076) - this node is a cross-community bridge._
- **Are the 9 inferred relationships involving `useTheme()` (e.g. with `AppContent()` and `About()`) actually correct?**
  _`useTheme()` has 9 INFERRED edges - model-reasoned connections that need verification._