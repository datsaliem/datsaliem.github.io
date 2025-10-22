// Fix: Import `ReactElement` to resolve JSX namespace issue.
import type { ReactElement } from 'react';

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  tasks: string[];
}

export interface Skill {
  name: string;
  // Fix: Use `ReactElement` instead of `JSX.Element`.
  icon: ReactElement;
}

export interface Project {
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
  challenges: string[];
  strategies: string[];
}