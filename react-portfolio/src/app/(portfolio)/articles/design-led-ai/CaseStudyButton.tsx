'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { Lock, ArrowRight } from 'lucide-react';
import s from '../articles.module.css';

export function CaseStudyButton() {
  const { isAuthenticated } = useAuth();

  return (
    <Link href="/case-study/rba" className={s.caseStudyBtn}>
      {!isAuthenticated && <Lock size={16} />}
      <span>View Full Case Study and Prototype</span>
      {isAuthenticated && <ArrowRight size={16} />}
    </Link>
  );
}
