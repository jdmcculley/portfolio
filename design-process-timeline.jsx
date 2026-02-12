import React, { useState } from 'react';

const MilestoneTimeline = () => {
  const [expandedMilestones, setExpandedMilestones] = useState({});

  const toggleMilestone = (id) => {
    setExpandedMilestones(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Utility function to convert hex to RGB
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  // Utility function to lighten a color
  const lightenColor = (hex, percent) => {
    const rgb = hexToRgb(hex);
    if (!rgb) return hex;
    
    const r = Math.min(255, Math.floor(rgb.r + (255 - rgb.r) * percent));
    const g = Math.min(255, Math.floor(rgb.g + (255 - rgb.g) * percent));
    const b = Math.min(255, Math.floor(rgb.b + (255 - rgb.b) * percent));
    
    return `rgb(${r}, ${g}, ${b})`;
  };
  // Role color mapping
  const roleColors = {
    'PM': '#2C5F7C',
    'Product Manager': '#2C5F7C',
    'PM Support': '#2C5F7C',
    'UX Design': '#D4772F',
    'UX Design Lead': '#D4772F',
    'UX Research': '#6B8E23',
    'UX Research Lead': '#6B8E23',
    'UX Engineer': '#1A6B4A',
    'UX Engineer Lead': '#1A6B4A',
    'Engineering': '#8B2C2C',
    'Engineering Lead': '#8B2C2C',
    'Marketing': '#8B2252',
    'Merchandising': '#1A5490',
    'Stakeholders': '#8B6914'
  };

  const milestones = [
    {
      id: 1,
      title: 'Discovery',
      subtitle: 'Problem Definition',
      description: 'PM works with stakeholders to understand business needs, customer pain points, and desired outcomes. Research validates the problem space.',
      screens: 9,
      color: '#2C5F7C',
      bgColor: '#E8F4F8',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      roles: ['PM', 'UX Research', 'Engineering', 'Stakeholders'],
      deliverables: [
        'Business requirements documented',
        'Technical constraints identified',
        'Research plan established',
        'Scope boundaries defined',
        'Stakeholder alignment confirmed'
      ]
    },
    {
      id: 2,
      title: 'Kickoff Meeting',
      subtitle: 'Cross-Functional Alignment',
      description: 'All stakeholders align on scope, constraints, approach, and timeline. Open questions are documented, and everyone leaves with clarity on next steps.',
      screens: 12,
      color: '#D4772F',
      bgColor: '#FEF3EC',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      roles: ['PM', 'UX Design', 'UX Research', 'UX Engineer', 'Engineering', 'Marketing', 'Merchandising'],
      deliverables: [
        'Requirements reviewed & confirmed',
        'Design approach agreed upon',
        'Timeline and milestones set',
        'Action items assigned',
        'Next touchpoint scheduled'
      ]
    },
    {
      id: 3,
      title: 'Design Phase',
      subtitle: 'Creation & Iteration',
      description: 'UX Design creates solutions while UX Research validates assumptions. PM provides support and shields the team from scope creep.',
      screens: 15,
      color: '#7C3AED',
      bgColor: '#F5F3FF',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19l7-7 3 3-7 7-3-3z"/>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
          <path d="M2 2l7.586 7.586"/>
          <circle cx="11" cy="11" r="2"/>
        </svg>
      ),
      roles: ['UX Design Lead', 'UX Research', 'PM Support', 'UX Engineer', 'Marketing', 'Merchandising'],
      deliverables: [
        'User flows and UI designs',
        'Research insights and validation',
        'Promotional assets (if applicable)',
        'Ad placements integrated',
        'Design system components used'
      ]
    },
    {
      id: 4,
      title: 'Review & Handoff',
      subtitle: 'Validation & Preparation',
      description: 'UX Engineer prepares dev-ready files and conducts handoff. Engineering reviews feasibility. All stakeholders approve before development begins.',
      screens: 19,
      color: '#1A6B4A',
      bgColor: '#E8F5F0',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
      roles: ['UX Engineer Lead', 'Engineering', 'UX Design', 'PM', 'Stakeholders'],
      deliverables: [
        'Dev-ready specs and files',
        'Design QA completed',
        'Handoff meeting conducted',
        'All approvals obtained',
        'Open questions resolved'
      ]
    },
    {
      id: 5,
      title: 'Post-Launch',
      subtitle: 'Measurement & Iteration',
      description: 'UX Research measures success metrics and collects user feedback. The team captures lessons learned and uses insights to inform future iterations.',
      screens: 9,
      color: '#6B8E23',
      bgColor: '#F2F5EA',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18"/>
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
        </svg>
      ),
      roles: ['UX Research Lead', 'PM', 'UX Design', 'UX Engineer'],
      deliverables: [
        'Success metrics monitored',
        'User feedback collected',
        'Post-launch research conducted',
        'Lessons learned documented',
        'Iteration plan created'
      ]
    }
  ];

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      backgroundColor: '#F9FAFB',
      minHeight: '100vh',
      padding: '48px 24px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '8px'
          }}>
            Feature Design Process
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#6B7280'
          }}>
            Major milestones from discovery to post-launch
          </p>
        </div>

        {/* Milestone Cards */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '16px',
          backgroundColor: '#f3f4f6',
          padding: '24px',
          borderRadius: '16px'
        }}>
          {milestones.map((milestone) => {
            const isExpanded = expandedMilestones[milestone.id];
            
            return (
              <div
                key={milestone.id}
                onClick={() => toggleMilestone(milestone.id)}
                style={{
                  backgroundColor: milestone.bgColor,
                  border: `2px solid ${milestone.color}`,
                  borderRadius: '12px',
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
              {/* Icon */}
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '8px',
                backgroundColor: lightenColor(milestone.color, 0.85),
                border: `2px solid ${milestone.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: milestone.color,
                flexShrink: 0
              }}>
                {milestone.icon}
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#111827'
                      }}>
                        {milestone.title}
                      </span>
                      <span style={{
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#6B7280',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        Milestone {milestone.id}
                      </span>
                    </div>
                    <p style={{
                      fontSize: '14px',
                      color: '#6B7280',
                      marginBottom: '12px'
                    }}>
                      {milestone.subtitle}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right', marginLeft: '16px' }}>
                    <div style={{
                      fontSize: '32px',
                      fontWeight: '700',
                      color: '#111827',
                      lineHeight: '1'
                    }}>
                      {milestone.screens}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#6B7280',
                      marginTop: '4px'
                    }}>
                      deliverables
                    </div>
                  </div>
                </div>

                <p style={{
                  fontSize: '14px',
                  color: '#374151',
                  lineHeight: '1.6',
                  marginBottom: '16px'
                }}>
                  {milestone.description}
                </p>

                {/* Roles */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                  {milestone.roles.map((role, idx) => {
                    const roleColor = roleColors[role] || milestone.color;
                    return (
                      <span
                        key={idx}
                        style={{
                          fontSize: '12px',
                          fontWeight: '500',
                          color: roleColor,
                          backgroundColor: 'white',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          border: `1px solid ${roleColor}`
                        }}
                      >
                        {role}
                      </span>
                    );
                  })}
                </div>

                {/* Deliverables */}
                <div style={{ marginTop: '12px' }}>
                  <div style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#374151',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <span style={{
                      transition: 'transform 0.2s ease',
                      transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                      display: 'inline-block'
                    }}>▸</span> 
                    Key Deliverables ({milestone.deliverables.length})
                  </div>
                  {isExpanded && (
                    <ul style={{
                      marginTop: '12px',
                      marginLeft: '20px',
                      paddingLeft: '4px',
                      fontSize: '13px',
                      color: '#4B5563',
                      lineHeight: '1.8',
                      listStyleType: 'disc'
                    }}>
                      {milestone.deliverables.map((item, idx) => (
                        <li key={idx} style={{ paddingLeft: '4px' }}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        </div>

        {/* Role Legend */}
        <div style={{
          marginTop: '48px',
          backgroundColor: 'white',
          border: '1px solid #E5E7EB',
          borderRadius: '12px',
          padding: '24px'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '16px'
          }}>
            Role Legend
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '12px'
          }}>
            {[
              { label: 'Product Manager', color: '#2C5F7C' },
              { label: 'UX Design', color: '#D4772F' },
              { label: 'UX Research', color: '#6B8E23' },
              { label: 'UX Engineer', color: '#1A6B4A' },
              { label: 'Engineering Lead', color: '#8B2C2C' },
              { label: 'Marketing', color: '#8B2252' },
              { label: 'Merchandising', color: '#1A5490' },
              { label: 'Stakeholders', color: '#8B6914' }
            ].map((role, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '4px',
                  backgroundColor: role.color,
                  flexShrink: 0
                }} />
                <span style={{
                  fontSize: '14px',
                  color: '#374151'
                }}>
                  {role.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilestoneTimeline;
